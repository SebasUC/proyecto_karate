document.addEventListener('DOMContentLoaded', function () {
    const blogPostsContainer = document.getElementById('blog-posts');

    if (blogPostsContainer) {
        loadBlogPosts();
    } else {
        const articleId = new URLSearchParams(window.location.search).get('id');
        if (articleId) {
            loadArticle(articleId);
        }
    }
});

function loadBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    articles.forEach(article => {
        const articleLink = document.createElement('a');
        articleLink.href = `article.html?id=${article.id}`;

        const articleElement = document.createElement('div');
        articleElement.classList.add('post');

        articleElement.innerHTML = `
            <img src="${article.thumbnail}" alt="Imagen de ${article.title}">
            <h2>${article.title}</h2>
            <p>${article.content[0].description[0].paragraph.substring(0, 100)}...</p>
        `;

        articleLink.appendChild(articleElement);
        blogPostsContainer.appendChild(articleLink);
    });
}

function loadArticle(id) {
    const article = articles.find(a => a.id == id);
    if (article) {
        document.getElementById('article-title').innerText = article.title;
        const articleContentContainer = document.getElementById('article-content');
        article.content.forEach(contentArticle => {
            const div = document.createElement('div');
            div.classList.add('contentArticle');
            const h2 = document.createElement('h2');
            const img = document.createElement('img');
            h2.textContent = contentArticle.title;
            img.src = contentArticle.image;
            div.appendChild(h2);
            div.appendChild(img);

            contentArticle.description.forEach(descripciones => {
                const h3 = document.createElement('h3');
                const p = document.createElement('p');
                h3.textContent = descripciones.subtitle;
                p.textContent = descripciones.paragraph;
                div.appendChild(h3);
                div.appendChild(p);
            });
            
            articleContentContainer.appendChild(div);
            
        });
    } else {
        document.getElementById('article-title').innerText = "Artículo no encontrado";
    }
}
