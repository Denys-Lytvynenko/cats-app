import { FC } from "react";
import {
    isRouteErrorResponse,
    useNavigate,
    useRouteError,
} from "react-router-dom";

import Button from "@components/Button";
import Typography from "@components/Typography";

import "./styles.scss";

const ErrorPage: FC = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

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

            <Button onClick={goBack}>Go back</Button>
        </div>
    );
};

export default ErrorPage;
