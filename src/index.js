import './scss/index.scss';

const object1 = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
}

const object2 = {
    ...object1,
    leather: 1,
    refinedMoonstone: 3,
}

console.log(object1);
console.log(object2);