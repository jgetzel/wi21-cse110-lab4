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
  - `32` is the result. This is because + acts as the concatenation operator here, since the first operand was a string. Thus, this output is a string.
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

15. Comparison
- ‘2’ > 1
  - `true`. This is because the string "2" becomes the number 2.
- ‘2’ < ‘12’
  - `false`. These two strings are compared letter by letter (lexicographical order). Because the first characters are compared first, "2" and "1", and one comes before 2 lexicographically, it shows "2" > "12", and thus the statement returns false.
- 2 == ‘2’
  - `true`. This is because the == statement converts the string to a number before comparing, and so "2" becomes 2. Since 2 == 2, we return true.
- 2 === ‘2’
  - `false`. The === sign does not perform the conversion that == does. Thus, if the two types are different it returns false. In this case they are, so we get this.
- true == 2
  - `false`. The numerical value of true is 1, so when we do this conversion, we see that 1 == 2 is false, thus we return that.
- true === Boolean(2)
  - `true`. Finally, there is no conversion to be done here. Boolean(number) is true if number is any number other than 0, without conversion. Thus, we get that true === true, is true.

16.  Explain the difference between the == and === operators.
- == Checks if the values are the same after converting them to the same type, wheras === will return false if they are of different types, and will not attempt conversion.

---

## Conditionals

17. From the code snippet below, explain what gets printed and why.

```js
if(2 == true){
    console.log('Hello');
} else if (2){
    console.log('How are you?');
} else{
    console.log('Goodbye');
}
```

In this code, `How are you?` will be printed. This is because the first statement will evaluate to false, due to "true" holding the numerical value of 1 when converted. The second statement, 2, evaluates to "true", since anything other than 0, NaN, undefined, etc, gets evaluated to true. Thus, we print `How are you?` and skip the else statement.

---

## Loops

18. Given the below Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  
    - [(This should be in a JS file part1-question18.js)](/part1/part1-question18.js)

```js
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}
```
---

## Functions

19. If the function below is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. 

```js
function modifyArray(array, callback){
    const newArr = [];
    for (let i = 0; i < array.length; i++){
        newArr.push(callback(array[i], function(x) {
            return x * 2;
        }));
    }
    return newArr;
}

function doSomething(num, callback) {
    return callback(nums + 2);
}
```

I got `[6, 8, 10]`. Let's start by looking at modifyArray() when we input [1,2,3], and doSomething. The length of `array` is 3, and callback() just means doSomething(). So, what we do is, we set the first 3 indices of newArr to whatever happens when we call doSomething(array[i], function(x) {return x*2;}).

The first thing that we do is we call doSomething() on array[0], which is 1. This gives us:
- return callback(1 + 2)
- ---> return function(3){ return 3 * 2;}
- return 6

Thus the first element in newArr is 6.

Simply repeat the process for 2 and 3. We can see that we can simplify 

```doSomething(n,function(x){return x*2;})``` to mean (n + 2) * 2. It's currently just very strange logically.

If we apply this logic, we get that doSomething(2, ...) = 8, and doSomething(3, ...) = 10.

Thus, newArr = `[6, 8, 10]`, and that's what we return.

---

## setInterval(), setTimeout(), clearTimeout()

20. This program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  [(This should be a JS file - part1-question20.js)](part1-question20.js)

```js
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time)
```

21. What is the output of this code?

```js
function printNums(){
    console.log(1);
    setTimeout(function() { console.log(2);}, 1000);
    setTimeout(function() { console.log(3);}, 0);
    console.log(4);
}

printNums();
```
The numbers printed out are in the order ***1, 4, 3, 2***. Why is this the case? Well, 1 is the first character to be printed, with no setTimeout function. The next line to execute prints 2, but with a delay of one second, so it's scheduled now. After that, the next line to execute prints 3, but with a setTimeout function and delay of 0. What does this mean? Well this means that it will be "next in queue" to execute, once there is no code running and the queue is "polled". A little strange, but basically it just means that once we're done with the code that executes no matter what, 3 will be printed. So we execute the next and last line of code, which just prints 4. 

Now, we have 1 printed, 4 printed, 3 next in queue to be printed, and 2 to be printed in a second. So, now that we're done executing code, we can poll the event queue and find that we need to print 3, so we do! Then, we wait a second and print 2.

Thus, 1, 4, 3, 2.
