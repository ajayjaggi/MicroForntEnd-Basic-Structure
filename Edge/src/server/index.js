import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import {paths} from '../../config/paths'

import bodyParser from 'body-parser'
import App from '../shared/app'
import {StaticRouter} from 'react-router-dom'
import path from "path";
import initMiddleware from './middleware'

// const {clientCompiler, watchOptions} = require('../../scripts/start')
// // const webpackDevMiddleware = require('webpack-dev-middleware')
// const clientConfig = require('../../config/webpack/client')

// import middleware from './render'


// let fun  = async  (req,res) => {
//     const renderer = (await import("./render")).default;
//     return renderer(req,res)
// }


const app = express()

app.use(bodyParser.json())
app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)))

// app.use(webpackDevMiddleware(clientCompiler,{
//   publicPath: clientConfig.output.publicPath,
//     ...watchOptions
// }))
// app.use(fun)

const done = () => {
    app.listen(4006, () => {
        console.log(`Server is listening on port: 4006`);
    });
};

initMiddleware(express, app, done);







