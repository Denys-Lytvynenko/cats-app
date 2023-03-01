import Card from "./components/Card";

import voteTable from "@assets/images/vote-table.png";

import "./App.scss";

const App = () => {
    return (
        <div className="App">
            <Card
                name="voting"
                href="/"
                image={voteTable}
                backgroundColor="#B4B7FF"
            />
        </div>
    );
};

export default App;
