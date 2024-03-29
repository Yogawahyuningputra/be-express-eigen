import express from 'express'
import { registerMember } from '../controllers/member-controller.js'

const memberRoute = express.Router()
memberRoute.post('/member', registerMember)
export { memberRoute }
