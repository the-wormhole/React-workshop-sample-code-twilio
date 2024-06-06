// function Car(type, fuelType){
// 	this.type = type;
// 	this.fuelType = fuelType;
// }

// function setBrand(brand){
// 	Car.call(this, "convertible", "petrol");
// 	this.brand = brand;
// 	console.log(`Car details = `, this);
// }

// function definePrice(price){
// 	Car.call(this, "convertible", "diesel");
// 	this.price = price;
// 	console.log(`Car details = `, this);
// }

// const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);

// const newcar = new Car("a","b");
// console.log(newcar);

// console.log(type,fuelType);

// function Car(...args){
// 	this.type = args[0];
// 	this.fuelType = args[1];
// }

// function setBrand(brand){
// 	Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
// 	this.brand = brand;
// 	console.log(`Car details = `, this);
// }

// function definePrice(price){
// 	Car.apply(this, ["convertible", "diesel"]); //Syntax with array object construction
// 	this.price = price;
// 	console.log(`Car details = `, this);
// }

// //

// const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);


var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'
