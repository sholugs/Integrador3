import express from 'express'
import userRouter from './routes/users.routes.js'
import ticketRouter from './routes/tickets.routes.js'

const app = express()

app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/tickets', ticketRouter)

app.listen(8080, () => console.log('Server Up'))