# CSE 110 Lab 4 - Part 3

## DevTools - Debugging

### Breakpoint
![](/part3/breakPoint.jpg)

### Watch Expressions

![](/part3/watchexpressions.jpg)

### What was the bug?

- The bug is that the values of num1 and num2 passed in to calculateSum are string types. Thus, the + operator doesn't add their numerical values, but rather concatenates them together.

### How would you fix it?
- I would fix it by making sure that num1 and num2 are a number type instead of a string type, so that addition is performed instead of concatenation. One way to fix it is by putting a unary "+" operator at the beginnign of the num1 and num2 assignments, which will essentially "cast" these values to numbers. There are other ways to do it, such as partseInt(), but this way seems the coolest.

### Picture of said fix:

![](/part3/bugfix.jpg)

---

## DevTools - Network Tab

1. What is the name of the new json file?
   - citylots.json
2. Which file initiated the download of the new file?
   - part2.js
3. What is its file size?
   - 11.1 MB
4. How long did it take to download?
   - 3.57 seconds
5. What was your User-Agent for the browser that made the request?
   - `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36`
6. In the response, what type of server did it come from?
   - Apache
7. When was the file last modified?
   - Tuesday, January 26th, 10:14pm
8. What was the Content-Type of the file?
   - application/json
9. Which method inside the initiating file made the request?
   - fetchData()