import React from "react";
import { Search } from "../components/Search";
import { Movies } from "../components/Movies";

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: false,
    resetToken: null,
  };

  componentDidMount() {
    this.searchMovies("pirates of the caribbean");
  }

  searchMovies = (query, type = "all") => {
    this.setState({ loading: true });

    let url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;
    if (type !== "all") {
      url += `&type=${type}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.Search || [],
          loading: false,
        });
      })
      .catch((err) => {
        console.error("Search error:", err);
        this.setState({ loading: false });
      });
  };

  resetSearch = () => {
    this.searchMovies("pirates of the caribbean");
    this.setState({ resetToken: Date.now() });
  };

  render() {
    const { movies, loading, resetToken } = this.state;

    return (
      <main className="container content">
        <Search onSearch={this.searchMovies} reset={resetToken} />
        <Movies movies={movies} loading={loading} />
      </main>
    );
  }
}

export { Main };
