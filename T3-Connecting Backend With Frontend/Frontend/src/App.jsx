import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  axios
    .get("/api/jokes")
    .then((Response) => {
      setJokes(Response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <h1>Hello World!!!</h1>
      <p>Jokes:{jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
