fetch("https://the-one-api.dev/v2/book").then(response => {
    return response.json();
})
    .then(data => {
        const contentSection = document.getElementById('content');
        data.docs.forEach(book => {
            
            const bookContainer = document.createElement('div');
            bookContainer.classList.add('book-container');

            
            const title = document.createElement('p');
            title.textContent = book.name;
            title.classList.add('book-title');

            
            bookContainer.appendChild(title);

            
            contentSection.appendChild(bookContainer);

            
            bookContainer.addEventListener('click', () => {
                window.location.href = `book.html?id=${book._id}`; 
            });

        });

    })
    .catch(error => {
        alert('Oups, une erreur est survenue');
        console.error('Error:', error);
    });