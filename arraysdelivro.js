


//buscando no Array de livros por categoruas...

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author:"T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilonia",
                author:"George S. Clason",
            },
            {
                title: "Pai rico, Pai pobre",
                author:"Robert T. Kioysaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Voce é insubistituivel",
                author:"Augusto cury",
            },
            {
                title: "Ansiedade - Como enfrentamos o mal do século",
                author:"Augusto cury",
            },
            {
                title: "Os 7 habitos das pesooas altamentes eficazes",
                author:"Ttephen R. covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length
console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf (book.author) == -1) {
                authors.push(book.author )
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto cury');
