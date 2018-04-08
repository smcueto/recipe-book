function Recipe(title, ingredientList, instructions){
  this.title = title;
  this.ingredientList = ingredientList;
  this.instructions = instructions;
  // this way, you get a copy of this functiion
  //in every instance of Recipe
  // this.printIngredientList = function (){
  // console.log(this.ingredientList);
  // }
}
//this way, there is only ever one copy of the fucntion
//if you are going to use the function multiple
Recipe.prototype.printIngredientList = function() {
  console.log(this.ingredientList);
};
//this overrrides the version in the protoypes
var grilledCheese = new Recipe('Grilled Cheese', ['bread', 'cheese', 'butter'], 'Put butter in pan, put cheese between two slices of bread, put bread on pan to grill')
//good old fashion js object.Only useful if you only want one copy of this object
var grilledCheese2 = {
  title: 'Grilled Cheese',
  printIngredientList: function() {
    console.log('stuff');
  }
}

console.log(grilledCheese);
grilledCheese2.printIngredientList();
