import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { GridList, GridListTile, Card, CardMedia, Typography } from '@material-ui/core'

import ModalProduct from './ModalProduct'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            width: '80%',
            margin: 'auto',
        },
        gridList: {
            margin: theme.spacing(2),
            width: '80%',
            height: '100%',
        },
        listTile: {
            maxWidth: 350,
            maxHeight: 250,
        },
        card: {
            opacity: 1,
            transition: 'transform 300ms ease',
            "&:hover": {
                cursor: "pointer",
                "& img": {
                    opacity: 0.5,
                    transform: 'scale(1.5)',
                },
                "& h6": {
                    visibility: 'visible',
                    color: 'black',
                    "z-index": 1,
                }
            },
        },
        cardMedia: {
            transition: 'transform 300ms ease',
            opacity: 1,
            height: 200,
            padding: 0,
        },
        title: {
            transition: 'transform 300ms ease',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            visibility: 'hidden',
            "line-height": 1.2,
            "font-size": "2rem",
        }
    }),
);

interface GridListImagesProps {
    produits: Product[],
    values: SearchValues
}

interface SearchValues {
    searchProduct: string
}

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


const GridListImages = ({ values: { searchProduct }, produits }: GridListImagesProps) => {
    const classes = useStyles();
    const filterValues = produits.filter(({ name }) => name.includes(searchProduct))
    const [toggled, onToggle] = useState<boolean>(false)
    const [product, setProduct] = useState<Product>()

    return (
        <div className={classes.root}>
            <GridList cellHeight={300} className={classes.gridList} cols={3} spacing={30}>
                {filterValues.map((p: Product, index: number) => (
                    <GridListTile key={index} cols={1} className={classes.listTile} >
                        <Card className={classes.card} onClick={() => {
                            setProduct(p)
                            onToggle(true)
                        }}>
                            <Typography
                                id="test"
                                align="center"
                                variant="h6"
                                className={classes.title}
                            >
                                {p.name.toUpperCase()}
                            </Typography>
                            <CardMedia
                                component="img"
                                className={classes.cardMedia}
                                image={p.image?.url}
                                title={p.name}
                            />
                        </Card>
                    </GridListTile>
                ))}
            </GridList>
            <ModalProduct toggled={toggled} onToggle={onToggle} product={product} />
        </div >
    );
}


export default GridListImages