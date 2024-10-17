import app from './app.js'
import { connectDB } from './src/dbConnect/dbConnect.js'

connectDB()

const port = 3001
app.listen(port, () => {
    console.log(`server is running port ${port}`);
})
