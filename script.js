document.getElementById('recommendBtn').addEventListener('click', () => {
    const selectedGenres = Array.from(document.querySelectorAll(".genres input[type='checkbox']:checked"))
      .map(cb => cb.value);
  
    const searchInput = document.getElementById("searchInput");
    const searchQuery = searchInput.value.trim().toLowerCase();
  
    const filteredMovies = movies.filter(movie => {
      const matchesGenre = selectedGenres.length === 0 || movie.genre.some(g => selectedGenres.includes(g));
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery);
      return matchesGenre && matchesSearch;
    });
  
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "";
  
    if (filteredMovies.length === 0) {
      resultsDiv.innerHTML = "<p>No matching movies found 😢</p>";
      return;
    }
  
    filteredMovies.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('movie-card');
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
      `;
      resultsDiv.appendChild(card);
    });
  });
  