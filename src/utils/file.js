const MB = 1024;

export const fileSizeConvertor = (size) => {
    return Math.ceil(size / MB);
}