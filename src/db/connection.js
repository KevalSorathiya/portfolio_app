require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DATABASE_NAME}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log("database connection successfully done!!!");
    })
    .catch((error) => {
        console.error(error);
    });