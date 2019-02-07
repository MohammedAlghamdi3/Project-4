var db = require('../db/config');

var volunteerusers = {};

volunteerusers.getMale = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM volunteer WHERE gender = 'male' ;")  // query the database
      .then(function (result) {  
        res.locals.male = result.count;
        console.log("the male : ");
        console.log(result.count);
        // save that javascript object to the response object in res.locals.bloodusers
        next();  // move on to the next command
      })
      .catch(function (error) { // if there is an issue when getting all the bloodusers
        console.log(error); // log the error
        next(); // move on to the next command
      })
  }
volunteerusers.getRiyadh = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM volunteer WHERE city = 'الرياض' ;")  // query the database
      .then(function (result) {  
        res.locals.Riyadh = result.count;
        console.log("the male : ");
        console.log(result.count);
        // save that javascript object to the response object in res.locals.bloodusers
        next();  // move on to the next command
      })
      .catch(function (error) { // if there is an issue when getting all the bloodusers
        console.log(error); // log the error
        next(); // move on to the next command
      })
  }
volunteerusers.getMakkah = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM volunteer WHERE city = 'مكة' ;")  // query the database
      .then(function (result) {  
        res.locals.Makkah = result.count;
        console.log("the male : ");
        console.log(result.count);
        // save that javascript object to the response object in res.locals.bloodusers
        next();  // move on to the next command
      })
      .catch(function (error) { // if there is an issue when getting all the bloodusers
        console.log(error); // log the error
        next(); // move on to the next command
      })
  }
volunteerusers.getDammam = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM volunteer WHERE city = 'الدمام' ;")  // query the database
      .then(function (result) {  
        res.locals.Dammam = result.count;
        console.log("the male : ");
        console.log(result.count);
        // save that javascript object to the response object in res.locals.bloodusers
        next();  // move on to the next command
      })
      .catch(function (error) { // if there is an issue when getting all the bloodusers
        console.log(error); // log the error
        next(); // move on to the next command
      })
  }
volunteerusers.getMedina = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM volunteer WHERE city = 'المدينة' ;")  // query the database
      .then(function (result) {  
        res.locals.Medina = result.count;
        console.log("the male : ");
        console.log(result.count);
        // save that javascript object to the response object in res.locals.bloodusers
        next();  // move on to the next command
      })
      .catch(function (error) { // if there is an issue when getting all the bloodusers
        console.log(error); // log the error
        next(); // move on to the next command
      })
  }
volunteerusers.getFemale = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM volunteer WHERE gender = 'female' ;")  // query the database
      .then(function (result) {  
        res.locals.female = result.count; 
        console.log("the female : ");
        console.log(result.count);
        // save that javascript object to the response object in res.locals.bloodusers
        
        next();  // move on to the next command
      })
      .catch(function (error) { // if there is an issue when getting all the bloodusers
        console.log(error); // log the error
        next(); // move on to the next command
      })
  }

// create a method that gets all the data from the "volunteerusers" table
volunteerusers.getAll = function (req, res, next) {
  db.manyOrNone("SELECT * FROM patient;")  // query the database
    .then(function (result) {   // return the data as a javascript object "result"
      res.locals.volunteerusers = result;  // save that javascript object to the response object in res.locals.volunteerusers
      next();  // move on to the next command
    })
    .catch(function(error){ // if there is an issue when getting all the volunteerusers
      console.log(error); // log the error
      next(); // move on to the next command
    })
}
volunteerusers.findmale = function (req, res, next) {
  db.manyOrNone("SELECT * FROM patient WHERE gender = 'male';")  // query the database
    .then(function (result) {   // return the data as a javascript object "result"
      res.locals.volunteerusers = result;  // save that javascript object to the response object in res.locals.volunteerusers
      next();  // move on to the next command
    })
    .catch(function(error){ // if there is an issue when getting all the volunteerusers
      console.log(error); // log the error
      next(); // move on to the next command
    })
}
volunteerusers.findfemale = function (req, res, next) {
  db.manyOrNone("SELECT * FROM patient WHERE gender = 'female';")  // query the database
    .then(function (result) {   // return the data as a javascript object "result"
      res.locals.volunteerusers = result;  // save that javascript object to the response object in res.locals.volunteerusers
      next();  // move on to the next command
    })
    .catch(function(error){ // if there is an issue when getting all the volunteerusers
      console.log(error); // log the error
      next(); // move on to the next command
    })
}
volunteerusers.findyoung = function (req, res, next) {
  db.manyOrNone("SELECT * FROM patient WHERE age = 'Young';")  // query the database
    .then(function (result) {   // return the data as a javascript object "result"
      res.locals.volunteerusers = result;  // save that javascript object to the response object in res.locals.volunteerusers
      next();  // move on to the next command
    })
    .catch(function(error){ // if there is an issue when getting all the volunteerusers
      console.log(error); // log the error
      next(); // move on to the next command
    })
}
volunteerusers.findchild = function (req, res, next) {
  db.manyOrNone("SELECT * FROM patient WHERE age = 'Child' ;")  // query the database
    .then(function (result) {   // return the data as a javascript object "result"
      res.locals.volunteerusers = result;  // save that javascript object to the response object in res.locals.volunteerusers
      next();  // move on to the next command
    })
    .catch(function(error){ // if there is an issue when getting all the volunteerusers
      console.log(error); // log the error
      next(); // move on to the next command
    })
}
volunteerusers.findmiddle = function (req, res, next) {
  db.manyOrNone("SELECT * FROM patient WHERE age = 'Middle' ;")  // query the database
    .then(function (result) {   // return the data as a javascript object "result"
      res.locals.volunteerusers = result;  // save that javascript object to the response object in res.locals.volunteerusers
      next();  // move on to the next command
    })
    .catch(function(error){ // if there is an issue when getting all the volunteerusers
      console.log(error); // log the error
      next(); // move on to the next command
    })
}

volunteerusers.find = function (req, res, next) {
  var id = req.params.id;
  db.oneOrNone("SELECT * FROM patient WHERE id = $1;", [id])
    .then(function(result){
      res.locals.volunteerusers = result;
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
    
}
volunteerusers.confirm = function (req, res, next) {
  var id = req.params.id;
  db.oneOrNone("SELECT * FROM volunteer WHERE id = $1;", [id])
    .then(function(result){
      res.locals.volunteerusers = result;
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
    
}

volunteerusers.findby = function (req, res, next) {
  db.manyOrNone("SELECT * FROM volunteer")
    .then(function(result){
      res.locals.volunteerusers = result;
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

volunteerusers.auth = function (req, res, next) {
    var voluData2 = {
    name: req.body.name,
    pass: req.body.pass
  }
  console.log(req.body)
  db.one(`SELECT * FROM volunteer WHERE name = $1 AND my_password = $2 ;`,
      [voluData2.name , voluData2.pass])
    .then(function(result){
      res.locals.volunteerusers = result;
      res.locals.volunteerusers_name = result.name;
      console.log(result);
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}
volunteerusers.admin = function (req, res, next) {
    var voluData2 = {
    name: req.body.name,
    pass: req.body.pass
  }
  console.log(req.body)
  db.one(`SELECT * FROM admin WHERE name = $1 AND my_password = $2 ;`,
      [voluData2.name , voluData2.pass])
    .then(function(result){
      res.locals.volunteerusers = result;
      res.locals.volunteerusers_name = result.name;
      console.log(result);
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

volunteerusers.create = function(req, res, next){
  var voluData = {
    name: req.body.field1,
    national_id: req.body.field2,
    gender: req.body.gender,
    email: req.body.field3,
    password: req.body.password,
    image :req.body.avatar,
    city :req.body.city
  }
  console.log(req.body)
    
  db.one(
    `INSERT INTO volunteer
    (name, national_id, gender, email, my_password , image , city) 
    VALUES ($1, $2, $3, $4, $5, $6 ,$7) RETURNING id;`,
    [voluData.name, voluData.national_id, voluData.gender, voluData.email, voluData.password,
    voluData.image,voluData.city])
    .then(function (result) {
      console.log(result);
      res.locals.volunteerusers_id = result.id;
      next();  // move on to the next command
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
    }
volunteerusers.createpatient = function(req, res, next){
  var voluData = {
    name: req.body.user_name,
    age: req.body.user_age,
    gender: req.body.gender,
    days: req.body.quantity,
    department: req.body.Department,
    room_number :req.body.room_number
  }
  console.log(req.body)
    
  db.one(
    `INSERT INTO patient
    (name, gender, age, days, department , room ) 
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`,
    [voluData.name, voluData.gender, voluData.age, voluData.days, voluData.department,
    voluData.room_number])
    .then(function (result) {
      console.log(result);
      res.locals.patientusers_id = result.id;
      next();  // move on to the next command
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
    }
    volunteerusers.createdate = function(req, res, next){
  var voluData = {
    date: req.body.date,
    patient_id: req.body.id,
    volunteer_id: req.body.id2
  }
  console.log(req.body)
    
  db.one(
    `INSERT INTO together
    (patient_id, visit_date , volunteer_id) 
    VALUES ($1, $2 , $3) RETURNING patient_id;`,
    [voluData.patient_id, voluData.date , voluData.volunteer_id])
    .then(function (result) {
      console.log(result);
      res.locals.volunteerusers_id = result.patient_id;
      next();  // move on to the next command
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
    
    
    }

volunteerusers.update = function(req, res, next){
  var pokeData = {
   name: req.body.name,
    type1: req.body.type1,
    type2: req.body.type2 || "",
    hitpoints: req.body.hitpoints,
    attack: req.body.attack,
    gender: req.body.gender,
    img: req.body.img
  }

  db.one(`UPDATE volunteerusers SET name = $1, city = $2, volunteer_type = $3, phone = $4,
  details = $5, location = $6 WHERE id = $7 RETURNING id;`, [pokeData.name, pokeData.type1, pokeData.type2, pokeData.hitpoints, pokeData.attack, pokeData.img, req.params.id])
    db.one(`UPDATE gender SET gender = $1 WHERE id = $2 RETURNING id;`, [pokeData.gender, req.params.id])
    
    .then(function(result) {
      res.locals.volunteerusers_id = result.id;
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

volunteerusers.delete = function(req, res, next){
  db.none('DELETE FROM volunteerusers WHERE id=$1;', [req.params.id])
    .then(function(){
      console.log('successful delete');
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

module.exports = volunteerusers;