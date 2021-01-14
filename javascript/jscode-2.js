var books = [];
var groups = [];
var bookStore = [];
var bookByCategory = [];
var result="";
var prevoiusResult="";
var width = 150;
var height = 200;



/*Data for book stores locations*/

bookStore[0] = {
	storeName: "The Red Book",
	street: "77 Dupont St",
	city: "Toronto",
    province: "ON",
	postalCode: "M5R1V3"
}

bookStore[1] = {	
	storeName: "The book joint",
	street: "9 Irwin Ave",
	city: "Toronto",
    province: "ON",
	postalCode: "M4Y1L1"
}
	
bookStore[2] = {	
	storeName: "Book World",
	street: "593 Yonge St",
	city: "Toronto",
    province: "ON",
	postalCode: "M4Y1Z4"
}
	
bookStore[3] = {	
	storeName: "Flying Paper",
	street: "55 University Ave",
	city: "Toronto",
    province: "ON",
	postalCode: "M5J2H7"
}

bookStore[4] = {
	storeName: "Leaky Cualdron",
	street: "18 Gloucester ln",
	city: "Toronto",
    province: "ON",
	postalCode: "M4Y1L5"
}

bookStore[5] = {
	storeName: "Land of Rivendell",
	street: "25 St Nicholas St",
	city: "Toronto",
    province: "ON",
	postalCode: "M4Y1W5"
}

bookStore[6] = { 
	storeName: "Winterfell",
	street: "4 Wellesley St W",
	city: "Toronto",
    province: "ON",
	postalCode: "M4Y1E7"
}

bookStore[7] = {
	storeName: "Valinor",
	street: "11-13 Wellesley St W",
	city: "Toronto",
    province: "ON",
	postalCode: "M4Y1E9"
}

bookStore[8] = {
	storeName: "Kings Cross",
	street: "55 University Ave",
	city: "Toronto",
    province: "ON",
	postalCode: "M5J2H7"
}

bookStore[9] = {
	storeName: "The Citadel",
	street: "119 Wellington St W",
	city: "Toronto",
    province: "ON",
	postalCode: "M5J2H9"
}

/*End of data for bookstores locations*/

/*Data for books*/

books[0] = {
    
    parentCategory: "Pleasure",
    category: "Fiction",
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    description: "The Girl on the Train is a psychological thriller novel by British author Paula Hawkins.",
    rating: 4,
	locations: [bookStore[0], bookStore[2]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	
    cover: "<image src='cover/the-girl-on-the-train.jpg' width="+width+" height="+height+"></image>" 
}

books[1] = {
    
    parentCategory: "Pleasure",
    category: "Fiction",
    title: "1984: Nineteen Eighty-Four",
    author: "George Orwell",
    description: "Nineteen Eighty-Four, often published as 1984, is a dystopian novel by English author George Orwell published in 1949.",
    rating: 4,
	locations: [bookStore[1], bookStore[4], bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
    cover: "<image src='cover/1984.jpg' width="+width+" height="+height+"></image>" 
}

books[2] = {
    
    parentCategory: "Pleasure",
    category: "Fiction",
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    description: "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin. It was first published on August 1, 1996.", 
    rating: 5,
	locations: [bookStore[3], bookStore[5], bookStore[8], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/a-game-of-thrones.jpg' width="+width+" height="+height+"></image>"
}

books[3] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "Dune Messiah",
    author: "Frank Herbert",
    description: "Dune Messiah is a science fiction novel by Frank Herbert, the second in his Dune series of six novels. It was originally serialized in Galaxy magazine in 1969.", 
    rating: 3,
	locations: [bookStore[0], bookStore[1]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/dune-messiah.jpg' width="+width+" height="+height+"></image>"
	
}

books[4] = {
    
    parentCategory: "Pleasure",
    category: "Fiction",
    title: "Neuromancer",
    author: "William Gibson",
    description: "Neuromancer is a 1984 novel by William Gibson, a seminal work in the cyberpunk genre and the first winner of the science-fiction \"triple crown\"—the Nebula Award, the Philip K. Dick Award, and the Hugo Award", 
    rating: 3 ,
	locations: [bookStore[1]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/neuromancer.jpg' width="+width+" height="+height+"></image>"
	
}


books[5] = {
    
    parentCategory: "Pleasure",
    category: "Fiction",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West Egg on prosperous Long Island in the summer of 1922", 
    rating: 4,
	locations: [bookStore[6], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-great-gatsby.jpg' width="+width+" height="+height+"></image>"
	
}

books[6] = {
    
    parentCategory: "Pleasure",
    category: "Fiction",
    title: "The Book Thief",
    author: "Markus Zusak",
    description: "The Book Thief centers on the life of Liesel Meminger, a ten-year-old girl living in Germany during World War II. Liesel's experiences are narrated by Death, who describes both the beauty and destruction of life in this era.", 
    rating: 4,
	locations: [bookStore[7], bookStore[9], bookStore[5]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-book-thief.jpg' width="+width+" height="+height+"></image>"
	
}

books[7] = {
    
    parentCategory: "Pleasure",
    category: "Fiction",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "The story follows the main character, Elizabeth Bennet, as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency.", 
    rating: 3,
	locations: [bookStore[5], bookStore[6], bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/pride-and-prejudice.jpg' width="+width+" height="+height+"></image>"
	
}

books[8] = {
    
    parentCategory: "Pleasure",
    category: "Fiction",
    title: "The Sellout",
    author: "Paul Beatty",
    description: "The novel concerns a narrator, referred to only by his last name, \"Me\", who attempts to reintroduce slavery and segregation in his Los Angeles neighborhood. This attempt leads to a Supreme Court case.", 
    rating: 4,
	locations: [bookStore[9], bookStore[2]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-sell-out.jpg' width="+width+" height="+height+"></image>"
	
}

books[9] = {
    
    parentCategory: "Pleasure",
    category: "Fiction",
    title: "Small Great Things",
    author: "Jodi Picoult",
    description: "Jodi Picoult’s Small Great Things is about racism, choice, fear, and hope. The novel is based on the true story of a labor and delivery nurse who was prohibited from caring for a newborn because the father requested that no African-American nurses tend to his baby.", 
    rating: 5,
	locations: [bookStore[5], bookStore[7], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/small-great-things.jpg' width="+width+" height="+height+"></image>"
	
}

books[10] = {
    
    parentCategory: "Pleasure",
    category: "Fiction",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    description: "The novel presents a future American society where books are outlawed and \"firemen\" burn any that are found.", 
    rating: 2,
	locations: [bookStore[1], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/farenheit-451.jpg' width="+width+" height="+height+"></image>"
	
}

books[11] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "Ender's Game",
    author: "Orson Scott Card",
    description: "Set in Earth's future, the novel presents an imperiled mankind after two conflicts with the \"buggers\", an insectoid alien species. In preparation for an anticipated third invasion, children, including the novel's protagonist, Ender Wiggin, are trained from a very young age through increasingly difficult games including some in zero gravity, where Ender's tactical genius is revealed.", 
    rating: 2,
	locations: [bookStore[5], bookStore[2], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/enders-game.jpg' width="+width+" height="+height+"></image>"
	
}

books[12] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "The Time Machine",
    author: "H. G. Wells",
    description: "The book's protagonist is an English scientist and gentleman inventor living in Richmond, Surrey, in Victorian England, and identified by a narrator simply as the Time Traveller. The narrator recounts the Traveller's lecture to his weekly dinner guests that time is simply a fourth dimension, and his demonstration of a tabletop model machine for travelling through it.", 
    rating: 3,
	locations: [bookStore[0], bookStore[2], bookStore[3], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-time-machine.jpg' width="+width+" height="+height+"></image>"
	
}

books[13] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "The War of the Worlds",
    author: "H. G. Wells",
    description: "The narrative opens in an astronomical observatory at Ottershaw where explosions are seen on the surface of planet Mars, creating much interest in the scientific community. Later a \"meteor\" lands on Horsell Common, near the unnamed narrator's home in Woking, Surrey. He is among the first to discover that the object is an artificial cylinder that opens..", 
    rating: 4,
	locations: [bookStore[8], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-war-of-the-worlds.jpg' width="+width+" height="+height+"></image>"
	
}

books[14] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "The Martian",
    author: "Andy Weir",
    description: "In 2035, NASA astronaut Mark Watney, a botanist and mechanical engineer, has been left stranded on Mars after the crew of the Ares III mission were forced to evacuate their landing site in Acidalia Planitia due to an intense dust storm with high winds.", 
    rating: 5,
	locations: [bookStore[1], bookStore[2], bookStore[5], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-martian.jpg' width="+width+" height="+height+"></image>"
	
}

books[15] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "I, Robot",
    author: "Isaac Asimov",
    description: "I, Robot is a collection of nine science fiction short stories by Isaac Asimov. The stories originally appeared in the American magazines Super Science Stories and Astounding Science Fiction between 1940 and 1950 and were then compiled into a book for stand-alone publication by Gnome Press in 1950.", 
    rating: 4,
	locations: [bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/i-robot.jpg' width="+width+" height="+height+"></image>"
	
}

books[16] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "Contest",
    author: "Matthew Reilly",
    description: "The New York Public Library. A silent sanctuary of knowledge; a 100-year-old labyrinth of towering bookcases, narrow aisles and long marble hallways. For Doctor Stephen Swain and his daughter, Holly, it is the site of a nightmare. Because for one night this historic building is to be the venue for a contest.", 
    rating: 5,
	locations: [bookStore[7], bookStore[2], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/contest.jpg' width="+width+" height="+height+"></image>"
	
}

books[17] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "Foundation",
    author: "Isaac Asimov",
    description: "Set in the year 0 F.E. (\"Foundation Era\"), The Psychohistorians opens on Trantor, the capital of the 12,000-year-old Galactic Empire. Though the empire appears stable and powerful, it is slowly decaying in ways that parallel the decline of the Western Roman Empire.", 
    rating: 4,
	locations: [bookStore[0], bookStore[8], bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/foundation.jpg' width="+width+" height="+height+"></image>"
	
}

books[18] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "Snow Crash",
    author: "Neal Stephenson",
    description: "Hiro Protagonist is a hacker and pizza delivery driver for the mafia. He meets Y.T. (short for Yours Truly), a young skateboard Kourier (courier), during a failed attempt to make a delivery on time. Y.T. completes the delivery on his behalf and they strike up a partnership, gathering intel..", 
    rating: 3,
	locations: [bookStore[6], bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/snowcrash.jpg' width="+width+" height="+height+"></image>"
	
}

books[19] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "Ready Player One",
    author: "Ernest Cline",
    description: "In the year 2044, the world is gripped by an energy crisis and global warming, causing widespread social problems and economic stagnation. The primary escape for most people is a virtual universe called the OASIS, which is accessed with a visor and haptic gloves.", 
    rating: 4,
	locations: [bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/ready-player-one.jpg' width="+width+" height="+height+"></image>"
	
}

books[20] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "Red Mars",
    author: "Kim Stanley Robinson",
    description: "From the first pioneers who looked back at Earth and saw a small blue star, to the first colonists - hand-picked scientists with the skills necessary to create life from cold desert - 'Red Mars' is the story of a new genesis. ..", 
    rating: 3,
	locations: [bookStore[5], bookStore[6], bookStore[8], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/red-mars.jpg' width="+width+" height="+height+"></image>"
	
}

books[21] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "Anathem",
    author: "Neal Stephenson",
    description: "Anathem is set on and around the fictional planet Arbre. Thousands of years before the events in the novel, the planet's intellectuals entered concents (monastic communities) to protect their activities from the collapse of society.", 
    rating: 2,
	locations: [bookStore[4], bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/anathem.jpg' width="+width+" height="+height+"></image>"
	
}
books[22] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "Seveneves",
    author: "Neal Stephenson",
    description: "At some unspecified date in the near future, an unknown force causes the Moon to shatter into seven pieces. As the shattered remnants of the Moon begin to collide with one another, astronomer and science popularizer \"Doc\" Dubois Harris calculates that the number of collisions will increase exponentially. A large number of moon fragments will begin entering Earth's atmosphere, forming a \"white sky\" and blanketing the earth within two years with what he calls a \"Hard Rain\" of bolides; this will cause the atmosphere to heat to incandescence and oceans to boil away, and make Earth uninhabitable for thousands of years.", 
    rating: 5,
	locations: [bookStore[4], bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/seveneves.jpg' width="+width+" height="+height+"></image>"
	
}
books[23] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "Altered Carbon",
    author: "Richard K. Morgan",
    description: "In the novel's somewhat dystopian world, human personalities can be stored digitally and downloaded into new bodies, called sleeves. Most people have cortical stacks in their spinal columns that store their memories. If their body dies, their stack can be stored indefinitely. ", 
    rating: 4,
	locations: [bookStore[2], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/altered-carbon.jpg' width="+width+" height="+height+"></image>"
	
}
books[24] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "Pandora's Star",
    author: "Peter F. Hamilton",
    description: "In AD 2329, humanity has colonised over four hundred planets, all of them interlinked by wormholes. With Earth at its centre, the Intersolar Commonwealth now occupies a sphere of space approximately four hundred light years across.When an astronomer on the outermost world of Gralmond, observes a star 2000 light years distant - and then a neighbouring one - vanish, it is time for the Commonwealth to discover what happened to them.", 
    rating: 5,
	locations: [bookStore[0], bookStore[1]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/pandoras-star.jpg' width="+width+" height="+height+"></image>"
	
}
books[25] = {
    
    parentCategory: "Pleasure",
    category: "SCI-FI",
    title: "A Wrinkle in Time",
    author: "Madeleine L'Engle",
    description: "Thirteen-year-old Meg Murry's classmates and teachers see her as a troublesome and stubborn student. Her family knows that she is emotionally immature but also sees her capable of doing great things. The family includes her beautiful scientist mother, her absent scientist father, her athletic 10-year-old twin brothers, Sandy and Dennys; and her five-year-old brother Charles Wallace Murry, a child prodigy genius who can sometimes read Meg's mind.", 
    rating: 3,
	locations: [bookStore[5], bookStore[0], bookStore[7], bookStore[4]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/a-wrinkle-in-time.jpg' width="+width+" height="+height+"></image>"
	
}

books[26] = {
    
    parentCategory: "Pleasure",
    category: "Mystery",
    title: "Gone Girl",
    author: "Gillian Flynn",
    description: "On their wedding anniversary, Amy disappears without a trace, and over time, Nick becomes a suspect in her disappearance. Among other reasons, his lack of emotion about Amy's disappearance and the discovery that Amy was pregnant when she went missing lead both the police and the public to believe that Nick may have murdered his wife.", 
    rating: 5,
	locations: [bookStore[0], bookStore[2], bookStore[5], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/gone-girl.jpg' width="+width+" height="+height+"></image>"
	
}

books[27] = {
    
    parentCategory: "Pleasure",
    category: "Mystery",
    title: "The Moonstone",
    author: "Wilkie Collins",
    description: "Rachel Verinder, a young English woman, inherits a large Indian diamond on her eighteenth birthday. It is a legacy from her uncle, a corrupt British army officer who served in India. The diamond is of great religious significance as well as being extremely valuable, and three Hindu priests have dedicated their lives to recovering it.", 
    rating: 1,
	locations: [bookStore[7], bookStore[4]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-moonstone.jpg' width="+width+" height="+height+"></image>"
	
}

books[28] = {
    
    parentCategory: "Pleasure",
    category: "Mystery",
    title: "Rebecca",
    author: "Daphne du Maurier",
    description: "While working as the companion to a rich American woman on holiday in Monte Carlo, the unnamed narrator, a naïve young woman in her early 20s, becomes acquainted with a wealthy Englishman, Maximilian (Maxim) de Winter, a widower aged 42. After a fortnight of courtship, she agrees to marry him and, after the wedding and honeymoon, accompanies him to his mansion in Cornwall, the beautiful West Country estate Manderley.", 
    rating: 2,
	locations: [bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/rebecca.jpg' width="+width+" height="+height+"></image>"
	
}

books[29] = {
    
    parentCategory: "Pleasure",
    category: "Mystery",
    title: "Killing Floor",
    author: "Lee Child",
    description: "Jack Reacher gets off a Greyhound bus in the town of Margrave, Georgia, because he remembers his brother mentioning that a blues musician named Blind Blake died there. Much to his surprise, shortly after his arrival, he is arrested in a local diner for murder.", 
    rating: 5,
	locations: [bookStore[7], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/killing-floor.jpg' width="+width+" height="+height+"></image>"
	
}

books[30] = {
    
    parentCategory: "Pleasure",
    category: "Mystery",
    title: "The Westing Game",
    author: "Ellen Raskin",
    description: "Sixteen people, all tenants in the Sunset Towers, brought there by Barney Northrup to this apartment building on the shore of Lake Michigan, are named as heirs in the will of the self-made millionaire, Samuel W. Westing. Sunset Towers, despite the name, faces east, where the sun rises. The will is structured as a puzzle, with the heirs divided into eight pairs, and challenged to find the solution..", 
    rating: 4,
	locations: [bookStore[1], bookStore[5], bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-westing-game.jpg' width="+width+" height="+height+"></image>"
	
}

books[31] = {
    
    parentCategory: "Pleasure",
    category: "Mystery",
    title: "The Woman in White",
    author: "Wilkie Collins",
    description: "Walter Hartright, a young art teacher, encounters and gives directions to a mysterious and distressed woman dressed entirely in white, lost in London; he is later informed by policemen that she has escaped from an asylum.", 
    rating: 3,
	locations: [bookStore[1], bookStore[4], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-woman-in-white.jpg' width="+width+" height="+height+"></image>"
	
}

books[32] = {
    
    parentCategory: "Pleasure",
    category: "Mystery",
    title: "In the Woods",
    author: "Tana French",
    description: "Twenty two years prior to the novel's events, twelve year-old Adam and his two best friends failed to come home after playing in the familiar woods bordering their Irish housing estate. A search is organized and the Guard finds Adam shivering, clawing the bark of a nearby tree, with blood on his shoes and slash marks on his back.", 
    rating: 3,
	locations: [bookStore[5], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/in-the-woods.jpg' width="+width+" height="+height+"></image>"
	
}

books[33] = {
    
    parentCategory: "Pleasure",
    category: "Mystery",
    title: "Dark Places",
    author: "Gillian Flynn",
    description: "Libby Day, the novel's narrator and protagonist, is the sole survivor of a massacre in Kinnakee, Kansas, a fictional rural town. After witnessing the murders of her two sisters and mother, in what appears to be a Satanic cult ritual, she escapes through a window and later testifies in court against her teenage brother.", 
    rating: 2,
	locations: [bookStore[9], bookStore[7], bookStore[5]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/dark-places.jpg' width="+width+" height="+height+"></image>"
	
}

books[34] = {
    
    parentCategory: "Pleasure",
    category: "Mystery",
    title: "The Sign of the Four",
    author: "Arthur Conan Doyle",
    description: "The Sign of the Four has a complex plot involving service in East India Company, India, the Indian Rebellion of 1857, a stolen treasure, and a secret pact among four convicts (\"the Four\" of the title) and two corrupt prison guards.", 
    rating: 4,
	locations: [bookStore[0], bookStore[5]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-sign-of-four.jpg' width="+width+" height="+height+"></image>"
	
}

books[35] = {
    
    parentCategory: "Pleasure",
    category: "Mystery",
    title: "Angels & Demons",
    author: "Dan Brown",
    description: "CERN director Maximilian Kohler discovers one of the facility's physicists, Leonardo Vetra murdered, his chest branded with an ambigram of the word \"Illuminati.\" Kohler contacts Robert Langdon, an expert on the Illuminati, who determines that the ambigram is authentic.", 
    rating: 4,
	locations: [bookStore[2], bookStore[3], bookStore[4], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/angels-and-demons.jpg' width="+width+" height="+height+"></image>"
	
}

books[36] = {
    
    parentCategory: "Pleasure",
    category: "Mystery",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    description: "Louvre curator and Priory of Sion grand master Jacques Saunière is fatally shot one night at the museum by an albino Catholic monk named Silas, who is working on behalf of someone he knows only as the Teacher, who wishes to discover the location of the \"keystone,\" an item crucial to the search for the Holy Grail.", 
    rating: 3,
	locations: [bookStore[0], bookStore[2], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-da-vinci-code.jpg' width="+width+" height="+height+"></image>"
	
}

books[37] = {
    
    parentCategory: "Pleasure",
    category: "Sports",
    title: "The Boys of Summer",
    author: "Roger Kahn",
    description: "After recounting his childhood in Brooklyn and his life as a young reporter on the New York Herald Tribune, the author relates some history of the Brooklyn Dodgers up to their victory in the 1955 World Series.", 
    rating: 4,
	locations: [bookStore[5], bookStore[6], bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-boys-of-summer.jpg' width="+width+" height="+height+"></image>"
	
}

books[38] = {
    
    parentCategory: "Pleasure",
    category: "Sports",
    title: "Born to Run",
    author: "Christopher McDougall",
    description: "In Born to Run, McDougall tracks down members of the reclusive Tarahumara Native Mexican tribe in the Mexican Copper Canyons. After being repeatedly injured as a runner himself, McDougall marvels at the tribe's ability to run ultra distances (over 100 miles) at incredible speeds", 
    rating: 4,
	locations: [bookStore[2]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/born-to-run.jpg' width="+width+" height="+height+"></image>"
	
}

books[39] = {
    
    parentCategory: "Pleasure",
    category: "Sports",
    title: "Fever Pitch",
    author: "Nick Hornby",
    description: "It tells the story of the author's relationship with football and with Arsenal Football Club, in particular. It consists of several chapters in chronological order, from the time the author first became a football fan as a child until his early thirties.", 
    rating: 3,
	locations: [bookStore[0], bookStore[2], bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/fever-pitch.jpg' width="+width+" height="+height+"></image>"
	
}

books[40] = {
    
    parentCategory: "Pleasure",
    category: "Sports",
    title: "The Blind Side",
    author: "Michael Lewis",
    description: "The storyline features Michael Oher, the former left tackle for the Ole Miss football team, and later right tackle for the Baltimore Ravens.[3] Lewis follows Oher from his impoverished upbringing through his years at Briarcrest Christian School, his adoption by Sean (Michael Lewis's former schoolmate) and Leigh Anne Tuohy and on to his position as one of the most highly coveted prospects in college football.", 
    rating: 5,
	locations: [bookStore[8], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-blind-side.jpg' width="+width+" height="+height+"></image>"
	
}

books[41] = {
    
    parentCategory: "Pleasure",
    category: "Sports",
    title: "Into Thin Air",
    author: "Jon Krakauer",
    description: "In the book, Jon Krakauer described the events leading up to his eventual decision to participate in an Everest expedition in May 1996, despite having mostly given up mountain climbing years before.", 
    rating: 5,
	locations: [bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/into-thin-air.jpg' width="+width+" height="+height+"></image>"
	
}

books[42] = {
    
    parentCategory: "Pleasure",
    category: "Sports",
    title: "Gym Candy",
    author: "Carl Deuker",
    description: "Mick Johnson is determined not to make the same mistakes his father, a failed football hero, made. But after being tackled just short of the end zone in a big game, Mick begins using \"gym candy,\" or steroids. ...", 
    rating: 3,
	locations: [bookStore[8], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/gym-candy.jpg' width="+width+" height="+height+"></image>"
	
}

books[43] = {
    
    parentCategory: "Pleasure",
    category: "Sports",
    title: "Beyond a Boundary",
    author: "C. L. R. James",
    description: "James recounts the role cricket played in his family's history, and his meetings with such early West Indian players as George John, Wilton St Hill, the great batsman George Headley and the all-rounder Learie Constantine, but focuses on the importance of the game and its players to society, specifically to colonial era Trinidad.", 
    rating: 4,
	locations: [bookStore[3], bookStore[4], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/beyond-a-boundary.jpg' width="+width+" height="+height+"></image>"
	
}

books[44] = {
    
    parentCategory: "Pleasure",
    category: "Sports",
    title: "Whale Talk",
    author: "Chris Crutcher",
    description: "The biological son of a white mother and a half-African-American, half-Japanese father, The Tao Jones—known as T. J.—lives with his loving, adoptive white family in the nearly all-white town of Cutter, Washington. T. J.'s adoptive mother, Abby, is a child-abuse lawyer, and his adoptive father, John Paul Jones, is a community volunteer and guardian ad litem, who is still haunted from his youth, in which he accidentally killed a child in a driving incident after a one-night stand with the child's mother.", 
    rating: 3,
	locations: [bookStore[1], bookStore[3], bookStore[5], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/whale-talk.jpg' width="+width+" height="+height+"></image>"
	
}

books[45] = {
    
    parentCategory: "Pleasure",
    category: "Sports",
    title: "The Natural",
    author: "Bernard Malamud",
    description: "", 
    rating: 3,
	locations: [bookStore[2]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-natural.jpg' width="+width+" height="+height+"></image>"
	
}

books[46] = {
    
    parentCategory: "Pleasure",
    category: "Sports",
    title: "The Big Field",
    author: "Mike Lupica",
    description: "Playing shortstop is a way of life for Hutch - not only is his hero, Derek Jeter, a shortstop, but so was his father, a former local legend turned pro. Which is why having to play second base feels like demotion to second team. ..", 
    rating: 4,
	locations: [bookStore[7], bookStore[0]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-big-field.jpg' width="+width+" height="+height+"></image>"
	
}

books[47] = {
    
    parentCategory: "Pleasure",
    category: "Children",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    description: "This story of only 338 words focuses on a young boy named Max who, after dressing in his wolf costume, wreaks such havoc through his household that he is sent to bed without his supper.", 
    rating: 4,
	locations: [bookStore[2]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/where-the-wild-things-are.jpg' width="+width+" height="+height+"></image>"
	
}

books[48] = {
    
    parentCategory: "Pleasure",
    category: "Children",
    title: "The Giving Tree",
    author: "Shel Silverstein",
    description: "The book follows the lives of a female apple tree and a boy, who develop a relationship with one another. The tree is very \"giving\" and the boy evolves into a \"taking\" teen-ager, man, then elderly man. Despite the fact that the boy ages in the story, the tree addresses the boy as \"Boy\" his entire life.", 
    rating: 3,
	locations: [bookStore[1], bookStore[4], bookStore[6], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-giving-tree.jpg' width="+width+" height="+height+"></image>"
	
}
books[49] = {
    
    parentCategory: "Pleasure",
    category: "Children",
    title: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    description: "Dorothy is a young girl who lives with her Aunt Em and Uncle Henry and her little dog Toto on a Kansas farm. One day, Dorothy and Toto are caught up in a cyclone that deposits her farmhouse into Munchkin Country in the magical Land of Oz.", 
    rating: 4,
	locations: [bookStore[8], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-wonderful-wizard-of-oz.jpg' width="+width+" height="+height+"></image>"
	
}
books[50] = {
    
    parentCategory: "Pleasure",
    category: "Children",
    title: "The Polar Express",
    author: "Chris Van Allsburg",
    description: "A young boy, who used to adore Christmas, hears a train whistle roar. To his astonishment, he finds the train is waiting for him. He sees a conductor who then proceeds to look up at his window. He runs downstairs and goes outside. The conductor explains the train is called the Polar Express, and is journeying to the North Pole.", 
    rating: 5,
	locations: [bookStore[0], bookStore[2]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-polar-express.jpg' width="+width+" height="+height+"></image>"
	
}
books[51] = {
    
    parentCategory: "Pleasure",
    category: "Children",
    title: "The Little Prince",
    author: "Antoine de Saint-Exupery",
    description: "The Little Prince is a poetic tale, with watercolour illustrations by the author, in which a pilot stranded in the desert meets a young prince fallen to Earth from a tiny asteroid. The story is philosophical and includes social criticism, remarking on the strangeness of the adult world.", 
    rating: 5,
	locations: [bookStore[5], bookStore[6], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-little-prince.jpg' width="+width+" height="+height+"></image>"
	
}
books[52] = {
    
    parentCategory: "Pleasure",
    category: "Children",
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    description: "Gandalf tricks Bilbo into hosting a party for Thorin and his band of dwarves, who sing of reclaiming the Lonely Mountain and its vast treasure from the dragon Smaug. When the music ends, Gandalf unveils a map showing a secret door into the Mountain and proposes that the dumbfounded Bilbo serve as the expedition's \"burglar\". The dwarves ridicule the idea, but Bilbo, indignant, joins despite himself.", 
    rating: 5,
	locations: [bookStore[0], bookStore[2], bookStore[3], bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-hobbit.jpg' width="+width+" height="+height+"></image>"
	
}

books[53] = {
    
    parentCategory: "Pleasure",
    category: "Children",
    title: "Matilda",
    author: "Roald Dahl",
    description: "In a small Buckinghamshire village, Matilda is a six-year-old girl of unusual precocity, but she is often ill-treated or neglected by her parents. In retaliation, she resorts to pranks such as gluing her father's hat to his head, hiding a friend's parrot in the chimney to simulate a burglar or ghost, and secretly bleaching her father's hair.", 
    rating: 4,
	locations: [bookStore[0], bookStore[5]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/matilda.jpg' width="+width+" height="+height+"></image>"
	
}

books[54] = {
    
    parentCategory: "Pleasure",
    category: "Children",
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    description: "An old sailor, calling himself \"the captain\"—real name \"Billy\" Bones—comes to lodge at the Admiral Benbow Inn on the west English coast during the mid-1700s, paying the innkeeper's son, Jim Hawkins, a few pennies to keep a lookout for a one-legged \"seafaring man.\" ", 
    rating: 2,
	locations: [bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/treasure-island.jpg' width="+width+" height="+height+"></image>"
	
}

books[55] = {
    
    parentCategory: "Pleasure",
    category: "Children",
    title: "Peter Pan",
    author: "J. M. Barrie",
    description: "One night Peter is spotted and, while trying to escape, he loses his shadow. On returning to claim it, Peter wakes Mary's daughter, Wendy Darling. Wendy succeeds in re-attaching his shadow to him, and Peter learns that she knows lots of bedtime stories. He invites her to Neverland to be a mother to his gang, the Lost Boys, children who were lost in Kensington Gardens. Wendy agrees, and her brothers John and Michael go along.", 
    rating: 5,
	locations: [bookStore[5], bookStore[2]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/peter-pan.jpg' width="+width+" height="+height+"></image>"
	
}

books[56] = {
    
    parentCategory: "Pleasure",
    category: "Children",
    title: "The Cat in the Hat",
    author: "Dr. Seuss",
    description: "The Cat in the Hat is a children's book written and illustrated by Theodor Geisel under the pen name Dr. Seuss and first published in 1957. The story centers on a tall anthropomorphic cat, who wears a red and white-striped hat and a red bow tie.", 
    rating: 4,
	locations: [bookStore[3], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-cat-in-the-hat.jpg' width="+width+" height="+height+"></image>"
	
}

books[56] = {
    
    parentCategory: "Pleasure",
    category: "Children",
    title: "The Cat in the Hat",
    author: "Dr. Seuss",
    description: "The Cat in the Hat is a children's book written and illustrated by Theodor Geisel under the pen name Dr. Seuss and first published in 1957. The story centers on a tall anthropomorphic cat, who wears a red and white-striped hat and a red bow tie.", 
    rating: 4,
	locations: [bookStore[3], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-cat-in-the-hat.jpg' width="+width+" height="+height+"></image>"
	
}

books[57] = {
    
    parentCategory: "Research",
    category: "Math",
    title: "Euclids Elements",
    author: "Euclid",
    description: "Euclid's Elements is a mathematical and geometric treatise consisting of 13 books attributed to the ancient Greek mathematician Euclid in Alexandria, Ptolemaic Egypt circa 300 BC.", 
    rating: 4,
	locations: [bookStore[5], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/euclid-elements.jpg' width="+width+" height="+height+"></image>"
	
}

books[58] = {
    
    parentCategory: "Research",
    category: "Math",
    title: "The Princeton Companion to Mathematics",
    author: "Timothy Gowers",
    description: "This book provides an extensive overview of mathematics, and is noted for the high caliber of the contributors. The book was a 2011 winner of the Euler Book Prize of the Mathematical Association of America", 
    rating: 4,
	locations: [bookStore[1]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-princeton-companion.jpg' width="+width+" height="+height+"></image>"
	
}

books[59] = {
    
    parentCategory: "Research",
    category: "Math",
    title: "What Is Mathematics?",
    author: "Herbert Robbins",
    description: "It is an introduction to mathematics, intended both for the mathematics student and for the general public.", 
    rating: 4,
	locations: [bookStore[3], bookStore[6], bookStore[6], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/what-is-mathematics.jpg' width="+width+" height="+height+"></image>"
	
}

books[60] = {
    
    parentCategory: "Research",
    category: "Math",
    title: "How to Solve It",
    author: "George Polya",
    description: "How to Solve It is a small volume by mathematician George Polya describing methods of problem solving.", 
    rating: 4,
	locations: [bookStore[1], bookStore[2]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/how-to-solve-it.jpg' width="+width+" height="+height+"></image>"
	
}

books[61] = {
    
    parentCategory: "Research",
    category: "Math",
    title: "Concrete Mathematics",
    author: "Donald Knuth",
    description: "The book provides mathematical knowledge and skills for computer science, especially for the analysis of algorithms.", 
    rating: 4,
	locations: [bookStore[4], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/concrete-mathematics.jpg' width="+width+" height="+height+"></image>"
	
}

books[62] = {
    
    parentCategory: "Research",
    category: "Math",
    title: "The Math Book",
    author: "Clifford A. Pickover",
    description: "The book contains 250 one-page articles on milestones in the history of math. Each article is followed by a related full-page color image.", 
    rating: 4,
	locations: [bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-math-book.jpg' width="+width+" height="+height+"></image>"
	
}

books[63] = {
    
    parentCategory: "Research",
    category: "Math",
    title: "Visual Complex Analysis",
    author: "Tristan Needham",
    description: "This radical first course on complex analysis brings a beautiful and powerful subject to life by consistently using geometry (not calculation) as the means of explanation", 
    rating: 4,
	locations: [bookStore[2], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/visual-complex-analysis.jpg' width="+width+" height="+height+"></image>"
	
}

books[64] = {
    
    parentCategory: "Research",
    category: "Math",
    title: "The Music of the Primes",
    author: "Marcus du Sautoy",
    description: "The Music of the Primes is a 2003 book by Marcus du Sautoy, a professor in mathematics at the University of Oxford, on the history of prime number theory.", 
    rating: 4,
	locations: [bookStore[3], bookStore[6], bookStore[5]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-music-of-the-primes.jpg' width="+width+" height="+height+"></image>"
	
}

books[65] = {
    
    parentCategory: "Research",
    category: "Math",
    title: "Mathematics for the Nonmathematician",
    author: "Morris Kline",
    description: "Practical, scientific, philosophical, and artistic problems have caused men to investigate mathematics. But there is one other motive which is as strong as any of these — the search for beauty.", 
    rating: 4,
	locations: [bookStore[8], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/math-for-the-nonmath.jpg' width="+width+" height="+height+"></image>"
	
}

books[66] = {
    
    parentCategory: "Research",
    category: "Math",
    title: "The Art of Problem Solving",
    author: "Richard Rusczyk",
    description: "The Art of Problem Solving, Volume 1, is the classic problem solving textbook used by many successful MATHCOUNTS programs, and have been an important building block for students", 
    rating: 4,
	locations: [bookStore[3], bookStore[4]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-art-of-problem-solving.jpg' width="+width+" height="+height+"></image>"
	
}

books[67] = {
    
    parentCategory: "Research",
    category: "Math",
    title: "Calculus Made Easy",
    author: "Silvanus P. Thompson",
    description: "Calculus Made Easy is a book on infinitesimal calculus originally published in 1910 by Silvanus P. Thompson, considered a classic and elegant introduction to the subject", 
    rating: 4,
	locations: [bookStore[0], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/calculus-made-easy.jpg' width="+width+" height="+height+"></image>"
	
}

books[68] = {
    
    parentCategory: "Research",
    category: "Biology",
    title: "Molecular Biology of the Cell",
    author: "Alexander Johnson",
    description: "Molecular Biology of the Cell is a cellular and molecular biology textbook published by Garland Science and currently authored by Bruce Alberts, Alexander D. Johnson, Julian Lewis, David Morgan, Martin Raff, Keith Roberts and Peter Walter.", 
    rating: 3,
	locations: [bookStore[3], bookStore[6], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-cell.jpg' width="+width+" height="+height+"></image>"
	
}

books[69] = {
    
    parentCategory: "Research",
    category: "Biology",
    title: "Principles of Biology",
    author: "Nature Publishing",
    description: "Principles is composed of 200 modules, which can be customized by the instructor. The modules combine text, images, simulations, interactive exercises, self-tests, and formal tests. The book draws on the science journal Nature's archive of research papers.", 
    rating: 2,
	locations: [bookStore[1], bookStore[9]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/principles-of-biology.jpg' width="+width+" height="+height+"></image>"
	
}

books[70] = {
    
    parentCategory: "Research",
    category: "Biology",
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    description: "The Selfish Gene is a 1976 book on evolution by Richard Dawkins, in which Dawkins builds upon the principal theory of George C. Williams's Adaptation and Natural Selection.", 
    rating: 5,
	locations: [bookStore[4], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-selfish-gene.jpg' width="+width+" height="+height+"></image>"
	
}

books[71] = {
    
    parentCategory: "Research",
    category: "Biology",
    title: "Origin of Species",
    author: "Charles Darwin",
    description: "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology. ", 
    rating: 5,
	locations: [bookStore[3], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/origin-of-species.jpg' width="+width+" height="+height+"></image>"
	
}

books[72] = {
    
    parentCategory: "Research",
    category: "Biology",
    title: "Molecular Cell Biology",
    author: "David Baltimore",
    description: "Chemical and Molecular Foundations : Life Begins with Cells - Chemical Foundations - Protein Structure and Function - Basic Molecular Genetic Mechanisms - Cell Organization and Biochemistry : Biomembranes ...", 
    rating: 3,
	locations: [bookStore[3], bookStore[6], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/molecular-cell.jpg' width="+width+" height="+height+"></image>"
	
}

books[73] = {
    
    parentCategory: "Research",
    category: "Programming",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    description: " It is used as the textbook for algorithms courses at many universities and is commonly cited as a reference for algorithms in published papers", 
    rating: 4,
	locations: [bookStore[0], bookStore[5], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/intro-to-algorithms.jpg' width="+width+" height="+height+"></image>"
	
}

books[74] = {
    
    parentCategory: "Research",
    category: "Programming",
    title: "The C Programming Language",
    author: "Brian Kernighan",
    description: "The book was central to the development and popularization of the C programming language and is still widely read and used today.", 
    rating: 5,
	locations: [bookStore[0], bookStore[1]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-c-programming.jpg' width="+width+" height="+height+"></image>"
	
}

books[75] = {
    
    parentCategory: "Research",
    category: "Programming",
    title: "Code Complete",
    author: "Steve McConnell",
    description: "Code Complete is a software development book, written by Steve McConnell and published in 1993 by Microsoft Press, encouraging developers to continue past code-and-fix programming and the big design up front & waterfall models. ", 
    rating: 4,
	locations: [bookStore[0], bookStore[5], bookStore[6], bookStore[2]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/code-complete.jpg' width="+width+" height="+height+"></image>"
	
}

books[76] = {
    
    parentCategory: "Research",
    category: "Programming",
    title: "Effective Java",
    author: "Joshua Bloch",
    description: "Are you looking for a deeper understanding of the Java(tm) programming language so that you can write code that is clearer, more correct, more robust, and more reusable? Look no further! ", 
    rating: 5,
	locations: [bookStore[4], bookStore[3], bookStore[0]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/effective-java.jpg' width="+width+" height="+height+"></image>"
	
}

books[77] = {
    
    parentCategory: "Research",
    category: "Programming",
    title: "Learning Python",
    author: "David Ascher",
    description: "Learning Python is a tutorial book for the Python programming language, and is published by O'Reilly Media. ", 
    rating: 3,
	locations: [bookStore[5], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/learning-python.jpg' width="+width+" height="+height+"></image>"
	
}

books[78] = {
    
    parentCategory: "Research",
    category: "Chemistry",
    title: "The Chemistry Book",
    author: "Derek B. Lowe",
    description: "From atoms and fluorescent pigments to sulfa drug synthesis and buckyballs, this lush and authoritative chronology presents 250 milestones in the world of chemistry.", 
    rating: 4,
	locations: [bookStore[5], bookStore[7]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-chemistry-book.jpg' width='150' height='200'></image>"
	
}

books[79] = {
    
    parentCategory: "Research",
    category: "Chemistry",
    title: "Organic Chemistry",
    author: "Jonathan Clayden",
    description: "Inspiring and motivating students from the moment it published, Organic Chemistry has established itself in just one edition as the students' choice of organic chemistry text.", 
    rating: 5,
	locations: [bookStore[0], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/organic-chemistry.jpg' width='150' height='200'></image>"
	
}

books[80] = {
    
    parentCategory: "Research",
    category: "Chemistry",
    title: "Principles of Biochemistry",
    author: "Albert L. Lehninger",
    description: "The book has been designed for one- and two-semester courses for undergraduates majoring in biochemistry and related disciplines, as well as for graduate students who require a broad introduction to biochemistry.", 
    rating: 4,
	locations: [bookStore[5], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/principles-of-biochemistry.jpg' width='150' height='200'></image>"
	
}

books[81] = {
    
    parentCategory: "Research",
    category: "Chemistry",
    title: "The Golden Book of Chemistry Experiments",
    author: "Kurt Saxon",
    description: "The Golden Book of Chemistry Experiments was a children's chemistry book written in the 1960s by Robert Brent and illustrated by Harry Lazarus and published by Western Publishing in their Golden Books series.", 
    rating: 4,
	locations: [bookStore[1], bookStore[2]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-golden-book-of-chemistry.jpg' width='150' height='200'></image>"
	
}

books[82] = {
    
    parentCategory: "Research",
    category: "Chemistry",
    title: "Chemistry for Dummies",
    author: "John T. Moore",
    description: "With this book you will be able to understand everything from atoms to elements, combustion to cosmetics and compounds to chemical structures. The fundamentals of chemistry are explored in a fun, easy-to-understand manner.", 
    rating: 5,
	locations: [bookStore[5], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/chemistry-for-dummies.jpg' width='150' height='200'></image>"
	
}

books[83] = {
    
    parentCategory: "Research",
    category: "Art",
    title: "Picasso Sculpture",
    author: "Museum of Modern Art",
    description: "The exhibition catalogue immortalizes the group, which is unlikely to be brought together again in a single location.", 
    rating: 3,
	locations: [bookStore[5], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/picasso-sculpture.jpg' width='150' height='200'></image>"
	
}

books[84] = {
    
    parentCategory: "Research",
    category: "Art",
    title: "The White Road",
    author: "Edmund Waal",
    description: "The book itself is a carefully designed object, shot through with grayscale images and passages of empty space the way a curator might arrange a gallery.", 
    rating: 4,
	locations: [bookStore[5], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/the-white-road.jpg' width='150' height='200'></image>"
	
}

books[85] = {
    
    parentCategory: "Research",
    category: "Art",
    title: "Every Person in New York",
    author: "Jason Polan",
    description: "This artist book represents the first volume of Polan’s epic, Sisyphean quest to draw every person in the city, just as the title suggests.", 
    rating: 5,
	locations: [bookStore[5], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/every-person-in-new-york.jpg' width='150' height='200'></image>"
	
}

books[86] = {
    
    parentCategory: "Research",
    category: "Art",
    title: "Even Magazine",
    author: "Jason Fargo",
    description: "From Philip Tinari on Russian modernism’s influence in China to a dispatch from Greece, where the art market intersected with a failing economy, Even’s fall 2015 issue is as good a primer on art now as anything.", 
    rating: 4,
	locations: [bookStore[2], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/even.jpg' width='150' height='200'></image>"
	
}

books[87] = {
    
    parentCategory: "Research",
    category: "Art",
    title: "Hippie Modernism",
    author: "Walker Art Center",
    description: "Rather than a dry document, this book manages to feel breathtakingly alive and relevant. Maybe it’s the newsprint quality of the paper it’s printed on, meant to be used, not treasured.", 
    rating: 3,
	locations: [bookStore[5], bookStore[6]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: "<image src='cover/hippie-modernism.jpg' width='150' height='200'></image>"
	
}

books[88] = {
    
    parentCategory: "Research",
    category: "Art",
    title: "The Contemporaries",
    author: "Roger White",
    description: "Based on in-person interviews and his own experience as a writer and artist, Roger White’s expedition into contemporary art is required reading as an introduction to a range of artistic practitioners from painters to conceptual artists, both famous and intentionally obscure.", 
    rating: 3,
	locations: [bookStore[0], bookStore[8]],
	/*This method returns a string listing the locations where the book is available*/
	getLocation : function() { 
	var result= "";
	for(i=0; i<this.locations.length;i++){
		result+="<br><span id =\"storeName\">"+this.locations[i].storeName+"</span><br>";
		result+="<span id = \"storeStreet\">"+this.locations[i].street+"</span><br>";
		result+="<span id =\"storeCity\">"+this.locations[i].city+",</span><span id = \"storeProvince\"> "+this.locations[i].province+"</span><span id =\"storePostalCode\"> "+this.locations[i].postalCode+"</span><br>";
	}
	return result;
	},
	cover: ""
	
}



/*End of book data*/

/*Data for book stores locations*/

groups [0] = {
    
    name: "Book worms club",
    book: books[0],
    location: bookStore[1]
    
}

groups [1] = {
    
    name: "Good books",
    book: books[2],
    location: bookStore[8]
    
}

groups [2] = {
    
    name: "Reader addiction",
    book: books[8],
    location: bookStore[5]
    
}

groups [3] = {
    
    name: "Red pen",
    book: books[17],
    location: bookStore[4]
    
}

groups [4] = {
    
    name: "The white book",
    book: books[15],
    location: bookStore[1]
    
}

groups [5] = {
    
    name: "Good books",
    book: books[25],
    location: bookStore[4]
    
}

groups [6] = {
    
    name: "Study group Ryerson",
    book: books[75],
    location: bookStore[6]
    
}

groups [7] = {
    
    name: "Tolien Group",
    book: books[28],
    location: bookStore[8]
    
}

groups [8] = {
    
    name: "love reading",
    book: books[30],
    location: bookStore[1]
    
}

groups [9] = {
    
    name: "Good books",
    book: books[52],
    location: bookStore[4]
    
}

/*end of data for communities*/

/*Data for the communities*/

groups [1] = {
    
    name: "Good books",
    book: books[2],
    location: bookStore[8]
    
}

groups [2] = {
    
    name: "Reader addiction",
    book: books[8],
    location: bookStore[5]
    
}

groups [3] = {
    
    name: "Red pen",
    book: books[17],
    location: bookStore[4]
    
}

groups [4] = {
    
    name: "The white book",
    book: books[15],
    location: bookStore[1]
    
}

groups [5] = {
    
    name: "Good books",
    book: books[25],
    location: bookStore[4]
    
}

groups [6] = {
    
    name: "Stuy group Reyerson",
    book: books[75],
    location: bookStore[6]
    
}

groups [7] = {
    
    name: "Tolien Group",
    book: books[28],
    location: bookStore[8]
    
}

groups [8] = {
    
    name: "love reading",
    book: books[30],
    location: bookStore[1]
    
}

groups [9] = {
    
    name: "Good books",
    book: books[52],
    location: bookStore[4]
    
}

/*end of data for communities*/


//******* FUNCTIONS **********//

//function to search based on postal code

function comSearch(){
    var form, postalCode, isTrue, objPostalCode;
    var upperPostalCode, upperObjPostalCode;
    result="<br>";
    form = document.getElementById("form-com");
    postalCode = form.elements["postal"].value;
    isTrue = false;
    postalCode = postalCode.substring(0,4);
    
    //postal code entered by user converted to upper case
    upperPostalCode = postalCode.toUpperCase();
    
    /*looping through the group object array*/
    for(i=0; i<groups.length; i++){
       objPostalCode = groups[i].location.postalCode.substring(0,4);
       //postal code in the object converted to upper case
       upperObjPostalCode = objPostalCode.toUpperCase();
        if(upperPostalCode === upperObjPostalCode){
            isTrue = true;            
            result+= "Group Name: "+groups[i].name+"<br>Current book: "+groups[i].book.title+"<br>Location: "+groups[i].location.street+
    "<br>"+groups[i].location.city+"<br>"+groups[i].location.province+"<br>"+
    groups[i].location.postalCode +"<br><button onclick=\"joinGroup("+i+")\" id=\"submit-join\">Join</button><br><br>";
        }
    }
    //isTrue evaluates if there is a result
    if(!isTrue){
        
        result = "No groups found near your area ";
    }
    document.getElementById("com-result").innerHTML = result;
    prevContent = result;
}
//end of current function


/*Function called when joining a group */
function joinGroup(index){
   
    
    
    
    result = "";
    result+="Group name: "+groups[index].name+"<br>";
    result+="Current book: "+groups[index].book.title+"<br><br>";
    result+="<form id = \"join-form\">Name: <input type=\"text\" name=\"firstname\"><br>";
    result+="Email: <input type=\"text\" name=\"email\"></form> <br>";
    result+="<button onclick=\"returnGroup()\" id=\"submit-join\">Join</button><button onclick=\"cancelJoin()\" id=\"cancel-btn\">Cancel</button>";
    document.getElementById("com-result").innerHTML = result;
    
}

/*function called when canceling the join a group*/
function cancelJoin(){
    
    document.getElementById("com-result").innerHTML = prevContent;
}

/*function called when joining a group, returns to prevoius content*/
function returnGroup(){
    var form, name, email;
    form = document.getElementById("join-form");
    name = form.elements["firstname"].value;
    email = form.elements["email"].value;
    
    if(name != '' && email != ''){
        alert("Your information have been sent to the group moderator");
    document.getElementById("com-result").innerHTML = prevContent;
    } else {
        
        document.getElementById("com-result").innerHTML = result +"<br><br>Please Enter your Name and Email";
    }
}//end of current function



/*Function to create a group*/

function addGroup(){
    prevContent = result;
    result ="";
    result+="<form id = \"createGroup\">Group Name:<br> <input type=\"text\" name=\"groupName\"><br>";
    result+="Name (Moderator): <br><input type=\"text\" name=\"name\"> <br>";
    result+="Email(Moderator):<br> <input type=\"text\" name=\"email\"> <br>";
    result+="Book to discuss: <br><input type=\"text\" name=\"book\"> <br>";
    result+="Street:<br> <input type=\"text\" name=\"street\"> <br>";
    result+="City: <br><input type=\"text\" name=\"city\"> <br>";
    result+="Province:<br> <input type=\"text\" name=\"province\"> <br>";
    result+="Postal Code:<br> <input type=\"text\" name=\"postalCode\"></form> <br>";
    result+="<button onclick=\"groupAdded()\" id=\"submit-join\">Create</button><button onclick=\"cancelJoin()\" id=\"cancel-btn\">Cancel</button>";
    document.getElementById("com-result").innerHTML = result;
    
    
}
/*Function that checks that all fields are filled*/
function groupAdded(){
    var form, groupName, name, book, email, street, city, province, postalCode;
    
    form = document.getElementById("createGroup");
    groupName = form.elements["groupName"].value;
    name = form.elements["name"].value;
    email = form.elements["email"].value;
    book = form.elements["book"].value;
    street = form.elements["street"].value;
    city = form.elements["city"].value;
    province = form.elements["province"].value;
    postalCode = form.elements["postalCode"].value;
    
    if(name != '' && email != '' && groupName != '' && book != '' && street != '' && city != '' && province != '' && postalCode != ''){
        alert("Your reading group has been added");
    document.getElementById("com-result").innerHTML = prevContent;
    } else {
        
        document.getElementById("com-result").innerHTML = result +"<br><br>Please enter your data";
    }
}//end of current function




/*function to search groups by category */
function groupSearch(x){
	var searchTerm = x;
	var result="";
    var searchTermUpper, categoryUpper, parentCategoryUpper;
    var noResult = true;
    
    searchTermUpper = searchTerm.toUpperCase();
    

	/*foor loop is fine*/
    result="";
	for (i=0; i<groups.length; i++){
    categoryUpper = groups[i].book.category.toUpperCase();
    parentCategoryUpper = groups[i].book.parentCategory.toUpperCase();
		/*prevoius: searchTerm === groups[i].category*/
		if (searchTermUpper.includes(categoryUpper) || searchTermUpper.includes(parentCategoryUpper)){

			result+= groups[i].name+"<br>"+groups[i].book.title+"<br>"+groups[i].location.street+
    "<br>"+groups[i].location.city+"<br>"+groups[i].location.province+"<br>"+
    groups[i].location.postalCode +"<br><button onclick=\"joinGroup("+i+")\" id=\"submit-join\">Join</button><br><br>";
            noResult = false;
		}
		
	}
    if(noResult){
        result = "No Groups for this book";
        
    }
document.getElementById("com-result").innerHTML = result;

}//end of current


//function to search for selection of books based on category//

function coverSearch(id){
    
    
    
    var searchTerm = document.getElementById(id).getAttribute("name");
    var result1=""; //= "<a href=\"#\" id = \"picture\" onclick =\"titleSearch('"+books[0].title+"')\">"+books[0].cover+"</a>";
    
    groupSearch(searchTerm);

    for(i=0; i<books.length; i++){
       
        if(searchTerm === books[i].category || searchTerm === books[i].parentCategory){
            
            result1 = result1 + "<a href=\"#\" id = \"picture\" onclick =\"titleSearch('"+books[i].title+"')\">"+books[i].cover+"</a>"
        
        }
        document.getElementById("results_img").innerHTML = result1;
        
    }
}//end of current function






//function to search for a book upon clicking on one of the books listed by category
function titleSearch(x){
    
    var result2, result3, result4, result5, result6, result7;
    var bookContent="";
    var searchTerm = x;
    
    for(i=0; i<books.length; i++){
        
        if(searchTerm === books[i].title){   


       
                result2 = books[i].title;
                result3 = books[i].author;
                result4 = books[i].cover;
                result5 = books[i].rating;
                result6 = books[i].description;
                for(x=0; x<books[i].locations.length;x++){
                bookContent+="<br>"+books[i].locations[x].storeName+"<br>"+books[i].locations[x].street+"<br>"+books[i].locations[x].city+"<br>"+books[i].locations[x].province+" "+books[i].locations[x].postalCode+"<br>";
            }
                result7 = bookContent;
                
                //diplay results
                document.getElementById("title").innerHTML = result2;
                document.getElementById("author").innerHTML = result3;
                document.getElementById("book_img").innerHTML = result4;
                document.getElementById("ratings").innerHTML = "Rating: "+result5+" out of 5 stars";
                document.getElementById("description").innerHTML = result6;

                    if(result7 === null){
                        document.getElementById("locations").innerHTML = "Sorry this book is not available";
                    }
                    else{
                        document.getElementById("locations").innerHTML = result7;
                    }
    
        }
    }
    $(document).ready(function(){
        $("#center").hide();
        $("#book_page").show();
        $("#center_left").show();
        $("#center_right").show();
        $("#description").show();
        $("#desc_heading").show();
        $("#results_img").hide();
        $("#noresult").hide();
        $("#about_page").hide();
        $("#contact_page").hide();

    });

}//end of current function



//function to search from the searchbar
function searchBar(){
    
    var form, str, str2, trueval, searchfor;
    var result1="";

    searchfor = document.getElementById("searchbar").value;
    
    
    if(searchfor != ""){
    	
    searchTerm = searchfor.toLowerCase();
    result18 = 'Sorry no results found';
       
    

	    for(i=0; i<books.length; i++){
	       
	        str=books[i].title.toLowerCase();
	        str2=books[i].author.toLowerCase();
	        trueval = str.includes(searchTerm);


	        if(str.includes(searchTerm) || str2.includes(searchTerm))
	        {

	        	result1 = result1 + "<a href=\"#\" id = \"picture\" onclick =\"titleSearch('"+books[i].title+"')\">"+books[i].cover+"</a>";
	            
	        }
	        
	        
	    }
	      
	     } 
       if(result1 == ""){
       
            document.getElementById("results_img").innerHTML = result18;       

           
       	    $("#noresult").hide();
       	    $("#center").hide();
            $("#results_img").show();
            $("#center_left").hide();
            $("#center_right").hide();
            $("#desc_heading").hide();
            $("#about_page").hide();
            $("#contact_page").hide();
         	$("#description").hide(); 

       }else {

	     document.getElementById("results_img").innerHTML = result1;       


	    //hide other pages(divs) upon search results display
            $("#center").hide();
            $("#results_img").show();
            $("#center_left").hide();
            $("#center_right").hide();
            $("#desc_heading").hide();
            $("#about_page").hide();
            $("#contact_page").hide();
            $("#noresult").hide();
       		$("#description").hide();  



        
    } 
      
     
    
}//end of current function

 


//***** JQUERY TO SHOW/HIDE PAGES ******//

$(document).ready(function(){
        $("#research").on("click", function(){
            $("#options_research").toggle();
            $("#options_main").toggle();
            $("#book_page").hide();
            $("#center").hide();
            $("#results_img").show();
            $("#about_page").hide();
            $("#contact_page").hide();
            

        });
    });


$(document).ready(function(){
    $("#pleasure").on("click", function(){
        $("#options_pleasure").toggle();
        $("#options_main").toggle();
        $("#book_page").hide();
        $("#center").hide();
        $("#results_img").show();
        $("#about_page").hide();
        $("#contact_page").hide();
        

    });
});
    

$(document).ready(function(){
    $("#home").on("click", function(){
        $("#options_pleasure").hide();
        $("#options_research").hide();
        $("#options_main").show();
        $("#book_page").hide();
        $("#center_page").show();
        $("#center").show();
        $("#center_left").hide();
        $("#center_right").hide();
        $("#desc_heading").hide();
        $("#results_img").hide();
        $("#about_page").hide();
        $("#contact_page").hide();

        
    });
});


$(document).ready(function(){
    $("#about").on("click", function(){
        $("#book_page").hide();
        $("#center_page").hide();
        $("#center").hide();
        $("#center_left").hide();
        $("#center_right").hide();
        $("#desc_heading").hide();
        $("#results_img").hide();
        $("#about_page").show();
        $("#contact_page").hide();

        
    });
});


$(document).ready(function(){
    $("#contact").on("click", function(){
        $("#book_page").hide();
        $("#center_page").hide();
        $("#center").hide();
        $("#center_left").hide();
        $("#center_right").hide();
        $("#desc_heading").hide();
        $("#results_img").hide();
        $("#contact_page").show();
        $("#about_page").hide();

        
    });
});

$(document).ready(function(){
        $(".btn_pleasure").on("click", function(){
        $("#center").hide();
        $("#results_img").show();
        $("#book_page").hide();
        $("#center").hide();
        $("#about_page").hide();
        $("#contact_page").hide();
            

    });
});


$(document).ready(function(){
        $(".btn_research").on("click", function(){
        $("#center").hide();
        $("#results_img").show();
        $("#book_page").hide();
        $("#center").hide();
        $("#about_page").hide();
        $("#contact_page").hide();

    });
});


$(document).ready(function(){
        $("#picture").on("click", function(){
            $("#center").hide();
            $("#book_page").show();
            $("#title").show();
            $("#about_page").hide();
            $("#contact_page").hide();
            

        });
    });

