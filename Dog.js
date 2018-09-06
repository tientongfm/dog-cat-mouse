var chalk = require('chalk');

function Dog(name) {
	this.name = name;
	this.stomach = [];	
}

Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
};

Dog.prototype.sayHi = function() {
	console.log('Hi! I am dog. My name is ' + chalk.blue(this.name));
};

Dog.prototype.run = function(){
	console.log('Run');
};

module.exports = Dog;  