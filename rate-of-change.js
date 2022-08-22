/*

given a class of shipping rates
calculate the highest and lowest costs of a certain shipment

example
shipment obj
{
    crew: 5,
    weight: 16, (lbs)
    height: 12, (inches)
    width: 8, (inches)
    depth: 10, (inches)
    flatRate: 1000 (cents)
}

rate obj
{
    crewRate: 250, (cents per person)
    dimensional: 100, (cents per cubic inch)
}

*/

class Shipment {
    constructor(crewSize, weight, height, width, depth, flatRate) {
        this.crewSize = crewSize;
        this.weight = weight;
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.flatRate = flatRate;
    }
}

const shipmentA = new Shipment(5, 16, 12, 8, 10, 1000);

