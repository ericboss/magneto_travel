const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

dotenv.config();

app.use(express.json());
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/frontend'));

mongoose 
 .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Backend server is running!");
});
