var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
  { author: 'Suzanne Collins', title: 'Mockingjay', readingStatus: false }
];

library.forEach(book => {
  console.log(`${book.title} by ${book.author} - Reading Status: ${book.readingStatus}`);
});
