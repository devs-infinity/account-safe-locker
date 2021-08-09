import { Router } from "express";
import { deleteUser, getLoggedInUser, loginUser, logoutAllUser, logoutUser, registerUser, updateUser } from "../controllers/authController";
import { auth } from "../middleware/auth";

const router = Router();

// router.get("/", getUsers);
// router.get("/:id", getUser);
router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", auth, logoutUser);
router.post('/logoutall', auth, logoutAllUser)
router.get("/profile", auth, getLoggedInUser);
router.patch('/update', auth, updateUser)
router.delete('/profile/remove', auth, deleteUser)

export default router;
