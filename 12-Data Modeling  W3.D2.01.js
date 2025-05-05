//Basic Requirements
//1. Think about some different attributes of books – what do all books have? Ideas include:
function book(Title, Author, MSRP, Genre, NumberOfPages, Description){

//2. In terms of the properties of books that you thought of, represent the following books as data:
var book1=book(" Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 6, "Fantasy", 335, "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.");
var book2=book("Romeo and Juliet", "William Shakespeare", 10, "tragedy", 138 ,"Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young star-crossed lovers whose deaths ultimately reconcile their feuding families.");
var book3=book("Structure and Interpretation of Computer Programs", "Gerald Jay Sussman, Hal Abelson", 50, "Computer science", 657, "This long-awaited revision contains changes throughout the text. There are new implementations of most of the major programming systems in the book.");

//3. You may have been rewriting the same type of object over and over. We need to stay DRY (Do Not Repeat). Write a function makeBook that takes as arguments different attributes of a book and returns an object representing that book that has the proper structure (we call this a factory function).
function makeBook(Title, Author, MSRP, Genre, NumberOfPages, Description){
    return {
        Title:Title,
        Author:Author,
        MSRP:MSRP,
        Genre:Genre,
        NumberOfPages: NumberOfPages,
        Description:Description
    }
}

//4. Look at one of your book objects in the console. This is the object inspector. The object inspector is nice to have, but it will be easier to have a function to display the more important information easily. Write a function called displayBook that takes a book as an argument, and returns the important information in a more readable way,
var sorcerersStone = book1
function displayBook(book){
return book.Title + ", by "+ book.Author + " -- "+ book.Genre + ", " + "$" + book.MSRP
}

//5. Create an array called books that holds all of the books that you created above.
var books=[book1, book2, book3];

//6. Your function displayBook can be used to display a single book as a string. Now, write a function displayBooks that, given an array of books, returns a single string consisting of all of the books. Use the function displayBook to format all of the books. Each book should be numbered and separated with a newline (we also call this a line break) character so that each book is shown on a separate line in the console. The newline character is specified with a special escaped character in a string:
function displayBooks(books){
    var dis="";
    for(i=0; i<books.length; i++){
        dis=displayBook(books[i]);
        console.log((i+1) + "." + dis + "\n")
    }
}