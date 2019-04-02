class BookRepository {

    /**
     * @param db
     */
    constructor(db) {
        this.db = db;
    }

    save (book) {
        this.db
            .get('books')
            .push(book)
            .write();
    }

    /**
     * Nombre total de livre
     */
    getTotalCount() {
        return this.db.get('books').value().length;
    }

    /**
     * Somme du prix de tous les livre
     */
    getTotalPrice() {
        return this.db.get('books').map('price').sum().value();
    }


    /**
     * Retourne un livre
     */
    getBookByName(name) {
        return this.db.find({ name }).value();
    }

    /**
     * Nombre de livre ajouté par mois
     *
     *  [
     *      {
     *          year: 2017,
     *          month, 2,
     *          count, 129,
     *          count_cumulative: 129
     *      },
     *      {
     *          year: 2017,
     *          month, 3,
     *          count, 200,
     *          count_cumulative: 329
     *      },
     *      ....
     *  ]
     */
    getCountBookAddedByMont(name) {
        return this.db.countBy(['year', 'month']).value();
    }

}


module.exports = BookRepository;