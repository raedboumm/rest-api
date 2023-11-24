const express = require("express");

const router = express.Router();
const { getapi, ADDAPI, UPDAPI, DELAPI } = require("../controllers/APICONTROL");

router.get("/", getapi);
router.post("/post", ADDAPI);
router.put('/UPDATE/:id',UPDAPI);
router.delete('/DELETE/:id',DELAPI);

module.exports = router;
