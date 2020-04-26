import React, { useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import {
    Button,
    Card,
    CardMedia,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    FormControl,
    Input,
    MenuItem,
    InputLabel,
    Select,
    Slide,
    Typography
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import storage from '../helpers/storage'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dialog: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            minHeight: 100,
        },
        card: {
            marginBottom: theme.spacing(2),
            "&:hover": {
                "& img": {
                    opacity: 0.8,
                    transform: 'scale(1.5)',
                },
            }

        },
        cardMedia: {
            transition: 'transform 300ms ease',
            opacity: 1,
            height: 200,
            padding: 0,
        },
    }))

interface Image {
    url: string,
    src: string
}
interface Product {
    name: string,
    description?: string,
    quantite: string[],
    tags: string[],
    image?: Image,
    cols?: number,
}
interface ModalProductProps {
    toggled: boolean,
    onToggle: React.Dispatch<React.SetStateAction<boolean>>
    product?: Product,
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ModalProduct = ({ toggled, onToggle, product }: ModalProductProps) => {
    const classes = useStyles()
    const [quantity, setQuantity] = React.useState<string | undefined>(product?.quantite[0]);
    const [size, setSize] = React.useState<number>(0)
    const list = storage.getProductsList()
    useEffect(() => {
        setSize(0)
        setQuantity(product?.quantite[0])
        console.log(list)
    }, [product])

    const handleQuantityChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(value);
    }
    const handleNumberChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        if(value) {
            setSize(parseInt(value, 10));
        }
    }

    const isAddDisabled: boolean = !quantity && size === 0

    const addProduct = () => {
        storage.setProductsList({ name: product?.name, quantity, number: size, })
        onToggle(false)
    }

    return (
        <Dialog
            open={toggled}
            TransitionComponent={Transition}
            keepMounted
            onClose={onToggle}
            aria-labelledby="form-dialog-title"
            aria-describedby="form-dialog-title-description"
            className={classes.dialog}
        >
            <Container>
                <form noValidate autoComplete="off" className={classes.container}>
                    <DialogContent>
                        <Card className={classes.card}>
                            <CardMedia
                                component="img"
                                className={classes.cardMedia}
                                image={product?.image?.url}
                                title={name}
                            />
                        </Card>
                        <Typography id="test" align="center" variant="h6" gutterBottom>
                            {product?.name?.toUpperCase()}
                        </Typography>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="component-filled">Size</InputLabel>
                            <Input
                                id="component-filled"
                                value={size.toString()}
                                onChange={handleNumberChange}
                            />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="quantity-select-label">Quantity</InputLabel>
                            <Select
                                labelId="quantity-select-label"
                                id="quantity-select"
                                value={quantity}
                                onChange={handleQuantityChange}
                            >
                                {product?.quantite.map(qnt => (
                                    <MenuItem key={qnt} value={qnt}>{qnt}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => onToggle(false)} variant="outlined" color="secondary">
                            Close
                        </Button>
                        <Button
                            disabled={isAddDisabled}
                            onClick={addProduct}
                            variant="outlined"
                            color="primary">
                            Add
                        </Button>
                    </DialogActions>

                </form>
            </Container>
        </Dialog>
    )
}

export default ModalProduct