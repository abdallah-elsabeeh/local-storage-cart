
function addToCart(product) {
    // Retrieve the cart object from local storage
    if (localStorage && localStorage.getItem('cart')) {
        var cart = JSON.parse(localStorage.getItem('cart'));
        // push the new json array
        cart.push(product);
        // add the new value to the local storage ( cart )
        localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        products = [product];
        localStorage.setItem('cart', JSON.stringify(products));
    }
}

function removeFromCart(itemId) {
    //check if the local storage is supported and the cart is already set
    if (localStorage && localStorage.getItem('cart')) {
        //getting items array from the local storae
        var cart = JSON.parse(localStorage.getItem('cart'));
    }
    // if the item within the array range remove
    if (itemId < cart.length) {
        // remove the product from the array
        cart.splice(itemId, 1);
        // add the new value to the local storage ( cart )
        localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        console.log('item is not in the array range');
    }
}

function emptyTheCart() {
    // clear all data from the local storage ( cart )
    localStorage.removeItem('cart');
    // here we make sure the cart is really empty by retriving the cart array
    // and make sure the length is equal to 0
    if (localStorage && localStorage.getItem('cart')) {
        var cart = JSON.parse(localStorage.getItem('cart'));
        if (cart.length > 0) {
            alert('sorry something went wrong');
        } else {
            //change the counters to 0

        }
    }
    //set your Counters to 0
    $('.number-of-items').html("0");
    $('.total-amount-cont').html("0");
}

function cartCheckOut() {

    //check if the local storage is supported and the cart is already set
    if (localStorage && localStorage.getItem('cart')) {
        //get the item array from the local storage
        var cart = JSON.parse(localStorage.getItem('cart'));
        //check if the cart items array length in not equal to 0 
        if (cart.length > 0) {
            //if the user is loggedIn
            // @todo: change the link
            if (isLoggedIn()) {
                $.ajax({
                    dataType: 'json',
                    url: link,
                    data: cart,
                    success: success
                });
            } else {
                //redirct to login page 
            }
        } else {
            alert('cart is empty');
        }
    } else {
        alert('cart is empty');
    }
}

function isLoggedIn() {
    //here we check if the user user is loggedIn or not 
    // @todo: change the link
    $.ajax({url: "link",
        success: function (result) {

            return result;

        }});

}

function updateCartCounters() {
    totalAmount = 0;
    itemsCount = 0;
    //check if the local storage is supported and the cart is already set
    if (localStorage && localStorage.getItem('cart')) {
        //get the item array from the local storage
        var cart = JSON.parse(localStorage.getItem('cart'));
        //count all itms throw the array
        for (i = 0; i < cart.length; i++) {
//            console.log(cart[i]);
            // @todo: sellect the itemCount index in the array
            itemsCount += cart[i][2];
            // @todo: sellect the itemCount and itemPrice index in the array
            //itemsCount*itemsPrice
            totalAmount += cart[i][2] * cart[i][1];
        }
        $('.number-of-items').html(totalAmount);
        $('.total-amount-cont').html(itemsCount);
        //
    }
}
