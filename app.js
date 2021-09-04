const express = require("express");
const app = express();
const PORT = 5555;

app.use(express.json());
app.get("/", (req, res) => {
    res.send({
        status:200,
        date:{
            mssg:"hey bro 1"
        }
    })
});

app.listen(PORT, () => {
  console.log(`server is runing at :) http://127.0.0.1:${PORT}`);
});
