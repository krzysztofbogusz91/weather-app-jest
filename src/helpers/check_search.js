export const term = (data) => {
    //modify search query depending on data type
    return typeof data === "string" ? `q=${data}` : `lat=${data.lat}&lon=${data.lng}`;   
}