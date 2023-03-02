import { FC } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import Typography from "@components/Typography";

import "./styles.scss";

const ErrorPage: FC = () => {
    const error = useRouteError();

    return (
        <div className="error-page">
            <Typography tag="h1">Oops!</Typography>

            <Typography tag="p" color="black">
                Sorry, an unexpected error has occurred.
            </Typography>

            <Typography tag="p">
                {isRouteErrorResponse(error) ? (
                    <>{error.statusText || error.statusText}</>
                ) : (
                    "Unknown error"
                )}
            </Typography>
        </div>
    );
};

export default ErrorPage;
