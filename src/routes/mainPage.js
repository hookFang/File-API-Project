import { Router } from "express";
import UploadFile from "../models/uploadFile";

const router = Router();

/* GET main page after login/signup. */
router.get("/", function (req, res) {
  UploadFile.find({ owner: req.user.id }, function (err, filesFound) {
    if (err) console.log(err);
    res.render("mainPage", { user: req.user, files: filesFound });
  });
});

module.exports = router;
