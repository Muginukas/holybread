# 🌾 Šventoji virtuvė — Biblijos patiekalų receptynas

Statinis vieno puslapio receptynas su **78 receptais**, paremtais Šventojo Rašto minimais
patiekalais ir produktais: nuo Ezekielio duonos (Ez 4:9) ir Ezavo lęšių troškinio (Pr 25) iki
Pesacho avinėlio, figų pyragaičių ir isopo prieskonių mišinio.

## Ką rasi puslapyje

- **Šventos virtuvės principai** — aštuonios Biblijos mitybos taisyklės su eilučių nuorodomis
  (septyni krašto vaisiai, kraujo draudimas, kašrutas, šabas, saikas).
- **Receptai** — 9 kategorijos: duona ir grūdai (12), blynai ir keptuvės papločiai (9),
  sriubos ir troškiniai (8), daržovės ir salotos (7), žuvis ir mėsa (7), pieno gėrybės (6),
  vaisiai ir saldumynai (13), gėrimai (7), prieskoniai ir padažai (9).
  Kiekvienas receptas turi: Rašto eilutę, trukmę, porcijas, produktus, gaminimo eigą,
  paaiškinimą „kodėl subalansuota“ ir istorinį komentarą.
- **Paieška ir filtrai** — pagal pavadinimą, produktą, eilutę ar žymą (veganiška, pasninkas,
  Pesachas, be mielių ir t. t.).
- **Subalansuota savaitė** — septynių dienų meniu iš receptyno patiekalų.
- **Spausdinimas** — kiekvieną receptą galima atsispausdinti atskirai.

## Paleidimas

Jokio surinkimo (build) nereikia — tai grynas HTML, CSS ir JavaScript.

```bash
# tiesiog atidaryk faile
xdg-open index.html

# arba per vietinį serverį
python3 -m http.server 8000   # http://localhost:8000
```

## Publikavimas GitHub Pages

Repozitorijos nustatymuose: **Settings → Pages → Deploy from a branch**, pasirink šaką ir
`/ (root)` katalogą. Puslapis veiks be jokių papildomų nustatymų.

## Struktūra

```
index.html              # puslapio karkasas: antraštė, principai, filtrai, meniu
assets/css/style.css    # pergamento ir alyvuogių tema, šviesus + tamsus režimas
assets/js/recipes.js    # receptų duomenys (CATEGORIES, RECIPES)
assets/js/app.js        # paieška, filtrai, kortelės, recepto langas, savaitės meniu
```

## Kaip pridėti naują receptą

Į `assets/js/recipes.js` masyvą `RECIPES` įrašyk objektą:

```js
{
  id: "unikalus-id",              // naudojamas ir nuorodoje: index.html#unikalus-id
  title: "Patiekalo pavadinimas",
  category: "duona",              // vienas iš CATEGORIES id
  scripture: "Knygos 1:1",
  verse: "Eilutės tekstas.",
  time: "30 min.",
  servings: "4 porcijos",
  difficulty: "Lengvas",
  tags: ["veganiška", "greita"],
  ingredients: ["…"],
  steps: ["…"],
  balance: "Kodėl derinys maistiniu požiūriu subalansuotas.",
  note: "Istorinis ar biblinis komentaras."
}
```

Puslapis pats atnaujins statistiką, filtrus ir sąrašą.

## Pastabos

Receptai yra šiuolaikinės rekonstrukcijos pagal Biblijoje minimus produktus ir Artimųjų Rytų
virtuvės tradicijas; eilutės pateikiamos sutrumpintai, perpasakojant prasmę, o ne kaip tikslus
vertimas. Tekstai apie maistingumą — bendro pobūdžio informacija, ne mitybos gydymo
rekomendacija.
