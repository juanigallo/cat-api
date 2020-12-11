import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [catUrl, setCatUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch("https://api.thecatapi.com/v1/images/search");
    const json = await data.json();

    setCatUrl(json[0].url);
    setLoading(false);
  }

  return (
    <div className="App">
      <button onClick={fetchData}>Nueva imagen</button>
      <br />
      {loading ? <p>Cargando</p> : <img className="catImg" src={catUrl} />}
    </div>
  );
}

export default App;
