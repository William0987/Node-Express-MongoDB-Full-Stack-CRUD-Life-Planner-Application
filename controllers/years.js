const Year = require("../models/year");

async function index(req, res) {
    const years = await Year.find({});
    res.render("years/index", { title: "All Yearly Goals", years});
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
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
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

async function deleteGoal(req, res) {
  await Year.findOneAndDelete(
    {_id: req.params.id}
  );
  res.redirect('/years');
}

async function edit(req, res) {
  const goal = await Year.findOne({_id: req.params.id});
  if (!goal) return res.redirect('/years/show');
  res.render('years/edit', { goal });
}

async function update(req, res) {
  try {
    const updatedGoal = await Year.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      {new: true}
    );
    return res.redirect(`/years/${updatedGoal.id}`);
  } catch (e) {
    console.log(e.message);
    return res.redirect('/years');
  }
}


module.exports = {
    index,
    show,
    new: newGoal,
    create,
    delete: deleteGoal,
    edit,
    update
}