import { FC } from "react";

import { useAppSelector } from "@store/hooks";
import { cn } from "@utils/classNames";
import { routes } from "../../routes/routes";
import { ContentWrapperProps } from "./types";

import Button from "../Button";
import MobileMenu from "../MobileMenu";
import Search from "../Search";

import { ReactComponent as DislikesIcon } from "@assets/icons/dislikes.svg";
import { ReactComponent as FavouritesIcon } from "@assets/icons/favourites.svg";
import { ReactComponent as LikesIcon } from "@assets/icons/likes.svg";

import "./styles.scss";

const ContentWrapper: FC<ContentWrapperProps> = ({ className, children }) => {
    const { isMobile, isTablet } = useAppSelector(state => state.mobile);

    return (
        <div className={cn("content__wrapper", className)}>
            <div className="content__navigation-wrapper">
                <div className="content__navigation">
                    {isMobile && <MobileMenu />}

                    {!isTablet && (
                        <Search
                            placeholder="Search for breeds by name"
                            className="content__search"
                        />
                    )}

                    <Button
                        ariaLabel="likes page"
                        buttonStyle="icon-button"
                        size="large"
                        href={routes.likes}
                        navigation
                        title="likes page"
                    >
                        <LikesIcon />
                    </Button>
                    <Button
                        ariaLabel="favourites page"
                        buttonStyle="icon-button"
                        size="large"
                        href={routes.favourites}
                        navigation
                        title="favourites page"
                    >
                        <FavouritesIcon />
                    </Button>
                    <Button
                        ariaLabel="dislikes page"
                        buttonStyle="icon-button"
                        size="large"
                        href={routes.dislikes}
                        navigation
                        title="dislikes page"
                    >
                        <DislikesIcon />
                    </Button>
                </div>

                {isTablet && (
                    <Search
                        placeholder="Search for breeds by name"
                        className="content__search"
                    />
                )}
            </div>

            {children}
        </div>
    );
};

export default ContentWrapper;
