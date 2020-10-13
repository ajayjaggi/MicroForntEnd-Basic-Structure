import React from 'react'
import {BrowserRouter} from "react-router-dom"
import { hydrate } from 'react-dom'
import { loadableReady } from '@loadable/component'

import App from '../shared/app'

loadableReady(() => {
    console.log('inside loadable')
    hydrate(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
        document.getElementById('root')
    )
})


