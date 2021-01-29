# CSE 110 Lab 4 - Part 1

## Variables and Scoping
```js
function discountPrices(prices, discount) {
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
    - the length of `"prices"` will be logged into the console. This is because `"i"` is a global variable as it was declared as `"var"`. Because of this, we can access it outside of its normal scope.
2. What will happen at line 12 and why? 
   - We print out the discounted price of the last element to the console, unrounded. Similarly to the last problem, `discountedPrice` is a global variable that we can access outside of the scope as it was defined with `var`.
3. What will happen at line 13 and why?
   - Here, the exact same thing happens as in question 2, but it's rounded. It doesn't matter that `finalPrice` was declared somewhere different, it is still global (var) and was last updated to be the discounted price of the last element in prices, rounded.
4. What will the function return if we call `discountPrices([100, 200, 300], .5)`? Give a brief explanation.
   - It will just be exactly what we expect, and the code will return the correct list of updated prices at a discount of 50%. In this case, the list `[50, 100, 150]`. This is because `discounted` is in the scope of the `return` statement.

```js
function discountPrices(prices, discount){
    let discounted = [];
    let finalPrice = 0;

    for(let i = 0; i < prices.length; i++){
        let discountedPrice = prices[i] * (1 - discount);
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
    - You will get an error, because of you defined `i` using `let`. This means that that the `i` in the for loop is no longer in the scope of your `console.log()` statement. Thus, you are trying to access a variable you cannot see.
6. What will happen at line 12 and why?
    - Similarly, `discountedPrice` was defined with `let` from within the for loop, so it is not within the scope of the log statement. Thus, an error will be thrown here too.
7. What will happen at line 13 and why?
    - `finalPrice` will be okay because it was defined with `let`, but from outside of the for loop. For this reason, we can still access it, and a value (the final price of the last item in prices) will be printed.
8. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
    - Assuming we ignore the errors from 5 - 6, It will return the correct values. This is because of the fact that `discounted` is within the scope of the return statement, since even though we defined it with let, it is within the same level of brackets. Thus, no errors here.

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
9. What will happen at line 11 and why?
    - `i` is still not defined within the scope of the log statement, as it's in the for loop and created with `let`, so we throw an error.
10. What will happen at line 12 and why?
    - `discountedPrice` is declared with `const` int the for loop. Similar to `let`, you can't access it out of the scope in which it was defined. Because of this, since the log statement is not in the same scope as the for loop, we can't access `discountedPrice` and we throw an error.
11. What will happen at line 13 and why?
    - `finalPrice` is declared within the scope of the log statements, and since `const` acts similarly to `let` in this way, we can safely print out `finalPrice`.
12. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
    - This is a strange question considering all the errors before this that I'm supposed to ignore, but I think that what you're really asking is if the `discounted` variable is within the scope of the return statement, and it is. This is because they are within the same brackets, and `const`'s rules for scope are similar `let`'s.
    - If you're really asking, and we still ignore errors from the log statements, then the code will break at line 7 when we try to assign to `finalPrice`, a const variable.

---

## Data Types

13. Given the above Object, write the notation for: (These should be in your part1.md)
- Accessing the value of the name property in the student object
  - `student.name`
- Accessing the value of the Grad Year property in the student object
  - `student["Grad Year"]`
- Calling the function for the greeting property in the student object
  - `student.greeting();`
- Accessing the name property of the object in the Favorite Teacher property in student
  - `student["Favorite Teacher"].name`
- Access the first index in the array of the courseLoad property of the student object
  - `student.courseLoad[0]`

---

## Basic Operators & Type Conversion

14. Arithmetic

- ‘3’ + 2
  - `32` is the result. This is because + acts as the concatenation operator here, since the first operand was a char. Thus, this output is a string.
- ‘3’ - 2
  - `1` is the result. This is because the - operator converts the first operand to a number, and gives the result of 3 - 2 (as numbers).
- 3 + null
  - Here, the answer is `3`. This is because this time, the + operator is the addition operator (as there are no strings), and when null is converted to a number, it has the numerical value of 0. Thus, 3 + 0 = 3, and that's what's returned.
- ‘3’ + null
  - Here, the answer is `3null`. This time, the + operator is the concatenation operator again, since the left hand side is a string. Thus, we concatenate "3" with the converted string value of null, which is "null", giving us `3null`.
- true + 3
  - `4` is the result. With no strings, the + operator acts as an addition operator, and converts true to it's numerical value of 1, and adds that with 3. Thus, we get `4` (as a number).
- false + null
  - Here, we get `0`. This is because the + operator acts as an addition operator again (seeing no strings), and so we convert both "false" and "null" to their numerical values, which are both 0. 0 + 0 = `0`, so we return that as our answer.
- “3” + undefined
  - `3undefined`. Again, since there is a string, + is just string concatenation. Thus, it converts undefined to it's string value of "undefined", and then performs "3" + "undefined" which gives `3undefined`.
- “3” - undefined
  - Here, the answer is `NaN`. When the - operator converts both sides to numbers for subtraction, the left side "3" becomes 3, and the right side undefined becomes `NaN`. When we try to perform 3 - `NaN`, we get `NaN`. Thus, that's our answer.