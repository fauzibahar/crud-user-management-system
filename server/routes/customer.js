import express from "express";
import { about, addCustomer, deleteCustomer, edit, editPost, homepage, postCustomer, searchCustomers, view } from "../controllers/customerController.js";

const router = express.Router();
/**
 *  Customer Routes
 */
router.get("/", homepage);
router.get("/about", about);
router.get("/add", addCustomer);
router.post("/add", postCustomer);
router.get("/view/:id", view);
router.get("/edit/:id", edit);
router.put("/edit/:id", editPost);
router.delete("/edit/:id", deleteCustomer);

router.post("/search", searchCustomers);

export default router;
