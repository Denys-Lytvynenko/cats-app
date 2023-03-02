import Search from "./components/Search";

import "./App.scss";
import GalleryGrid from "./components/GalleryGrid";

const options = [{ value: "Random" }, { value: "Desc" }, { value: "Asc" }];

const App = () => {
    return (
        <div className="App">
            <GalleryGrid />
        </div>
    );
};

export default App;
