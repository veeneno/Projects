import {PI, getCircunference, getArea, getVolume} from './Utils/mathUtil.js';

console.log(PI);
const circumference = getCircunference(10);
const area = getArea(10);

console.log(circumference.toFixed(2) + "cm")
console.log(area.toFixed(2) + "cm2")