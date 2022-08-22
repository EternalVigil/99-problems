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
    weight: 500, (cents per pound)
    dimensional: 100, (cents per cubic inch)
}

*/

class Shipment {
    constructor(crewSize, weight, height, length, width) {
        this.crewSize = crewSize;
        this.weight = weight;
        this.height = height;
        this.length = length;
        this.width = width;
    }
}

class Rate {
    constructor(crewCost, dimensionalCost, weightCost, flatRate) {
        this.crewCost = crewCost;
        this.dimensionalCost = dimensionalCost;
        this.weightCost = weightCost;
        this.flatRate = flatRate;
    }
}

const shipmentA = new Shipment(10, 75, 30, 15, 18);
const ratePlanA = new Rate(1500, 300, 450, 1000);

const compareHighRate = (currentRate, inputRate) => {
    const { cost: currentCost } = currentRate;
    const { cost: inputCost, type } = inputRate;

    if(inputCost > currentCost) {
        return { cost: inputCost, type }
    }

    return currentRate;
};

const compareLowRate = (currentRate, inputRate) => {
    const { cost: currentCost } = currentRate;
    const { cost: inputCost, type } = inputRate;
    if(inputCost < currentCost || currentCost === 0) {
        return { cost: inputCost, type };
    }

    return currentRate;
};

const calculateRates = (shipment, rates) => {
    const { crewSize, weight, height, length, width } = shipment;

    const { crewCost, dimensionalCost, weightCost, flatRate } = rates;

    let highestRate = { cost: 0, type: '' };
    let lowestRate = { cost: 0, type: '' };

    const newRates = [];

    const crewRate = crewSize * crewCost;
    newRates.push({ cost: crewRate, type: 'crew' });

    // 166 is a magic / made-up number
    const dimensions = Math.round((length * height * width) / 166);
    const sizeRate = dimensions * dimensionalCost;
    newRates.push({ cost: sizeRate, type: 'size' });

    const weightRate = weight * weightCost;
    newRates.push({ cost: weightRate, type: 'weight' });

    newRates.push({ cost: flatRate, type: 'flat rate' });


    newRates.forEach((rateQuote) => {
        highestRate = compareHighRate(highestRate, rateQuote);
        lowestRate = compareLowRate(lowestRate, rateQuote);
    });

    console.log('return the highest / lowest costs');
    return { highest: highestRate, lowest: lowestRate };
};

const ratePackage = calculateRates(shipmentA, ratePlanA);
console.log('rates', ratePackage);
