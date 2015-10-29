# PedroTrujilloV.github.io


Journal, Week 2




Objectives.

After completing this assignment, you should…

have an introductory understanding of Core Data and how to persist information in a database between runs of the app.


Topics

UIPopoverController
UICollectionView
Universal Apps
In-class app: Collect 'Em All
The HIG.


Was very interesting learn more about swift. for me was very helpful the experience programming with Python because is a modern programing language to, I think much modern than Swift, and more easy to use.

My muscle memory is creating the necessary knowledge to create fast Swift code. I'm very exciting to learn about use databases with Swift, because that will be a key topic for my possible project in the Swift course.


My Topic to researching:

Collection Data Structures In Swift

http://www.raywenderlich.com/79850/collection-data-structures-swift

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
Efficiently insert, remove and retrieve items


Firts we need se some very important topics:

#Recursion:

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



