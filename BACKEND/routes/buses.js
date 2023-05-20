const router = require("express").Router();
let Bus = require("../models/Bus");

router.route("/add").post((req, res) => {

    const busRegNum = req.body.busRegNum;
    const amountOfSeats = req.body.amountOfSeats;
    const busType = req.body.busType;
    const driver = req.body.driver;
    const conductor = req.body.conductor;
    const route = req.body.route;

    const newBus = new Bus({

        busRegNum,
        amountOfSeats,
        busType,
        driver,
        conductor,
        route

    })


    newBus.save().then(() =>{
        res.json("Bus Added")
    }).catch((err) =>{
        console.log(err)
    })
})


router.route("/").get((req, res) =>{

    Bus.find().then((buses) =>{
        res.json(buses)
    }).catch((err) =>{
        console.log(err)
    })
})


router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {busRegNum, amountOfSeats, busType, conductor, route} = req.body;

    const updateBus = {
        busRegNum,
        amountOfSeats,
        busType,
        driver,
        conductor,
        route
    }

    const update = await Bus.findByIdAndUpdate(userId, updateBus).then(() =>{
        res.status(200).send({status: "User updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })    
})


router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Bus.findByIdAndDelete(userId)
       .then(() => {
           res.status(200).send({status: "Bus deleted"});
       }).catch((err) => {
           console.log(err.message);
           res.status(500).send({status: "Error with delete bus", error: err.message});
       })
})


router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    await Bus.findById(userId)
    .then((bus) => {
        res.status(200).send({status: "User fetched", bus})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})


module.exports = router;
