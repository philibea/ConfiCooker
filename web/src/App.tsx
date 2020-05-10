import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

import Home from './pages/Home'
import List from './pages/List'


const App = () => (
    <ThemeProvider theme={theme}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list" component={List} />
            <Redirect to="/" />
        </Switch>
    </ThemeProvider>
)

export default App
