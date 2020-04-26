import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { GridList, GridListTile, GridListTileBar, ListSubheader, IconButton } from '@material-ui/core'

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
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }),
);

interface GridListImagesProps {
    produits: Product[],
    values: Values
}

interface Values {
    product: string
}
interface Product {
    name: string,
    description?: string,
    quantite: string[],
    tags: string[],
    url: string,
    cols?: number,
}


const GridListImages = ({ values: { product }, produits }: GridListImagesProps) => {
    const classes = useStyles();
    const filterValues = produits.filter(({ name }) => name.includes(product))

    return (
        <div className={classes.root}>
            <GridList cellHeight={250} className={classes.gridList} cols={3} spacing={30}>
                {filterValues.map((item: Product, index: number) => (
                    <GridListTile key={index} cols={1}>
                        <img src={item.url} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );

}
export default GridListImages