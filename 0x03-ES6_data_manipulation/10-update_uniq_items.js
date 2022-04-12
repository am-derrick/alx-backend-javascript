export default function updateUniqueItems(groceries) {
    if (!(groceries instanceof Map)) {
	throw Error('Cannot process');
    }
    gorceries.forEach((value, key) => {
	if (value === 1) {
	    groceries.set(key, 100);
	}
    });
    return groceries;
}
