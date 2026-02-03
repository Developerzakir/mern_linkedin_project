import express from 'express'
import { login, signUp } from '../controllers/auth.controllers.js'

let authRouter = express.Router()

authRouter.post('/signup',signUp)
authRouter.post('/login',login)

export default authRouter