const express = require("express");
const router = express.Router();

const userHandler =
    require("../handlers/userHandler");

router.post("/", userHandler.createUser);
router.get("/", userHandler.getUsers);
router.put("/:id", userHandler.updateUser);
router.delete("/:id", userHandler.deleteUser);

module.exports = router;
