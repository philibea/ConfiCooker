import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { GridList, GridListTile, Card, CardMedia } from '@material-ui/core'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
        },
        gridList: {
            margin: '8px',
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
                transform: 'scale(1.5)',
                opacity: 0.5,
            }
        },
        cardMedia: {
            paddingTop: '100%', // format 1:1
        },
    }),
);

interface GridListImagesProps {
    produits: Product[],
    values: SearchValues
}

interface SearchValues {
    product: string
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


const GridListImages = ({ values: { product }, produits }: GridListImagesProps) => {
    const classes = useStyles();
    const filterValues = produits.filter(({ name }) => name.includes(product))

    return (
        <div className={classes.root}>
            <GridList cellHeight={300} className={classes.gridList} cols={3} spacing={30}>
                {filterValues.map(({ image, name }: Product, index: number) => (
                    <GridListTile key={index} cols={1} className={classes.listTile} >
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={image?.url}
                                title={name}
                            />
                        </Card>
                    </GridListTile>
                ))}
            </GridList>
        </div >
    );

}
export default GridListImages