import express from 'express'
import { memberRoute } from './member-routes.js'
import { bookRoute } from './books-routes.js'

const routes = () => {
    const router = express.Router()
    router.use(memberRoute)
    router.use(bookRoute)
    return router
}
export { routes }