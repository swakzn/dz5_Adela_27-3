function filterBooks(books) {
    const booksWithU = [];
    const otherBooks = [];
  
    for (const book of books) {
      if (book.toLowerCase().includes('у')) {
        booksWithU.push(book);
      } else {
        otherBooks.push(book);
      }
    }
  
    return { booksWithU, otherBooks };
  }
console.log(filterBooks(["цуацуаб",'sncksjn',"hjbsdbchj","jhdjhbfv"]));