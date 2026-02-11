const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;

const students = [
  {
    id: 1,
    name: "Шейко Микола",
    role: "Team Lead",
    group: "ІА-44",
    hobby: "Веб-розробка"
  },
  {
    id: 2,
    name: "Несміян Олександр",
    role: "Frontend Developer",
    group: "ІА-44",
    hobby: "Диван"
  },
  {
    id: 3,
    name: "Гладіголов Дмитро",
    role: "Backend Developer",
    group: "ІА-44",
    hobby: "---------"
  },
  {
    id: 4,
    name: "Буцик Богдан",
    role: "QA Engineer",
    group: "ІА-44",
    hobby: "--------"
  },
  {
    id: 5,
    name: "Лобко Олексій",
    role: "DevOps",
    group: "ІА-44",
    hobby: "---------"
  }
];

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
