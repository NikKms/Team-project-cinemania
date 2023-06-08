import { libRefs } from './lib-refs';

const { libSelectEl, libMoviesListEl } = libRefs;

const createLibSelectMarkup = genre => {
  return `<option value="${genre.id}">${genre.name}</option>`;
};

const createLibMoviesListMarkup = ({
  title,
  name,
  release_date,
  first_air_date,
  genres,
  poster_path,
  vote_average,
  id,
}) => {
  const genreNames = genres.map(genre => genre.name).slice(0, 2);

  const movieTitle = title || name;
  const movieReleaseYear = release_date || first_air_date;
  return `<li class="mylibrary_movie">
  <div class="mylibrary_dark">
  <img src="https://image.tmdb.org/t/p/original${poster_path}" alt="${movieTitle}" />
  </div>
 <div class="mylibrary_overlay is-id" data-id=${id}></div>
  <div class="mylibrary_info">
  <h3 class="mylibrary_movies_name">${movieTitle}</h3>
  <p class="mylibrary_genre_movie">${genreNames.join(
    ' '
  )} | ${movieReleaseYear.substring(0, 4)}</p>
  </div>
<div class="hero_star_raiting">
 <span>
<div class="Stars thisstars" style="--rating: ${
    vote_average / 2
  }; " aria-label="Rating of this product is ${(vote_average / 2).toFixed(
    1
  )} out of 5."></div>
  </div>
  </span>   
  </li>`;
};
const renderLibSelectMarkup = genresArr => {
  const libSelectMarkupEls = genresArr.map(genre =>
    createLibSelectMarkup(genre)
  );
  libSelectEl.insertAdjacentHTML('beforeend', libSelectMarkupEls.join(' '));
};

const renderLibMoviesListMarkup = movies => {
  const libMovieListMarkup = movies.map(movie =>
    createLibMoviesListMarkup(movie)
  );
  libMoviesListEl.insertAdjacentHTML('beforeend', libMovieListMarkup.join(' '));
};

export { renderLibMoviesListMarkup, renderLibSelectMarkup };