import express from "express";
import Employee from "../models/employeeSchema.js";
import { getEmployee, getEmployeeById, editEmployee, updateEmployee, addEmployee, createEmployee, deleteEmployee, searchEmployee } from "../controller/employee.js";

const router = express.Router();

router.post("/add-employee", addEmployee);
router.get("/create", createEmployee);
router.get("/", getEmployee);
router.get("/employee/:id", getEmployeeById);
router.get("/edit/:id", editEmployee);
router.post("/update-employee/:id", updateEmployee);
router.get("/delete/:id", deleteEmployee);
router.get("/search", searchEmployee);



export default router;
