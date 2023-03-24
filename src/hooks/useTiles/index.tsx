import { FC, useMemo } from "react";

import WrapperComponent from "./WrapperComponent";
import { UseTilesProps } from "./types";

const useTiles = ({ data, component }: UseTilesProps): JSX.Element[] | null => {
    const tiles = useMemo(() => {
        if (!data || !data.length) return null;

        let row = [];
        let rows = [];

        for (let i = 0; i < data.length; i++) {
            if (data[i].image) {
                row.push(
                    <WrapperComponent
                        key={data[i].id + i.toString()}
                        image={data[i].image}
                        name={data[i].name}
                        href={data[i].href}
                        component={component}
                    />
                );
            }

            if (row.length === 5 || i === data.length - 1) {
                rows.push(
                    <div key={rows.length} className="gallery__wrapper">
                        {row}
                    </div>
                );

                row = [];
            }
        }

        return rows;
    }, [data]);

    return tiles;
};

export default useTiles;
