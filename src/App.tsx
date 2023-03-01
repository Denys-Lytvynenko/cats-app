import Button from "@components/Button";

import { ReactComponent as Arrow } from "@assets/arrow-left.svg";

import "./App.scss";

const App = () => {
    return (
        <div className="App">
            <Button>Upload</Button>
            <hr />
            <Button
                buttonStyle="icon-button"
                size="small"
                ariaLabel="back button"
            >
                <Arrow />
            </Button>
            <Button
                buttonStyle="icon-button"
                size="large"
                ariaLabel="back button"
            >
                <Arrow />
            </Button>
            <hr />
            <Button buttonStyle="icon-text-button" ariaLabel="upload button">
                <Arrow />
                Upload
            </Button>
        </div>
    );
};

export default App;
