import express from "express"
import cors from 'cors';
import router from "./router.js"

const app = express()
const PORT = 8080
app.use(express.json())

const corsOptions = {
    origin: `*`,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}
app.use(cors(corsOptions))
app.use("/api/create", router)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))