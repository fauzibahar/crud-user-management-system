import express from "express";
import dotenv from "dotenv";
import expressLayout from "express-ejs-layouts";
import methodOverride from "method-override";
import flash from "connect-flash";
import session from "express-session";
import connectDB from "./server/config/db.js";
import customer from "./server/routes/customer.js";

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

// Connect to Database
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Static Files
app.use(express.static("public"));

// Express Session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  })
);

// Flash Messages
app.use(flash({ sessionKeyName: "flashMessage" }));

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Routes
app.use(customer);

// Handle 404
app.get("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`App listeing on port ${port}`);
});
