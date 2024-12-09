const express = require('express');
const router = require("./user");

const router = express.Router();

router.use("/user", userRouter);

module.exports = router;
// api/v1