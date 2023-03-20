/**
 * Convert file to base64 string
 * @param file file to convert to base64 string.
 */
export const convertToBase64 = (file: File) => {
    const reader = new FileReader();

    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
        .then(value => {
            // if (typeof value === "string") {
            //     return value.split(";base64,")[1];
            // }
            return value;
        })
        .catch(error => console.log(error));
};
