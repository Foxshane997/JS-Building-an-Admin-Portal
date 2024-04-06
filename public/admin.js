
// Your Code Here

// used this area to write down the code for part 2

// let response = await fetch ('http://localhost:3001/updateBook', {
//     method: "PATCH",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body:JSON.stringify({
//         "id": 3,
//         "title": "Legends of Arathrae",
//     }),
// });
// let updateBook = await response.json();
// console.log(updateBook)

// end of part 2

/* start of part 3 */

async function main() {
    let response = await fetch('http://localhost:3001/listBooks');

    let books = await response.json();

    books.foreach(renderBook);
}

function renderBook(book){
    let bookContainer = document.querySelector('.book-container')
    bookContainer.innerHTML +=`
    <div class>
    `
}
