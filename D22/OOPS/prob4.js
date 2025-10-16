class Library {
  // property
  bookDetails = {
    101: {
      bookId: 101,
      title: "JavaScript Basics",
      author: "John Doe",
      availableCopies: 3,
    },
    102: {
      bookId: 102,
      title: "Learn React",
      author: "Jane Smith",
      availableCopies: 5,
    },
    103: {
      bookId: 103,
      title: "Mastering Node.js",
      author: "David Wilson",
      availableCopies: 2,
    },
    104: {
      bookId: 104,
      title: "Angular for Beginners",
      author: "Sophia Lee",
      availableCopies: 4,
    },
  };

  // methods to implement:
  // 1. validateBook(bookId)  → check if book exists
  validateBooks(bookId){
    if(bookId in this.bookDetails){
        return true
    }
    else{
        false
    }
  }

  // 2. borrowBook(bookId) → decrease availableCopies by 1 (if available)
  borrowBook(bookId){
    if(this.validateBooks(bookId)){
        let bookDetails = this.bookDetails[bookId]
        bookDetails.availableCopies = bookDetails.availableCopies -1;
        console.log("Balance Copies",bookDetails.availableCopies)
    }else{
        console.log("Book Not Found")
    }
  }

  // 3. returnBook(bookId) → increase availableCopies by 1
  returnBooks(bookId){
    if(this.validateBooks(bookId)){
        let bookDetails = this.bookDetails[bookId]
        bookDetails.availableCopies = bookDetails.availableCopies +1;
        console.log("Balance Copies",bookDetails.availableCopies)
    }else{
        console.log("Book Not Found")

    }
  }

  // 4. checkAvailability(bookId) → display available copies
  checkAvailable(bookId){
    if(this.validateBooks(bookId)){
        let bookDetails = this.bookDetails[bookId]
        console.log(bookDetails.availableCopies)
    }else{
        console.log("Book not found")
    }
  }
}
let valid = new Library()
let res = valid.validateBooks(102)
// console.log(res)

let borrow = new Library()
borrow.borrowBook(102)

let returnBook = new Library()
returnBook.returnBooks(103)

let checkAvailability = new Library()
checkAvailability.checkAvailable(104)