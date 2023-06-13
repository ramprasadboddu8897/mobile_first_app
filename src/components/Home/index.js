import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
      .then((response) => response.json())
      .then((data) => setJokes(data.jokes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>Homepage</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Joke</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke) => (
            <tr key={joke.id}>
              <td>{joke.category}</td>
              <td>{joke.joke}</td>
              <td>{joke.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
