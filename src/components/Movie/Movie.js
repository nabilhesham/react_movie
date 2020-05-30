import React, { Component } from "react";
import "./Movie.css";

// movie page imports
import { API_KEY, API_URL } from "../../config";
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
// import MovieThumb from "../elements/MovieThumb/MovieThumb";
import Actor from "../elements/Actor/Actor";
import Spinner from "../elements/Spinner/Spinner";

export class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    // fetch the movie
    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (data.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ movie: data }, () => {
            // fetch the actors from the set state call back function
            const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
            fetch(endpoint)
              .then((res) => res.json())
              .then((data) => {
                const directors = data.crew.filter(
                  (member) => member.job === "Director"
                );
                this.setState({
                  actors: data.cast,
                  directors: directors,
                  loading: false,
                });
              });
          });
        }
      })
      .catch((err) => console.error("Error", err));
  };

  render() {
    return (
      <div className="rmdb-movie">
        {this.state.movie ? (
          <div>
            <Navigation movie={this.props.location.movieName} />
            <MovieInfo
              movie={this.state.movie}
              directors={this.state.directors}
            />
            <MovieInfoBar
              time={this.state.movie.runtime}
              budget={this.state.movie.budget}
              revenue={this.state.movie.revenue}
            />
          </div>
        ) : null}
        {this.state.actors ? (
          <FourColGrid header={"Actors"}>
            {this.state.actors.map((actor, i) => {
              return <Actor key={i} actor={actor} />;
            })}
          </FourColGrid>
        ) : null}
        {!this.state.actors && !this.state.loading ? (
          <h1 style={{ color: "red", textAlign: "center" }}>
            Movie Not Found !!
          </h1>
        ) : null}
        {this.state.loading ? <Spinner /> : null}
      </div>
    );
  }
}

export default Movie;
