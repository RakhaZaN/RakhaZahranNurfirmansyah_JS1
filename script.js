// If... Else... Nested If
const jmlAbsen = document.getElementById('absen')
const nilai = document.getElementById('nilai')
const btnHitung = document.getElementById('btnHitung')

btnHitung.addEventListener('click', function () {
    const valJmlAbsen = jmlAbsen.value
    let valNilai = nilai.value
    const kkm = 75
    let isLulus = 'Tidak Lulus'

    if (valNilai <= 90) {
        if (valJmlAbsen > 5) valNilai -= 3
        else if (valJmlAbsen > 3) valNilai -= 2
    } else if (valNilai <= 75) {
        if (valJmlAbsen > 5) valNilai -= 3
        else if (valJmlAbsen > 3) valNilai -= 2
        else if (valJmlAbsen < 3) valNilai += 3
        else if (valJmlAbsen < 5) valNilai += 2
    } else {
        if (valJmlAbsen > 5) valNilai -= 3
        else if (valJmlAbsen > 3) valNilai -= 2
        else if (valJmlAbsen < 3) valNilai += 2
        else if (valJmlAbsen < 5) valNilai += 1
    }

    isLulus = valNilai >= kkm ? 'Lulus' : isLulus
    console.log(`Anda dinyatakan ${isLulus} dalam ujian kali ini.`)

    document.getElementById('nilaiAkhir').innerHTML = valNilai
    document.getElementById('lulus').innerHTML = isLulus
})


// Switch Case
document.getElementById('btnPilih').addEventListener('click', function () {
    const rangeTahun = document.querySelector("input[type='radio'][name='rangeTahun']:checked").value
    let gen

    switch (rangeTahun) {
        case "1964":
            gen = "Baby Boomers"
            break
        case "1965-1976":
            gen = "X"
            break
        case "1977-1994":
            gen = "Y"
        case "1995-2010":
            gen = "Z"
            break
        case "2011-2025":
            gen = "Aplha"
            break
        default:
            gen = "Belum Terdefinisi"
            break
    }

    console.log("Gen Anda: " + gen);

    document.getElementById('gen').innerHTML = "Gen Anda: " + gen
})

// For Statement
const container = document.getElementById('container')
const binatang = ['Ayam', 'Gajah', 'Kucing', 'Harimau', 'Macan']
let list = ''

for (let i = 0; i < binatang.length; i++) {
    const listItem = document.createElement('li')
    listItem.textContent = `Binatang ke-${i + 1}: ${binatang[i]}`
    container.appendChild(listItem)
}

// While... Do While
const count = document.getElementById('count');
const counter = document.getElementById('counter')
document.getElementById('btnCount').addEventListener('click', function () {
    let i = parseInt(count.value)
    let countdown = ''
    do {
        countdown += i + ' '
        i--
    } while (i >= 0)
    counter.textContent = countdown
})



// Function

function luasPersegi(s) {
    return s * s
}

document.getElementById('btnHitungLuas').addEventListener('click', () => {
    const s = document.getElementById('sisi').value
    let luas = luasPersegi(s)
    document.getElementById('luas').textContent = luas
})