const express = require("express");
const app = express();
require("dotenv").config()
const PORT = 3760| process.env.PORT;

app.use(express.json());
app.get("/", (req, res) => {
    res.send({
        status:200,
        date:{
            mssg:"hey bro 1"
        }
    })
});

app.get("/dash", (req, res) => {
    res.send({
        status:200,
        date:"welcome on my wolrd de Bug Bro"
    })
});


app.listen(PORT, () => {
  console.log(`server is runing at :) http://127.0.0.1:${PORT}`);
});
