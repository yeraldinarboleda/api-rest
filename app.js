/**packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/**app configuuration */
const app= express();
const port = config.get("server-port");
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded(
    {extended: true}
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*",ipFn);

/**methods */
app.get("/",(req, res, next) => {
    res.send("wellcome to academic rest api.")
});

//User Routes Loading
const userRoutes = require("./routes/user.routes");
userRoutes(app);

//token middleware
tkFn = require("./middleware/verifyToken")
app.use(tkFn)

//Student Routes Loading
const studentRoutes = require("./routes/student.routes");
studentRoutes(app);

//Teacher Routes Loading
const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes(app);

//Period Routes Loading
const periodRoutes = require("./routes/period.routes");
periodRoutes(app);

//Course Routes Loading
const courseRoutes = require("./routes/course.routes");
courseRoutes(app);

//program Routes Loading
const programRoutes = require("./routes/program.routes");
periodRoutes(app);

//faculty Routes Loading
const facultyRoutes = require("./routes/faculty.routes");
courseRoutes(app);

app.listen(port, () => {
console.log("server is runing...")
});