// in order to create dynamic states and behavioures we use the "prototype keyword"
/*
function class_one() {}
class_one.prototype.sub_one = "ReactJs";
class_one.prototype.sub_two = "nodeJs";
class_one.prototype.sub_three = "MongoDb";

let obj = new class_one();
console.log(obj.sub_one, obj.sub_two, obj.sub_three);//ReactJs nodeJs MongoDb
*/
/*
function fun_one() {}
fun_one.prototype.getSubOne = function() {
  return "reactJs";
};
fun_one.prototype.getSubTwo = function() {
  return "NodeJs";
};
fun_one.prototype.getSubThree = function() {
  return "SqlServer";
};

let obj = new fun_one();
console.log(obj.getSubOne(), obj.getSubTwo(), obj.getSubThree()); //reactJs NodeJs SqlServer
*/
/*
function class_one() {}
class_one.prototype.sub_one = "Angular";
class_one.prototype.getSubOne = function() {
  return this.sub_one;
};
let obj = new class_one();
console.log(obj.getSubOne());//reactJs NodeJs SqlServer
*/
function class_one() {}
class_one.prototype.sub_one = "ReactJs";
class_one.prototype.sub_two = "NodeJs";
class_one.prototype.sub_three = "MongoDb";
class_one.prototype.getSubjects = function() {
  console.log(
    "The subjects are:" +
      this.sub_one +
      " " +
      this.sub_two +
      " " +
      this.sub_three
  );
};

let obj = new class_one();
obj.getSubjects(); //The subjects are:ReactJs NodeJs MongoDb
