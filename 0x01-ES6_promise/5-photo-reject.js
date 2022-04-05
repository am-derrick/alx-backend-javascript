export default function uploadPhot(filename) {
    return Promise.reject(new Error(`${filename} cannot be processed`));
}
