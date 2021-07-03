const mongoose = require("mongoose");
const validator = require("validator");

const contectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    },
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email id");
            }
        },
        required: true
    },
    phone: {
        type: Number,
        min: 10,
        required: true
    },
    message: {
        type: String,
        required: true,
        minLength: 3
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Contect = new mongoose.model("Contect", contectSchema);

module.exports = Contect;