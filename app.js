const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.send("홈페이지");
}); 


app.listen(3000, () => {
  console.log("서버가 열렸습니다 ");
});
