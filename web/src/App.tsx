import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

import Home from './pages/Home'


const App = () => (
    <ThemeProvider theme={theme}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    </ThemeProvider>
)

export default App
