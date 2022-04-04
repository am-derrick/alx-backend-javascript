export default function getNeighborhoodslist() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.addNeighborhood = add(newNeighborhood) => {
	self.sanFranciscoNeighborhoods.push(newNeighborhood);
	return self.sanFrnaciscoNeighborhoods;
    };
}
