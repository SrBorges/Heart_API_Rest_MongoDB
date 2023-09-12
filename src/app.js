import express from 'express';
import db from '../src/config/dbConfig.js'
import routes from "./routes/index.js"

const app = express()

app.use(express.json())
routes(app)

export default app