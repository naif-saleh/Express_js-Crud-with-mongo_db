import express from 'express';
import Employee from '../models/employeeSchema.js';
const router = express.Router();




router.get('', async (_, res) => {
   Employee.find().then((employee)=>{
    console.log(employee)
         res.render('index', {arr: employee});
   }).catch(err=>{
    console.log(err);
   })
});


router.get('/create', (_, res)=>{
    res.render('create');
})

router.post('/add-employee', (req, res)=>{
    const employee = new Employee(req.body);
    employee.save().then(()=>{
        res.redirect('/');
    }) .catch(err => {
        console.log(err);
    })
})


export default router;