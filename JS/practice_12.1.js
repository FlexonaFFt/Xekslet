import { getTriangleArea } from './myMathModule.js'; 
import square from './square.js';

export default (n) => getTriangleArea(n, square(n) / 2);