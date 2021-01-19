const router = require("express").Router();

const Model = require("../../utils/model");

const category = new Model("category");

router.get("/", async (req, res, next) => {
  try {
    const response = await category.findOne();
    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await category.findById(req.params.id);
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await category.save(req.body);
    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const response = await category.findByIdAndUpdate(req.params.id, req.body);
    res.send(response);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await category.findByIdAndDelete(req.params.id);
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

module.exports = router;
