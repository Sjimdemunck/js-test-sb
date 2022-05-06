const barSchema = {
    name: 'string',
    address: 'string',
    drinks: 'object',
};

// Validates true
const barObj = {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
    drinks: {
        beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
    },
};

// Validates false
const barObjF = {
    name: 'Sjonnies',
    address: 'Centrum 001',
    drinks: [ // < No object
        'Heineken', 
    ]
};

class Bar {
    constructor(name, address, drinks) {
        this.name = name;
        this.address = address;
        this.drinks = drinks;
    }
}

module.exports = {
    barSchema,
    barObj,
    barObjF,
    Bar,
};
