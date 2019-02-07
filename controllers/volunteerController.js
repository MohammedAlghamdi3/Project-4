var express = require('express');
var router = express.Router();

var volunteerusers = require('../models/volunteer');

router.get('/', renderIndex2);
router.get('/all', volunteerusers.getAll, renderIndex);
router.get('/findmale', volunteerusers.findmale, renderfindmale);
router.get('/findfemale', volunteerusers.findfemale, renderfindfemale);
router.get('/findyoung', volunteerusers.findyoung, renderfindyoung);
router.get('/findchild', volunteerusers.findchild, renderfindchild);
router.get('/findmiddle', volunteerusers.findmiddle, renderfindmiddle);
//router.get('/getsearch', volunteerusers.findby , renderSearch2);
router.get('/new', renderNew);
//router.get('/search', renderSearch);
router.get('/login', renderlogin);
router.get('/adlogin', renderadmin);
router.get('/auth', renderauth);
router.get('/admin', renderad);
router.get('/signed', rendersigned);
router.get('/patient', volunteerusers.getMale,
    volunteerusers.getFemale,
    volunteerusers.getRiyadh,
    volunteerusers.getMakkah,
    volunteerusers.getDammam,
    volunteerusers.getMedina,renderpatient);
//router.get('/:id/edit', volunteerusers.find, renderEdit);
/* ^^ the edit page edits all the information for a single volunteerusers.
  In order to edit that information we have to get all the data for a single volunteerusers.
  We're already getting all the data for a single volunteerusers in the show route using volunteerusers.find,
  so we use volunteerusers.find in our GET edit route.
*/

router.get('/:id', volunteerusers.find,  renderShow);
router.post('/card/:id', volunteerusers.confirm,  renderconfirm);
router.post('/auth', volunteerusers.auth,  renderauth);
router.post('/admin', volunteerusers.admin,  renderad);

router.post('/', volunteerusers.create, redirectShow);
router.post('/patient', volunteerusers.createpatient, redirectpatient);
router.post('/confirm', volunteerusers.createdate, redirectconfirm);
router.post('/auth',volunteerusers.auth,redirectauth);
router.post('/admin',volunteerusers.admin,redirectad);
//router.delete('/:id', volunteerusers.delete, redirectIndex);
//1 - router.put('/:id', volunteerusers.update, redirectShow);


function renderIndex(req, res){
  var mustacheVariables = {
    volunteerusers: res.locals.volunteerusers
  }
  res.render('./volunteer/all', mustacheVariables);
}
function renderfindmale(req, res){
  var mustacheVariables = {
    volunteerusers: res.locals.volunteerusers
  }
  res.render('./volunteer/findmale', mustacheVariables);
}
function renderfindfemale(req, res){
  var mustacheVariables = {
    volunteerusers: res.locals.volunteerusers
  }
  res.render('./volunteer/findfemale', mustacheVariables);
}
function renderfindyoung(req, res){
  var mustacheVariables = {
    volunteerusers: res.locals.volunteerusers
  }
  res.render('./volunteer/findyoung', mustacheVariables);
}
function renderfindchild(req, res){
  var mustacheVariables = {
    volunteerusers: res.locals.volunteerusers
  }
  res.render('./volunteer/findchild', mustacheVariables);
}
function renderfindmiddle(req, res){
  var mustacheVariables = {
    volunteerusers: res.locals.volunteerusers
  }
  res.render('./volunteer/findmiddle', mustacheVariables);
}
function renderIndex2(req, res){
  var mustacheVariables = {
    volunteerusers: res.locals.volunteerusers
  }
  res.render('./volunteer/new', mustacheVariables);
}

function renderShow(req,res){
  var mustacheVariables = res.locals.volunteerusers;
  res.render('./volunteer/show', mustacheVariables);
}
function renderadmin(req,res){
  var mustacheVariables = res.locals.volunteerusers;
  res.render('./volunteer/adlogin', mustacheVariables);
}
function rendersigned(req,res){
  var mustacheVariables = res.locals.volunteerusers;
  res.render('./volunteer/signed', mustacheVariables);
}
function renderpatient(req,res){
  var mustacheVariables = {
        male: res.locals.male,
        female: res.locals.female,
        Riyadh: res.locals.Riyadh,
        Makkah: res.locals.Makkah,
        Dammam: res.locals.Dammam,
        Medina: res.locals.Medina
    }
  res.render('./volunteer/patient', mustacheVariables);
}
function renderconfirm(req,res){
  var mustacheVariables = res.locals.volunteerusers;
  res.render('./volunteer/card', mustacheVariables);
}
function renderauth(req,res){
  var mustacheVariables = res.locals.volunteerusers;
    console.log("the name received is " + res.locals.volunteerusers_name);
    if(typeof res.locals.volunteerusers_name === 'undefined')
        {
        res.render('./volunteer/login', mustacheVariables);
 
        }
    else{
  res.render('./volunteer/auth', mustacheVariables);
    }
}
function renderad(req,res){
  var mustacheVariables = res.locals.volunteerusers;
    console.log("the name received is " + res.locals.volunteerusers_name);
    if(typeof res.locals.volunteerusers_name === 'undefined')
        {
        res.render('./volunteer/adlogin', mustacheVariables);
 
        }
    else{
  res.render('./volunteer/admin', mustacheVariables);
    }
}

function renderEdit(req,res){
  var mustacheVariables = res.locals.volunteerusers;
  if (mustacheVariables.legendary === true) {
    mustacheVariables.legendary = 'checked';
  } else {
    mustacheVariables.legendary = '';
  }
  res.render('./volunteer/edit', mustacheVariables);
}

function renderNew(req, res){
  res.render('./volunteer/new');
}
function renderSearch(req, res){
  res.render('./volunteer/search');
}
function renderlogin(req, res){
  res.render('./volunteer/login');
}
function renderSearch2(req, res){
  res.render('./volunteer/search2');
}

function redirectShow(req, res) {
  console.log(req.body);
  res.redirect(`/volunteer/signed`);
}
function redirectpatient(req, res) {
  console.log(req.body);
  res.redirect(`/volunteer/patient`);
}

function redirectconfirm(req, res) {
  console.log(req.body);
  res.redirect(`/volunteer/card/${res.locals.volunteerusers_id}`);
}

function redirectauth(req, res) {
  console.log("redirect auth");
  console.log(req.body);
  res.redirect(`/volunteer/auth`);
}
function redirectad(req, res) {
  console.log(req.body);
  res.redirect(`/volunteer/admin`);
}

function redirectIndex(req, res){
  res.redirect('/volunteer');
}

module.exports = router;