import express from "express"
import routes from "routes/index"
import "dotenv/config"


const app = express()
const port = process.env.PORT || 5000
app.use("/api/v1", routes)

app.listen(port, () => {
    console.log("server up running on port ", port)
})
