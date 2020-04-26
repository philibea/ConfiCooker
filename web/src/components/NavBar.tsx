import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Box, Toolbar, Link, Typography } from '@material-ui/core'


import headerImg from '../assets/images/vegatables-on-wood-surface-flatlay.jpg'

const useStyles = makeStyles(theme => ({
    appbar: {
        height: '200px',
        background: `#020202`,
        backgroundSize: 'contain',
        marginBottom: '20px',
    },
    header: {
        height: '400px',
    },
}))

const NavBar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.header}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="100%"
                    >
                        <Typography variant="h1">
                            Confi Cooking
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar
