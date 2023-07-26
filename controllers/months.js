const Month = require("../models/month");

async function index(req, res) {
    const months = await Month.find({});
    console.log(months);
    const jan =  await Month.find({"month": "January"});
    const feb =  await Month.find({"month": "February"});
    const march =  await Month.find({"month": "March"});
    const apr =  await Month.find({"month": "April"});
    const may =  await Month.find({"month": "May"});
    const jun =  await Month.find({"month": "June"});
    const july =  await Month.find({"month": "July"});
    const aug =  await Month.find({"month": "August"});
    const sep =  await Month.find({"month": "September"});
    const oct =  await Month.find({"month": "October"});
    const nov =  await Month.find({"month": "November"});
    const dec =  await Month.find({"month": "December"});
    const lengthArr = [];
    lengthArr.push(jan.length);
    lengthArr.push(feb.length);
    lengthArr.push(march.length);
    lengthArr.push(apr.length);
    lengthArr.push(may.length);
    lengthArr.push(jun.length);
    lengthArr.push(july.length);
    lengthArr.push(aug.length);
    lengthArr.push(sep.length);
    lengthArr.push(oct.length);
    lengthArr.push(nov.length);
    lengthArr.push(dec.length);
    res.render("months/index", { title: "All Plans", months, lengthArr });
};

function newPlan(req, res) {
  res.render('months/new', {errorMsg: ''})
}

async function show(req, res){
  const str = req.params.month;
  str.charAt(0).toUpperCase() + str.slice(1);
  console.log(str);
  const month = await Month.find({"month": req.params.month})
  console.log(month);
  res.render("months/show", {title: "All Plans", month});
}

async function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      await Month.create(req.body);
      res.redirect('/months');
    } catch (err) {
      console.log(err);
      res.render('months/index', { errorMsg: err.message });
    }
  }

async function deletePlan(req, res) {
  await Month.findOneAndDelete(
    {_id: req.params.month}
  );
  res.redirect('/months/show');
}

async function edit(req, res) {
  const month = await Month.findOne({_id: req.params.month});
  if (!month) return res.redirect('/months/show');
  res.render('months/edit', { month });
}

async function update(req, res) {
  try {
    const updatedPlan = await Month.findOneAndUpdate(
      {_id: req.params.month},
      req.body,
      {new: true}
    );
    return res.redirect(`/months/${updatedPlan._id}`);
  } catch (e) {
    console.log(e.message);
    return res.redirect('/months');
  }
}


module.exports = {
    index,
    show,
    new: newPlan, 
    create,
    delete: deletePlan,
    update,
    edit
};