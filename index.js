import express from "express"
const app = express()
const PORT = 8080
app.use(express.json())
import router from "./router.js"

app.use("/api/create", router)

const corsOptions = {
    origin: `http://localhost:5173`,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}

app.use(cors(corsOptions))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))