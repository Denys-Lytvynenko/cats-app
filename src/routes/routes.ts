const root = import("../../package.json").then(({ name }) => name);

export const routes = {
    root: `/${root}`,
    home: `/${root}/home`,
    voting: `/${root}/voting`,
    breeds: `/${root}/breeds`,
    gallery: `/${root}/gallery`,
    likes: `/${root}/likes`,
    dislikes: `/${root}/dislikes`,
    favourites: `/${root}/favourites`,
    search: `/${root}/search`,
};
