import "./App.css";

import { useQuery } from "react-query";
import { getPosts } from "./api/post";

function App() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchInterval: 1000,
    //queryFn: () => Promise.reject("Error loooh"),
  });

  if (postQuery.isLoading) return <h2> Loading ... </h2>;
  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Tanstack Query </h1>
      </header>
      <section className="bg-cream">
        <div className="container">
          <h3> List of Posts</h3>
          {postQuery.data.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
