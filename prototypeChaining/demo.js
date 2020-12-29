// javascript dosent support oops
// if you want to achive inheritance using js technically we can called as 'prototype chaining'.
/*
function class_one() {}
class_one.prototype.sub_one = "ReactJs";

function class_two() {}
class_two.prototype = Object.create(class_one.prototype);//first create relationship then define the functions
class_two.prototype.sub_two = "NodeJS";

let obj1 = new class_one();
let obj2 = new class_two();

console.log(obj1.sub_one, obj1.sub_two); //ReactJs undefined

console.log(obj2.sub_one, obj2.sub_two); //ReactJs NodeJS
*/
/*

function class_one() {}
class_one.prototype.wish = "ReactJs";

class_one.prototype.getWish = function() {
  return `welcome to ${this.wish}`;
};
let obj = new class_one();
console.log(obj.getWish());//welcome to ReactJs
*/
/*
function class_one() {}
class_one.prototype.fun_one = function() {
  return "ReactJs";
};

function class_two() {}
class_two.prototype = Object.create(class_one.prototype);

let obj = new class_two();
console.log(obj.fun_one()); //ReactJs
*/

/*
function class_one() {}
class_one.prototype.fun_one = function() {
  return "hello1";
};

function class_two() {}
class_two.prototype = Object.create(class_one.prototype);
class_two.prototype.fun_two = function() {
  return "hello2";
};
let ob = new class_one();
let obj = new class_two();
//console.log(ob.fun_one(), ob.fun_two());//ob.fun_two is not a function
console.log(obj.fun_one(), obj.fun_two()); //hello1 hello2
*/
/*
function Parent() {}
Parent.prototype.fun_one = function() {
  return "hello1";
};

function child() {}
child.prototype = Object.create(Parent.prototype);
child.prototype.fun_two = function() {
  return "hello2";
};

function subChild() {}
subChild.prototype = Object.create(child.prototype);
subChild.prototype.fun_three = function() {
  return "hello3";
};

let obj = new subChild();
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());//hello1 hello2 hello3

*/
