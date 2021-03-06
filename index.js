const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

dotenv.config();

app.use(express.json());

// Accessing the path module
const path = require("path");




mongoose 
 .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

app.use("/users", userRoute);
app.use("/api/pins", pinRoute);



// steps for deployment

if (process.env.NODE_ENV ==="production"){
  app.use(express.static("frontend/build"));
}


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Backend server is running!");
});
