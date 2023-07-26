const Routine = require("../models/routine");

async function index(req, res) {
    const routines = await Routine.find({});
    console.log(routines);
    const monday =  await Routine.find({"day": "Monday"});
    const tuesday =  await Routine.find({"day": "Tuesday"});
    const wednesday =  await Routine.find({"day": "Wednesday"});
    const thursday =  await Routine.find({"day": "Thursday"});
    const friday =  await Routine.find({"day": "Friday"});
    const saturday =  await Routine.find({"day": "Saturday"});
    const sunday =  await Routine.find({"day": "Sunday"});
    const lengthArr = [];
    lengthArr.push(monday.length);
    lengthArr.push(tuesday.length);
    lengthArr.push(wednesday.length);
    lengthArr.push(thursday.length);
    lengthArr.push(friday.length);
    lengthArr.push(saturday.length);
    lengthArr.push(sunday.length);
    res.render("routines/index", { title: "All Routines", routines, lengthArr });
};

function newRoutine(req, res) {
  res.render('routines/new', {errorMsg: ''})
}

async function show(req, res){
  const str = req.params.day;
  str.charAt(0).toUpperCase() + str.slice(1);
  console.log(str);
  const routine = await Routine.find({"day": req.params.day})
  console.log(routine);
  res.render("routines/show", {title: "All Routines", routine});
}

async function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      await Routine.create(req.body);
      res.redirect('/routines');
    } catch (err) {
      console.log(err);
      res.render('routines/index', { errorMsg: err.message });
    }
  }

module.exports = {
    index,
    show,
    new: newRoutine, 
    create
};