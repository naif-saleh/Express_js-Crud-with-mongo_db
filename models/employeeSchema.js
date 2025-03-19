import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    country: String,
    age: Number,
    gender: String,
}, {timestamps: true});


const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;