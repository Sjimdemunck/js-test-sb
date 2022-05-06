const {validator} = require('../src/Validator/validator');
const { personSchema, personObj, personObjF, Person } = require('../src/Entity/Person/Person');
const { carSchema, carObj, carObjF, Car } = require('../src/Entity/Car/Car');
const { barSchema, barObj, barObjF, Bar } = require('../src/Entity/Bar/Bar');

const Arie = new Person('Arie', 18, ['Tim'], {1:2,}, false);
const Tesla = new Car('Tesla', 'Electric', 100000, ['1', '2']);
const DeWitteAap = new Bar('De Witte Aap', 'Witte de Withstraat 79', { 1:'bier', 2:'wijn'});

test('validate personObj object', () => {
    expect(validator(personSchema, personObj)).toBe(true);
});
test('validate personObjF object', () => {
    expect(validator(personSchema, personObjF)).toBe(false);
});
test('validate Arie object', () => {
    expect(validator(personSchema, Arie)).toBe(true);
});

test('validate carObj object', () => {
    expect(validator(carSchema, carObj)).toBe(true);
});
test('validate carObjF object', () => {
    expect(validator(carSchema, carObjF)).toBe(false);
});
test('validate Tesla object', () => {
    expect(validator(carSchema, Tesla)).toBe(true);
});

test('validate barObj object', () => {
    expect(validator(barSchema, barObj)).toBe(true);
});
test('validate barObjF object', () => {
    expect(validator(barSchema, barObjF)).toBe(false);
});
test('validate DeWitteAap object', () => {
    expect(validator(barSchema, DeWitteAap)).toBe(true);
});