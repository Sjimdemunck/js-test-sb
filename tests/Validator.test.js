const {validator} = require('../src/Validator/validator');
const { personSchema, personObj, personObjF, Person } = require('../src/Entity/Person/Person');
const { carSchema, carObj, carObjF, Car } = require('../src/Entity/Car/Car');
const { barSchema, barObj, barObjF, Bar } = require('../src/Entity/Bar/Bar');

const Arie = new Person('Arie', 18, ['Tim'], {1:2,}, false);
const Tesla = new Car('Tesla', 'Electric', 100000, ['1', '2']);
const DeWitteAap = new Bar('De Witte Aap', 'Witte de Withstraat 79', { 1:'bier', 2:'wijn'});

test('validate personObj object', () => {
    expect(validator(personSchema, personObj)).toBe('Valid');
});
test('validate personObjF object', () => {
    expect(validator(personSchema, personObjF)).toBe('Type van object key: undefined, match niet met de gedefinieerde schema value: array!');
});
test('validate Arie object', () => {
    expect(validator(personSchema, Arie)).toBe('Valid');
});

test('validate carObj object', () => {
    expect(validator(carSchema, carObj)).toBe('Valid');
});
test('validate carObjF object', () => {
    expect(validator(carSchema, carObjF)).toBe('Type van object key: 100000, match niet met de gedefinieerde schema value: number!');
});
test('validate Tesla object', () => {
    expect(validator(carSchema, Tesla)).toBe('Valid');
});

test('validate barObj object', () => {
    expect(validator(barSchema, barObj)).toBe('Valid');
});
test('validate barObjF object', () => {
    expect(validator(barSchema, barObjF)).toBe('Type van object key: Heineken, match niet met de gedefinieerde schema value: object!');
});
test('validate DeWitteAap object', () => {
    expect(validator(barSchema, DeWitteAap)).toBe('Valid');
});