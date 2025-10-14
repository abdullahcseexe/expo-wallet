import express from "express";

import { createTransaction, deleteTransaction, getSummaryByUserId, getTransactionByUserId } from "../controllers/transactionsController.js";

const router = express.Router();

router.post("/" , createTransaction)

router.get("/:userId", getTransactionByUserId)

router.delete("/:id", deleteTransaction)

router.get("/summary/:userId" ,  getSummaryByUserId)

export default router;