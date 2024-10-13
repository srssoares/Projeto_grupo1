document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('search-results');
    const paginationContainer = document.getElementById('pagination');
    
    // Simula uma busca de dados
    function fetchResults(filters) {
        // Simulação de resultados de busca
        const allResults = [
            { name: 'Artista 1', description: 'Descrição do Artista 1' },
            { name: 'Artista 2', description: 'Descrição do Artista 2' },
            { name: 'Artista 3', description: 'Descrição do Artista 3' },
            { name: 'Artista 4', description: 'Descrição do Artista 4' },
        ];
        return allResults.filter(result => {
            // Lógica de filtro aqui (pode ser alterada conforme necessário)
            return true;
        });
    }

    // Função para exibir resultados
    function displayResults(results, page = 1) {
        resultsContainer.innerHTML = '';
        const resultsPerPage = 10;
        const totalResults = results.length;
        const totalPages = Math.ceil(totalResults / resultsPerPage);
        const start = (page - 1) * resultsPerPage;
        const end = start + resultsPerPage;

        // Exibir resultados da página atual
        results.slice(start, end).forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result-item';
            resultElement.innerHTML = `
                <h3>${result.name}</h3>
                <p>${result.description}</p>
            `;
            resultsContainer.appendChild(resultElement);
        });

        // Exibir navegação de paginação
        paginationContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => displayResults(results, i));
            paginationContainer.appendChild(pageButton);
        }
    }

    // Evento do botão de busca
    searchButton.addEventListener('click', () => {
        const filters = {
            function: document.getElementById('function-select').value,
            style: document.getElementById('style-select').value,
            instrument: document.getElementById('instrument-select').value,
            location: document.getElementById('location-select').value,
        };
        const results = fetchResults(filters);
        displayResults(results);
    });

    // Funcionalidade do menu hambúrguer
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Alternância de imagens de fundo
    const images = [
        './img/fundo 02.jpg', // Substitua pelos seus arquivos de imagem
        '',
        './img/fundo04.jpg',
        './img/fundo01.jpg'
    ];

    let currentImageIndex = 0;
    const shareTalentSection = document.getElementById('share-talent');

    function changeBackgroundImage() {
        shareTalentSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % images.length; // Alterna entre as imagens
    }

    // Troca de imagem a cada 5 segundos (5000 ms)
    setInterval(changeBackgroundImage, 5000);

    // Definindo a primeira imagem imediatamente
    changeBackgroundImage();
});
