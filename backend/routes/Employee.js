const router = require('express').Router();
let Employee  = require('../models/Employee.model');

router.route('/').get((req, res) => {
    Employee.find()
        .then(Employee => res.json(Employee))
        .catch(err => res.status(400).json('Error: ' + err));
});



// Get Data 
router.route('/:id').get((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => res.json(Employee))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Employee deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update data
router.route('/update/:id').post((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => {
            Employee.EmployeeID = req.body.EmployeeID;
            Employee.EmployeeName = req.body.EmployeeName;
            Employee.Address = req.body.Address;
            Employee.Telephone = req.body.Telephone;
            Employee.Email = req.body.Email;
            Employee.Type = req.body.Type;
            Employee.Discription = req.body.Discription;
            
          

            Employee.save()
                .then(() => res.json('Employee updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;





