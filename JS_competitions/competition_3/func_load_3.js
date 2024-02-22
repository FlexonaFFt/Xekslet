import converter from "./solution_3.mjs";

console.log(converter('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(converter('CCGTA')); // 'GGCAU'
console.log(converter('')); // ''
console.log(converter('ACNTG')); // null