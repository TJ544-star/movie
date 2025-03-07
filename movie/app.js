let movies = [];

function addMovie() {
    const movieInput = document.getElementById("movieInput");
    const movieName = movieInput.value.trim();

    if (movieName === "") {
        alert("Please enter a movie name!");
        return;
    }

    movies.push(movieName);
    movieInput.value = "";
    displayMovies();
}

function deleteMovie(index) {
    movies.splice(index, 1);
    displayMovies();
}

function displayMovies() {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    movies.forEach((movie, index) => {
        const li = document.createElement("li");
        li.textContent = movie;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => deleteMovie(index);

        li.appendChild(deleteBtn);
        movieList.appendChild(li);
    });
}
