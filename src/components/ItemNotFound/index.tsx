import { FC } from "react";

import Typography from "../Typography";

import "./styles.scss";

const ItemNotFound: FC = () => (
    <div className="item-not-found">
        <Typography tag="p">No item found</Typography>
    </div>
);

export default ItemNotFound;
