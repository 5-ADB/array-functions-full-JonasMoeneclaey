const auto = [
    {   kleur: "zwart", merk: "volkswagen", bouwjaar: 2000, prijs: "€12.850"},
    {   kleur: "wit", merk: "volvo", bouwjaar: 1985, prijs: "€6.000"},
    {   kleur: "rood", merk: "bmw", bouwjaar: 2005, prijs: "€35.000"}
]

function totaalprijs(prijsAuto) {
    for (let i = 0; i < prijsAuto.length; i++) {
    const resultaat = prijsAuto[i].prijs + prijsAuto[i+1].prijs + prijsAuto[i+2].prijs
    console.log(resultaat);
}
}

totaalprijs(auto)