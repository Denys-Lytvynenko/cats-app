import Search from "./components/Search";

import "./App.scss";
import GalleryGrid from "./components/GalleryGrid";
import SortingButton from "./components/SortingButton";

import { ReactComponent as SortingAZ } from "@assets/icons/sorting_a-z.svg";
import { ReactComponent as SortingZA } from "@assets/icons/sorting_z-a.svg";

const options = [{ value: "Random" }, { value: "Desc" }, { value: "Asc" }];

const App = () => {
    return (
        <div className="App">
            <SortingButton
                icon={<SortingAZ />}
                onClick={() => {}}
                ariaLabel="sort from a to z"
            />
            <SortingButton
                icon={<SortingZA />}
                onClick={() => {}}
                ariaLabel="sort from z to a"
            />
            <GalleryGrid />
        </div>
    );
};

export default App;
