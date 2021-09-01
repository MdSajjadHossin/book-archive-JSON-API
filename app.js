const searchBook = () =>{
    const searchField = document.getElementById('search-book');
    const searchText = searchField.value;
    console.log(searchText);

    //clear data
    searchField.value = '';

    // search data
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

// const displaySearchResult = books => {
//     const searchResult = document.getElementById('search-result');
//     books.forEach(book => {
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `
//         <div class="card h-100">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">Book Title: ${book.title}</h5>
//         </div>
//       </div>
//         `;
//         searchResult.appendChild(div);
//     })
// }