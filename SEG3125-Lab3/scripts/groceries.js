	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "Vegetable",
		price: 1.99
	},
	{
		name: "white bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		category: "Grain",
		price: 2.35
	},
	{
		name: "spagettini",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "Grain",
		price: 2.99
	},
	{
		name: "cabbage",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "Vegetable",
		price: 4.99
	},
	{
		name: "chocolate chip cookies",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		category: "Dessert",
		price: 4.99
	},
	{
		name: "rice",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "Grain",
		price: 4.99
	},
	{
		name: "spinach",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "Vegetable",
		price: 5.99
	},
	{
		name: "chicken breast",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category: "Protein",
		price: 8.99
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "Protein",
		price: 10.00
	},
	{
		name: "ribeye",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "Protein",
		price: 14.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {

	var org = document.getElementById("organic").checked;

	let product_names = [];
	let product_price = [];

	let temp = [];
	if(org == true){
		for (let i=0; i<prods.length; i+=1) {
			if (prods[i].organic == org){
				temp.push(prods[i]);
			}
		}	
	}else{
		temp = prods;
	}
	
	for (let i=0; i<temp.length; i+=1) {
		if ((restriction == "V/G") && ((temp[i].vegetarian == true) && (temp[i].glutenFree == true))){
			product_names.push(temp[i].name);
			product_price.push(temp[i].price);
		}
		if ((restriction == "Vegetarian") && (temp[i].vegetarian == true)){
			product_names.push(temp[i].name);
			product_price.push(temp[i].price);
		}
		else if ((restriction == "GlutenFree") && (temp[i].glutenFree == true)){
			product_names.push(temp[i].name);
			product_price.push(temp[i].price);
		}
		else if (restriction == "None"){
			product_names.push(temp[i].name);
			product_price.push(temp[i].price);
		}
	}
	return [product_names, product_price];
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function findCategory(p_name){
	var ret;
	for (let i=0; i<products.length; i+=1) {
		if (p_name == products[i].name){
			ret = products[i].category;
		}
	}
	return ret;
}
