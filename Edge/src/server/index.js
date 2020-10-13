import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import {paths} from '../../config/paths'

import bodyParser from 'body-parser'
import App from '../shared/app'
import {StaticRouter} from 'react-router-dom'
import path from "path";

// const {clientCompiler, watchOptions} = require('../../scripts/start')
// // const webpackDevMiddleware = require('webpack-dev-middleware')
// const clientConfig = require('../../config/webpack/client')


const app = express()

app.use(bodyParser.json())
app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)))

// app.use(webpackDevMiddleware(clientCompiler,{
//   publicPath: clientConfig.output.publicPath,
//     ...watchOptions
// }))

app.use((req,res) => {

    const extractor = new ChunkExtractor({
       statsFile: paths.loadableServerStatsFile,
        entrypoints: ['main']
    })

    // console.log(extractor.collectChunks(
    //     <StaticRouter location={req.url}>
    //         <App/>
    //     </StaticRouter>
    // ))


    const appContainer = renderToString(extractor.collectChunks(
        <StaticRouter location={req.url}>
            <App/>
        </StaticRouter>
    ))

    res.send(
    `
    <!DOCTYPE html>
      <html>
        <head>
            <title>
                   Basic Webpack app            
            </title>
            ${extractor.getStyleTags()}
        </head>
        
        <body>
            ${extractor.getScriptTags()}
            <div id='root'>
                ${appContainer}
            </div>
        </body>
      </html>
      `
    )
})




app.listen(process.env.PORT || 4006,() => {
    console.log('Server started')
})






