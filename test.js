// // const express = require("express");

// // const app = express();

// // app.get("/", (req, res) => {
// //   res.send("서버 홈페이지 ");
// // });

// // app.listen(4000, () => {
// //   console.log("서버가 열렸습니다 ");
// // });

// const express = require("express")

// const app = express();

// app.get("/", (req,res)=> {
//   res.send("서버 홈페이지 ")
// })

// app.listen(4000, () => {
//   console.log("서버가 열렸습니다.")
// })

// const express = require("express")

// const app = express();

// app.get("/", (req,res)=> {
//   console.log("서버가 열렸습니다 ")
// })

const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("서버 홈페이지"));

app.listen(4000, () => {
  console.log("서버가 열렸습니다 ");
});
