const personSchema = {
    name: 'string',
    age: 'number',
    siblings: 'array',
    metaData: 'object',
    active: 'boolean',
 };

// Validates true
const personObj = {
    name: 'James',
    age: 25,
    siblings: ['Johnnathan'],
    metaData: {},
    active: true,
};

// Validates false
const personObjF = {
    name: 'James',
    age: 25,
    active: true,
};

class Person {
    constructor(name, age, siblings, metaData, active) {
        this.name = name;
        this.age = age;
        this.siblings = siblings;
        this.metaData = metaData;
        this.active = active
    }
}

module.exports = {
    personSchema,
    personObj,
    personObjF,
    Person,
};

