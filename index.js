const express =require("express");
const app = express();
var cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch ((err) => {
    console.log(err);
});

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => res.send('Jalan jalan kok Aman!'));
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend Server is running")
})