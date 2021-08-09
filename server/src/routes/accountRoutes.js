import { createAccount, deleteAccount, getAccountById, getAccounts, updateAccount } from "../controllers/accountsController";
import { Router } from "express";
import { auth } from "../middleware/auth";

const router = Router()


router.get("/accounts", auth, getAccounts);
router.get('/accounts/:id', auth, getAccountById)
router.post("/accounts", auth, createAccount);
router.patch("/accounts/:id/update", auth, updateAccount);
router.delete("/accounts/:id/remove", auth, deleteAccount);

export default router