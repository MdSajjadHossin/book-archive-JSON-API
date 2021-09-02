const searchBook = () =>{
    const searchField = document.getElementById('search-book');
    const searchText = searchField.value;
    console.log(searchText);

    //clear data
    searchField.value = '';

    // search data
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data))

}
// searchBtn.addEventListener("click", function () {
//     console.log(spinner);
//     const searchText = searchInput.value;
//     if (searchText === "") {
//       errorDiv.innerText = "Search field cannot be empty.";
//       return;
//     }
// })

// Displaying Result
const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    const totalResultFound =  document.getElementById('result-found');
    totalResultFound.innerHTML = `
    <p class= "fs-4 mx-auto">Total Result found: ${books.numFound}</p>
     `
        for (const book in books.docs)
        { 
            books.docs.forEach(eachBook =>{
                // const totalResultFound =  document.getElementById('result-found');
                // totalResultFound.innerHTML = `
                // <p class= "fs-4 mx-auto">Total Result found: ${book.numFound}</p>
                // `
                imgUrl = `https://covers.openlibrary.org/b/id/${eachBook.cover_i}-M.jpg`;
                // console.log(eachBook);
                const div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `
                <div class="card h-100">
                <img src="${imgUrl}" class="card-img-top card-img" alt="...">
                <div class="card-body">
                <h5 class="card-title"><span class="fs-5 my-auto fw-bold">Book Title:</span> <span class="fs-6">${eachBook.title}</span></h5>
                <h5 class="card-title"><span class="fs-6 my-auto fw-bold">Author Name:</span> <span class="fs-6">${eachBook.author_name}</span></h5>
                <h5 class="card-title"><span class="fs-6 my-auto fw-bold">Publisher:</span> <span class="fs-6">${eachBook.publisher}</span></h5>
                <h5 class="card-title"><span class="fs-6 my-auto fw-bold">Publish Year:</span> <span class="fs-6">${eachBook.first_publish_year}</span></h5>
                </div>
                </div>
                `;
                searchResult.appendChild(div);  
        });  
          
    }
}
