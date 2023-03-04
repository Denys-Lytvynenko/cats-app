import { FC } from "react";

import { cn } from "@utils/classNames";
import { routes } from "../../routes/routes";
import { ContentWrapperProps } from "./types";

import Button from "../Button";
import Search from "../Search";

import { ReactComponent as DislikesIcon } from "@assets/icons/dislikes.svg";
import { ReactComponent as FavouritesIcon } from "@assets/icons/favourites.svg";
import { ReactComponent as LikesIcon } from "@assets/icons/likes.svg";

import "./styles.scss";

const ContentWrapper: FC<ContentWrapperProps> = ({ className, children }) => (
    <div className={cn("content__wrapper", className)}>
        <div className="content__navigation">
            <Search
                placeholder="Search for breeds by name"
                className="content__search"
            />

            <Button
                ariaLabel="likes page"
                buttonStyle="icon-button"
                size="large"
                href={routes.likes}
            >
                <LikesIcon />
            </Button>
            <Button
                ariaLabel="likes page"
                buttonStyle="icon-button"
                size="large"
                href={routes.likes}
            >
                <FavouritesIcon />
            </Button>
            <Button
                ariaLabel="likes page"
                buttonStyle="icon-button"
                size="large"
                href={routes.likes}
            >
                <DislikesIcon />
            </Button>
        </div>

        {children}
    </div>
);

export default ContentWrapper;
