const router = require("express").Router();
const Momen = require("../models/Momen");

router.get("/", async (req, res) => {
    try{
        const data = await Momen.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/addmomen", async (req, res) => {
    try {
        const newMomen = new Momen({
            title : req.body.title,
            deskripsi: req.body.deskripsi,
            img : req.body.img,
            categories : req.body.catergories,
            tanggal : req.body.tanggal
        });
        const savedMomen = await newMomen.save();
        res.status(200).json(savedMomen);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router