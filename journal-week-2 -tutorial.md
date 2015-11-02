

# Tutorial Recursion:

Recursion is a very important and good basic programming concept. However it is quite difficult to grasp at first. It is supposed to be something to be understood with practice and time.

Certainly the best definition of recursion is found in the dictionary hacker:

Recursion
-see recursion.
For example GNU is a recursive acronym (GNU's Not Unix), since the G in GNU means GNU, which means GNU G, and recursively ...
Thinking recursively is complicated, and is not an intuitive process.

In programming, a function is recursive when it calls itself. Below is an example to try to understand recursion. To me it suits me for my exam to practice algorithms in March. I hope it is understandable!

One of the classic examples is the factorial of a number. Try to follow the reasoning explaining each step. For any positive integer N, N factorial (! Which is expressed as N) is the product (multiplication) of all integers less than him:

1! = 1
2! = 1 x 2 = 2
3! = 1 x 2 x 3 = 6
4! = 1 x 2 x 3 x 4 = 24
5! = 1 x 2 x 3 x 4 x 5 = 120
6! = 1 x 2 x 3 x 4 x 5 x 6 = 720

Now, going carefully, you can see that the factorial of each issue includes the factor of all numbers before him. Written in brackets below right is a reference, not a mathematical level:

"2!" It is "1 [1!] X 2"
"3" is "(1 x 2) [2!] X 3"

And so on. For any integer N greater than 1, we can say that the factorial of N is equal to the factorial of the previous number N multiplied by N. The formula N! = (N-1)! x N. Back to the list of factor of 1 to 6. Look in each case the terms are factorial of the previous number to notice. So you could say that a good practice is to find the factor in the outcome repeated.

Turning this function in C, we can make a function that we pass a number, and you return the factorial:

int factorial (int n) {
return n * factorial (n - 1);
}
Here we have our first recursive function. But if you compile the code and run the small program, we get a beautiful violation segment.

The problem is that the function defined above never ends, will continue subtracting 1 to N forever. We will always be able to subtract 1 for any n, so the function will continue to run itself forever. Moreover, for any positive number n factorial will return 0, for any multiplication with 0 as term returns 0. subtract 1 recursively to any positive integer, will eventually give zero.
For the recursive function is complete, in addition to call itself, you need a way to end a condition.
By definition, the factorial of 1 is 1 (1! = 1) and the factorial of 0 (0! = 1) is also 1. So we can implement this condition so that the function is not endless.
Thus, the definition of the recursive function has called itself, and the condition for stopping.

int factorial (int n) {
     if n == 1 {
          return 1;
     } Else {
          return n * factorial (n-1);
     }
}
Or a while:

int factorial (int n) {
     while (n! = 1) {
          return n * factorial (n-1);
     }
     return 1;
}
Well, this is my first attempt to explain what recursion in programming and how it works with an example. Another good example is the Fibonacci series, but it gives for further study because it has many interesting things. Also interesting is the Tower of Hanoi, it is quite interesting and classic when applying recursion. [2]



### For future:

Collection Data Structures In Swift



Update 04/21/2015: Updated for Xcode 6.3 and Swift 1.2.
What kind of performance do you want from your data structure?
What kind of performance do you want from your data structure?
Imagine you have an application that needs to work with a lot of data. Where do you put that data? How do you keep it organized and handle it efficiently?
If your program only manages one number, you store it in one variable. If it has two numbers then you’d use two variables.
What if it has 1000 numbers, 10,000 strings or the ultimate library of memes? (Wouldn’t it be nice to be able to find a perfect meme in an instant?) In that case, you’ll need one of the fundamental collection data structures. Fortunately for you, that’s the topic of this tutorial.
Here’s how the tutorial will flow:
You’ll review what a data structure is and then you’ll learn about Big-O notation. It’s the standard tool for describing the performance of different data structures.
Next up: practicing by measuring the performance of arrays, dictionaries and sets — the most basic data structures available in Cocoa development. This will also double as a rudimentary introduction to performance testing.
As you proceed, you’ll compare the performance of mature Cocoa structures with newer, Swift-only counterparts.
Finally, you’ll briefly review some related types offered by Cocoa. These are data structures that you might be surprised to learn are already at your fingertips.
Getting Started
Before you dive in and explore the data structures used in iOS, you should review a couple of basic concepts about what they are and how to measure their performance.
There are many types of collection data structures, and each represents a specific way to organize and access a collection of items. One collection type might make some activities especially efficient, such as adding a new item, finding the smallest item or ensuring you’re not adding duplicates.
Without collection data structures, you’d be stuck trying to manage items one by one. A collection allows you to:
Handle all those items as one entity
Imposes some structure on them
Efficiently insert, remove and retrieve items [1]


resources:

[1] http://www.raywenderlich.com/79850/collection-data-structures-swift
[2] http://picandocodigo.net/2008/recursividad-en-programacion/
