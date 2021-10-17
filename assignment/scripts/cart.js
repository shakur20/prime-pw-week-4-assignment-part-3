console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item) {
  console.log("in addItem", item);
  basket.push(item);
  return true;
}
console.log("in addItem", addItem("item"));

function listItems() {
  console.log("in listItems", basket);
  for (let i = 0; i < basket.length; i++) return listItems;
}
console.log("in listItems", listItems());
function empty() {
  basket.splice(0, basket.length);
  return true;
}
console.log(empty());
console.log(basket.length);
