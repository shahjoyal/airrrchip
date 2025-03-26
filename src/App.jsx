import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Tabs from "./components/Tabs";
import ClaimsTable from "./components/ClaimsTable";
import CreateClaim from "./components/CreateClaim";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <CreateClaim />
        <Tabs />
        <FilterBar />
        <ClaimsTable />
      </div>
    </div>
  );
}

export default App;
