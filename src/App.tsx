import Select from "./components/Select";

import "./App.scss";

const options = [{ value: "Random" }, { value: "Desc" }, { value: "Asc" }];

const App = () => {
    return (
        <div className="App">
            <Select name="order" label="order" options={options} />
            <Select name="order" options={options} accentColor="gray" />
        </div>
    );
};

export default App;
