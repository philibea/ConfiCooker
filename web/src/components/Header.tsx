import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

import headerImg from '../assets/images/fresh-tomato.jpeg'


const useStyles = makeStyles(theme => ({
    header: {
        height: '133px',
        padding: '0 100px 0 53px'
    },
    title: {
        fontSize: '24px',
        fontWeight: 600
    }
}))

interface HeaderProps { }

const Header = (props: HeaderProps) => {
    const classes = useStyles()

    return (
        <header>
            <Container className={classes.header}>
                {/* <img src={headerImg} /> */}
            </Container>
        </header>)
}


export default Header