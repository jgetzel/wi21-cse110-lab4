# CSE 110 Lab 4 - Part 1

```js
function discountedPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;
    
    for(var i = 0; i < prices.length; i++){
        var discountedPrice = prices[i] * ( 1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    
    console.log(i);
    console.log(discountedPrice);
    console.log(finalPrice);

    return discounted;
 }
 ```

1. What will happen at line 11 and why?
    - the length of `"prices"` will be logged into the console. This is because `"i"` is a global variable as it was declared as `"var"`. Because of this, we can access it outside of its normal scope. The for loop executes and increments `i` for each item inside of prices. The loop stops when `i` is no longer less than the length of prices, which means it stops when `i == prices.length`. Thus, The length of prices is printed.
2. What will happen at line 12 and why? 
   - We print out the discounted price of the last element to the console, unrounded. Similarly to the last problem, `discountedPrice` is a global variable that we can access outside of the scope. When it was last executed in the for loop, it kept the unrounded price of the last item in prices, and so that's what we print out.
3. What will happen at line 13 and why?
   - Here, the exact same thing happens as in question 2, but it's rounded. It doesn't matter that `finalPrice` was declared somewhere different, it is still global (var) and was last updated to be the discounted price of the last element in prices, rounded.
4. What will the function return if we call `discountPrices([100, 200, 300], .5)`? Give a brief explanation.
   - It will just be exactly what we expect, and the code will return the correct list of updated prices at a discount of 50%. In this case, the list `[50, 100, 150]`

```js
function discountPrices(prices, discount){
    const discounted = [];
    const finalPrice = 0;

    for(let i = 0; i < prices.length; i++){
        const discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    console.log(i);
    console.log(discountedPrice);
    console.log(finalPrice);
    
    return discounted;
}
```
5. What will happen at line 11 and why?
    - e
6. What will happen at line 12 and why?
    - a
7. What will happen at line 13 and why?
    - sport
8. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
    - sport