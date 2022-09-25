// // // // let person = {
// // // // 	firstName : "ManiKanta",
// // // // 	lastName : "Kotni",
// // // // 	getPersonDetails : function(){
// // // // 		return `The person name is ${this.firstName} ${this.lastName}`
// // // // 	}
// // // // }
// // // // console.log(person.firstName);
// // // // console.log(person.getPersonDetails());


// // // // // class Rectangle {
// // // // // 	constructor(height,width){
// // // // // 		this.height=height;
// // // // // 		this.width=width;
// // // // // 	}
// // // // // }

// // // // // let square = class{
// // // // // 	constructor(side,side){
// // // // // 		this.side=side;
// // // // // 		this.side=side;
// // // // // 	}
// // // // // }

// // // // function SuperType(){
// // // // 	this.name="Mani"
// // // // }


// // // // SuperType.prototype.getSuperName=function(){
// // // // 	return this.name
// // // // }

// // // // function SubType(){
// // // // 	this.age=26
// // // // }

// // // // SubType.prototype=new SubType();
// // // // SubType.prototype.getSubAge=function(){
// // // // 	return this.age
// // // // }


// // // class car{
// // // 	constructor(brand){
// // // 		this.carName=brand;
// // // 	}

// // // 	present(){
// // // 		return `I have a`+this.carName;
// // // 	}
// // // }

// // // class Model extends car{
// // // 	constructor(brand,mod){
// // // 		super(brand);
// // // 		this.Model=mod
// // // 	}
// // // 	show(){
// // // 		return this.present()+`,it is a`  this.Model;
// // // 	}
// // // }

// // // car=new Model("BMW","AUDI");

// // // console.log(car.show());

// // class person {
// //     constructor(fName,lName){
// //         this.fName=fName;
// //         this.lName=lname;
// //     }
// // }
// // person1=person.this.lName;
// // console.log(person1)


// const dog = new Animals('Pogo', 'Dog');

// function Animals(name,specie){
//         this.name = name;
//         this.specie =specie;
//     }


// Animals.prototype.sing = function(){
//     console.log(`${this.name} can sing`)
// }

// dog.sing();
class Animals {
	constructor(name, specie){
    this.name = name;
    this.specie = specie;
};

sing(){
    console.log(`${this.name} can sing`);
}
};

const cat = new Animals('Billi', 'Cat');

cat.sing();