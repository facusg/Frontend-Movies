const API_KEY = "896c8566fc255f7c52f6ea6bd2901188";

const requests = {
  base: "https://api.themoviedb.org/3",

  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  /* Movies */
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  /*  SERIES */
  fetchTopReatedTv: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopularTv: `/tv/popular?api_key=${API_KEY}&language=en-US`,
  fetchActionTv: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchComedyTv: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchDramaTv: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchAnimationTv: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  fetchKidsTv: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  fetchSciFiTv: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  fetchFamilyTv: `/discover/tv?api_key=}&with_genres=10751`,
};

export default requests;

/* 

https://api.themoviedb.org/3/tv/{tv_id}?api_key=${API_KEY}&language=en-US
https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language=en-US

*/
