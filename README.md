# local-storage-cart
simple cart using HTML5 local storage
you can call this file and pass the cart items like the following you can pass any type of json objects and in any sort you like but you have to modify update cart function 

 var product = {};
 
    // here you have to get the id from the jquery identifier
    product.id = $(this).closest('article').attr('id');
    // here you have to get the price from the jquery identifier
    product.price = parseInt($(this).parent().parent().parent().find(".price:first").text());
    // here you have to get the price from the jquery identifier
    product.quantity = quantity;
    // here you have to get the product Type
    product.type = productType;
    //call the add to cart function
    addToCart(product);
