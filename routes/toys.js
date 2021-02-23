const express = require('express');
const { ToyModel, validToy } = require("../models/toyModel")
const { authToken } = require('../middlewares/auth');
const router = express.Router();


router.get('/', async (req, res) => {
  let perPage = (req.query.perPage) ? Number(req.query.perPage) : 10;
  let page = req.query.page;

  let searchQ = req.query.s;
  let searchRegQ = new RegExp(searchQ, "i");
  try {

    let data = await ToyModel.find({ $or: [{ name: searchRegQ }, { info: searchRegQ }] })
      .limit(perPage)
      .skip(page * perPage)

    res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/prices', async (req, res) => {
  let perPage = (req.query.perPage) ? Number(req.query.perPage) : 10;
  let page = req.query.page || 0;
  let min = Number(req.query.min) || 1;
  let max = Number(req.query.max) || 999999;

  try {

    let data = await ToyModel.find({ $and: [{ price: { $gte: min } }, { price: { $lte: max } }] })
      .limit(perPage)
      .skip(page * perPage)

    res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


router.get('/cat/:catName', async (req, res) => {
  let catName = req.params.catName;
  let perPage = (req.query.perPage) ? Number(req.query.perPage) : 10;
  let page = req.query.page;

  try {
    let data = await ToyModel.find({ category: catName })
      .limit(perPage)
      .skip(page * perPage);
    res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});



router.post("/", authToken, async (req, res) => {
  let validBody = validToy(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let toy = new ToyModel(req.body);
    toy.user_id = req.userData._id;
    await toy.save();
    res.status(201).json(toy);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

router.put("/:editId", authToken, async (req, res) => {
  let editId = req.params.editId;
  let validBody = validToy(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let toy = await ToyModel.updateOne({ _id: editId, user_id: req.userData._id }, req.body);
    res.json(toy);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

router.delete("/:delId", authToken, async (req, res) => {
  let delId = req.params.delId;
  try {
    let toy = await ToyModel.deleteOne({ _id: delId, user_id: req.userData._id });
    res.json(toy);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})


module.exports = router;