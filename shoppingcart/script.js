const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;

for (let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function () {
        cartMessage += 1;
        
        
 }
}