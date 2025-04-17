import express from "express"
const app = express()
const PORT = 8080
app.use(express.json())
import router from "./router.js"

app.use("/api/create", router)



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))