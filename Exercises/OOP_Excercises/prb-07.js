// Qus 7. Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.
// answer

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
  display() {
    console.log(this.title, this.author, this.publicationYear);
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }
  display() {
    console.log(this.title, this.author, this.publicationYear, this.price);
  }
}

const newEbook = new Ebook('JS','John Smith',2001,120);
newEbook.display();

const newBook = new Book('JS','John Smith',2001);
newBook.display();