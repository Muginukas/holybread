/*
 * Biblijos virtuvės receptynas.
 * Kiekvienas receptas remiasi Šventojo Rašto vieta, o gaminimo eiga yra
 * šiuolaikinė rekonstrukcija pagal Artimųjų Rytų virtuvės tradicijas.
 * Eilučių citatos pateiktos sutrumpintai, savais žodžiais perpasakojant prasmę.
 */

const CATEGORIES = [
  { id: "duona", name: "Duona ir grūdai", icon: "🌾" },
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
  }
];
