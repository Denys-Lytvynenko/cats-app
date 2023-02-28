export const cn = (...classes: (string | undefined)[]): string => {
    let className = "";

    if (!classes) return className;

    for (const c of classes) {
        if (!c) continue;

        const cleanedClassName = c
            .split(" ")
            .reduce((prev, curr) => prev + (curr ? ` ${curr}` : ""), "")
            .trim();

        className += ` ${cleanedClassName}`;
    }

    return className.trim();
};
