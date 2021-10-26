const express = require('express');
const app = express()
require('./db/mongoose')
const Task = require('./models/tasks')
const taskRouter = require('./router/task')

const port = process.env.Port || 3000

app.use(express.json())
app.use(taskRouter)

app.listen(port , () => {
    console.log(`Port listning up on ${port}`)
})