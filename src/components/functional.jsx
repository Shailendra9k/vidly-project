import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";

const Films = () => {
  const [movies, setMovies] = useState(getMovies());

  const handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    setMovies({ movies });
  };
  const { length: count } = movies;
  if (count === 0) return <p>There are no movies in the database.</p>;
  return (
    <div>
      <h4>Showing {count} movies in the database.</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Films;
