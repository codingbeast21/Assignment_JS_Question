const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false },
  { title: "Harry Potter", author: "J.K. Rowling", alreadyRead: true }
];

books.forEach(book => {
  if (book.alreadyRead) {
    console.log(`You already read "${book.title}" by ${book.author}`);
  } else {
    console.log(`You still need to read "${book.title}" by ${book.author}`);
  }
});

