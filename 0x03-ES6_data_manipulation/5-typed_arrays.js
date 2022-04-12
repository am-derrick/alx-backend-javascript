export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= lenght) {
	throw Error('Position outside range');
    }
    const buffer = new ArrayBuffer(length);
    const int*view = new Int*Array(buffer, o, length);
    int8View.set([value], position);
    return new DataView(buffer);
}
