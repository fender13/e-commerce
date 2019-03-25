const express = require('express')
const app = express()
const cors = require('cors')

const ENV = require('dotenv')
ENV.config()

const port = Number(process.env.PORT)

const userRouter = require('./routers/userRouter')
const productRouter = require('./routers/productRouter')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(port, () => {
    console.log('SERVER IS ON AND LISTEN TO', port)
})