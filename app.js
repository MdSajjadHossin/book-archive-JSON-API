const searchBook = () =>{
    const searchField = document.getElementById('search-book');
    const searchText = searchField.value;
    console.log(searchText);

    //clear data
    searchField.value = '';

    // search data
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data))

}
//load image
const displayImage = loadImg =>{
        const url = `https://covers.openlibrary.org/b/id/${loadImg}-M.jpg`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data))
}
//load Author Details
const displayAuthor = authhorKey =>{
        const url = `https://covers.openlibrary.org/b/id/${authhorKey}-L.jpg`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data))
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    // books.forEach(book => {
        for (const book in books.docs)
        {
            books.docs.forEach(eachBook =>{
                // console.log(book);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Book Title: ${eachBook.title}</h5>
            <h5 class="card-title">Author Name: ${eachBook.name}</h5>
            <h5 class="card-title">Publisher: ${eachBook.publisher}</h5>
            <h5 class="card-title">Publish Year: ${eachBook.first_publish_year}</h5>
            </div>
            </div>
        `;
        searchResult.appendChild(div);
        });
            
    }
        
    
 
}