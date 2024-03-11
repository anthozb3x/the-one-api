document.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const bookId = queryParams.get('id');

    fetch(`https://the-one-api.dev/v2/book/${bookId}/chapter`)
        .then(response => response.json())
        .then(data => {
            const contentSection = document.getElementById('content');
            
            const bookTitle = document.querySelector('h1');
            bookTitle.textContent = data;
            const totalChapters = document.createElement('h2');
            totalChapters.textContent = `Nombre total de chapitres: ${data.docs.length}`;
            contentSection.appendChild(totalChapters);

            data.docs.forEach(chapter => {
                
                const chapterContainer = document.createElement('div');
                chapterContainer.classList.add('chapter-container');

                
                const paragraph = document.createElement('p');
                paragraph.textContent = chapter.chapterName;

                
                chapterContainer.appendChild(paragraph);

                
                contentSection.appendChild(chapterContainer);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });

    fetch(`https://the-one-api.dev/v2/book/${bookId}`).then(response => response.json())
        .then(data => {
            console.log(data)
            const bookTitle = document.querySelector('h1');

            bookTitle.textContent = data.docs[0].name;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
