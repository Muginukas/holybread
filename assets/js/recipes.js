/*
 * Biblijos virtuvės receptynas.
 * Kiekvienas receptas remiasi Šventojo Rašto vieta, o gaminimo eiga yra
 * šiuolaikinė rekonstrukcija pagal Artimųjų Rytų virtuvės tradicijas.
 * Eilučių citatos pateiktos sutrumpintai, savais žodžiais perpasakojant prasmę.
 */

const CATEGORIES = [
  { id: "duona", name: "Duona ir grūdai", icon: "🌾" },
  { id: "blynai", name: "Blynai ir keptuvės papločiai", icon: "🥞" },
  { id: "troskiniai", name: "Sriubos ir troškiniai", icon: "🍲" },
  { id: "darzoves", name: "Daržovės ir salotos", icon: "🥬" },
  { id: "zuvis-mesa", name: "Žuvis ir mėsa", icon: "🐟" },
  { id: "pienas", name: "Pieno gėrybės", icon: "🧀" },
  { id: "saldumynai", name: "Vaisiai ir saldumynai", icon: "🍯" },
  { id: "gerimai", name: "Gėrimai", icon: "🍇" },
  { id: "prieskoniai", name: "Prieskoniai ir padažai", icon: "🌿" }
];

const RECIPES = [
  /* ---------------------------- DUONA IR GRŪDAI --------------------------- */
  {
    id: "ezekielio-duona",
    title: "Ezekielio duona",
    category: "duona",
    scripture: "Ezechielio 4:9",
    verse: "Imk kviečių, miežių, pupelių, lęšių, sorų ir spelta kviečių, sudėk juos į vieną indą ir pasidaryk iš jų duonos.",
    time: "2 paros (daiginimas) + 1,5 val.",
    servings: "1 kepalas, ~900 g",
    difficulty: "Vidutinis",
    tags: ["veganiška", "pilno grūdo", "daiginta", "pilnas baltymas"],
    ingredients: [
      "2 puod. (400 g) kviečių grūdų",
      "1/2 puod. (100 g) spelta grūdų",
      "1/2 puod. (100 g) miežių",
      "1/4 puod. (50 g) sorų",
      "1/4 puod. (50 g) žalių lęšių",
      "2 v. š. baltųjų pupelių",
      "2 v. š. raudonųjų pupelių",
      "2 a. š. druskos",
      "2 v. š. medaus",
      "2 v. š. alyvuogių aliejaus",
      "1 pak. (7 g) sausų mielių arba 150 g raugo",
      "~350 ml drungno vandens"
    ],
    steps: [
      "Visus grūdus ir ankštinius atskirai nuplauk, užpilk vandeniu ir mirkyk 12 val.",
      "Nusunk, suberk į stiklainį ar sietą, laikyk šiltai 24–36 val., 2–3 kartus per dieną praskalauk, kol pasirodys 2–3 mm daigeliai.",
      "Daigus išdžiovink orkaitėje 50 °C temperatūroje (arba džiovintuve), kol jie tampa traškūs.",
      "Sumalk namine girnele ar galingu maišytuvu į vientisus miltus.",
      "Mieles ištirpink drungname vandenyje su medumi, palik 10 min.",
      "Sumaišyk miltus, druską, aliejų ir mielių mišinį; minkyk 10 min., kol tešla taps elastinga.",
      "Kildink 1 val. šiltai, tada suformuok kepalą, dėk į kepimo formą ir kildink dar 40 min.",
      "Kepk 180 °C orkaitėje 45–50 min. Duona iškepusi, kai pabaksnojus į dugną skamba tuščiai."
    ],
    balance: "Grūdų ir ankštinių derinys sudaro pilną aminorūgščių rinkinį – augaliniuose baltymuose atsiranda visos devynios nepakeičiamos aminorūgštys. Daiginimas sumažina fitinų kiekį, tad geležis ir cinkas pasisavinami geriau.",
    note: "Pranašui tai buvo bado meto duona, o šiandien – vienas maistingiausių pilno grūdo kepalų. Be mielių: naudok raugą ir kildink 8–10 val."
  },
  {
    id: "maca",
    title: "Maca – nerauginta duona",
    category: "duona",
    scripture: "Išėjimo 12:8, 39",
    verse: "Tešla nespėjo įrūgti, nes jie buvo išvaryti iš Egipto ir negalėjo delsti.",
    time: "25 min.",
    servings: "8 paplotėliai",
    difficulty: "Lengvas",
    tags: ["veganiška", "be mielių", "greita", "Pesachas"],
    ingredients: [
      "500 g kvietinių arba spelta miltų",
      "250 ml šalto vandens",
      "1 a. š. druskos (Pesachui – be druskos)"
    ],
    steps: [
      "Įkaitink orkaitę iki aukščiausios temperatūros (250 °C) kartu su kepimo skarda.",
      "Miltus greitai sumaišyk su vandeniu – nuo vandens palietimo iki orkaitės turi praeiti mažiau nei 18 min.",
      "Tešlą padalyk į 8 dalis, kiekvieną iškočiok labai plonai (2 mm).",
      "Šakute subadyk visą paviršių, kad nepakiltų.",
      "Kepk ant įkaitusios skardos 2–3 min. iš vienos pusės, 1–2 min. iš kitos, kol pasidengs rudomis dėmelėmis."
    ],
    balance: "Paprasčiausias įmanomas maistas: grūdas ir vanduo. Tinka kaip neutralus pagrindas prie troškinių ir padažų, nes neapkrauna riebalais.",
    note: "Pesacho savaitę tai vienintelė leidžiama duona – „vargo duona“, primenanti skubų išėjimą į laisvę."
  },
  {
    id: "padetine-duona",
    title: "Padėtinė duona",
    category: "duona",
    scripture: "Kunigų 24:5–9",
    verse: "Imk smulkių miltų ir iškepk dvylika papločių; sudėk juos dviem eilėmis ant gryno aukso stalo.",
    time: "3 val.",
    servings: "12 mažų kepalėlių",
    difficulty: "Vidutinis",
    tags: ["šventinė", "veganiška", "apeiginė"],
    ingredients: [
      "1,2 kg smulkiai maltų kvietinių miltų",
      "600 ml vandens",
      "2 a. š. druskos",
      "10 g mielių arba 200 g raugo",
      "3 v. š. alyvuogių aliejaus",
      "1 v. š. smilkalų grūdelių (tik ant stalo, ne į tešlą)"
    ],
    steps: [
      "Iš miltų, vandens, druskos, aliejaus ir mielių užminkyk tvirtą tešlą, minkyk 12 min.",
      "Kildink 1,5 val., kol dvigubai padidės.",
      "Padalyk į 12 lygių dalių (kiekviena po ~150 g) – pagal dvylika Izraelio giminių.",
      "Suformuok pailgus kepalėlius, kildink dar 40 min.",
      "Kepk 200 °C orkaitėje 25 min., kol viršus auksinis.",
      "Dėk dviem eilėmis po šešis, šalia pabarstyk smilkalų."
    ],
    balance: "Dvylika vienodų kepalėlių – natūralus porcijų dydžio matas: viena porcija vienam žmogui vienai dienai.",
    note: "Šventykloje ji būdavo keičiama kas šabą, o senoji atitekdavo kunigams. Namuose gali kepti kaip savaitės duoną ir keisti kas sekmadienį."
  },
  {
    id: "saros-paploteliai",
    title: "Saros paplotėliai svečiams",
    category: "duona",
    scripture: "Pradžios 18:6",
    verse: "Skubiai imk tris saikus smulkių miltų, minkyk ir kepk papločius.",
    time: "30 min.",
    servings: "10 paplotėlių",
    difficulty: "Lengvas",
    tags: ["greita", "svetingumas", "keptuvėje"],
    ingredients: [
      "400 g smulkių kvietinių miltų",
      "250 ml šilto vandens",
      "1 a. š. druskos",
      "2 v. š. alyvuogių aliejaus"
    ],
    steps: [
      "Sumaišyk visus produktus ir minkyk 5 min., kol tešla taps minkšta.",
      "Palik pailsėti 15 min. po rankšluosčiu.",
      "Padalyk į 10 rutuliukų, iškočiok iki 3–4 mm storio.",
      "Kepk sausoje įkaitusioje ketaus keptuvėje po 1–2 min. iš kiekvienos pusės, kol išsipučia burbulai.",
      "Iškeptus sudėk į rankšluostį – nuo garų jie liks minkšti."
    ],
    balance: "Šilta duona iškart iš keptuvės – svetingumo pagrindas. Paduodama su alyvuogių aliejumi ir isopu, sudaro pilnavertį lengvą užkandį.",
    note: "Abraomo vaišės po Mamrės ąžuolu – seniausias Biblijos „vakarienės receptas“: paplotėliai, varškė, pienas ir kepsnys."
  },
  {
    id: "elijo-paplotelis",
    title: "Elijo paplotėlis ant įkaitusių akmenų",
    category: "duona",
    scripture: "1 Karalių 19:6",
    verse: "Jis pažvelgė – prie galvos gulėjo ant įkaitusių akmenų iškeptas paplotis ir ąsotis vandens.",
    time: "40 min.",
    servings: "4 paplotėliai",
    difficulty: "Lengvas",
    tags: ["laužo maistas", "veganiška", "pilno grūdo"],
    ingredients: [
      "300 g pilno grūdo miltų",
      "100 g miežinių miltų",
      "250 ml vandens",
      "1 a. š. druskos",
      "1 v. š. alyvuogių aliejaus",
      "1 a. š. medaus"
    ],
    steps: [
      "Užminkyk tvirtą tešlą, palik pailsėti 20 min.",
      "Laužo žarijose įkaitink plokščius švarius akmenis arba naudok ketaus keptuvę.",
      "Iškočiok 5 mm storio papločius.",
      "Dėk ant įkaitusio akmens ir kepk po 4–5 min. iš kiekvienos pusės.",
      "Valgyk šiltą su vandeniu – taip, kaip pranašas dykumoje."
    ],
    balance: "Miežiai suteikia beta gliukanų, kurie palaiko pastovų cukraus kiekį kraujyje – todėl toks paplotis ilgai sotina kelionėje.",
    note: "Pagal pasakojimą, dviejų tokių paplotėlių Elijui užteko keturiasdešimčiai dienų kelio."
  },
  {
    id: "miezines-bandeles",
    title: "Miežinės bandelės (berniuko krepšelis)",
    category: "duona",
    scripture: "Jono 6:9",
    verse: "Čia yra berniukas, kuris turi penkis miežinės duonos kepalėlius ir dvi žuveles.",
    time: "2 val.",
    servings: "5 bandelės",
    difficulty: "Lengvas",
    tags: ["pilno grūdo", "vaikams", "pigus maistas"],
    ingredients: [
      "300 g miežinių miltų",
      "200 g kvietinių miltų",
      "300 ml drungno vandens",
      "7 g sausų mielių",
      "1,5 a. š. druskos",
      "2 v. š. alyvuogių aliejaus",
      "1 v. š. medaus"
    ],
    steps: [
      "Mieles su medumi ištirpink vandenyje, palik 10 min.",
      "Sumaišyk su miltais, druska ir aliejumi, minkyk 10 min.",
      "Kildink 1 val.",
      "Suformuok 5 apvalias bandeles, kildink 30 min.",
      "Kepk 200 °C 20–25 min."
    ],
    balance: "Miežiai buvo neturtingųjų grūdas, tačiau maistiniu požiūriu jie pranašesni už kviečius: daugiau skaidulų, mažesnis glikemijos indeksas.",
    note: "Iš šių penkių kepalėlių, pasak evangelijos, buvo pamaitinta minia – todėl jie tapo dosnumo simboliu."
  },
  {
    id: "aukos-pyragaiciai",
    title: "Aukos pyragaičiai su aliejumi",
    category: "duona",
    scripture: "Kunigų 2:4",
    verse: "Kai aukoji duonos atnašą, keptą orkaitėje, tebūna tai nerauginti pyragaičiai, sumaišyti su aliejumi, arba nerauginti papločiai, patepti aliejumi.",
    time: "35 min.",
    servings: "12 pyragaičių",
    difficulty: "Lengvas",
    tags: ["be mielių", "veganiška", "apeiginė"],
    ingredients: [
      "400 g smulkių miltų",
      "80 ml alyvuogių aliejaus (į tešlą)",
      "180 ml vandens",
      "1 a. š. druskos",
      "3 v. š. alyvuogių aliejaus tepimui",
      "1 v. š. sezamo sėklų"
    ],
    steps: [
      "Miltus sumaišyk su druska, įpilk aliejų ir trink pirštais, kol susidarys trupiniai.",
      "Įpilk vandenį ir suminkyk lygią tešlą; palik 15 min.",
      "Iškočiok 5 mm storio lakštą, išspausk 12 apskritimų.",
      "Sudėk ant kepimo popieriaus, patepk aliejumi, pabarstyk sezamu.",
      "Kepk 190 °C 15–18 min., kol kraštai auksiniai."
    ],
    balance: "Alyvuogių aliejus tešloje – mononesočiųjų riebalų šaltinis; su sezamu gaunama kalcio ir vitamino E.",
    note: "Duonos atnaša buvo vienintelė auka be kraujo – padėkos ir kasdienio darbo vaisiaus ženklas."
  },
  {
    id: "manu-paploteliai",
    title: "Manų paplotėliai su medumi",
    category: "duona",
    scripture: "Išėjimo 16:31",
    verse: "Izraelio namai pavadino tą maistą mana; ji buvo balta kaip kalendros sėkla, o skonis – kaip papločio su medumi.",
    time: "25 min.",
    servings: "8 paplotėliai",
    difficulty: "Lengvas",
    tags: ["saldu", "greita", "vaikams"],
    ingredients: [
      "250 g manų kruopų arba smulkių kvietinių miltų",
      "150 g graikiško jogurto arba augalinio kefyro",
      "3 v. š. medaus",
      "1 a. š. maltos kalendros",
      "1 žiupsnis druskos",
      "1 v. š. alyvuogių aliejaus"
    ],
    steps: [
      "Manų kruopas sumaišyk su jogurtu ir palik 15 min. išbrinkti.",
      "Įmaišyk medų, kalendrą ir druską.",
      "Įkaitink keptuvę su lašeliu aliejaus.",
      "Šaukštu dėk paplotėlius, kepk po 2 min. iš kiekvienos pusės ant vidutinės ugnies.",
      "Patiek šiltus, apšlakstytus medumi."
    ],
    balance: "Rytinis patiekalas su lėtais angliavandeniais ir pieno baltymu – energija ilgai išsilaiko be staigių cukraus šuolių.",
    note: "Manos negalima buvo kaupti atsargai – ji sugesdavo. Vienintelė išimtis – šabo išvakarės."
  },
  {
    id: "skrudinti-grudai",
    title: "Skrudinti grūdai su actu (pjovėjų užkandis)",
    category: "duona",
    scripture: "Rūtos 2:14",
    verse: "Boazas jai tarė: „Ateik čia, valgyk duonos ir pamerk kąsnį į actą.“ Jis padavė jai skrudintų grūdų.",
    time: "20 min.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["veganiška", "lauko maistas", "greita"],
    ingredients: [
      "300 g žalių kviečių arba spelta grūdų",
      "1 a. š. druskos",
      "2 v. š. alyvuogių aliejaus",
      "3 v. š. vyno acto",
      "1 a. š. maltų kmynų",
      "Šviežių mėtų lapelių"
    ],
    steps: [
      "Grūdus 4 val. mirkyk vandenyje, tada gerai nusausink.",
      "Barstyk plonu sluoksniu ant sausos ketaus keptuvės ir skrudink ant vidutinės ugnies 10–12 min., nuolat maišant, kol pradės sproginėti ir kvepėti riešutais.",
      "Karštus pabarstyk druska ir kmynais, apšlakstyk aliejumi.",
      "Acto įpilk į dubenėlį – į jį merkiami grūdai ir duona.",
      "Papuošk mėtomis."
    ],
    balance: "Actas sulėtina krakmolo virškinimą ir mažina glikemijos šuolį – senovinis būdas dirbant lauke išlaikyti jėgas.",
    note: "Tai vienintelis Biblijoje aprašytas pietų stalas lauke – pjovėjų pertrauka javapjūtėje."
  },

  /* ------------------------ SRIUBOS IR TROŠKINIAI ------------------------ */
  {
    id: "ezavo-lesiai",
    title: "Ezavo raudonųjų lęšių troškinys",
    category: "troskiniai",
    scripture: "Pradžios 25:29–34",
    verse: "Jokūbas davė Ezavui duonos ir lęšių troškinio; tas valgė, gėrė, atsikėlė ir nuėjo.",
    time: "45 min.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["veganiška", "baltyminga", "vieno puodo"],
    ingredients: [
      "300 g raudonųjų lęšių",
      "1 l vandens arba daržovių sultinio",
      "2 svogūnai",
      "3 česnako skiltelės",
      "3 v. š. alyvuogių aliejaus",
      "1 a. š. maltų kmynų",
      "1 a. š. maltos kalendros",
      "1/2 a. š. cinamono",
      "2 v. š. granatų sirupo arba citrinos sulčių",
      "Druskos, šviežių kalendrų"
    ],
    steps: [
      "Aliejuje pakepink kapotą svogūną 8 min., kol suminkštės ir paruduos.",
      "Suberk česnaką ir prieskonius, kepink 1 min.",
      "Suberk perplautus lęšius, užpilk vandeniu, užvirk.",
      "Virk ant mažos ugnies 25 min., retkarčiais pamaišant, kol lęšiai visai suskys.",
      "Pasūdyk, įpilk granatų sirupo.",
      "Patiek su šilta maca ir šviežiomis kalendromis."
    ],
    balance: "Lęšiai su duona – klasikinis baltymų derinys; vitamino C šaltinis (citrina arba granatas) padidina geležies pasisavinimą kelis kartus.",
    note: "Už šį dubenį Ezavas atidavė pirmagimystę – Biblijos priminimas, kad alkis blogas patarėjas svarbiems sprendimams."
  },
  {
    id: "danielio-darzoves",
    title: "Danielio dešimties dienų daržovės",
    category: "troskiniai",
    scripture: "Danieliaus 1:12–15",
    verse: "Pabandyk savo tarnus dešimt dienų: teduoda mums valgyti daržovių ir gerti vandens. Po dešimties dienų jų veidai atrodė sveikesni.",
    time: "50 min.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["veganiška", "pasninkas", "be aliejaus (galima)", "mažai riebalų"],
    ingredients: [
      "200 g žirnių arba avinžirnių (išmirkytų)",
      "150 g miežinių kruopų",
      "2 morkos",
      "1 poras",
      "2 saliero stiebai",
      "1 saujelė špinatų ar mangoldo",
      "1,2 l vandens",
      "2 lauro lapai",
      "1 a. š. kmynų",
      "2 v. š. alyvuogių aliejaus",
      "Druskos, krapų"
    ],
    steps: [
      "Avinžirnius virk 40 min., kol suminkštės (arba naudok konservuotus).",
      "Suberk miežines kruopas ir virk dar 20 min.",
      "Sudėk kapotas morkas, porą, salierą, lauro lapus ir kmynus; virk 12 min.",
      "Pabaigoje įmesk špinatus, pasūdyk, įpilk aliejaus.",
      "Patiek su šviežiais krapais ir juoda duona."
    ],
    balance: "Grynai augalinis, mažai riebalų turintis patiekalas – tinka dešimties dienų „Danieliaus pasninkui“. Miežiai plius ankštiniai vėl duoda pilną baltymą.",
    note: "Šis pasakojimas dažnai laikomas pirmuoju aprašytu mitybos eksperimentu su kontroline grupe."
  },
  {
    id: "gedeono-sultinys",
    title: "Gedeono ožiuko sultinys",
    category: "troskiniai",
    scripture: "Teisėjų 6:19–20",
    verse: "Gedeonas paruošė ožiuką ir neraugintos duonos; mėsą įdėjo į pintinę, sultinį supylė į puodą ir atnešė.",
    time: "2,5 val.",
    servings: "6 porcijos",
    difficulty: "Vidutinis",
    tags: ["mėsa", "sultinys", "šventinė"],
    ingredients: [
      "1,2 kg ožkienos arba ėrienos su kaulais",
      "2 svogūnai",
      "4 česnako skiltelės",
      "2 morkos",
      "1 a. š. juodųjų pipirų",
      "2 lauro lapai",
      "1 v. š. kmynų",
      "1 šakelė rozmarino ar isopo",
      "2,5 l vandens",
      "Druskos"
    ],
    steps: [
      "Mėsą užpilk šaltu vandeniu, užvirk ir nugriebk putas.",
      "Sudėk daržoves ir prieskonius, virk ant labai mažos ugnies 2 val.",
      "Mėsą išimk, atskirk nuo kaulų, supjaustyk.",
      "Sultinį perkošk, pasūdyk.",
      "Mėsą patiek atskirai su maca, o sultinį – dubenėliuose šalia."
    ],
    balance: "Ilgai virtas kaulų sultinys išskiria kolageną, glicino ir mineralų. Mėsa patiekiama atskirai – porcijos lieka saikingos.",
    note: "Mėsa ir sultinys nešami atskirai – tai buvo aukos, o ne kasdienio valgio forma. Ožkos pieno ir ožiuko mėsos kartu virti negalima (Iš 23:19)."
  },
  {
    id: "pupeliu-sriuba",
    title: "Pupelių, sorų ir spelta sriuba",
    category: "troskiniai",
    scripture: "Ezechielio 4:9",
    verse: "Kviečiai, miežiai, pupelės, lęšiai, soros ir spelta viename inde.",
    time: "1 val. 20 min.",
    servings: "6 porcijos",
    difficulty: "Lengvas",
    tags: ["veganiška", "baltyminga", "vieno puodo", "skaidulos"],
    ingredients: [
      "150 g baltųjų pupelių (mirkytų per naktį)",
      "100 g žalių lęšių",
      "80 g spelta grūdų",
      "50 g sorų",
      "1 svogūnas, 3 česnako skiltelės",
      "2 v. š. alyvuogių aliejaus",
      "1 a. š. kmynų, 1 a. š. kalendrų",
      "400 g pjaustytų pomidorų (arba 2 v. š. datulių tyrės rūgštumui balansuoti)",
      "1,5 l vandens",
      "Druskos, petražolių"
    ],
    steps: [
      "Pupeles virk 40 min.",
      "Suberk spelta grūdus, virk 20 min.",
      "Sudėk lęšius ir sorą, virk dar 15 min.",
      "Atskirai aliejuje pakepink svogūną, česnaką ir prieskonius, suversk į puodą.",
      "Įmaišyk pomidorus, pavirk 10 min., pasūdyk.",
      "Patiek su Ezekielio duonos rieke."
    ],
    balance: "Šeši Ezechielio komponentai viename dubenyje – tas pats baltyminis balansas kaip duonoje, tik lengviau virškinamas.",
    note: "Jei pomidorų vengi dėl istorinio tikslumo (jie į Artimuosius Rytus atkeliavo vėliau) – pakeisk juos granatų sirupu ir vandeniu."
  },
  {
    id: "egipto-trosk",
    title: "Egipto porų ir česnakų troškinys",
    category: "troskiniai",
    scripture: "Skaičių 11:5",
    verse: "Prisimename žuvį, kurią Egipte valgydavome dovanai, agurkus, melionus, porus, svogūnus ir česnakus.",
    time: "40 min.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["veganiška", "daržovės", "greita"],
    ingredients: [
      "3 dideli porai",
      "2 svogūnai",
      "1 česnako galvutė",
      "4 v. š. alyvuogių aliejaus",
      "300 g bulvių ar moliūgo (kad būtų sotu)",
      "700 ml daržovių sultinio",
      "1 a. š. kmynų",
      "Druskos, juodųjų pipirų, citrinos sulčių"
    ],
    steps: [
      "Porus supjaustyk pusžiedžiais, svogūnus – plonais griežinėliais.",
      "Aliejuje ant mažos ugnies kepink 15 min., kol suminkštės ir saldžiai kvepės.",
      "Suberk skiltelėmis pjaustytą česnaką ir kmynus, kepink 2 min.",
      "Sudėk kubeliais pjaustytas bulves, užpilk sultiniu, virk 15 min.",
      "Pasūdyk, įspausk citrinos, patiek su maca."
    ],
    balance: "Svogūniniai augalai – prebiotikų (inulino) šaltinis, maitinantis žarnyno mikrobiotą. Kepinami lėtai, jie natūraliai saldėja be cukraus.",
    note: "Tai maistas, kurio dykumoje ilgėjosi izraelitai. Prisiminimas, kad net vergovės valgiai gali atrodyti saldūs, kai kelias sunkus."
  },

  /* ------------------------ DARŽOVĖS IR SALOTOS ------------------------- */
  {
    id: "egipto-salotos",
    title: "Egipto agurkų ir melionų salotos",
    category: "darzoves",
    scripture: "Skaičių 11:5",
    verse: "Agurkai, melionai, porai, svogūnai ir česnakai.",
    time: "15 min.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["veganiška", "žalia", "vasarai", "greita"],
    ingredients: [
      "2 agurkai",
      "400 g meliono (geriausia – tinklinio)",
      "1 raudonasis svogūnas",
      "1 saujelė mėtų",
      "3 v. š. alyvuogių aliejaus",
      "2 v. š. vyno acto arba citrinos sulčių",
      "Druskos, juodųjų pipirų",
      "50 g ožkų sūrio (nebūtina)"
    ],
    steps: [
      "Agurkus ir melioną supjaustyk vienodais kubeliais.",
      "Svogūną supjaustyk plonais pusžiedžiais ir 5 min. pamirkyk šaltame vandenyje, kad neaitrėtų.",
      "Sumaišyk su kapotomis mėtomis.",
      "Užpilk aliejaus ir acto padažu, pasūdyk.",
      "Prieš patiekiant pabarstyk trupintu ožkų sūriu."
    ],
    balance: "Vandeningos daržovės ir vaisiai su druska bei aliejumi – natūralus elektrolitų atstatymas karštą dieną.",
    note: "Melionų ir agurkų laukai Nilo slėnyje buvo laistomi kojomis suktais ratais – todėl Biblijoje Egiptas vadinamas „daržovių kraštu“."
  },
  {
    id: "karciosios-zoleles",
    title: "Karčiosios žolelės su charosetu",
    category: "darzoves",
    scripture: "Išėjimo 12:8",
    verse: "Tą naktį tevalgo mėsą, keptą ugnyje, su neraugintais paplotėliais ir karčiosiomis žolelėmis.",
    time: "20 min.",
    servings: "6 porcijos",
    difficulty: "Lengvas",
    tags: ["Pesachas", "veganiška", "žalia", "apeiginė"],
    ingredients: [
      "1 krienų šaknis (~10 cm)",
      "1 gūžė salotinių trūkažolių (cikorijų) arba salotų",
      "1 saujelė petražolių",
      "Charosetui: 100 g datulių, 100 g figų, 80 g graikinių riešutų, 1 obuolys, 1 a. š. cinamono, 2 v. š. saldaus vyno arba vynuogių sulčių"
    ],
    steps: [
      "Krienus nutarkuok smulkia tarka – jie ir yra „karčioji žolelė“ (maror).",
      "Trūkažoles ir petražoles nuplauk, sudėk į lėkštę.",
      "Charosetui datules ir figas nuplikyk verdančiu vandeniu, nusausink.",
      "Sukapok su riešutais ir obuoliu iki grubios tyrės, įmaišyk cinamoną ir vyną.",
      "Patiek taip: kartus krienas – ant paplotėlio, saldus charosetas – šalia."
    ],
    balance: "Karti daržovė skatina tulžies išsiskyrimą ir riebalų virškinimą – todėl ji dera prie riebios šventinės mėsos.",
    note: "Kartumas primena vergovės kartėlį, o charoseto tekstūra – molį, iš kurio buvo daromos plytos. Skonis čia yra atmintis."
  },
  {
    id: "alyvuoges-isopas",
    title: "Marinuotos alyvuogės su isopu",
    category: "darzoves",
    scripture: "Psalmyno 51:9; Išėjimo 12:22",
    verse: "Apvalyk mane isopu, ir būsiu švarus.",
    time: "20 min. + 3 paros",
    servings: "1 stiklainis (500 g)",
    difficulty: "Lengvas",
    tags: ["veganiška", "užkandis", "atsargoms"],
    ingredients: [
      "500 g žalių arba juodųjų alyvuogių",
      "1 v. š. džiovinto isopo (arba čiobrelių)",
      "4 česnako skiltelės",
      "1 citrinos žievelė",
      "1 a. š. kalendros sėklų",
      "150 ml alyvuogių aliejaus",
      "50 ml vyno acto",
      "1 a. š. druskos"
    ],
    steps: [
      "Alyvuoges nuplauk ir nusausink, kiekvieną lengvai įpjauk peiliu.",
      "Sumaišyk su česnaku, žolelėmis, žievele ir druska.",
      "Sudėk į stiklainį, užpilk aliejaus ir acto mišiniu, kad apsemtų.",
      "Laikyk kambario temperatūroje 3 paras, kasdien papurtydamas.",
      "Toliau laikyk šaldytuve iki mėnesio."
    ],
    balance: "Alyvuogės – mononesočiųjų riebalų ir polifenolių šaltinis. Isopas (Origanum syriacum) turi karvakrolio, pasižyminčio antimikrobiniu poveikiu.",
    note: "Isopas Biblijoje – apvalymo augalas: juo buvo šlakstomi namų staktai per pirmąją Pesacho naktį."
  },

  /* --------------------------- ŽUVIS IR MĖSA ---------------------------- */
  {
    id: "zuvis-ant-zarju",
    title: "Žuvis ant žarijų prie ežero",
    category: "zuvis-mesa",
    scripture: "Jono 21:9",
    verse: "Išlipę į krantą, jie pamatė žarijas, ant jų padėtą žuvį ir duonos.",
    time: "30 min.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["žuvis", "ant laužo", "baltyminga", "omega-3"],
    ingredients: [
      "4 nedidelės žuvys (karpiai, tilapijos ar upėtakiai)",
      "3 v. š. alyvuogių aliejaus",
      "2 citrinos",
      "1 saujelė šviežio isopo ar čiobrelių",
      "4 česnako skiltelės",
      "Stambios druskos",
      "Duonos patiekimui"
    ],
    steps: [
      "Žuvis išvalyk, pilvo ertmę pasūdyk ir prikimšk žolelių, česnako ir citrinos griežinėlių.",
      "Ištepk aliejumi iš išorės ir pabarstyk stambia druska.",
      "Kepk ant žarijų (be liepsnos!) po 6–8 min. iš kiekvienos pusės, priklausomai nuo dydžio.",
      "Toje pačioje ugnyje pašildyk duonos riekes.",
      "Patiek su citrinos skiltele."
    ],
    balance: "Ežerų žuvis – lengvai virškinamas baltymas su omega-3 riebalų rūgštimis; kepimas ant žarijų nereikalauja papildomų riebalų.",
    note: "Toks buvo paskutinis Evangelijoje aprašytas pusryčių stalas: žuvis, duona ir pokalbis prie ugnies."
  },
  {
    id: "zuvis-su-koriu",
    title: "Kepta žuvis su medaus koriu",
    category: "zuvis-mesa",
    scripture: "Luko 24:42",
    verse: "Jie padavė jam keptos žuvies gabalą ir korio medaus.",
    time: "25 min.",
    servings: "2 porcijos",
    difficulty: "Lengvas",
    tags: ["žuvis", "saldu ir sūru", "greita"],
    ingredients: [
      "2 žuvies filė (~400 g)",
      "2 v. š. alyvuogių aliejaus",
      "2 v. š. skysto medaus arba gabalėlis korio",
      "1 a. š. kmynų",
      "1/2 citrinos",
      "Druskos, juodųjų pipirų",
      "Šviežių mėtų"
    ],
    steps: [
      "Filė pasūdyk, pabarstyk kmynais.",
      "Įkaitintoje keptuvėje su aliejumi kepk odele žemyn 4 min., apversk – dar 3 min.",
      "Nukelk nuo ugnies, apšlakstyk citrinos sultimis.",
      "Šalia dėk gabalėlį korio arba apšlakstyk medumi.",
      "Papuošk mėtomis."
    ],
    balance: "Medus prie baltymingo patiekalo duoda greitai įsisavinamos energijos – todėl toks derinys buvo tinkamas silpstančiam ar keliaujančiam žmogui.",
    note: "Šis derinys evangelijoje pasirodo kaip įrodymas, kad prisikėlęs Mokytojas yra tikras, ne vaiduoklis: jis valgo tikrą maistą."
  },
  {
    id: "pesacho-avinelis",
    title: "Pesacho avinėlis ant ugnies",
    category: "zuvis-mesa",
    scripture: "Išėjimo 12:8–9",
    verse: "Tenevalgo jos žalios ar virtos vandenyje, bet keptos ugnyje – su galva, kojomis ir vidumi.",
    time: "3 val.",
    servings: "8 porcijos",
    difficulty: "Sudėtingas",
    tags: ["Pesachas", "mėsa", "ant ugnies", "šventinė"],
    ingredients: [
      "2 kg ėrienos kumpio arba mentės su kaulu",
      "6 česnako skiltelės",
      "3 v. š. alyvuogių aliejaus",
      "2 v. š. maltų kmynų",
      "1 v. š. maltos kalendros",
      "1 a. š. juodųjų pipirų",
      "2 šakelės rozmarino, 1 sauja isopo",
      "Stambios druskos"
    ],
    steps: [
      "Mėsą įtrink druska ir palik 1 val. kambario temperatūroje.",
      "Sumaišyk aliejų, česnaką ir prieskonius į tirštą pastą, ja išteptuok visą kumpį.",
      "Kepk ant lėtos žarijų ugnies arba orkaitėje 160 °C 2–2,5 val., kas 30 min. apversdamas ir apšlakstydamas sultimis.",
      "Paskutines 15 min. pakelk temperatūrą iki 220 °C, kad viršus apskrustų.",
      "Prieš pjaustant palik pailsėti 20 min. Patiek su maca ir karčiosiomis žolelėmis."
    ],
    balance: "Vienas riebus patiekalas per metų šventę – ne kasdienis maistas. Kartu patiekiamos karčiosios žolelės ir nerauginta duona subalansuoja porciją.",
    note: "Taisyklė „nesulaužykite nė vieno kaulo“ (Iš 12:46) reiškia, kad avinėlis kepamas sveikas, o ne kapojamas gabalais."
  },
  {
    id: "putpeles",
    title: "Keptos putpelės su kmynais",
    category: "zuvis-mesa",
    scripture: "Skaičių 11:31–32",
    verse: "Pakilo vėjas ir atnešė nuo jūros putpelių, ir jos krito aplink stovyklą.",
    time: "45 min.",
    servings: "4 porcijos",
    difficulty: "Vidutinis",
    tags: ["mėsa", "šventinė", "orkaitėje"],
    ingredients: [
      "8 putpelės (arba 1,2 kg vištienos šlaunelių)",
      "4 v. š. alyvuogių aliejaus",
      "1 v. š. kmynų",
      "1 a. š. maltos kalendros",
      "1/2 a. š. cinamono",
      "3 v. š. granatų sirupo",
      "1 svogūnas",
      "Druskos, pipirų, granatų sėklų puošimui"
    ],
    steps: [
      "Putpeles išvalyk, nusausink, įtrink druska ir prieskoniais.",
      "Palaikyk marinate su aliejumi ir granatų sirupu bent 30 min.",
      "Kepimo indo dugną išklok svogūnų griežinėliais, ant jų dėk paukštieną.",
      "Kepk 200 °C 30–35 min., viduryje apšlakstyk susidariusiomis sultimis.",
      "Patiek pabarsčius šviežiomis granatų sėklomis."
    ],
    balance: "Smulki paukštiena yra liesa; granatų sirupas suteikia rūgštumo ir polifenolių, kurie padeda virškinti mėsą.",
    note: "Dykumoje putpelių persivalgymas baigėsi liga – Biblijos pamoka apie saiką net su leistinu maistu."
  },

  /* --------------------------- PIENO GĖRYBĖS ---------------------------- */
  {
    id: "abraomo-vaises",
    title: "Abraomo vaišės: varškė, pienas ir duona",
    category: "pienas",
    scripture: "Pradžios 18:8",
    verse: "Jis paėmė varškės, pieno bei paruoštą veršiuką ir padėjo prieš juos.",
    time: "10 min. (+ nakties varvinimas)",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["pieniška", "svetingumas", "greita"],
    ingredients: [
      "500 g natūralaus jogurto (geriausia – avies ar ožkos pieno)",
      "1/2 a. š. druskos",
      "3 v. š. alyvuogių aliejaus",
      "1 a. š. isopo mišinio (zaatar)",
      "Šviežios duonos ar macos",
      "Alyvuogių"
    ],
    steps: [
      "Jogurtą sumaišyk su druska.",
      "Sudėk į marlę, pakabink virš dubens ir palik varvėti per naktį šaldytuve – gausi tirštą labaneh.",
      "Ryte išdėliok į lėkštę, kaušeliu padaryk įdubą.",
      "Įpilk alyvuogių aliejaus, pabarstyk isopu.",
      "Patiek su šilta duona ir alyvuogėmis."
    ],
    balance: "Fermentuotas pienas – probiotikai ir lengvai pasisavinamas kalcis; laktozės jame gerokai mažiau nei šviežiame piene.",
    note: "Trys keliauninkai po ąžuolu buvo pavaišinti be klausimų, kas jie tokie. Svetingumas Biblijoje yra pirmesnis už pažintį."
  },
  {
    id: "ozku-suris",
    title: "Naminis ožkų pieno sūris",
    category: "pienas",
    scripture: "1 Samuelio 17:18",
    verse: "O šiuos dešimt sūrių nunešk tūkstantininkui ir pažiūrėk, kaip laikosi tavo broliai.",
    time: "1,5 val. + 6 val. spaudimo",
    servings: "~400 g sūrio",
    difficulty: "Vidutinis",
    tags: ["pieniška", "atsargoms", "baltyminga"],
    ingredients: [
      "3 l ožkos (arba karvės) pieno",
      "100 ml šviežių citrinos sulčių arba 3 v. š. vyno acto",
      "1,5 a. š. druskos",
      "1 a. š. džiovinto isopo (nebūtina)"
    ],
    steps: [
      "Pieną lėtai pašildyk iki 85 °C, nuolat maišydamas, kad nepridegtų.",
      "Nukelk nuo ugnies, supilk citrinos sultis, švelniai pamaišyk – varškė atsiskirs nuo išrūgų per 10 min.",
      "Perkošk per marlę, palik nuvarvėti 30 min.",
      "Įmaišyk druską ir isopą, suformuok apvalų sūrelį.",
      "Suvyniok į marlę, prispausk 1 kg svarmeniu ir laikyk šaldytuve 6 val."
    ],
    balance: "Ožkos pieno riebalų rutuliukai smulkesni nei karvės, todėl sūris lengviau virškinamas; kalcio – apie 500 mg 100 g.",
    note: "Dovydas nešė sūrius broliams į karo stovyklą – taip prasideda pasakojimas apie Galijotą. Sūris buvo keliaujantis maistas."
  },
  {
    id: "sviestas-medus",
    title: "Sviestas ir medus (Emanuelio pusryčiai)",
    category: "pienas",
    scripture: "Izaijo 7:15",
    verse: "Jis valgys sviestą ir medų, kol išmoks atmesti pikta ir rinktis gera.",
    time: "20 min.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["pieniška", "greita", "vaikams", "pusryčiai"],
    ingredients: [
      "500 ml riebios grietinėlės (naminiam sviestui) arba 150 g sviesto",
      "4 v. š. medaus",
      "1 žiupsnis druskos",
      "Šviežios duonos riekės",
      "Maltų riešutų (nebūtina)"
    ],
    steps: [
      "Šaltą grietinėlę plak maišytuvu 8–10 min., kol atsiskirs sviestas nuo pasukų.",
      "Sviestą išplauk šaltu vandeniu, kad ilgiau laikytųsi, įmaišyk druskos.",
      "Duonos riekes apskrudink ant sausos keptuvės.",
      "Storai užtepk sviesto, užpilk medaus.",
      "Pabarstyk maltais riešutais."
    ],
    balance: "Riebalai lėtina medaus cukrų pasisavinimą, todėl toks derinys sotina ilgiau nei vien saldi duona.",
    note: "Pranašo eilutė kalba apie paprastą, bet pilnavertį vaiko maistą – tai maisto ir moralinio brendimo įvaizdis."
  },

  /* ------------------------ VAISIAI IR SALDUMYNAI ----------------------- */
  {
    id: "figu-pyragaiciai",
    title: "Spaustų figų pyragaičiai (debelim)",
    category: "saldumynai",
    scripture: "1 Samuelio 25:18",
    verse: "Abigailė skubiai paėmė du šimtus duonos kepalų, du vynmaišius vyno, penkis paruoštus avinus, šimtą razinų ir du šimtus figų pyragaičių.",
    time: "30 min. + 2 val. džiovinimo",
    servings: "12 pyragaičių",
    difficulty: "Lengvas",
    tags: ["veganiška", "be cukraus", "kelionei", "saldu"],
    ingredients: [
      "400 g džiovintų figų",
      "100 g migdolų",
      "50 g sezamo sėklų",
      "1 a. š. cinamono",
      "1/2 a. š. maltų gvazdikėlių",
      "1 v. š. medaus (nebūtina)",
      "1 v. š. citrinos sulčių"
    ],
    steps: [
      "Figas užpilk verdančiu vandeniu 10 min., nusunk, nupjaustyk kotelius.",
      "Migdolus paskrudink sausoje keptuvėje 5 min.",
      "Viską sumalk smulkintuvu iki lipnios masės.",
      "Suformuok 12 plokščių pyragaičių, apvoliok sezame.",
      "Džiovink 60 °C orkaitėje 2 val. arba saulėje visą dieną – tada jie laikysis savaites."
    ],
    balance: "Figos – vienas geriausių augalinių kalcio šaltinių (apie 160 mg 100 g), o su migdolais gaunama magnio ir vitamino E.",
    note: "Tokie presuoti pyragaičiai buvo senovės „energijos batonėliai“: lengvi, nesugendantys, tinkantys kariams ir keliauninkams."
  },
  {
    id: "raziniu-pyragaitis",
    title: "Razinų pyragaitis",
    category: "saldumynai",
    scripture: "2 Samuelio 6:19; Giesmių giesmė 2:5",
    verse: "Sustiprinkite mane razinų pyragaičiais, atgaivinkite obuoliais, nes aš alpstu iš meilės.",
    time: "1 val.",
    servings: "16 gabaliukų",
    difficulty: "Lengvas",
    tags: ["saldu", "šventinė", "be rafinuoto cukraus"],
    ingredients: [
      "300 g razinų",
      "150 g datulių",
      "200 g spelta miltų",
      "80 ml alyvuogių aliejaus",
      "100 ml vynuogių sulčių",
      "2 kiaušiniai (arba 2 v. š. linų sėmenų + 6 v. š. vandens)",
      "1 a. š. cinamono",
      "1 a. š. kepimo miltelių",
      "1 žiupsnis druskos",
      "60 g graikinių riešutų"
    ],
    steps: [
      "Razinas ir datules 20 min. mirkyk vynuogių sultyse.",
      "Datules sutrink į tyrę, razinas palik sveikas.",
      "Sumaišyk sausas sudedamąsias dalis.",
      "Įmaišyk aliejų, kiaušinius ir datulių tyrę, tada razinas bei riešutus.",
      "Kepk 24 cm formoje 175 °C 35–40 min. Ataušink prieš pjaustant."
    ],
    balance: "Saldumas gaunamas tik iš vaisių; skaidulos ir riešutų riebalai išlygina cukraus kreivę.",
    note: "Dovydas tokį pyragaitį įteikė kiekvienam žmogui, kai Sandoros skrynia buvo atnešta į Jeruzalę – šventės dovana visai tautai."
  },
  {
    id: "granatai-migdolai",
    title: "Granatų ir migdolų desertas",
    category: "saldumynai",
    scripture: "Pradžios 43:11; Išėjimo 25:33",
    verse: "Imkite geriausių krašto vaisių – balzamo, medaus, kvepalų, mirų, riešutų ir migdolų.",
    time: "15 min.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["greita", "žalia", "antioksidantai", "veganiška (galima)"],
    ingredients: [
      "2 granatai",
      "100 g migdolų",
      "300 g graikiško jogurto arba kokosų jogurto",
      "3 v. š. medaus",
      "1 a. š. rožių vandens (nebūtina)",
      "Mėtų lapelių"
    ],
    steps: [
      "Granatus perpjauk ir išlukštenk sėklas (patogiausia – po vandeniu).",
      "Migdolus paskrudink ir stambiai sukapok.",
      "Jogurtą sumaišyk su medumi ir rožių vandeniu.",
      "Sluoksniuok stiklinėse: jogurtas, granatai, migdolai.",
      "Papuošk mėta ir patiek iškart."
    ],
    balance: "Granatų punikalaginai – vieni stipriausių žinomų augalinių antioksidantų; su baltymingu jogurtu tai pilnavertis desertas.",
    note: "Granatas – Pažadėtosios žemės vaisius ir vyriausiojo kunigo drabužio ornamentas; migdolų žiedai puošė šventyklos žvakidę."
  },
  {
    id: "pupmedzio-batoneliai",
    title: "Saldžiavaisio pupmedžio ir laukinio medaus batonėliai",
    category: "saldumynai",
    scripture: "Mato 3:4",
    verse: "Jonas vilkėjo kupranugario vilnų drabužį, o jo maistas buvo skėriai ir laukinis medus.",
    time: "20 min. + 1 val. šaldymo",
    servings: "10 batonėlių",
    difficulty: "Lengvas",
    tags: ["veganiška (su sirupu)", "kelionei", "be kepimo"],
    ingredients: [
      "150 g saldžiavaisio pupmedžio (karobo) miltelių",
      "150 g datulių",
      "100 g sezamo sėklų",
      "80 g migdolų arba lazdyno riešutų",
      "4 v. š. laukinio medaus",
      "2 v. š. alyvuogių ar sezamo aliejaus",
      "1 žiupsnis druskos"
    ],
    steps: [
      "Sezamą ir riešutus paskrudink sausoje keptuvėje.",
      "Datules sumalk su medumi ir aliejumi į tirštą pastą.",
      "Įmaišyk karobo miltelius, riešutus, sezamą ir druską.",
      "Išlygink masę 2 cm sluoksniu ant kepimo popieriaus.",
      "Šaldyk 1 val., supjaustyk batonėliais, laikyk sandariai."
    ],
    balance: "Karobas neturi kofeino ir teobromino, bet turi kalcio bei skaidulų – tai natūralus šokolado pakaitalas.",
    note: "Saldžiavaisio pupmedžio ankštys angliškai iki šiol vadinamos „St John's bread“ – pagal seną aiškinimą, kad būtent jos, o ne vabzdžiai, buvo Jono maistas."
  },
  {
    id: "datuliu-medus",
    title: "Datulių medus (silan)",
    category: "saldumynai",
    scripture: "Pakartoto Įstatymo 8:8",
    verse: "Kraštas kviečių ir miežių, vynmedžių, figų ir granatų, alyvmedžių ir medaus.",
    time: "2 val.",
    servings: "~400 ml sirupo",
    difficulty: "Vidutinis",
    tags: ["veganiška", "saldiklis", "atsargoms"],
    ingredients: [
      "1 kg datulių (medjool arba deglet nour)",
      "1,5 l vandens",
      "1 v. š. citrinos sulčių"
    ],
    steps: [
      "Datules išimk iš kauliukų, užpilk vandeniu ir virk 45 min.",
      "Sutrink trintuvu, tada perkošk per tankų sietą ir marlę, gerai išspausk.",
      "Skystį vėl užvirk ir garink ant mažos ugnies 45–60 min., kol sutirštės iki sirupo.",
      "Pabaigoje įmaišyk citrinos sultis.",
      "Supilk į sterilų stiklainį; šaldytuve laikosi iki 3 mėn."
    ],
    balance: "Vienintelis „medus“, kurį gali valgyti ir veganas. Turi kalio, magnio ir geležies – kitaip nei baltasis cukrus.",
    note: "Daugelis tyrėjų mano, kad Biblijos „pieno ir medaus kraštas“ kalba būtent apie datulių medų, o ne bičių."
  },

  /* ------------------------------ GĖRIMAI ------------------------------- */
  {
    id: "vynuogiu-gerimas",
    title: "Nefermentuotas vynuogių gėrimas su mėtomis",
    category: "gerimai",
    scripture: "Skaičių 6:3; Izaijo 65:8",
    verse: "Kai kekėje randama sulčių, sakoma: nesunaikink jos, nes joje palaiminimas.",
    time: "20 min.",
    servings: "1,5 l",
    difficulty: "Lengvas",
    tags: ["be alkoholio", "veganiška", "nazyrams"],
    ingredients: [
      "1,5 kg tamsių vynuogių",
      "1 l vandens",
      "1 saujelė mėtų",
      "2 v. š. medaus (nebūtina)",
      "1/2 citrinos"
    ],
    steps: [
      "Vynuoges nuskink nuo šakelių, nuplauk.",
      "Sudėk į puodą su vandeniu, užvirk ir virk 12 min., dažnai spausdamas grūstuvu.",
      "Perkošk per marlę, neišspausdamas per stipriai – kitaip gėrimas drums.",
      "Įmaišyk medų ir citrinos sultis, sudėk mėtas.",
      "Atvėsink; laikyk šaldytuve iki 4 dienų."
    ],
    balance: "Tamsių vynuogių odelėse yra resveratrolio ir antocianinų. Be alkoholio – tinka visiems, taip pat davusiems nazyro įžadą.",
    note: "Nazyras negalėjo gerti nieko, kas pagaminta iš vynmedžio, net razinų. Šis gėrimas – šventinė alternatyva vynui."
  },
  {
    id: "posca",
    title: "Posca – pjovėjų rūgštusis gėrimas",
    category: "gerimai",
    scripture: "Rūtos 2:14; Mato 27:48",
    verse: "Pamerk savo kąsnį į actą.",
    time: "5 min.",
    servings: "1 l",
    difficulty: "Lengvas",
    tags: ["be alkoholio", "elektrolitai", "greita", "darbui"],
    ingredients: [
      "1 l vandens",
      "3 v. š. vyno acto",
      "1 v. š. medaus",
      "1/4 a. š. druskos",
      "Mėtų ar isopo šakelė"
    ],
    steps: [
      "Medų ištirpink šiltame vandens puodelyje.",
      "Supilk į ąsotį su likusiu vandeniu.",
      "Įmaišyk actą ir druską.",
      "Įdėk žolelių šakelę, palaikyk 15 min.",
      "Gerk atvėsintą darbo pertraukų metu."
    ],
    balance: "Vanduo, druska ir šiek tiek cukraus – tikslus izotoninio gėrimo receptas, žinomas 3000 metų anksčiau už sportinius gėrimus.",
    note: "Tai buvo romėnų legionierių ir laukų darbininkų gėrimas. Būtent poscą, o ne prastą vyną, kareivis padavė ant kryžiaus."
  },
  {
    id: "pienas-medus",
    title: "Pieno ir medaus gėrimas su kardamonu",
    category: "gerimai",
    scripture: "Išėjimo 3:8",
    verse: "Nuvesiu jus į gerą ir plačią žemę, tekančią pienu ir medumi.",
    time: "10 min.",
    servings: "2 puodeliai",
    difficulty: "Lengvas",
    tags: ["pieniška", "vakarui", "greita"],
    ingredients: [
      "500 ml pieno (ožkos, karvės ar migdolų)",
      "2 v. š. medaus",
      "3 kardamono kapsulės",
      "1 žiupsnis cinamono",
      "1 žiupsnis druskos"
    ],
    steps: [
      "Pieną su pertrintomis kardamono kapsulėmis pašildyk iki 70 °C – neužvirink.",
      "Nukelk nuo ugnies, palik pastovėti 5 min.",
      "Perkošk, įmaišyk medų (į karštą nekišk – praranda fermentus).",
      "Pabarstyk cinamonu ir žiupsniu druskos.",
      "Gerk šiltą prieš miegą."
    ],
    balance: "Šiltas pienas su triptofanu ir nedideliu kiekiu angliavandenių padeda nusiraminti vakare.",
    note: "„Pienas ir medus“ Biblijoje reiškia ne desertą, o gerovę: ganyklas gyvuliams ir žydinčius laukus bitėms."
  },

  /* --------------------- PRIESKONIAI IR PADAŽAI ------------------------- */
  {
    id: "zaatar",
    title: "Isopo prieskonių mišinys (zaatar)",
    category: "prieskoniai",
    scripture: "Psalmyno 51:9",
    verse: "Apvalyk mane isopu, ir būsiu švarus; nuplauk mane, ir tapsiu baltesnis už sniegą.",
    time: "10 min.",
    servings: "1 stiklainis (~150 g)",
    difficulty: "Lengvas",
    tags: ["veganiška", "atsargoms", "be druskos (galima)"],
    ingredients: [
      "4 v. š. džiovinto isopo arba čiobrelių",
      "3 v. š. sezamo sėklų",
      "1 v. š. sumacho",
      "1 a. š. maltų kmynų",
      "1 a. š. jūros druskos"
    ],
    steps: [
      "Sezamą paskrudink sausoje keptuvėje 3–4 min., kol pradės šokinėti.",
      "Ataušink, kad neapkarstų.",
      "Žoleles sutrink grūstuvėje su druska.",
      "Sumaišyk viską kartu.",
      "Laikyk sandariame stiklainyje tamsoje iki 6 mėn."
    ],
    balance: "Prieskonių mišinys leidžia sumažinti druskos kiekį patiekaluose išsaugant skonį; sezamas prideda kalcio.",
    note: "Isopu su duona ir alyvuogių aliejumi pusryčiaujama nuo Biblijos laikų iki šiandienos."
  },
  {
    id: "garstyciu-padazas",
    title: "Garstyčių sėklų padažas",
    category: "prieskoniai",
    scripture: "Mato 13:31–32",
    verse: "Dangaus karalystė panaši į garstyčios grūdelį – mažiausią iš visų sėklų, kuris išaugęs tampa medeliu.",
    time: "15 min. + 2 paros",
    servings: "1 stiklainiukas (200 ml)",
    difficulty: "Lengvas",
    tags: ["veganiška", "aštru", "atsargoms"],
    ingredients: [
      "4 v. š. geltonųjų garstyčių sėklų",
      "2 v. š. rudųjų garstyčių sėklų",
      "100 ml vyno acto",
      "50 ml vandens",
      "1 v. š. medaus",
      "1/2 a. š. druskos",
      "1 a. š. alyvuogių aliejaus"
    ],
    steps: [
      "Sėklas užpilk actu ir vandeniu, palik 24 val. brinkti.",
      "Sutrink grūstuvėje arba trintuvu – kiek nori tirštumo, tiek ir malk.",
      "Įmaišyk medų, druską ir aliejų.",
      "Perkelk į stiklainį ir palik dar parai kambario temperatūroje – skonis subręs.",
      "Laikyk šaldytuve iki 3 mėn."
    ],
    balance: "Garstyčių sėklose esantys glikozinolatai skatina virškinimo sultis – todėl padažas dera prie riebios mėsos.",
    note: "Palyginime svarbus ne skonis, o dydis: mažiausias grūdelis tampa krūmu, kuriame gali sutūpti paukščiai."
  },
  {
    id: "desimtines-prieskoniai",
    title: "Mėtų, krapų ir kmynų druska",
    category: "prieskoniai",
    scripture: "Mato 23:23",
    verse: "Jūs duodate dešimtinę nuo mėtų, krapų ir kmynų, o apleidžiate, kas svarbiausia įstatyme.",
    time: "15 min.",
    servings: "1 stiklainis (~120 g)",
    difficulty: "Lengvas",
    tags: ["veganiška", "atsargoms", "greita"],
    ingredients: [
      "3 v. š. džiovintų mėtų",
      "3 v. š. džiovintų krapų",
      "2 v. š. kmynų sėklų",
      "2 v. š. jūros druskos",
      "1 a. š. maltų juodųjų pipirų",
      "1 a. š. citrinos žievelės"
    ],
    steps: [
      "Kmynus lengvai paskrudink sausoje keptuvėje 2 min.",
      "Sutrink grūstuvėje su druska.",
      "Įmaišyk mėtas, krapus, pipirus ir džiovintą citrinos žievelę.",
      "Sudėk į stiklainį.",
      "Barstyk ant daržovių, sūrio ir žuvies."
    ],
    balance: "Mėtos ir krapai gerina virškinimą, kmynai mažina pilvo pūtimą – trys prieskoniai, nuo kurių Evangelijoje buvo mokama dešimtinė.",
    note: "Eilutė – ne apie prieskonius, o apie proporcijas: smulkmenos neturi užgožti teisingumo ir gailestingumo."
  },
  {
    id: "charosetas",
    title: "Charosetas – datulių ir riešutų tyrė",
    category: "prieskoniai",
    scripture: "Išėjimo 1:14",
    verse: "Jie gyvenimą jiems kartino sunkiu darbu su moliu ir plytomis.",
    time: "20 min.",
    servings: "500 g",
    difficulty: "Lengvas",
    tags: ["Pesachas", "veganiška", "saldu", "be kepimo"],
    ingredients: [
      "200 g datulių",
      "100 g džiovintų figų",
      "100 g graikinių riešutų",
      "1 obuolys",
      "1 a. š. cinamono",
      "1/4 a. š. imbiero",
      "3 v. š. saldaus raudonojo vyno arba vynuogių sulčių",
      "1 v. š. citrinos sulčių"
    ],
    steps: [
      "Datules ir figas nuplikyk, nusausink, išimk kauliukus.",
      "Riešutus paskrudink 5 min.",
      "Obuolį stambiai sutarkuok.",
      "Viską sukapok peiliu (ne trintuvu – reikia grubios, molio primenančios tekstūros).",
      "Įmaišyk vyną, citriną ir prieskonius, palik 1 val. subręsti."
    ],
    balance: "Vaisių ir riešutų mišinys su daug kalio ir magnio; be pridėtinio cukraus.",
    note: "Charosetas ant Pesacho stalo vaizduoja molį, iš kurio Egipte buvo minamos plytos. Saldus valgis, primenantis kartų darbą."
  },
  {
    id: "alyvuogiu-aliejus",
    title: "Šventoji alyvuogių aliejaus mirkalas su prieskoniais",
    category: "prieskoniai",
    scripture: "Išėjimo 30:23–25",
    verse: "Imk geriausių kvepalų: miros, cinamono, kvapiosios nendrės ir kasijos, ir alyvuogių aliejaus.",
    time: "10 min. + 1 savaitė",
    servings: "250 ml",
    difficulty: "Lengvas",
    tags: ["veganiška", "duonai", "atsargoms"],
    ingredients: [
      "250 ml pirmojo spaudimo alyvuogių aliejaus",
      "1 cinamono lazdelė",
      "3 česnako skiltelės",
      "1 a. š. kalendros sėklų",
      "1 a. š. kmynų",
      "1 šakelė rozmarino arba isopo",
      "1/2 a. š. juodųjų pipirų"
    ],
    steps: [
      "Prieskonius lengvai pakaitink sausoje keptuvėje, kad atsivertų aromatas.",
      "Sudėk į švarų butelį kartu su žolelėmis ir česnaku.",
      "Užpilk aliejumi (česnaką naudok džiovintą, jei laikysi ilgiau nei savaitę).",
      "Palik tamsioje vietoje savaitei.",
      "Patiek dubenėlyje šiltai duonai mirkyti."
    ],
    balance: "Alyvuogių aliejus prie duonos yra pagrindinis Viduržemio jūros mitybos riebalų šaltinis, siejamas su sveikesne širdimi.",
    note: "Šventasis patepimo aliejus buvo skirtas tik šventyklai. Šis – kasdienis stalo variantas, tik su tais pačiais kvapais."
  },

  /* --------------------- BLYNAI IR KEPTUVĖS PAPLOČIAI -------------------- */
  {
    id: "tamaros-blynai",
    title: "Tamaros blynai (levivot)",
    category: "blynai",
    scripture: "2 Samuelio 13:6–8",
    verse: "Teateina mano sesuo Tamara ir tepakepa mano akivaizdoje porą blynų, kad valgyčiau iš jos rankos.",
    time: "35 min.",
    servings: "10 blynų",
    difficulty: "Lengvas",
    tags: ["blynai", "keptuvėje", "ligoniui", "saldu"],
    ingredients: [
      "250 g smulkių kvietinių miltų",
      "200 ml šilto vandens arba pieno",
      "1 kiaušinis (arba 2 v. š. sumaltų linų sėmenų su 6 v. š. vandens)",
      "2 v. š. medaus",
      "1 žiupsnis druskos",
      "1/2 a. š. cinamono",
      "Alyvuogių aliejaus kepimui",
      "Datulių medaus ir sezamo patiekimui"
    ],
    steps: [
      "Miltus sumaišyk su druska ir cinamonu.",
      "Įplak kiaušinį, medų ir vandenį – tešla turi būti kaip tiršta grietinė.",
      "Palik pastovėti 15 min., kad miltai išbrinktų.",
      "Įkaitink keptuvę su plonu aliejaus sluoksniu, šaukštu dėk blynus.",
      "Kepk po 2 min. iš kiekvienos pusės, kol kraštai auksiniai.",
      "Patiek karštus, apšlakstytus datulių medumi ir pabarstytus sezamu."
    ],
    balance: "Skystos tešlos blynai virškinami lengviau nei kepalas duonos – todėl Biblijoje jie ruošiami ligoniui. Su pienu ar kiaušiniu gaunamas pilnavertis baltymas.",
    note: "Hebrajiškas žodis „levivot“ reiškia būtent keptuvėje keptus papločius. Tai vienintelis Biblijos pasakojimas, kur maistas gaminamas ligonio akivaizdoje."
  },
  {
    id: "manu-blynai",
    title: "Manų blyneliai keptuvėje",
    category: "blynai",
    scripture: "Skaičių 11:8",
    verse: "Žmonės vaikščiojo aplink ir rinkdavo maną, mala ją girnomis ar grūsdavo grūstuvėje, virdavo puode ir kepdavo iš jos papločius.",
    time: "25 min.",
    servings: "12 blynelių",
    difficulty: "Lengvas",
    tags: ["blynai", "greita", "vaikams", "pusryčiai"],
    ingredients: [
      "200 g manų kruopų",
      "300 ml pieno arba migdolų gėrimo",
      "2 kiaušiniai",
      "2 v. š. alyvuogių aliejaus",
      "1 a. š. maltos kalendros",
      "1 žiupsnis druskos",
      "2 v. š. medaus"
    ],
    steps: [
      "Manų kruopas užpilk pienu ir palik 20 min. brinkti – masė sutirštės.",
      "Įmaišyk kiaušinius, medų, kalendrą ir druską.",
      "Įkaitink keptuvę su aliejumi.",
      "Dėk po šaukštą masės, kepk po 2–3 min. iš kiekvienos pusės ant vidutinės ugnies.",
      "Patiek su medumi arba šviežiomis uogomis."
    ],
    balance: "Manų kruopos – lėtai atpalaiduojami angliavandeniai; su pienu ir kiaušiniu blyneliai sotina iki pietų be papildomo užkandžiavimo.",
    note: "Eilutė aprašo visą maisto grandinę: rinkti, malti, virti, kepti. Mana nebuvo stebuklingas patiekalas – ją dar reikėjo paruošti."
  },
  {
    id: "efraimo-paplotis",
    title: "Neapverstas Efraimo paplotis",
    category: "blynai",
    scripture: "Ozėjo 7:8",
    verse: "Efraimas tapo paplotėliu, neapverstu ant kitos pusės.",
    time: "30 min.",
    servings: "8 papločiai",
    difficulty: "Vidutinis",
    tags: ["blynai", "keptuvėje", "raugintas", "veganiška"],
    ingredients: [
      "250 g kvietinių miltų",
      "50 g miežinių miltų",
      "400 ml drungno vandens",
      "5 g sausų mielių",
      "1 a. š. druskos",
      "1/2 a. š. sodos",
      "1 v. š. alyvuogių aliejaus"
    ],
    steps: [
      "Miltus, mieles ir vandenį suplak į skystą tešlą, palik šiltai 1 val. – paviršius turi pradėti burbuliuoti.",
      "Įmaišyk druską ir sodą, ištirpintą šaukšte vandens.",
      "Įkaitink keptuvę, patepk aliejumi, supilk samtelį tešlos.",
      "Kepk tik iš vienos pusės 4–5 min., kol viršus išsipūs skylutėmis ir sustings – neapversk!",
      "Patiek skylėta puse į viršų, kad į ją įsigertų medus ar aliejus."
    ],
    balance: "Rauginta tešla lengviau virškinama, o vienpusis kepimas palieka poringą paviršių, sugeriantį padažą – todėl reikia mažiau riebalų.",
    note: "Pranašas šiuo vaizdiniu pašiepia pusiau atliktą darbą: iš vienos pusės sudegęs, iš kitos – žalias. Virtuvėje tai daroma sąmoningai ir išeina skanu."
  },
  {
    id: "keptuves-atnasa",
    title: "Keptuvės atnaša (machavat)",
    category: "blynai",
    scripture: "Kunigų 2:5–6",
    verse: "Jei tavo atnaša – keptuvėje kepta duona, tebūna ji iš smulkių miltų, sumaišytų su aliejumi, nerauginta. Sulaužyk ją gabalais ir užpilk aliejaus.",
    time: "30 min.",
    servings: "8 papločiai",
    difficulty: "Lengvas",
    tags: ["blynai", "be mielių", "veganiška", "apeiginė"],
    ingredients: [
      "300 g smulkių miltų",
      "180 ml vandens",
      "60 ml alyvuogių aliejaus į tešlą",
      "1 a. š. druskos",
      "3 v. š. alyvuogių aliejaus užpylimui",
      "1 a. š. smulkintų isopo lapelių"
    ],
    steps: [
      "Miltus sumaišyk su druska ir aliejumi, trink pirštais, kol pasidarys trupiniai.",
      "Įpilk vandenį ir suminkyk tvirtą tešlą, palik 15 min.",
      "Padalyk į 8 dalis, iškočiok 4 mm storio papločius.",
      "Kepk sausoje ketaus keptuvėje po 2 min. iš kiekvienos pusės.",
      "Sulaužyk gabalais, dėk į dubenį, užpilk aliejaus ir pabarstyk isopu."
    ],
    balance: "Aliejus tešloje ir ant paviršiaus – riebaluose tirpstančių vitaminų (A, D, E, K) nešiklis; be jų daržovių maistinės medžiagos pasisavinamos prasčiau.",
    note: "Kunigų knyga skiria tris kepimo būdus: orkaitėje, atviroje keptuvėje (machavat) ir gilioje keptuvėje (marchešet). Tai seniausias žinomas kulinarinės technikos sąrašas."
  },
  {
    id: "padekos-blynai",
    title: "Padėkos aukos blynai su aliejumi",
    category: "blynai",
    scripture: "Kunigų 7:12",
    verse: "Tegul aukoja su padėkos auka neraugintus papločius, sumaišytus su aliejumi, ir neraugintus blynus, pateptus aliejumi.",
    time: "40 min.",
    servings: "10 blynų",
    difficulty: "Lengvas",
    tags: ["blynai", "be mielių", "šventinė", "veganiška"],
    ingredients: [
      "250 g spelta miltų",
      "50 g sumaltų migdolų",
      "300 ml vandens",
      "3 v. š. alyvuogių aliejaus",
      "1 v. š. medaus",
      "1 a. š. druskos",
      "1 a. š. sezamo sėklų"
    ],
    steps: [
      "Sumaišyk miltus, migdolus ir druską.",
      "Įpilk vandenį, aliejų ir medų, išplak iki vientisos skystos tešlos.",
      "Palik 20 min. – spelta miltams reikia laiko išbrinkti.",
      "Kepk plonus blynus įkaitintoje keptuvėje po 2 min. iš kiekvienos pusės.",
      "Iškeptus patepk aliejumi ir pabarstyk sezamu, sukrauk vieną ant kito."
    ],
    balance: "Migdolų miltai prideda baltymų ir vitamino E, todėl blynai neturi vien krakmolo poveikio cukraus kiekiui kraujyje.",
    note: "Padėkos auka buvo vienintelė, kurią reikėjo suvalgyti tą pačią dieną – ji buvo skirta dalytis su visais namiškiais ir svečiais."
  },
  {
    id: "sareptos-paplotelis",
    title: "Sareptos našlės paplotėlis",
    category: "blynai",
    scripture: "1 Karalių 17:12–16",
    verse: "Turiu tik saują miltų statinaitėje ir truputį aliejaus ąsotyje. Miltai statinaitėje nesibaigė ir aliejaus ąsotyje nepritrūko.",
    time: "20 min.",
    servings: "4 paplotėliai",
    difficulty: "Lengvas",
    tags: ["blynai", "trys produktai", "veganiška", "greita"],
    ingredients: [
      "200 g miltų",
      "120 ml vandens",
      "3 v. š. alyvuogių aliejaus",
      "1/2 a. š. druskos"
    ],
    steps: [
      "Sumaišyk miltus su druska.",
      "Įpilk aliejų ir vandenį, minkyk 5 min.",
      "Padalyk į 4 dalis, iškočiok plonai.",
      "Kepk įkaitintoje keptuvėje po 2 min. iš kiekvienos pusės.",
      "Valgyk karštą – tokį, kokį našlė atnešė pranašui."
    ],
    balance: "Trys produktai, visa dienos energija: apie 250 kcal viename paplotėlyje, pusė jų – iš alyvuogių aliejaus riebalų.",
    note: "Pasakojimas apie paskutinę saują miltų, kurios užteko ilgiau, nei atrodė įmanoma. Receptas tinka, kai atrodo, kad virtuvėje nieko nėra."
  },
  {
    id: "mieziniai-blynai",
    title: "Miežiniai blynai ant žarijų",
    category: "blynai",
    scripture: "Ezechielio 4:12",
    verse: "Valgyk juos kaip miežinį paplotėlį, iškeptą žmonių akivaizdoje.",
    time: "30 min.",
    servings: "8 blynai",
    difficulty: "Lengvas",
    tags: ["blynai", "pilno grūdo", "ant laužo", "veganiška"],
    ingredients: [
      "200 g miežinių miltų",
      "100 g kvietinių miltų",
      "350 ml vandens",
      "1 a. š. druskos",
      "1 v. š. medaus",
      "2 v. š. alyvuogių aliejaus"
    ],
    steps: [
      "Miltus sumaišyk su druska, įpilk vandenį ir medų, išplak be gumulėlių.",
      "Palik 15 min. pastovėti.",
      "Laužo žarijose įkaitink ketaus keptuvę arba plokščią akmenį.",
      "Patepk aliejumi, pilk po samtelį tešlos.",
      "Kepk po 3 min. iš kiekvienos pusės, kol pakraščiai atšoks."
    ],
    balance: "Miežių beta gliukanai mažina cholesterolio įsisavinimą ir ilgai laiko sotumo jausmą – geriausias grūdas ilgai dienai.",
    note: "Pranašui tai buvo ženklo valgis apgulties metu: kuklus, pilkas, kepamas viešai. Šiandien miežiniai blynai – delikatesas."
  },
  {
    id: "varskes-blyneliai",
    title: "Varškės blyneliai su datulių medumi",
    category: "blynai",
    scripture: "2 Samuelio 17:29",
    verse: "Jie atnešė Dovydui ir jo žmonėms medaus, sviesto, avių ir sūrio iš karvių pieno.",
    time: "30 min.",
    servings: "12 blynelių",
    difficulty: "Lengvas",
    tags: ["blynai", "pieniška", "baltyminga", "vaikams"],
    ingredients: [
      "400 g varškės arba nuvarvinto jogurto",
      "2 kiaušiniai",
      "100 g spelta miltų",
      "2 v. š. medaus",
      "1 žiupsnis druskos",
      "1/2 a. š. cinamono",
      "Alyvuogių aliejaus kepimui",
      "Datulių medaus ir graikinių riešutų patiekimui"
    ],
    steps: [
      "Varškę sutrink šakute su kiaušiniais ir medumi.",
      "Įmaišyk miltus, druską ir cinamoną – masė turi būti tiršta, bet minkšta.",
      "Šlapiomis rankomis formuok nedidelius blynelius.",
      "Kepk įkaitintoje keptuvėje su aliejumi po 3 min. iš kiekvienos pusės ant vidutinės ugnies.",
      "Patiek su datulių medumi ir kapotais riešutais."
    ],
    balance: "Apie 20 g baltymo porcijoje – sotūs pusryčiai be didelio angliavandenių kiekio; kalcis iš varškės pasisavinamas kartu su riebalais.",
    note: "Kai Dovydas bėgo nuo sūnaus, kaimynai atnešė būtent tokį maistą: sūrio, sviesto ir medaus. Paprasta, kaloringa, greitai atgaivina."
  },
  {
    id: "avinzirniu-blyneliai",
    title: "Avinžirnių blyneliai (be glitimo)",
    category: "blynai",
    scripture: "2 Samuelio 17:28",
    verse: "Atnešė guolių, dubenų ir molinių indų, kviečių, miežių, miltų, skrudintų grūdų, pupelių, lęšių ir kepintų žirnių.",
    time: "25 min. + 2 val. brinkimo",
    servings: "8 blyneliai",
    difficulty: "Lengvas",
    tags: ["blynai", "be glitimo", "veganiška", "baltyminga"],
    ingredients: [
      "200 g avinžirnių miltų",
      "350 ml vandens",
      "3 v. š. alyvuogių aliejaus",
      "1 a. š. druskos",
      "1 a. š. kmynų",
      "1/2 a. š. maltos kalendros",
      "1 sauja kapotų petražolių"
    ],
    steps: [
      "Avinžirnių miltus išplak su vandeniu ir palik 2 val. – kartumas pranyks, tešla taps švelni.",
      "Nugriebk putas nuo paviršiaus, įmaišyk druską, prieskonius, aliejų ir petražoles.",
      "Įkaitink keptuvę iki karštumo.",
      "Pilk ploną sluoksnį tešlos, kepk 4 min., kol kraštai atšoka, apversk ir kepk dar 2 min.",
      "Patiek su tahini padažu arba jogurtu."
    ],
    balance: "Avinžirnių miltuose – apie 20 g baltymo ir 10 g skaidulų 100 gramų. Blyneliai tinka nevalgantiems glitimo ir sotina kaip mėsos patiekalas.",
    note: "Kepinti žirniai ir pupelės Dovydo stovykloje buvo kareivių maistas – tas pats produktas, tik sumaltas, tinka ir blyneliams."
  },
  /* --------------------- DESERTAI (VAISIAI IR SALDUMYNAI) ---------------- */
  {
    id: "keptos-figos",
    title: "Keptos figos su medumi ir riešutais",
    category: "saldumynai",
    scripture: "Giesmių giesmė 2:13",
    verse: "Figmedis nokina savo vaisius, vynmedžiai žydi ir kvepia.",
    time: "25 min.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["desertas", "greita", "be cukraus", "vegetariška"],
    ingredients: [
      "12 šviežių figų",
      "3 v. š. medaus",
      "60 g graikinių riešutų",
      "1 a. š. cinamono",
      "2 v. š. alyvuogių aliejaus",
      "200 g graikiško jogurto",
      "Mėtų lapelių"
    ],
    steps: [
      "Figas perpjauk kryžmai iki pusės, kad atsivertų kaip gėlė.",
      "Sudėk į kepimo indą, apšlakstyk aliejumi ir medumi, pabarstyk cinamonu.",
      "Kepk 200 °C 15 min., kol kraštai pradės karamelizuotis.",
      "Riešutus paskrudink sausoje keptuvėje 4 min. ir sukapok.",
      "Patiek šiltas figas su šaltu jogurtu, riešutais ir mėta."
    ],
    balance: "Karštas vaisius su šaltu rūgpieniu: figų skaidulos ir jogurto baltymas kartu neleidžia cukrui greitai pakilti.",
    note: "Figmedis Biblijoje – ramybės ženklas: „kiekvienas sėdės po savo vynmedžiu ir figmedžiu“ (Mch 4:4)."
  },
  {
    id: "datuliu-rutuliukai",
    title: "Datulių, sezamo ir tahini rutuliukai",
    category: "saldumynai",
    scripture: "Pakartoto Įstatymo 8:8",
    verse: "Kraštas alyvmedžių ir medaus.",
    time: "20 min.",
    servings: "20 rutuliukų",
    difficulty: "Lengvas",
    tags: ["desertas", "be kepimo", "veganiška", "kelionei"],
    ingredients: [
      "300 g datulių be kauliukų",
      "3 v. š. tahini (sezamo sviesto)",
      "80 g sezamo sėklų",
      "60 g migdolų",
      "1/2 a. š. kardamono",
      "1 žiupsnis druskos",
      "1 a. š. citrinos žievelės"
    ],
    steps: [
      "Sezamą paskrudink sausoje keptuvėje 3 min., pusę palik apvoliojimui.",
      "Datules sumalk smulkintuvu su tahini iki tirštos masės.",
      "Įmaišyk kapotus migdolus, pusę sezamo, kardamoną, druską ir žievelę.",
      "Suformuok riešuto dydžio rutuliukus.",
      "Apvoliok likusiame sezame, laikyk šaldytuve iki 2 savaičių."
    ],
    balance: "Sezamas – vienas geriausių augalinių kalcio šaltinių (apie 900 mg 100 g); su datulėmis gaunama kalio ir geležies.",
    note: "Sezamo sėklų aliejus Artimuosiuose Rytuose spaudžiamas nuo bronzos amžiaus – seniau nei alyvuogių."
  },
  {
    id: "medaus-migdolu-pyragas",
    title: "Medaus ir migdolų pyragas",
    category: "saldumynai",
    scripture: "Pradžios 43:11",
    verse: "Įdėkite į indus geriausių krašto vaisių ir nuneškite tam žmogui dovanų: truputį balzamo, truputį medaus, kvepalų, riešutų ir migdolų.",
    time: "1 val.",
    servings: "12 gabaliukų",
    difficulty: "Vidutinis",
    tags: ["desertas", "šventinė", "be rafinuoto cukraus"],
    ingredients: [
      "200 g maltų migdolų",
      "120 g spelta miltų",
      "180 g medaus",
      "3 kiaušiniai",
      "100 ml alyvuogių aliejaus",
      "1 a. š. kepimo miltelių",
      "1 apelsino žievelė ir 3 v. š. sulčių",
      "1 a. š. cinamono",
      "50 g migdolų drožlių viršui"
    ],
    steps: [
      "Kiaušinius išplak su medumi 4 min., kol masė pašviesės.",
      "Plakant supilk aliejų plona srovele.",
      "Įmaišyk migdolus, miltus, kepimo miltelius, cinamoną, žievelę ir sultis.",
      "Supilk į 22 cm formą, viršų apibarstyk migdolų drožlėmis.",
      "Kepk 170 °C 35–40 min. Patikrink pagaliuku – turi išlikti sausas.",
      "Dar šiltą apšlakstyk šaukštu medaus, praskiesto šaukštu vandens."
    ],
    balance: "Didžioji dalis miltų pakeista migdolais: mažiau krakmolo, daugiau baltymų, magnio ir mononesočiųjų riebalų.",
    note: "Jokūbo dovanų sąrašas Egipto valdytojui – tiksliai tie produktai, iš kurių iki šiol gaminami Artimųjų Rytų saldumynai."
  },
  {
    id: "obuoliai-medus",
    title: "Kepti obuoliai su medumi ir riešutais",
    category: "saldumynai",
    scripture: "Giesmių giesmė 2:5",
    verse: "Sustiprinkite mane razinų pyragaičiais, atgaivinkite obuoliais.",
    time: "45 min.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["desertas", "rudeniui", "be cukraus", "vegetariška"],
    ingredients: [
      "4 dideli rūgštūs obuoliai",
      "4 v. š. medaus",
      "60 g razinų",
      "60 g graikinių riešutų",
      "1 a. š. cinamono",
      "1/4 a. š. gvazdikėlių",
      "2 v. š. sviesto arba alyvuogių aliejaus",
      "100 ml vynuogių sulčių"
    ],
    steps: [
      "Obuoliams išimk šerdis, nepradurdamas dugno.",
      "Razinas, kapotus riešutus, cinamoną ir gvazdikėlius sumaišyk su medumi.",
      "Prikimšk obuolius, ant viršaus uždėk po gabalėlį sviesto.",
      "Sudėk į kepimo indą, į dugną įpilk vynuogių sulčių.",
      "Kepk 180 °C 35 min., du kartus apšlakstydamas susidariusiu sirupu."
    ],
    balance: "Keptas obuolys su riešutais: pektinas maitina žarnyno bakterijas, riešutų riebalai išlygina medaus cukrų.",
    note: "Hebrajiškas „tapuach“ gali reikšti ir obuolį, ir abrikosą – abu tinka šiam receptui."
  },
  {
    id: "migdolu-pudingas",
    title: "Migdolų pieno pudingas su rožių vandeniu",
    category: "saldumynai",
    scripture: "Skaičių 17:8",
    verse: "Aarono lazda iš Levio giminės išleido pumpurus, pražydo ir subrandino migdolus.",
    time: "20 min. + 3 val. šaldymo",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["desertas", "veganiška", "be glitimo", "švelnus"],
    ingredients: [
      "700 ml migdolų gėrimo (arba pieno)",
      "50 g kukurūzų krakmolo",
      "4 v. š. medaus arba datulių sirupo",
      "1 a. š. rožių vandens",
      "1 žiupsnis druskos",
      "60 g migdolų drožlių",
      "1 v. š. granatų sėklų puošimui"
    ],
    steps: [
      "Šaltame migdolų gėrime ištirpink krakmolą, kad neliktų gumulėlių.",
      "Kaitink ant vidutinės ugnies nuolat maišant 6–8 min., kol sutirštės.",
      "Nukėlęs nuo ugnies įmaišyk medų, druską ir rožių vandenį.",
      "Supilk į indelius, uždenk plėvele, kad nesusidarytų plėvelė, ir šaldyk 3 val.",
      "Prieš patiekiant pabarstyk skrudintomis migdolų drožlėmis ir granatų sėklomis."
    ],
    balance: "Lengvas desertas be kiaušinių ir be pieno riebalų – tinka po sotaus šventinio stalo.",
    note: "Migdolas hebrajiškai – „šaked“, budrusis: jis pražysta pirmas, dar žiemą. Todėl jis tapo budrumo ženklu ir šventyklos žvakidės ornamentu."
  },
  {
    id: "figu-vyno-kompotas",
    title: "Figų ir vyno kompotas su prieskoniais",
    category: "saldumynai",
    scripture: "1 Samuelio 30:12",
    verse: "Jie davė jam figų pyragaičio gabalą ir dvi razinų kekes; pavalgęs jis atgavo jėgas.",
    time: "35 min.",
    servings: "6 porcijos",
    difficulty: "Lengvas",
    tags: ["desertas", "veganiška", "žiemai", "atsargoms"],
    ingredients: [
      "300 g džiovintų figų",
      "100 g razinų",
      "400 ml raudonojo vyno arba vynuogių sulčių",
      "200 ml vandens",
      "3 v. š. medaus",
      "1 cinamono lazdelė",
      "3 gvazdikėliai",
      "2 citrinos griežinėliai"
    ],
    steps: [
      "Figoms nupjaustyk kotelius, perpjauk pusiau.",
      "Puode sumaišyk vyną, vandenį, medų ir prieskonius, užvirk.",
      "Suberk figas ir razinas, virk ant mažos ugnies 20 min. be dangčio.",
      "Išimk cinamono lazdelę ir gvazdikėlius.",
      "Patiek šiltą su jogurtu arba šaltą su sūriu."
    ],
    balance: "Džiovinti vaisiai atgauna drėgmę ir tampa lengviau virškinami; prieskoniai mažina pilvo pūtimą, kurį gali sukelti figos.",
    note: "Egiptietis vergas, tris dienas išbuvęs dykumoje be maisto, atsigavo nuo figų ir razinų. Tai seniausias aprašytas atvejis, kaip teisingai maitinti išsekusį žmogų."
  },
  {
    id: "duonos-pudingas",
    title: "Duonos pudingas su razinomis („kad niekas nepražūtų“)",
    category: "saldumynai",
    scripture: "Jono 6:12",
    verse: "Surinkite likusius kąsnius, kad niekas nepražūtų.",
    time: "1 val.",
    servings: "6 porcijos",
    difficulty: "Lengvas",
    tags: ["desertas", "iš likučių", "vegetariška", "taupu"],
    ingredients: [
      "300 g pasenusios duonos",
      "500 ml pieno",
      "3 kiaušiniai",
      "4 v. š. medaus",
      "80 g razinų",
      "1 a. š. cinamono",
      "1 a. š. citrinos žievelės",
      "2 v. š. sviesto",
      "50 g migdolų"
    ],
    steps: [
      "Duoną supjaustyk kubeliais, sudėk į sviestu išteptą kepimo indą.",
      "Razinas pamirkyk šiltame vandenyje 10 min., nusausink ir pabarstyk ant duonos.",
      "Pieną išplak su kiaušiniais, medumi, cinamonu ir žievele.",
      "Užpilk ant duonos ir palik 20 min., kad įmirktų.",
      "Pabarstyk migdolais ir kepk 180 °C 35 min., kol viršus paruduos."
    ],
    balance: "Pasenusi duona virsta pilnaverte vakariene su baltymu iš pieno ir kiaušinių – nulinės atliekos desertas.",
    note: "Po duonos padauginimo liko dvylika pintinių trupinių. Evangelijos stebuklas baigiasi ne puota, o nurodymu nieko neišmesti."
  },
  {
    id: "karobo-kremas",
    title: "Karobo ir datulių kremas",
    category: "saldumynai",
    scripture: "Luko 15:16",
    verse: "Jis geidė prikimšti pilvą ankštimis, kurias ėdė kiaulės, bet niekas jam jų neduodavo.",
    time: "15 min.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["desertas", "veganiška", "be kepimo", "be kofeino"],
    ingredients: [
      "200 g datulių",
      "4 v. š. karobo (saldžiavaisio pupmedžio) miltelių",
      "200 ml kokosų pieno arba migdolų gėrimo",
      "2 v. š. tahini",
      "1 žiupsnis druskos",
      "1/2 a. š. vanilės arba kardamono",
      "Migdolų drožlių puošimui"
    ],
    steps: [
      "Datules 10 min. mirkyk karštame vandenyje, nusausink.",
      "Sumalk su kokosų pienu iki lygios masės.",
      "Įmaišyk karobo miltelius, tahini, druską ir prieskonį.",
      "Išdalyk į indelius, atšaldyk bent 30 min.",
      "Prieš patiekiant pabarstyk migdolų drožlėmis."
    ],
    balance: "Karobas neturi kofeino ir teobromino, todėl tinka vaikams ir vakarienei; tahini prideda kalcio ir riebalų, kurie sotina.",
    note: "Ankštys, kurių geidė sūnus palaidūnas, buvo būtent saldžiavaisio pupmedžio – pigiausias gyvulių pašaras, kuris šiandien virto delikatesu."
  },
  /* ----------------------- PAPILDOMA: DUONA IR GRŪDAI -------------------- */
  {
    id: "chala",
    title: "Šabo pynutė (chala)",
    category: "duona",
    scripture: "Skaičių 15:20",
    verse: "Nuo pirmosios savo tešlos aukokite papločio atnašą.",
    time: "3 val.",
    servings: "2 kepalai",
    difficulty: "Vidutinis",
    tags: ["šventinė", "šabui", "rauginta", "pinta"],
    ingredients: [
      "1 kg kvietinių miltų",
      "500 ml drungno vandens",
      "10 g sausų mielių",
      "80 ml alyvuogių aliejaus",
      "60 g medaus",
      "2 kiaušiniai + 1 tepimui",
      "2 a. š. druskos",
      "2 v. š. sezamo arba aguonų"
    ],
    steps: [
      "Mieles su medumi ištirpink vandenyje, palik 10 min.",
      "Sumaišyk su miltais, kiaušiniais, aliejumi ir druska; minkyk 12 min.",
      "Kildink 1,5 val., kol tešla dvigubai padidės.",
      "Padalyk į 6 juostas, iš trijų nupink kepalą – ir taip du kartus.",
      "Kildink dar 40 min., patepk išplaktu kiaušiniu, pabarstyk sezamu.",
      "Kepk 180 °C 30–35 min., kol kepalas skambės tuščiai pabaksnojus į dugną."
    ],
    balance: "Šventinė, sodresnė duona – jos vieta savaitėje viena: šabo stalas. Riebalai ir kiaušiniai daro ją sotesnę už kasdienę.",
    note: "Nuo pirmosios tešlos atskiriamas gabalėlis – „chala“. Iš čia ir pavadinimas: duona pavadinta ne forma, o dalimi, kuri atiduodama."
  },
  {
    id: "pita",
    title: "Pita su kišenėle",
    category: "duona",
    scripture: "Kunigų 23:17",
    verse: "Atneškite iš savo namų du duonos kepalus kaip siūbuojamąją atnašą; jie tebūna iškepti su raugu.",
    time: "2 val.",
    servings: "8 pitos",
    difficulty: "Vidutinis",
    tags: ["rauginta", "kasdienė", "veganiška"],
    ingredients: [
      "500 g kvietinių miltų",
      "320 ml drungno vandens",
      "7 g sausų mielių",
      "2 v. š. alyvuogių aliejaus",
      "1,5 a. š. druskos",
      "1 a. š. cukraus arba medaus"
    ],
    steps: [
      "Iš visų produktų užminkyk minkštą tešlą, minkyk 10 min.",
      "Kildink 1 val.",
      "Padalyk į 8 rutulius, palik pailsėti 20 min., tada iškočiok 5 mm storio.",
      "Įkaitink orkaitę su skarda iki 250 °C.",
      "Kepk po 4–5 min. – pita turi išsipūsti kaip balionas; tada viduje susidaro kišenėlė.",
      "Iškeptas sudėk po rankšluosčiu, kad suminkštėtų."
    ],
    balance: "Kišenėlė leidžia porciją valdyti: viena pita plius daržovės ir ankštiniai – subalansuoti pietūs be lėkštės.",
    note: "Sekminėms buvo aukojama būtent rauginta duona – vienintelė proga, kai raugas ne draudžiamas, o privalomas."
  },
  {
    id: "manakis",
    title: "Isopo duonelė (manakiš)",
    category: "duona",
    scripture: "Patarlių 9:5",
    verse: "Ateikite, valgykite mano duonos ir gerkite vyno, kurį sumaišiau.",
    time: "2 val.",
    servings: "6 duonelės",
    difficulty: "Lengvas",
    tags: ["pusryčiams", "veganiška", "su zaataru"],
    ingredients: [
      "500 g miltų",
      "300 ml drungno vandens",
      "7 g sausų mielių",
      "1,5 a. š. druskos",
      "3 v. š. alyvuogių aliejaus",
      "6 v. š. zaataro mišinio",
      "6 v. š. alyvuogių aliejaus užtepui"
    ],
    steps: [
      "Užminkyk mielinę tešlą ir kildink 1 val.",
      "Zaatarą sumaišyk su aliejumi iki tirštos pastos.",
      "Tešlą padalyk į 6 dalis, iškočiok 1 cm storio papločius.",
      "Ant kiekvieno paskleisk zaataro pastą, pirštais padaryk įdubas.",
      "Kepk 230 °C 10–12 min., kol kraštai auksiniai."
    ],
    balance: "Isopas ir sezamas su alyvuogių aliejumi – Viduržemio jūros pusryčiai be cukraus; skirtingai nei saldi duona, jie nesukelia rytinio energijos kritimo.",
    note: "Išminties namų kvietimas prie stalo Patarlių knygoje aprašytas kaip duonos ir vyno vaišės – paprasčiausias įmanomas svetingumo vaizdas."
  },

  /* ------------------- PAPILDOMA: SRIUBOS IR TROŠKINIAI ------------------ */
  {
    id: "avinzirniai-mangoldas",
    title: "Avinžirnių ir mangoldo troškinys",
    category: "troskiniai",
    scripture: "2 Samuelio 17:28",
    verse: "Atnešė kviečių, miežių, miltų, skrudintų grūdų, pupelių ir lęšių.",
    time: "1 val.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["veganiška", "baltyminga", "geležis", "vieno puodo"],
    ingredients: [
      "300 g virtų avinžirnių",
      "1 didelis mangoldo ryšulys (arba 300 g špinatų)",
      "1 svogūnas, 4 česnako skiltelės",
      "3 v. š. alyvuogių aliejaus",
      "1 a. š. kmynų, 1 a. š. kalendros",
      "1/2 a. š. cinamono",
      "500 ml daržovių sultinio",
      "2 v. š. citrinos sulčių",
      "Druskos, pipirų"
    ],
    steps: [
      "Aliejuje pakepink kapotą svogūną 8 min.",
      "Suberk česnaką ir prieskonius, kepink 1 min.",
      "Sudėk avinžirnius ir sultinį, virk 15 min.",
      "Įmaišyk pjaustytą mangoldą, virk dar 8 min.",
      "Pasūdyk, įpilk citrinos sulčių, patiek su pita."
    ],
    balance: "Augalinė geležis iš mangoldo ir avinžirnių pasisavinama kur kas geriau kartu su citrinos vitaminu C – todėl citrina čia ne skoniui, o naudai.",
    note: "Dovydo stovyklos atsargų sąrašas iš esmės yra ankštinių ir grūdų sandėlis: tuo maitinosi ištisos kariuomenės."
  },
  {
    id: "moliugo-sriuba",
    title: "Moliūgų ir lęšių sriuba („mirtis puode“)",
    category: "troskiniai",
    scripture: "2 Karalių 4:38–41",
    verse: "Vienas išėjo į lauką parinkti žolynų ir prisiskynė laukinių moliūgų. Jie sušuko: „Dievo žmogau, mirtis puode!“",
    time: "50 min.",
    servings: "6 porcijos",
    difficulty: "Lengvas",
    tags: ["veganiška", "rudeniui", "vieno puodo", "sotu"],
    ingredients: [
      "800 g moliūgo (muskatinio)",
      "200 g raudonųjų lęšių",
      "1 svogūnas, 3 česnako skiltelės",
      "1,2 l daržovių sultinio",
      "3 v. š. alyvuogių aliejaus",
      "1 a. š. kmynų, 1/2 a. š. cinamono",
      "1 a. š. maltos kalendros",
      "Druskos, citrinos, skrudintų sėklų"
    ],
    steps: [
      "Moliūgą supjaustyk kubeliais, svogūną sukapok.",
      "Aliejuje pakepink svogūną ir prieskonius 6 min.",
      "Sudėk moliūgą ir lęšius, užpilk sultiniu, virk 25 min.",
      "Sutrink trintuvu iki vientisos sriubos, pasūdyk.",
      "Patiek su citrinos sultimis ir skrudintomis moliūgų sėklomis."
    ],
    balance: "Moliūgo beta karotenas – riebaluose tirpus, todėl aliejus sriuboje būtinas jam pasisavinti.",
    note: "Pranašo mokinys pasiskynė nuodingų laukinių moliūgų. Pamoka lieka galioti: renkant laukinius augalus reikia žinoti, ką renki."
  },
  {
    id: "galilejos-zuvies-sriuba",
    title: "Galilėjos žuvies sriuba",
    category: "troskiniai",
    scripture: "Luko 5:6",
    verse: "Taip padarę, jie užgriebė didelę daugybę žuvų, ir jų tinklai pradėjo trūkinėti.",
    time: "45 min.",
    servings: "4 porcijos",
    difficulty: "Vidutinis",
    tags: ["žuvis", "omega-3", "vieno puodo"],
    ingredients: [
      "600 g žuvies filė ir galvų sultiniui",
      "1 poras, 1 svogūnas",
      "2 morkos, 2 salierų stiebai",
      "3 česnako skiltelės",
      "3 v. š. alyvuogių aliejaus",
      "1 a. š. kmynų, 1 lauro lapas",
      "1,5 l vandens",
      "1 citrina, sauja kalendrų ar petražolių",
      "Druskos, pipirų"
    ],
    steps: [
      "Iš žuvies galvų ir uodegų su lauro lapu išvirk sultinį (25 min.), perkošk.",
      "Aliejuje pakepink porą, svogūną, morkas ir salierą 10 min.",
      "Užpilk perkoštu sultiniu, virk 10 min.",
      "Sudėk gabalais pjaustytą filė ir virk 6 min. – ne ilgiau, kad žuvis neiširtų.",
      "Pasūdyk, įspausk citrinos, pabarstyk žalumynais."
    ],
    balance: "Žuvies sultinys su jodu ir selenu, filė su omega-3: lengva vakarienė, po kurios nesunku miegoti.",
    note: "Galilėjos ežere iki šiol gaudoma ta pati „šv. Petro žuvis“ – tilapija, kurią evangelijose minimi žvejai traukdavo tinklais."
  },

  /* -------------------- PAPILDOMA: DARŽOVĖS IR SALOTOS ------------------- */
  {
    id: "humusas",
    title: "Avinžirnių tyrė su tahini (humusas)",
    category: "darzoves",
    scripture: "Rūtos 2:14",
    verse: "Ateik čia, valgyk duonos ir pamerk kąsnį į actą.",
    time: "20 min. (jei avinžirniai virti)",
    servings: "6 porcijos",
    difficulty: "Lengvas",
    tags: ["veganiška", "baltyminga", "užkandis", "be glitimo"],
    ingredients: [
      "400 g virtų avinžirnių",
      "4 v. š. tahini",
      "3 v. š. citrinos sulčių",
      "2 česnako skiltelės",
      "1/2 a. š. kmynų",
      "80–120 ml šalto vandens",
      "3 v. š. alyvuogių aliejaus",
      "Druskos, raudonėlio ar zaataro"
    ],
    steps: [
      "Nuo avinžirnių nulupk odeles – nuo to priklauso, ar tyrė bus šilkinė.",
      "Sumalk su česnaku, citrinos sultimis, tahini ir kmynais.",
      "Plakdamas po šaukštą pilk šaltą vandenį, kol masė pašviesės ir taps purios.",
      "Pasūdyk, išdėliok į lėkštę, šaukšto nugarėle padaryk įdubą.",
      "Įpilk alyvuogių aliejaus, pabarstyk zaataru, patiek su pita."
    ],
    balance: "Avinžirniai su sezamo tahini – vėl grūdų ir ankštinių baltymo derinys; porcija duoda apie 9 g baltymo ir 7 g skaidulų.",
    note: "Duonos merkimas į bendrą dubenį yra tiesiog senovinis būdas valgyti be įrankių – toks pat, koks aprašomas ir Rūtos knygoje, ir Paskutinės vakarienės scenoje."
  },
  {
    id: "darzoviu-tyre",
    title: "Keptų daržovių tyrė su tahini",
    category: "darzoves",
    scripture: "Patarlių 15:17",
    verse: "Geriau daržovių valgis, kur meilė, negu nupenėtas jautis, kur neapykanta.",
    time: "1 val.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["veganiška", "ant žarijų", "užkandis", "mažai kalorijų"],
    ingredients: [
      "2 baklažanai (arba 800 g moliūgo istoriškai tikslesniam variantui)",
      "3 v. š. tahini",
      "2 v. š. citrinos sulčių",
      "2 česnako skiltelės",
      "3 v. š. alyvuogių aliejaus",
      "Druskos, kmynų",
      "Granatų sėklų ir petražolių puošimui"
    ],
    steps: [
      "Daržoves kepk ant atviros ugnies arba 220 °C orkaitėje 40 min., kol odelė apanglės, o vidus suminkštės.",
      "Atvėsink, nulupk odelę, minkštimą palik 15 min. nuvarvėti sietelyje.",
      "Sukapok peiliu (ne trintuvu – reikia tekstūros).",
      "Įmaišyk tahini, česnaką, citrinos sultis, druską ir kmynus.",
      "Patiek apšlakstytą aliejumi, su granatų sėklomis."
    ],
    balance: "Sotus užkandis be mėsos: apie 120 kcal porcijoje, riebalai – iš sezamo ir alyvuogių.",
    note: "Baklažanas į Artimuosius Rytus atkeliavo po Biblijos laikų, todėl istoriškai tikslesnis variantas – keptas moliūgas ar porai. Patarlės mintis lieka ta pati: svarbiau, su kuo valgai."
  },
  {
    id: "keptos-darzoves",
    title: "Keptos daržovės su isopu ir aliejumi",
    category: "darzoves",
    scripture: "Pradžios 1:29",
    verse: "Štai daviau jums kiekvieną sėklą teikiantį augalą ir kiekvieną medį, kurio vaisiuje yra sėkla – jie bus jums maistas.",
    time: "50 min.",
    servings: "4 porcijos",
    difficulty: "Lengvas",
    tags: ["veganiška", "orkaitėje", "savaitei", "skaidulos"],
    ingredients: [
      "2 svogūnai",
      "3 morkos",
      "1 moliūgo griežinys (400 g)",
      "2 porai",
      "1 česnako galvutė",
      "5 v. š. alyvuogių aliejaus",
      "1 v. š. džiovinto isopo ar čiobrelių",
      "1 a. š. kmynų",
      "Druskos, granatų sirupo apšlakstymui"
    ],
    steps: [
      "Daržoves supjaustyk stambiais, panašaus dydžio gabalais.",
      "Sumaišyk su aliejumi, prieskoniais ir druska.",
      "Išdėliok vienu sluoksniu ant skardos – susigrūdusios jos garuos, o ne keps.",
      "Kepk 200 °C 35–40 min., viduryje apversdamas.",
      "Iškeptas apšlakstyk granatų sirupu."
    ],
    balance: "Viena skarda – daržovių porcijos trims dienoms. Kepimas išsaugo skaidulas ir sukoncentruoja natūralų saldumą be cukraus.",
    note: "Pirmasis Biblijos mitybos nurodymas yra augalinis: mėsa leidžiama tik po tvano (Pr 9:3)."
  },
  {
    id: "rauginti-agurkai",
    title: "Raugintos daržovės su krapais ir česnaku",
    category: "darzoves",
    scripture: "Skaičių 11:5",
    verse: "Prisimename agurkus ir melionus, porus, svogūnus ir česnakus.",
    time: "30 min. + 5 paros",
    servings: "3 l stiklainis",
    difficulty: "Lengvas",
    tags: ["veganiška", "fermentuota", "probiotikai", "atsargoms"],
    ingredients: [
      "1,5 kg mažų agurkų (arba ropių, morkų, kopūstų)",
      "2 l vandens",
      "60 g jūros druskos (3 %)",
      "1 česnako galvutė",
      "1 didelis krapų kuokštas su sėklomis",
      "1 a. š. juodųjų pipirų",
      "2 vynuogių arba vyšnios lapai (kad liktų traškūs)"
    ],
    steps: [
      "Druską ištirpink vandenyje – tai 3 % sūrymas.",
      "Agurkus nuplauk, nupjauk žiedų galiukus.",
      "Į stiklainį sudėk krapus, česnaką, pipirus, lapus, tada agurkus.",
      "Užpilk sūrymu, kad viską apsemtų; prispausk, kad neiškiltų.",
      "Palik kambario temperatūroje 4–6 paras, kasdien nuleisdamas dujas, tada laikyk šaltai."
    ],
    balance: "Natūrali pieno rūgšties fermentacija duoda gyvų bakterijų ir vitamino K2 – tai seniausias žinomas būdas išsaugoti daržoves be šaldytuvo.",
    note: "Sūrymas ir džiovinimas buvo vieninteliai konservavimo būdai Biblijos laikais; druska dėl to tapo sandoros ženklu (Kun 2:13)."
  },

  /* --------------------- PAPILDOMA: ŽUVIS IR MĖSA ------------------------ */
  {
    id: "sudyta-zuvis",
    title: "Sūdyta ir vytinta žuvis",
    category: "zuvis-mesa",
    scripture: "Nehemijo 13:16",
    verse: "Tiriečiai, gyvenantys mieste, atgabendavo žuvies ir visokių prekių.",
    time: "30 min. + 3 paros",
    servings: "~600 g",
    difficulty: "Vidutinis",
    tags: ["žuvis", "atsargoms", "be kepimo", "baltyminga"],
    ingredients: [
      "800 g riebios žuvies filė (skumbrės, lašišos ar karšio)",
      "150 g stambios jūros druskos",
      "2 v. š. medaus",
      "1 v. š. kalendros sėklų",
      "1 a. š. juodųjų pipirų",
      "1 krapų kuokštas",
      "1 citrinos žievelė",
      "Alyvuogių aliejaus laikymui"
    ],
    steps: [
      "Prieskonius sugrūsk su druska ir medumi.",
      "Filė iš abiejų pusių storai apibarstyk mišiniu, perklok krapais.",
      "Dėk į indą, prispausk svarmeniu ir laikyk šaldytuve 48 val., du kartus nupildamas išsiskyrusį skystį.",
      "Nuplauk druskos perteklių, nusausink, pavytink šaldytuve ant grotelių dar 24 val.",
      "Supjaustyk plonais griežinėliais, sudėk į stiklainį ir užpilk aliejumi."
    ],
    balance: "Sūdymas išsaugo omega-3 riebalų rūgštis, kurių netenkama ilgai kepant. Porcija maža – druskos kiekis didelis.",
    note: "Magdalos miestas prie Galilėjos ežero garsėjo žuvies sūdyklomis; iš ten sūdyta žuvis keliaudavo net į Romą."
  },
  {
    id: "versiuko-kepsnys",
    title: "Nupenėto veršiuko kepsnys",
    category: "zuvis-mesa",
    scripture: "Luko 15:23; Pradžios 18:7",
    verse: "Atveskite nupenėtą veršį ir papjaukite! Valgykime ir linksminkimės.",
    time: "3 val.",
    servings: "8 porcijos",
    difficulty: "Sudėtingas",
    tags: ["mėsa", "šventinė", "lėtas kepimas"],
    ingredients: [
      "2 kg veršienos mentės arba krūtininės",
      "2 svogūnai, 1 česnako galvutė",
      "4 v. š. alyvuogių aliejaus",
      "1 v. š. kmynų, 1 v. š. kalendros",
      "1 a. š. juodųjų pipirų",
      "2 lauro lapai, 2 rozmarino šakelės",
      "400 ml vandens arba sultinio",
      "3 v. š. granatų sirupo",
      "Stambios druskos"
    ],
    steps: [
      "Mėsą įtrink druska ir prieskoniais, palik 1 val.",
      "Įkaitintame puode su aliejumi apkepk iš visų pusių, kol susidarys ruda plutelė.",
      "Sudėk svogūnus ir česnaką, pakepink 5 min.",
      "Užpilk sultiniu, įmesk žoleles, uždenk ir troškink 160 °C orkaitėje 2,5 val.",
      "Paskutines 20 min. atidenk, apšlakstyk granatų sirupu, kad paviršius blizgėtų.",
      "Prieš pjaustant palik pailsėti 15 min."
    ],
    balance: "Šventinis patiekalas, ne kasdienis. Lėtas troškinimas leidžia naudoti pigesnę, jungiamojo audinio turinčią mėsą – ji tampa minkšta be papildomų riebalų.",
    note: "Ir Abraomas svečiams, ir tėvas sugrįžusiam sūnui paskerdžia veršį. Tai didžiausias svetingumo ženklas, koks Biblijoje įmanomas."
  },
  {
    id: "erienos-kukuliai",
    title: "Ėrienos kukuliai su burghul",
    category: "zuvis-mesa",
    scripture: "Pradžios 27:9",
    verse: "Nueik prie kaimenės, atnešk man du gerus ožiukus, ir aš paruošiu iš jų tavo tėvui skanėstą, kokį jis mėgsta.",
    time: "1 val.",
    servings: "20 kukulių",
    difficulty: "Vidutinis",
    tags: ["mėsa", "orkaitėje", "šventinė"],
    ingredients: [
      "500 g maltos ėrienos ar ožkienos",
      "150 g smulkaus burghul",
      "1 svogūnas",
      "1 a. š. maltų kmynų, 1 a. š. kalendros",
      "1/2 a. š. cinamono, 1/4 a. š. muskato",
      "50 g kedrinių riešutų",
      "3 v. š. alyvuogių aliejaus",
      "Druskos, pipirų, petražolių"
    ],
    steps: [
      "Burghul užpilk šaltu vandeniu 20 min., nusunk ir gerai išspausk.",
      "Svogūną sumalk arba labai smulkiai sukapok.",
      "Sumaišyk mėsą, burghul, svogūną, prieskonius ir druską; minkyk 5 min., kol masė taps lipni.",
      "Formuok kiaušinio formos kukulius, į vidų įspausk po kelis kedrinius riešutus.",
      "Sudėk ant skardos, apšlakstyk aliejumi ir kepk 200 °C 25 min.",
      "Patiek su jogurto padažu ir petražolėmis."
    ],
    balance: "Grūdas mėsos masėje sumažina bendrą riebalų kiekį porcijoje ir prideda skaidulų – todėl kukuliai lengvesni nei vien mėsos.",
    note: "Izaoko mėgstamas „skanėstas“ iš ožkienos yra pirmasis Biblijoje minimas patiekalas, paruoštas pagal konkretų žmogaus skonį."
  },

  /* ---------------------- PAPILDOMA: PIENO GĖRYBĖS ----------------------- */
  {
    id: "pasuku-gerimas",
    title: "Pasukų gėrimas su isopu",
    category: "pienas",
    scripture: "Teisėjų 5:25",
    verse: "Jis prašė vandens, o ji davė pieno; didingame dubenyje atnešė grietinėlės.",
    time: "5 min.",
    servings: "2 stiklinės",
    difficulty: "Lengvas",
    tags: ["pieniška", "gėrimas", "greita", "vasarai"],
    ingredients: [
      "400 g natūralaus jogurto",
      "250 ml šalto vandens",
      "1/2 a. š. druskos",
      "1 a. š. džiovinto isopo ar mėtų",
      "Ledukų",
      "Agurko griežinėlių (nebūtina)"
    ],
    steps: [
      "Jogurtą išplak su vandeniu iki vientisos konsistencijos.",
      "Įmaišyk druską.",
      "Supilk į stiklines su ledukais.",
      "Pabarstyk isopu, įmesk agurko griežinėlį.",
      "Gerk iškart – gėrimas greitai atsiskiria."
    ],
    balance: "Druska plius skystis plius pieno baltymas: karštą dieną tai atstato ir vandenį, ir prarastą natrį geriau nei grynas vanduo.",
    note: "Jaelė Siserai vietoj vandens davė būtent rūgpienio – sotesnio ir labiau migdančio gėrimo. Pasakojimas baigiasi ne itin ramiai."
  },
  {
    id: "rugpienio-sriuba",
    title: "Rūgpienio sriuba su burghul",
    category: "pienas",
    scripture: "Izaijo 7:22",
    verse: "Dėl pieno gausumo jis valgys sviestą; sviestą ir medų valgys kiekvienas, kas liks krašte.",
    time: "40 min.",
    servings: "4 porcijos",
    difficulty: "Vidutinis",
    tags: ["pieniška", "šilta", "vieno puodo", "probiotikai"],
    ingredients: [
      "800 g natūralaus jogurto",
      "1 kiaušinis (kad jogurtas nesuvirtų)",
      "1 v. š. kukurūzų krakmolo",
      "150 g burghul arba miežinių kruopų",
      "700 ml vandens",
      "3 česnako skiltelės",
      "2 v. š. sviesto arba alyvuogių aliejaus",
      "1 v. š. džiovintų mėtų",
      "Druskos"
    ],
    steps: [
      "Burghul virk vandenyje 15 min.",
      "Jogurtą išplak su kiaušiniu ir krakmolu – tai apsaugo nuo suvirimo.",
      "Plona srovele, nuolat maišant, supilk jogurtą į puodą; kaitink ant mažos ugnies 10 min., bet neužvirink stipriai.",
      "Atskirai svieste pakepink smulkintą česnaką ir mėtas 1 min.",
      "Supilk kvapnų sviestą į sriubą, pasūdyk ir patiek karštą."
    ],
    balance: "Šilta fermentuoto pieno sriuba yra viena lengviausiai virškinamų sotių patiekalų – tinka atsigaunant po ligos.",
    note: "Pranašo vaizdinys apie „sviestą ir medų“ kalba apie kraštą, kuriame liko mažai žmonių, bet daug gyvulių – maisto pakanka visiems."
  },
  {
    id: "lydytas-sviestas",
    title: "Lydytas sviestas su prieskoniais (samneh)",
    category: "pienas",
    scripture: "Patarlių 30:33",
    verse: "Spaudžiant pieną, gaunamas sviestas; spaudžiant nosį, pasirodo kraujas; kurstant pyktį, kyla vaidai.",
    time: "40 min.",
    servings: "~350 g",
    difficulty: "Vidutinis",
    tags: ["pieniška", "atsargoms", "be laktozės", "kepimui"],
    ingredients: [
      "500 g nesūdyto sviesto",
      "1 a. š. kalendros sėklų",
      "1 a. š. kmynų",
      "1 lauro lapas",
      "1 šakelė čiobrelio ar isopo"
    ],
    steps: [
      "Sviestą lėtai lydyk storadugniame puode ant mažos ugnies.",
      "Nugriebk baltas putas nuo paviršiaus.",
      "Kaitink 25–30 min., kol pieno baltymai nusės ant dugno ir paruduos, o riebalai taps skaidrūs kaip auksas.",
      "Paskutines 5 min. įmesk prieskonius ir žoleles.",
      "Perkošk per marlę į sterilų stiklainį; kambario temperatūroje laikosi mėnesius."
    ],
    balance: "Pašalinus pieno baltymus ir laktozę, riebalai tampa tinkami ir netoleruojantiems laktozės, o dūmų taškas pakyla iki 250 °C – galima kepti.",
    note: "Lydytas sviestas buvo vienintelis būdas išsaugoti pieno riebalus be šaldytuvo – todėl jis minimas kaip turto ir gerovės ženklas."
  },

  /* -------------------------- PAPILDOMA: GĖRIMAI ------------------------- */
  {
    id: "granatu-gerimas",
    title: "Granatų gėrimas su mėtomis",
    category: "gerimai",
    scripture: "Giesmių giesmė 8:2",
    verse: "Duočiau tau gerti kvapnaus vyno, savo granatų sulčių.",
    time: "15 min.",
    servings: "1 l",
    difficulty: "Lengvas",
    tags: ["be alkoholio", "antioksidantai", "vasarai", "veganiška"],
    ingredients: [
      "4 granatai (arba 700 ml granatų sulčių)",
      "300 ml šalto vandens",
      "2 v. š. medaus",
      "1 sauja mėtų",
      "1/2 citrinos",
      "Ledukų"
    ],
    steps: [
      "Granatus perpjauk pusiau ir išspausk sultis citrusų spaustuvu.",
      "Perkošk per sietelį.",
      "Medų ištirpink šaukštelyje šilto vandens ir įmaišyk į sultis.",
      "Įpilk šalto vandens ir citrinos sulčių.",
      "Mėtas lengvai pagniaužyk delne, įmesk į ąsotį su ledukais."
    ],
    balance: "Praskiestos sultys turi perpus mažiau cukraus nei grynos, bet išlaiko visus punikalaginus – antioksidantus, kurių granate daugiau nei raudonajame vyne.",
    note: "Granatų sultys Giesmių giesmėje minimos kaip meilės gėrimas – vienas nedaugelio Biblijos tekstų, kur maistas aprašomas vien dėl malonumo."
  },
  {
    id: "figu-uzpilas",
    title: "Figų ir miežių užpilas",
    category: "gerimai",
    scripture: "1 Samuelio 30:12",
    verse: "Pavalgęs jis atgavo jėgas, nes tris dienas ir tris naktis nebuvo valgęs duonos nei gėręs vandens.",
    time: "30 min.",
    servings: "1 l",
    difficulty: "Lengvas",
    tags: ["be kofeino", "veganiška", "vakarui", "šiltas"],
    ingredients: [
      "6 džiovintos figos",
      "3 v. š. miežinių grūdų",
      "1 l vandens",
      "1 cinamono lazdelė",
      "3 kardamono kapsulės",
      "1 v. š. medaus (nebūtina)"
    ],
    steps: [
      "Miežius sausoje keptuvėje skrudink 8 min., kol paruduos ir kvepės riešutais.",
      "Figas supjaustyk ketvirčiais.",
      "Užpilk vandeniu kartu su prieskoniais, užvirk ir virk 15 min.",
      "Palik pastovėti 10 min., perkošk.",
      "Gerk šiltą; išvirusias figas suvalgyk su jogurtu."
    ],
    balance: "Gėrimas be kofeino, su natūraliu vaisių cukrumi – tinka vakarui, kai reikia šilumos, bet ne stimuliacijos.",
    note: "Skrudintų miežių gėrimas iki šiol geriamas Viduržemio jūros regione kaip kavos pakaitalas."
  },
  {
    id: "isopo-arbata",
    title: "Isopo, mėtų ir čiobrelių arbata",
    category: "gerimai",
    scripture: "1 Karalių 4:33",
    verse: "Jis kalbėjo apie medžius – nuo Libano kedro iki isopo, augančio ant sienos.",
    time: "10 min.",
    servings: "1 l",
    difficulty: "Lengvas",
    tags: ["be kofeino", "žolelės", "veganiška", "greita"],
    ingredients: [
      "2 v. š. džiovinto isopo (arba raudonėlio)",
      "1 v. š. džiovintų mėtų",
      "1 a. š. čiobrelių",
      "1 l verdančio vandens",
      "1 v. š. medaus",
      "Citrinos griežinėlis"
    ],
    steps: [
      "Žoleles suberk į arbatinuką.",
      "Užpilk vandeniu, atvėsintu iki maždaug 90 °C – verdantis vanduo sunaikina eterinius aliejus.",
      "Uždenk ir palik 7 min.",
      "Perkošk, įmaišyk medų, kai arbata vos šilta.",
      "Patiek su citrinos griežinėliu."
    ],
    balance: "Isopo ir čiobrelių karvakrolis bei timolis pasižymi antimikrobiniu poveikiu; gėrimas be kofeino tinka bet kuriam paros metui.",
    note: "Saliamono išmintis Biblijoje matuojama gebėjimu kalbėti apie augalus – nuo didžiausio medžio iki mažiausio krūmelio virtuvėje."
  },
  {
    id: "datuliu-pienas",
    title: "Datulių pienas su cinamonu",
    category: "gerimai",
    scripture: "Joelio 3:18",
    verse: "Tą dieną kalnai varvės saldų vyną, kalvomis tekės pienas.",
    time: "10 min.",
    servings: "2 puodeliai",
    difficulty: "Lengvas",
    tags: ["gėrimas", "vakarui", "be cukraus", "vaikams"],
    ingredients: [
      "6 datulės be kauliukų",
      "500 ml pieno arba migdolų gėrimo",
      "1/2 a. š. cinamono",
      "1 žiupsnis kardamono",
      "1 žiupsnis druskos",
      "1 a. š. tahini (nebūtina)"
    ],
    steps: [
      "Datules 10 min. mirkyk karštame piene.",
      "Sumalk trintuvu iki vientisos masės.",
      "Grąžink į puodą, pašildyk iki 70 °C, neužvirink.",
      "Įmaišyk prieskonius, druską ir tahini.",
      "Patiek šiltą, pabarstytą cinamonu."
    ],
    balance: "Saldumas tik iš datulių, todėl gėrime lieka kalio ir skaidulų; žiupsnis druskos sustiprina saldumo pojūtį be papildomo cukraus.",
    note: "Pranašo vaizdinys apie pienu tekančias kalvas yra gerovės metafora – čia ji sudėta į puodelį."
  },

  /* ------------------ PAPILDOMA: PRIESKONIAI IR PADAŽAI ------------------ */
  {
    id: "tahini-padazas",
    title: "Tahini padažas su citrina ir česnaku",
    category: "prieskoniai",
    scripture: "Izaijo 28:25",
    verse: "Ar, išlyginęs dirvos paviršių, jis nesėja krapų, neberia kmynų?",
    time: "10 min.",
    servings: "300 ml",
    difficulty: "Lengvas",
    tags: ["veganiška", "be glitimo", "greita", "universalus"],
    ingredients: [
      "150 g tahini",
      "120 ml šalto vandens",
      "3 v. š. citrinos sulčių",
      "1 česnako skiltelė",
      "1/2 a. š. druskos",
      "1/2 a. š. kmynų",
      "Petražolių (nebūtina)"
    ],
    steps: [
      "Tahini sumaišyk su citrinos sultimis – masė iš pradžių sutirštės ir sukibs, tai normalu.",
      "Po šaukštą pilk šaltą vandenį, kiekvieną kartą gerai išmaišydamas, kol padažas pašviesės ir taps kaip grietinėlė.",
      "Įtrink česnaką, įmaišyk druską ir kmynus.",
      "Jei nori žalio padažo – įsuk saują petražolių.",
      "Laikyk šaldytuve iki 5 dienų."
    ],
    balance: "Vienas šaukštas duoda apie 60 mg kalcio ir gerų riebalų; padažas pakeičia majonezą prie daržovių, žuvies ir blynelių.",
    note: "Sezamo ir kmynų sėja Izaijo knygoje aprašoma kaip ūkininko išminties pavyzdys: kiekvienai sėklai – savas laikas ir būdas."
  },
  {
    id: "granatu-sirupas",
    title: "Naminis granatų sirupas",
    category: "prieskoniai",
    scripture: "Skaičių 13:23",
    verse: "Jie nupjovė vynmedžio šaką su vynuogių keke ir nešė dviese ant karties, taip pat granatų ir figų.",
    time: "1,5 val.",
    servings: "~250 ml",
    difficulty: "Vidutinis",
    tags: ["veganiška", "atsargoms", "rūgštumui", "be priedų"],
    ingredients: [
      "2 l granatų sulčių (apie 12 granatų)",
      "2 v. š. citrinos sulčių",
      "2 v. š. medaus (nebūtina)"
    ],
    steps: [
      "Sultis perkošk per tankų sietelį į platų puodą.",
      "Virk ant vidutinės ugnies be dangčio 60–80 min., retkarčiais pamaišant.",
      "Kai tūris sumažės iki maždaug ketvirtadalio, įmaišyk citrinos sultis ir medų.",
      "Patikrink tirštumą: ant šalto šaukštelio sirupas turi likti kaip plonas medus – atvėsęs jis dar sutirštės.",
      "Supilk į sterilų buteliuką; šaldytuve laikosi iki 6 mėn."
    ],
    balance: "Koncentruota rūgštis ir polifenoliai: keli lašai pakeičia druską ar cukrų, suteikdami patiekalui gylio.",
    note: "Žvalgų atnešta granatų ir vynuogių našta buvo Pažadėtosios žemės derlingumo įrodymas – vaisiai, kuriuos reikėjo nešti dviese."
  },
  {
    id: "kaparai",
    title: "Marinuoti kaparėliai",
    category: "prieskoniai",
    scripture: "Koheleto 12:5",
    verse: "Migdolas pražysta, žiogas pasidaro sunkus ir kaparėlis nebeskatina apetito.",
    time: "30 min. + 2 savaitės",
    servings: "1 stiklainis (300 g)",
    difficulty: "Vidutinis",
    tags: ["veganiška", "fermentuota", "atsargoms", "užkandis"],
    ingredients: [
      "300 g šviežių kaparėlių pumpurų (arba sūdytų, jei šviežių nėra)",
      "1 l vandens sūrymui",
      "80 g jūros druskos",
      "200 ml vyno acto",
      "1 a. š. kalendros sėklų",
      "1 lauro lapas",
      "Alyvuogių aliejaus paviršiui"
    ],
    steps: [
      "Kaparėlius 3 paras mirkyk kasdien keičiamame šaltame vandenyje – taip pasišalina kartumas.",
      "Paruošk 8 % sūrymą (80 g druskos litrui vandens), užpilk kaparėlius ir palik 10 dienų fermentuotis.",
      "Nusunk, sudėk į stiklainį su kalendra ir lauro lapu.",
      "Užpilk actu, praskiestu vandeniu santykiu 1:1.",
      "Ant paviršiaus supilk šaukštą aliejaus; laikyk šaldytuve."
    ],
    balance: "Kaparėliai – vienas turtingiausių kvercetino šaltinių maiste; jų druskingumas leidžia sūdyti patiekalą mažiau.",
    note: "Koheletas kaparėlį mini kaip apetito žadintoją, kuris senatvėje nustoja veikti – vienas poetiškiausių Biblijos maisto paminėjimų."
  },
  {
    id: "cesnako-padazas",
    title: "Česnakinis jogurto padažas su mėtomis",
    category: "prieskoniai",
    scripture: "Skaičių 11:5",
    verse: "Prisimename svogūnus ir česnakus.",
    time: "10 min.",
    servings: "400 ml",
    difficulty: "Lengvas",
    tags: ["pieniška", "greita", "prie mėsos", "vegetariška"],
    ingredients: [
      "400 g graikiško jogurto",
      "3 česnako skiltelės",
      "1 a. š. druskos",
      "2 v. š. citrinos sulčių",
      "2 v. š. alyvuogių aliejaus",
      "1 v. š. džiovintų mėtų",
      "1/2 agurko (nebūtina)"
    ],
    steps: [
      "Česnaką sutrink su druska į pastą – taip jis nebus aitrus.",
      "Sumaišyk su jogurtu ir citrinos sultimis.",
      "Įmaišyk mėtas ir aliejų.",
      "Norint tirštesnio padažo, įtarkuok agurką ir išspausk jo skystį.",
      "Palik 20 min. šaldytuve, kad skoniai susigertų."
    ],
    balance: "Rūgpienio padažas prie riebios mėsos padeda virškinti ir atstoja riebius aliejinius padažus – trigubai mažiau kalorijų nei majoneze.",
    note: "Česnakas dykumoje minimas su ilgesiu: Egipto valgiai buvo prasti, bet kvapnūs. Prieskonis, dėl kurio verta gaminti."
  }
];
