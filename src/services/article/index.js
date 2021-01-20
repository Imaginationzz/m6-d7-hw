const router = require("express").Router();

const Model = require("../../utils/model");

const article = new Model("article");

router.get("/", async (req, res, next) => {
  try {
    const response = await article.findOne();
    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});
router.get("/like", async (req, res, next) => {
  try {
    const response = await article.findTwo();
    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await article.findById(req.params.id);
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await article.save(req.body);
    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const response = await article.findByIdAndUpdate(req.params.id, req.body);
    res.send(response);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await article.findByIdAndDelete(req.params.id);
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

module.exports = router;
