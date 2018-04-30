// Code Challenge 1

// Create an object called Multiplier with two methods: 
// multiply and getCurrentValue. 
// multiply should initially return 
// the number supplied * 1 and from then on whatever the current value 
// is times the number supplied.  getCurrentValue should return the last 
// answer returned from multiply.

// function Multiplier() {
// num = 1

// this.multiply = function(x){
// num = x * num
// }
// this.getCurrentValue = function(){

// return num
//  }
// }

// var m = new Multiplier(4)





// Code Challenge #2

// Implement an object model that allows you to store strings that represent a Photo. 
// Your model should include an Album object that can contain many Photo objects 
// in its photos attribute. Each Album should allow you to add a new photo, 
// list all photos, and access a specific photo by the order it was added. 
// Each Photo should store the photo's file name and the location the photo was taken 
// in  m, as strings. Create instances of each object defined to prove that your object model works.


// function Album() {
//   this.allPhotos = [];
  
//   this.addPhoto = function(Pictures) {
//     this.allPhotos.push(Pictures)
//   }

//   this.listPhotos = function() {
//     for(let i=0; i<this.allPhotos.length;i++) {
//       console.log(this.allPhotos[i])
//     }
//   }

//   this.accessPhoto = function() {
//     console.log(this.allphotos[this.allPhotos.length -1])
//   }
// }


// function Pictures(name, location) {
//   this.name = name;
//   this.location = location;
// }

// var album1 = new Album ();

// var pic1 = new Pictures ('Ryan', 'San Francisco', 'Ball Park')
// var pic2 = new Pictures ('Dave', 'New York', 'Museum')
// var pic3 = new Pictures ('Nick', 'Philadelphia', 'Concert')





// album1.addPhoto(pic1)
// album1.addPhoto(pic2)
// album1.addPhoto(pic3)
// console.log(album1.accessPhoto())






// ***************************WRONG CODE for Code Challenge 2******************************

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
	
	function Person (firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age =  age;
	this.fullname = function () {
		return this.firstName + " " + this.lastName + " " + this.age
	}

}

	function Teacher (firstName, lastName, age, gender) {
 		Person.apply(this, arguments)
 		this.gender = gender;
 	}

 

	function Student (firstName, lastName, age, gender, grade) {
 		Person.apply (this, arguments);
 		this.grade = grade
 	}

 	// Teachers//
 		var person1 = new Teacher ('Steve', 'Rogers', 35, 'Male')
		var person2 = new Teacher ('Tony', 'Stark', 45, 'Male')

	function School () {
		this.teacherList = [];
		this.studentList = [];

		this.addTeachers = function (name) {
			this.teacherList.push(name)
		}

		this.addStudents = function (name) {
			this.studentList.push(name)

		}

		this.listTeachers = function () {
			for(let i=o; i < this.teacherList.length; i++) {
				console.log (this.teacherList[i])
			}

		}

		this.listStudents = function () {
			for(let i=0; i <this.studentList.length; i++) {
				console.log (this.studentList[i])
			}
		}
	}

	var t1 = new Teacher("Chris", "Foster", "Philadelphia", "Literature")
	var t2 = new Teacher("BJ", "Cantelupe", " San Diego", "Music")
	var s1 = new Student("Steve", "Ng", "NYC", 15, "A")
	var s2 = new Student("Adam", "Klein", "Philadelphia", 13, "B")
	
	var school1 = new School();
	
		school1.addTeachers(t2)
		school1.addStudents(s1)
		school1.addStudents(s2)

	console.log(school1.listStudents())


	

 
		



	// // ***********old code not being used**************

	

	
	// 	Person.prototype.teacher1 = function () {
	// 		return ('Social Studies')
	// 	}
	// 	Person.prototype.teacher2 = function () {
	// 		return ('Science')
	// 	}
	
	// teachers1.addTeacher(person1);
	// teachers2.addTeacher(person2);
	// Person.listTeachers();


	// students1.addStudent(person3);
	// // students1.addStudent(person4);
	// // Person.listStudents();
 	

 	
	// // function school.studentsName.teachersName () {
	// // // // 	return (this.firstName + " " + this.lastName + " " + this.gender)
	// // // // }



	// // Students//
	// this.addStudent = function(student) {
	// 	allPersons.push(student);
	// }

	// this.listStudents = function () {
	// 	for(let i=0; i=allPersons.length; i++){
	// 		console.log(allPersons[i.name])
	// 	}
	// }




	// // this.teachersName = function () {
	// // 	return this.firstName + " " + this.lastName + " " + this.gender
 // // 		}

	// // this.studentsName = function () {
	// // 	return this.firstName + " " + this.lastName + " " + this.gender
 // // 		}
		
		

		





















