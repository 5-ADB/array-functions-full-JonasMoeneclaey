const auto = [
    {kleur: "zwart", merk: "volkswagen", bouwjaar: 2000, prijs: "€12.850"},
    {   kleur: "wit", merk: "volvo", bouwjaar: 1985, prijs: "€6.000"},
    {   kleur: "rood", merk: "bmw", bouwjaar: 2005, prijs: "€35.000"}
]
for (let i = 0; i < auto.length; i++) {
    const merk = auto[i].merk;
    const prijs = auto[i].prijs
    console.log(`het merk is ${merk} en de prijs is ${prijs}`);
}