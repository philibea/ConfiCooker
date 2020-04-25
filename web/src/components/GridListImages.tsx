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
    produits: Product[]
}
interface Product {
    name: string,
    description?: string,
    quantite: string[],
    tags: string[],
    url: string,
    cols?: number,
}


const GridListImages = (props: GridListImagesProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList cellHeight={250} className={classes.gridList} cols={3} spacing={30}>
                {props.produits.map((item: Product, index: number) => (
                    <GridListTile key={item.url} cols={1}>
                        <img src={item.url} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );

}
export default GridListImages