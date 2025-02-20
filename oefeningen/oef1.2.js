const arrayNummers = [1,2,3,4,5]

let arrayNummersNaastelkaar = ""
for (let index = 0; index < arrayNummers.length; index++) {
    arrayNummersNaastelkaar += `${arrayNummers[index]}`
    if (index < arrayNummers.length-1) arrayNummersNaastelkaar += ": "
}
console.log(arrayNummersNaastelkaar);

