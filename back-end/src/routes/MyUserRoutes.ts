import express, { Request, Response, NextFunction } from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.post("/", async (req, res) => {
  await MyUserController.createCurrentUser(req, res);
});

router.put(
  "/",
  jwtCheck,
  jwtParse,
  ...validateMyUserRequest, // Spread middleware array
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await MyUserController.updateCurrentUser(req, res);
    } catch (error) {
      next(error); // Forward errors to the error handler
    }
  }
);

export default router;
