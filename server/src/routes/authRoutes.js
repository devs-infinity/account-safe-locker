import { Router } from "express";
import { getUser, getUsers, registerUser } from "../controllers/authController";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", registerUser);

export default router;
