require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users/usersRouter");
var mealRouter = require("./routes/meals/mealRouter");
var recipeDatabaseRouter = require("./routes/recipeDatabase/recipeDatabaseRouter");


mongoose
	.connect(process.env.MONGO_DB)
	.then(() => {
		console.log("MONGODB CONNECTED");
	})
	.catch((e) => {
		console.log(e);
	});

var app = express();

app.use(cors());
app.options("*", cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/meals", mealRouter);
app.use("/api/recipeDatabase", recipeDatabaseRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.json({ message: "error", error: err.message });
});

module.exports = app;
