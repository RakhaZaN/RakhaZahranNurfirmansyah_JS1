// If... Else... Nested If
const jmlAbsen = 0
const nilai = 0
const kkm = 75
let isLulus = 'Tidak Lulus'

if (nilai <= 90) {
    if (jmlAbsen > 7) nilai -= 3
    else if (jmlAbsen > 5) nilai -= 2
} else if (nilai <= 75) {
    if (jmlAbsen < 3) nilai += 3
    else if (jmlAbsen < 5) nilai += 2
} else {
    if (jmlAbsen < 3) nilai += 2
    else if (jmlAbsen < 5) nilai += 1
}

isLulus = nilai > kkm ? 'Lulus' : lulus

console.log(`Anda dinyatakan ${isLulus} dalam ujian kali ini.`);


// Switch Case
const rangeTahun = ''
let gen

switch (rangeTahun) {
    case "1946":
        gen = "Baby Boomers"
    case "1965-1976":
        gen = "X"
    case "1977-1994":
        gen = "Y"
    case "1995-2010":
        gen = "Z"
    case "2011-2025":
        gen = "Aplha"
    default:
        gen = "Belum Terdefinisi"
}

console.log("Gen Anda: " + gen);

// For Statement
const binatang = ['ayam', 'Gajah', 'Kucing', 'Harimau', 'Macan']

for (i = 0; i < binatang.length; i++) {
    console.log(`Binatang ke-${i + 1}: ${binatang[i]}`);
}

// While... Do While
const i = 4
do {
    console.log(i)
    i--
} while (i > 0)

// Function
function luasPersegi(s) {
    return s * s
}

const s = 4
console.log(`Luas Persegi dengan sisi (${s}): ${luasPersegi(s)}`);