import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

router.post("/", async (req, res) => {
  await MyUserController.createCurrentUser(req, res);
});

export default router;
