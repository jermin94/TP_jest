const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);

console.log(repository.getTotalCount());
console.log(repository.getTotalPrice());
console.log(repository.getBookByName("dpjvn"));
console.log(repository.getCountBookAddedByMont("dpjvn"));