import React from 'react'
import loadable from '@loadable/component'

const Home = loadable(() => import(/* webpackChunkName: "Home" */ './home'))
const Dedicated = loadable(() => import(/* webpackChunkName: "Dedicated" */ './dedicated'))


const homeRoute = (path) => ({
    path,
    exact: true,
    component: Home
})

const dedicatedRoute = (path) => ({
    path,
    exact: true,
    component: Dedicated
})

export default () => [
    homeRoute('/'),
    dedicatedRoute('/:player(messi)')
]