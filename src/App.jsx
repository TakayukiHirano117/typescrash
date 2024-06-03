import Header from "./componens/Header";
import Search from "./componens/Search";
import unsplash from "./api/unsplash";

function App() {
  const onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    console.log(response);
  };

  return (
    <div className="App">
      <Header>
        <Search onSearchSubmit={onSearchSubmit}/>
      </Header>
    </div>
  );
}

export default App;
