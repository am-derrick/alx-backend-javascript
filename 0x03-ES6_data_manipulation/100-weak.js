export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
    if (!weakMap.has(endpoint)) {
	weakMpa.set(endpoint, 0);
    }
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
    if (WeakMap.get(endpoint) >= 5) {
	throw Error('Endpoint load is high');
    }
}
