//pad.Start와 pad.End에 대해서

let num = 10
// undefined

const str = num.toString().padStart(5,"1");
// undefined
str
// '11110'
const str2 = num.toString().padStart(5,"0");
// undefined
str2
// '00010'

const str3 = num.toString().padEnd(5,"1");
// undefined
str3
// '10111'

const str4 = num.toString().padEnd(6,"1");
// undefined
str4
// '101111'

