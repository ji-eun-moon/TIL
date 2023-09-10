/**
 * Spread Operator
 */
const onlyString = ["1", "2", "3", "4"];
const onlyNumbers = [1, 2, 3, 4];

const arr1 = [...onlyString]; // const arr1: string[]

const arr2 = [...onlyString, ...onlyNumbers]; // const arr2: (string | number)[]
