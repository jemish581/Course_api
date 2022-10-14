import express from "express";
import course from "../model/index.js";
const router = express.Router();

//----------get all data-------------------

router.get("/course", async (req, res) => {
  try {
    const getalldata = await course.find();
    res.json(getalldata);
  } catch (err) {
    res.json(err);
  }
});

//--get single data--------------------------

router.get("/course/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const c = await course.findById(courseId);
    res.json(c);
  } catch (err) {
    res.json(err);
  }
});

//create db-------------------

router.post("/createdb", async (req, res) => {
  const Createdb = await course.create(req.body);
  res.json(createdb);
});

//-----delete data----------------------
router.delete("/course/:courseId", async (req, res) => {
  try {
    await course.remove({ _id: req.params.courseId });
    res.status(200).json({
      message: "done",
    });
  } catch (err) {
    res.json(err);
  }
});

//------update data------------------------------------
router.put("/course", async (req, res) => {
  const courseId = req.body.courseId;
  try {
    const updatedcourse = await course.updateOne({ _id: courseId }, req.body);
    res.json({ updatedcourse });
  } catch (err) {
    console.log(`error : `, err);
    res.json(err);
  }
});

export default router;
