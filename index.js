const path = require("path");
const express = require("express");
const students = require("./students");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const viewsPath = path.join(__dirname, "views");
app.set("views", viewsPath);

const assetsPath = path.join(__dirname, "assets");
const publicPath = path.join(__dirname, "public");

app.use("/assets", express.static(assetsPath));
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.render("team", { students });
});

app.get("/students/:id", (req, res) => {
  const studentId = Number(req.params.id);
  const student = students.find((item) => item.id === studentId);

  if (!student) {
    return res.status(404).send("student not found");
  }

  return res.render("student", { student });
});

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});

module.exports = app;
