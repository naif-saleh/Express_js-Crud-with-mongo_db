import moment from "moment";
import Employee from "../models/employeeSchema.js";



export const addEmployee = (req, res) => {
    const employee = new Employee(req.body);
    employee
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };


export const createEmployee = (_, res) => {
    res.render("create");
  }


export const getEmployee = (req, res) => {
    Employee.find()
      .then((employee) => {
        console.log(employee);
        res.render("index", { arr: employee, moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
};

export const getEmployeeById  = (req, res)=>{
    Employee.findById(req.params.id)
    .then((employee) => {
      res.render("employee", { employee: employee });
    })
    .catch((err) => {
      console.log(err);
    });
}

export const editEmployee = (req, res) => {
    Employee.findById(req.params.id)
      .then((employee) => {
        res.render("edit", { employee: employee });
      })
      .catch((err) => {
        console.log(err);
      });
  };


export const updateEmployee = (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }


export const deleteEmployee = (req, res) => {
    Employee.findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }



  export const searchEmployee = (req, res) => {
    const searchQuery = req.query.search; 

    Employee.find({
        $or: [
            { name: { $regex: searchQuery, $options: "i" } }, 
            { email: { $regex: searchQuery, $options: "i" } }
        ]
    })
    .then((employees) => {
        res.render("search", { arr: employees, moment: moment });
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error searching employees");
    });
};

