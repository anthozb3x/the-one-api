fetch("https://the-one-api.dev/v2/book").then(response => {
    return response.json();
})
    .then(data => {
        const contentSection = document.getElementById('content');
        data.docs.forEach(book => {
            // Crée un div comme conteneur pour chaque "livre"
            const bookContainer = document.createElement('div');
            bookContainer.classList.add('book-container');

            // Crée un élément p pour le titre du livre
            const title = document.createElement('p');
            title.textContent = book.name;
            title.classList.add('book-title');

            // Ajoute le titre au conteneur
            bookContainer.appendChild(title);

            // Ajoute le conteneur de livre à la section du contenu
            contentSection.appendChild(bookContainer);
        });

    })
    .catch(error => {
        alert('Oups, une erreur est survenue');
        console.error('Error:', error);
    });