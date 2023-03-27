import { FC, KeyboardEvent, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { routes } from "@routes/routes";
import { cn } from "@utils/classNames";
import { SearchProps } from "./types";

import Button from "../Button";

import { ReactComponent as SearchIcon } from "@assets/icons/search.svg";

import "./styles.scss";

const Search: FC<SearchProps> = ({ className, placeholder }) => {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const { searchId } = useParams();
    const { pathname } = useLocation();

    const handleSearch = () => {
        const searchInputValue = searchInputRef.current?.value;

        if (!searchInputValue) return;

        navigate(`${routes.search}/${searchInputValue}`);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        const key = event.key;

        if (key === "Enter") {
            handleSearch();
        }
    };

    useLayoutEffect(() => {
        if (pathname.includes(routes.search) && searchId) {
            if (searchInputRef.current) {
                searchInputRef.current.value = searchId;
            }
        }
    }, []);

    return (
        <div className={cn("search", className)}>
            <input
                ref={searchInputRef}
                type="text"
                name="search"
                className="search__input"
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
            />

            <Button
                buttonStyle="icon-button"
                size="small"
                className="search__button"
                ariaLabel="search button"
                onClick={handleSearch}
            >
                <SearchIcon />
            </Button>
        </div>
    );
};

export default Search;
