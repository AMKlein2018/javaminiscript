// Code Challenge 1

// Create an object called Multiplier with two methods: 
// multiply and getCurrentValue. 
// multiply should initially return 
// the number supplied * 1 and from then on whatever the current value 
// is times the number supplied.  getCurrentValue should return the last 
// answer returned from multiply.

// function Multiplier() {
// num =1

// this.multiply = function(x){
// num = x * num
// }
// this.getCurrentValue = function(){

// return num
//  }
// }

// console.log(Multiplier.getCurrentValue())

// Code Challenge #2

// Implement an object model that allows you to store strings that represent a Photo. 
// Your model should include an Album object that can contain many Photo objects 
// in its photos attribute. Each Album should allow you to add a new photo, 
// list all photos, and access a specific photo by the order it was added. 
// Each Photo should store the photo's file name and the location the photo was taken 
// in  m, as strings. Create instances of each object defined to prove that your object model works.


// function Album(name) {
//   this.name = name;
//   allPhotos = []
  
//   this.addPhoto = function(pic) {
//     allPhotos.push(pic);
//   }

//   this.listPhotos = function() {
//     for(let i=0; i<allPhotos.length;i++) {
//       console.log(allPhotos[i].name);
//     }
//   }

//   this.accessPhoto = function(number) {
//     console.log(allPhotos[number-1].name + ", " + allPhotos[number-1].location);
//   }
// }

// function Pictures(name, location) {
//   this.name = name;
//   this.location = location;
// }

// var album1 = new Pictures ('destinations');
// 			var pic1 = new Pictures ('Ryan', 'San Francisco', 'Ball Park')
// 			var pic2 = new Pictures ('Dave', 'New York', 'Museum')
// 			var pic3 = new Pictures ('Nick', 'New York', 'Concert')

// album1.addPhoto(pic1);
// album2.addPhoto(pic2);
// album3.addPhoto(pic3);

// album.listPhotos();
// album.accessPhoto(2);





// ***************************WRONG CODE******************************

		// function Album () {
		  
		// }
			

		// function Pictures (name, location, event) {
		// 	this.name = name;
		// 	this.location = location;
		// 	this.event = event;
			
		// 	this.listPhotos = function() {
  //  				for(let i=0; i<pictures.length; i++) {
  //    				console.log(allPhotos[i].name);
  //  				}

		// 	}
		// }
		// 	var album1 = new Pictures ('Adam', 'New York', 'Concert')
		// 	var album2 = new Pictures ('Ryan', 'San Francisco', 'Ball Park')
		// 	var album3 = new Pictures ('Dave', 'New York', 'Museum')
		// 	var album4 = new Pictures ('Nick', 'New York', 'Concert')



	// this.album1 = function (){
	// 	console.log(this.name + " " + this.location + " " + this.event)

	// }

	// this.album2 = function () {
	// 	console.log(this.name + " " + this.location + " " + this.event)
	// }

	// this.album3 = function () {
	// 	console.log(this.name + " " + this.location + " " + this.event)
	// }

	// this.album4 = function () {
	// 	console.log(this.name + " " + this.location + " " + this.event)
	// }

	// console.log(photo1 + " " + label1)
	// console.log(photo2 + " " + label2.album1())
	// console.log(photo3 + " " + label3.album1())
	// console.log(photo4 + " " + label4.album1())

// ***************************WRONG CODE******************************

	// Code Challenge 3


	// Create a prototypical Person object. From this object, extend a Teacher object 
	// and a Student object. Each of these objects should have attributes and 
	// methods pertinent to what they describe. Also create a School object that 
	// should be able to store instances of students and teachers. 
	
	// Make sure to write code afterwards that creates instances 
	// of these objects to 
	// make sure that what you've written works well and 
	// you're able to store the necessary 
	// data in each object.


	// Create a prototypical Person object
	function Person (name) {
	this.name = name;
	allPersons = []
	}

	function Teachers (firstName, lastName, gender) {
 		this.firstName = firstName;
 		this.lastName = lastName;
 		this.gender = gender;
 	}

 	function Students (firstName, lastName, gender) {
 		this.firstName = firstName;
 		this.lastName = lastName;
 		this.gender = gender;
 	}


	this.addTeachers = function () {
		for(let i=0; i=allPersons.length; i++){
			console.log(allPersons[i.name])
		}
	}


		//Teachers//
	var teachers1 = new Teachers ('Teachers Group')
 		var person1 = new Person ('Steve', 'Rogers', 'Male')
		var person2 = new Person ('Tony', 'Stark', 'Male')

		Person.prototype.teacher1 = function () {
			return ('Social Studies')
		}
		Person.prototype.teacher2 = function () {
			return ('Science')
		}
	


		// Students//
	var students1 = new Students ('Student Group')
		var person3 = new Person ('Vito', 'Corleone', 'Male')
		var person4 = new Person ('Michael', 'Corleone', 'Male')

		Person.prototype.student1 = function () {
			return ('English')
		
		Person.prototype.student2 = function () {
			return ('Science')

		// }

	// this.teachersName = function () {
	// 	return this.firstName + " " + this.lastName + " " + this.gender
 // 		}

	// this.studentsName = function () {
	// 	return this.firstName + " " + this.lastName + " " + this.gender
 // 		}
		
		

		

	// // 	function school.studentsName.teachersName () {
	// // 	return (this.firstName + " " + this.lastName + " " + this.gender)
	// // }



















