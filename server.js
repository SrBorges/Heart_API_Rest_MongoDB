import app from "./src/app.js";
import "dotenv/config"

const port = process.env.PORT 

app.listen(port, () => {

    console.log(`Listen in port: http://localhost:${port}`)

})