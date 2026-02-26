let dataCampuran = [
    // 1. String
    "Budi Santoso",
    "Admin",
    "Jakarta",

    // 2. Number (Integer & Float)
    25,
    15000000.50,
    -10,

    // 3. Boolean
    true,
    false,

    // 4. Object
    {
        nama: "Laptop",
        harga: 15000000,
        spesifikasi: {
            ram: "16GB",
            storage: "512GB SSD"
        },
        aktif: true
    },

    // 5. Array (termasuk nested array)
    ["JS", "HTML", "CSS", ["React", "Vue"]],

    // 6. Function
    function() {
        return "Halo dari fungsi!";
    },

    // 7. Symbol
    Symbol("idUser"),

    // 8. BigInt
    9007199254740991n,

    // 9. Regular Expression
    /abc/i,

    // 10. Date Object
    new Date()
];


let str = 0
let num = 0
let bol = 0
let obj = 0
let arr = 0

for (let i = 0; i < dataCampuran.length; i++) {

  if (typeof dataCampuran[i]==="string") {
    str++
  }
  if (typeof dataCampuran[i]==="number") {
    num++
  }
  if (typeof dataCampuran[i]==="boolean") {
    bol++
  }
  if (typeof dataCampuran[i]==="object") {
    obj++
  }
  if (Array.isArray(dataCampuran[i])) {
    arr++
  }
}
    console.log(`Total String = ${str} Buah`);
    console.log(`Total number = ${num} Buah`);
    console.log(`Total boolean = ${bol} Buah`);
    console.log(`Total object = ${obj} Buah`);
    console.log(`Total array = ${arr} Buah`);


