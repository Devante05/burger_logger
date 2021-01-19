var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

const demo = {
  name: "Ben",
  age: 32,
};

// const keys = Object.keys(demo)
// const vals = Object.keys(demo)

// console.log(keys, vals)

// const fs = require("fs");
// const path = require("path");

// const MAIN_LAYOUT = path.join(__dirname, "views/layouts/main.handlebars");
// const PAGE_TEMPLATE = path.join(__dirname, "views/demo.handlebars");

// app.get("/", (req, res) => {
//   fs.readFile(MAIN_LAYOUT, "utf8", (err, main) => {
//     if (err) throw err;

//     fs.readFile(PAGE_TEMPLATE, "utf8", (err, page) => {
//       if (err) throw err;

//       const pageObj = {
//         title: "Hello World!",
//         items: ["cat", "dog", "mastadon"],
//       };

//       main = main.replace("{{{ body }}}", page);

//       for (const key in pageObj) {
//         if (Array.isArray(pageObj[key])) {
//           let html = ""
//           for(const item of pageObj[key]){
//             html += '<li>' + item + '</li>'
//           }
//           main = main.replace("{{" + key + "}}", html);
//         } else {
//           main = main.replace("{{" + key + "}}", pageObj[key]);
//         }
//       }

//       res.send(main);
//     });
//   });
// });
