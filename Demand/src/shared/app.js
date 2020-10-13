import React from 'react'
import {Switch, Route} from 'react-router-dom'
import routes from './routes'

const App = () => {
    return (
        <Switch>
            {routes().map((route,i) => (
                <Route
                    exact={route.exact}
                    key={route.key || i}
                    path={route.path}
                    component={route.component}
                />
            ))}
        </Switch>
    )
}

export default App