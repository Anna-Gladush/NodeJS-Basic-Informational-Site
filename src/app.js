const express = require('express');
const path = require("node:path")

const app = express();

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const usersRouter = require("./routes/usersRouter");
// const indexRouter = require('./routes/indexRouter');

const PORT = process.env.PORT || 3000;

// ASSETS
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));

app.use('/authors', authorRouter)
app.use('/books', bookRouter)
app.use("/", usersRouter);
// app.use('/', indexRouter)


// const links = [
//   // { href: "/", text: "Home" },
//   { href: "/about", text: "About" },
//   { href: "/new", text: "Form" },
// ];

// const users = ["Rose", "Cake", "Biff"];

// app.get("/", (req, res) => {
//   res.render("index", { links: links, users: users });
// });

app.get("/about", (req, res) => {
  res.render("about", {links: links})
})

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Sever is listening for requests on port ${PORT}`)
})

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});
