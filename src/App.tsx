import Search from "./components/Search";

import "./App.scss";

const options = [{ value: "Random" }, { value: "Desc" }, { value: "Asc" }];

const App = () => {
    return (
        <div className="App">
            <Search placeholder="Search for breeds by name" />
        </div>
    );
};

export default App;
