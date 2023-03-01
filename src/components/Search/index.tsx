import { FC } from "react";

import { cn } from "../../utils/classNames";
import { SearchProps } from "./types";

import Button from "../Button";

import { ReactComponent as SearchIcon } from "@assets/icons/search.svg";

import "./styles.scss";

const Search: FC<SearchProps> = ({ className, placeholder }) => {
    return (
        <div className={cn("search", className)}>
            <input
                type="text"
                name="search"
                className="search__input"
                placeholder={placeholder}
            />

            <Button
                buttonStyle="icon-button"
                size="small"
                className="search__button"
                ariaLabel="search button"
            >
                <SearchIcon />
            </Button>
        </div>
    );
};

export default Search;
