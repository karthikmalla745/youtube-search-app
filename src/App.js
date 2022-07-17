import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState([]);
  const changeHandler = (e) => {
    setData(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/search?maxResults=50&key=AIzaSyCt5AaY9q5ShareDUoUWLpuQVFgCTZl7pk&q=" +
          data.toString()
      )
      .then((res) => setSearch(res.data.items));

    setData("");
  };
  return (
    <div>
      <center>
        <h1>youtube search app</h1>
        <br />
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={data}
            onChange={changeHandler}
            placeholder="search"
          />
          <br />
          <br />
          <button className="btn btn-primary">search</button>
        </form>
        <div>
          <div className="row">
            {search.map((i) => (
              <div className="col-md-4 mt-3">
                <div class="card" style={{ width: "18rem" }}>
                  <iframe
                    src={
                      "https://www.youtube.com/embed/" + i.id.videoId.toString()
                    }
                  ></iframe>
                  <div class="card-body">
                    <center></center>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </center>
    </div>
  );
}
export default App;
