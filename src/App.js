import useFetch from "./utils/customHooks/useFetch";
import "./App.css";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div className="app">
      <div>
        {loading ? (
          "Loading..."
        ) : error ? (
          `Error :- ${error.message}`
        ) : (
          <div className="data-container">
            <p>Data fetched successfully</p>
            <p>Id : {data.id}</p>
            <p>Title : {data.title}</p>
            <p>Body : {data.body}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
