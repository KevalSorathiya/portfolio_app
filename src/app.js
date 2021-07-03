const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const hbs = require("hbs");
const Contect = require('./models/Contect');
require("./db/connection");


const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.set('views', template_path);
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.render('index');
});

app.get("#aboutid", (req, res) => {
    res.render('about');
});

app.get("#serviceid", (req, res) => {
    res.render('service');
});

app.get("#galleryid", (req, res) => {
    res.render('gallery');
});

app.get("#contactid", (req, res) => {
    res.render('contact');
});

app.post("/contact", async(req, res) => {
    try {
        const userData = new Contect(req.body);
        const Data = await userData.save();
        if (!Data) {
            res.status(501).send("Error in store a data in database !!!");
        } else {
            res.status(201).render('index');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("*", (req, res) => {
    res.render('pageNotFound');
});

app.listen(port, () => {
    console.log(`server is running in port no: ${port}`);
});