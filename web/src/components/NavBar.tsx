import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'

import headerImg from '../assets/images/background4.svg'

const useStyles = makeStyles(theme => ({
    appbar: {
        height: '200px',
        background: `#8f7959 url(${headerImg}) center repeat`,
        backgroundSize: 'contain',
        marginBottom: '20px',
    },
    header: {
        height: '400px',
    },
}))

const NavBar = (): JSX.Element => {
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
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar
