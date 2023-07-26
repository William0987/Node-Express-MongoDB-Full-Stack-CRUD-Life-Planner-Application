const Year = require("../models/year");

async function index(req, res) {
    const years = await Year.find({});
    res.render("years/index", { title: "All Set Yearly Goals", years});
};

async function show(req, res) {
  const year = await Year.findById(req.params.id);
  try {
    res.render("years/show", { title: "Details", year })
  }
  catch(e) {
    console.log(e)
  }    
};

function newGoal(req, res) {
  res.render('years/new', {errorMsg: ''})
}

async function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      await Year.create(req.body);
      res.redirect('/years');
    } catch (err) {
      console.log(err);
      res.render('years/new', { errorMsg: err.message });
    }
  }

module.exports = {
    index,
    show,
    new: newGoal,
    create 
}