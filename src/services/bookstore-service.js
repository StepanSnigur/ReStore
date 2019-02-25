class BookStoreService {
    data = [
        { id: 1, title: 'Production-ready Microservices', author: 'Susan J. Fawler', price: 32, coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg' },
        { id: 2, title: 'Realise it!', author: 'Michael T. Nygard', price: 45, coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg' }
    ];
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
                reject(new Error('error'));
            }, 700);
        });
    }
}

export default BookStoreService;