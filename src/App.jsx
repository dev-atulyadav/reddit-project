import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResponses = async (e, searchTerm, searchLimit, sortBy) => {
    e.preventDefault();
    setLoading(true);
    await fetch(
      `http://www.reddit.com/search.json?q=${searchQuery}&limit=${"100"}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.children);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => setError(err));
  };
  return (
    <>
      <Header
        handleResponses={handleResponses}
        handleSearchInput={handleSearchInput}
      />
      <Section loading={loading} data={data} />
    </>
  );
};

export default App;
