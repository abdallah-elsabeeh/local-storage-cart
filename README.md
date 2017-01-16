## local storage cart
simple cart using HTML5 local storage
## Installation
you can call this file and pass the cart items as mentioned in the Usage section also you can pass any type of json objects in any sorting type but you have to modify update cart function 
the currnet sorting is {ID,PRICE,QUANTITY,TYPE}
## Usage
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
## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Contact
[![alt text][1.1]][1]
[![alt text][2.1]][2]
[![alt text][3.1]][3]
[![alt text][4.1]][4]


[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)
[2.1]: http://i.imgur.com/P3YfQoD.png (facebook icon with padding)
[3.1]: http://i.imgur.com/4DfAevU.png (linkedin icon with padding)
[4.1]: http://i.imgur.com/0o48UoR.png (github icon with padding)


[1]: https://twitter.com/abdallah_awwad
[2]: https://www.facebook.com/zaxx44a7
[3]: https://www.linkedin.com/in/abdallahelsabeeh
[4]: https://github.com/zaxx44a7


## License

* [Creative Commons ](https://creativecommons.org/licenses/)
