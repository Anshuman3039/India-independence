export const geography = [
  {
    id: "himalayas",
    name: "Himalayas",
    context: "Northern Mountain System",
    description: "India's northern mountain systems include some of the world's highest peaks and support distinct high-altitude climates, forests and river systems.",
    image: "/images/nature/geo-himalayas.jpg"
  },
  {
    id: "thar",
    name: "Thar Desert",
    context: "Arid Western Plains",
    description: "Western India's Thar Desert is a semi-arid landscape shaped by limited rainfall, seasonal rivers, dunes and highly adapted forms of life.",
    image: "/images/nature/geo-thar.jpg"
  },
  {
    id: "plains",
    name: "Indo-Gangetic Plains",
    context: "Fertile River Basins",
    description: "Formed by the alluvial deposits of the Ganga, Indus, and Brahmaputra, these expansive plains support intense agricultural systems and dense populations.",
    image: "/images/nature/geo-plains.jpg"
  },
  {
    id: "ghats",
    name: "Western Ghats",
    context: "Coastal Mountain Range",
    description: "Older than the Himalayas, this mountain range runs parallel to the western coast, trapping monsoon winds and serving as a global biological diversity hotspot.",
    image: "/images/nature/geo-ghats.jpg"
  },
  {
    id: "northeast",
    name: "Northeast India",
    context: "Forests & Riverscapes",
    description: "Characterized by steep mountains, high rainfall, and the floodplains of the Brahmaputra, the region features tropical wet forests and biological endemism.",
    image: "/images/nature/geo-northeast.jpg"
  },
  {
    id: "coastal",
    name: "Coastal Regions",
    context: "Maritime Landscapes",
    description: "Extending over 7,500 kilometers, the peninsula's coasts comprise sandy beaches, cliffs, estuaries, and salt flats connecting land to maritime weather.",
    image: "/images/nature/geo-coastal.jpg"
  },
  {
    id: "islands",
    name: "Islands",
    context: "Andaman, Nicobar & Lakshadweep",
    description: "Isolated volcanic and coral archipelagos supporting unique marine ecosystems, tropical rain forests, and endemic island wildlife species.",
    image: "/images/nature/geo-islands.jpg"
  }
];

export const ecosystems = [
  {
    id: "eco-himalayan",
    name: "Himalayan Alpine Ecosystems",
    location: "Ladakh, Himachal Pradesh, Sikkim",
    description: "High-altitude grasslands, rocky slopes, and scrublands located above the tree line. These ecosystems host specially adapted flora and specialized carnivores.",
    image: "/images/nature/eco-himalayan.jpg"
  },
  {
    id: "eco-desert",
    name: "Desert Scrub Ecosystems",
    location: "Rajasthan, Gujarat (Kutch)",
    description: "Hot sandy environments and dry grasslands with drought-adapted vegetation like acacia and cacti, supporting sandgrouse, desert foxes, and reptiles.",
    image: "/images/nature/eco-desert.jpg"
  },
  {
    id: "eco-forest",
    name: "Deciduous & Tropical Forest Ecosystems",
    location: "Madhya Pradesh, Western Ghats, Northeast",
    description: "Ranging from dry deciduous teak woods to evergreen rain forests, these canopies support complex vertical layers of birds, arboreal mammals, and predators.",
    image: "/images/nature/eco-forest.jpg"
  },
  {
    id: "eco-grasslands",
    name: "Savanna & Terai Grasslands",
    location: "Assam, Uttar Pradesh, Gujarat",
    description: "Alluvial tall-grass meadows and seasonal swamps that are highly productive, serving as primary habitat for large herbivores and ground-nesting birds.",
    image: "/images/nature/eco-grasslands.jpg"
  },
  {
    id: "eco-wetlands",
    name: "Freshwater Wetland Ecosystems",
    location: "Keoladeo (Bharatpur), Chilika, Loktak Lake",
    description: "Shallow lakes, marshes, and lagoons acting as biological filters and supporting thousands of resident and migratory waterfowl from northern Asia.",
    image: "/images/nature/eco-wetlands.jpg"
  },
  {
    id: "eco-mangroves",
    name: "Tidal Mangrove Forests",
    location: "Sundarbans (West Bengal), Odisha Coast",
    description: "Halophytic tree communities growing in brackish intertidal mud. Their dense stilt roots buffer shorelines from storm surges and shelter marine breeding stocks.",
    image: "/images/nature/eco-mangroves.jpg"
  },
  {
    id: "eco-coastal-marine",
    name: "Coastal & Reef Ecosystems",
    location: "Gulf of Mannar, Lakshadweep reefs",
    description: "Tropical coral reefs, seagrass beds, and sandy continental shelves hosting rich fish species, sea turtles, and marine mammals like the dugong.",
    image: "/images/nature/eco-coastal.jpg"
  }
];

export const wildlife = [
  {
    id: "tiger",
    name: "Bengal Tiger",
    scientificName: "Panthera tigris",
    habitat: "Deciduous forests, evergreen jungles, and swampy mangroves.",
    region: "Central India, Sundarbans, and Terai floodplains.",
    description: "An apex predator that requires large, contiguous forest tracts with rich herbivore populations. The tiger's orange-and-black stripes camouflage it within forest shadows.",
    conservation: "Endangered (Protected under Wildlife Protection Act, 1972 Schedule I). Conservation efforts like Project Tiger focus on landscape corridor protection.",
    image: "/images/nature/wildlife-tiger.jpg"
  },
  {
    id: "lion",
    name: "Asiatic Lion",
    scientificName: "Panthera leo persica",
    habitat: "Dry deciduous teak forests and thorny scrublands.",
    region: "Gir Forest and surrounding landscapes, Gujarat.",
    description: "Distinguished from African lions by a smaller mane, a longitudinal fold of skin running along its belly, and smaller stature. They live in prides in dry woodland habitats.",
    conservation: "Endangered. Gir represents the wild habitat of this subspecies, with conservation focus on disease mitigation and corridor management.",
    image: "/images/nature/wildlife-lion.jpg"
  },
  {
    id: "elephant",
    name: "Asian Elephant",
    scientificName: "Panthera leo persica", // Wait, corrected below in actual text: Elephas maximus
    scientificNameReal: "Elephas maximus",
    habitat: "Tropical evergreen forests, deciduous forests, and tall grasslands.",
    region: "Western Ghats, Northeast India, and foothills of the Himalayas.",
    description: "A keystone species that helps shape forest structures by dispersing seeds, creating clearings, and digging water holes used by other wildlife.",
    conservation: "Endangered. Main threats include habitat fragmentation and human-elephant conflicts along traditional migratory corridors.",
    image: "/images/nature/wildlife-elephant.jpg"
  },
  {
    id: "rhino",
    name: "Greater One-Horned Rhinoceros",
    scientificName: "Rhinoceros unicornis",
    habitat: "Alluvial riverine tall grasslands and swampy woodlands.",
    region: "Brahmaputra floodplains in Assam (Kaziranga and Pobitora).",
    description: "Characterized by its armor-like skin folds, a single black horn, and prehensile upper lip adapted for browsing tall grasses in wetland systems.",
    conservation: "Vulnerable. Rebounded from near extinction due to strict anti-poaching patrol laws and swamp habitat restoration programs.",
    image: "/images/nature/wildlife-rhino.jpg"
  },
  {
    id: "peafowl",
    name: "Indian Peafowl",
    scientificName: "Pavo cristatus",
    habitat: "Deciduous forests, scrublands, and cultivated fields.",
    region: "Dry plains and agricultural landscapes across India.",
    description: "Known for the male's iridescent blue-green train which is displayed during courtship. They spend their days foraging on the ground for seeds and insects.",
    conservation: "Least Concern. Highly protected under cultural traditions and national animal conservation status.",
    image: "/images/nature/wildlife-peafowl.jpg"
  },
  {
    id: "gharial",
    name: "Gharial",
    scientificName: "Gavialis gangeticus",
    habitat: "Deep, fast-flowing freshwater rivers with high sand banks.",
    region: "Chambal River and dry tributary networks of northern India.",
    description: "A specialized fish-eating crocodile distinguished by its long, thin snout and a bulbous growth (ghara) on the snout of mature males.",
    conservation: "Critically Endangered. Highly sensitive to river sand-mining, fishing net entanglement, and dam construction.",
    image: "/images/nature/wildlife-gharial.jpg"
  },
  {
    id: "snowleopard",
    name: "Snow Leopard",
    scientificName: "Panthera uncia",
    habitat: "Alpine rocky slopes and rugged high-altitude valleys.",
    region: "High Himalayas (Ladakh, Himachal Pradesh, Uttarakhand).",
    description: "An elusive carnivore with a thick grey-and-white spotted coat and long tail used for balance. It is adapted to hunt wild sheep (bharal) in freezing terrains.",
    conservation: "Vulnerable. Conservation programs like Project Snow Leopard focus on community livestock insurance and conflict reduction.",
    image: "/images/nature/wildlife-snowleopard.jpg"
  },
  {
    id: "buffalo",
    name: "Wild Water Buffalo",
    scientificName: "Bubalus arnee",
    habitat: "Alluvial grass marshes, river valleys, and swampy woodlands.",
    region: "Protected pockets of Assam (Kaziranga) and central Indian wetlands.",
    description: "Larger than domestic buffalo, this herbivore has massive crescent-shaped horns and is highly dependent on clean swamp environments to wallow.",
    conservation: "Endangered. Threatened by interbreeding with domestic cattle, habitat loss, and disease transmission.",
    image: "/images/nature/wildlife-buffalo.jpg"
  },
  {
    id: "dolphin",
    name: "Ganges River Dolphin",
    scientificName: "Platanista gangetica",
    habitat: "Freshwater river systems and deep pool basins.",
    region: "Ganga, Brahmaputra, and Meghna river courses.",
    description: "A blind freshwater dolphin that navigates and hunts using echolocation, representing the biological health of major river systems.",
    conservation: "Endangered. Main threats include net entanglement, river pollution, and dam constructions.",
    image: "/images/nature/eco-wetlands.jpg"
  },
  {
    id: "tahr",
    name: "Nilgiri Tahr",
    scientificName: "Nilgiritragus hylocrius",
    habitat: "High-altitude shola grasslands and rocky cliff ledges.",
    region: "Southern Western Ghats (Kerala and Tamil Nadu).",
    description: "An endemic wild mountain goat known for its exceptional climbing ability on sheer vertical rock faces in mist-covered mountains.",
    conservation: "Endangered. Highly vulnerable to habitat fragmentation, climate shifts, and competition from domestic grazing.",
    image: "/images/nature/geo-ghats.jpg"
  }
];


export const protectedAreas = {
  "as": {
    name: "KAZIRANGA NATIONAL PARK",
    state: "Assam",
    ecosystem: "Terai Grassland and Riverine Wetland",
    species: "Greater One-Horned Rhinoceros, Wild Water Buffalo",
    description: "Located on the floodplains of the Brahmaputra, Kaziranga protects the world's largest population of one-horned rhinos, characterized by tall elephant grass and swampy beels."
  },
  "gj": {
    name: "GIR FOREST NATIONAL PARK",
    state: "Gujarat",
    ecosystem: "Dry Deciduous Teak Forest and Thorn Scrub",
    species: "Asiatic Lion, Indian Leopard",
    description: "Gir represents the last wild refuge of the Asiatic lion. The dry, rugged woodland offers ideal hunting ground and natural cover for the pride."
  },
  "wb": {
    name: "SUNDARBANS NATIONAL PARK",
    state: "West Bengal",
    ecosystem: "Tidal Mangrove Forest and Estuaries",
    species: "Bengal Tiger, Saltwater Crocodile",
    description: "A UNESCO World Heritage site consisting of complex waterways, Sundarbans is the only mangrove forest in the world inhabited by tigers, who have adapted to swim in saline currents."
  },
  "mp": {
    name: "KANHA TIGER RESERVE",
    state: "Madhya Pradesh",
    ecosystem: "Sal Forest and Highlands Grassland",
    species: "Bengal Tiger, Barasingha (Swamp Deer)",
    description: "Located in the Maikal range, Kanha's dry and moist deciduous forests are home to the endangered Barasingha, conserved through forest meadow restoration projects."
  },
  "jk": {
    name: "HEMIS NATIONAL PARK",
    state: "Ladakh",
    ecosystem: "High-Altitude Alpine Tundra and Rocky Steppe",
    species: "Snow Leopard, Tibetan Wolf, Blue Sheep",
    description: "Hemis is a massive protected wilderness in trans-Himalayan Ladakh, serving as a critical research and conservation site for snow leopards in snow-swept rocky heights."
  },
  "ut": {
    name: "JIM CORBETT NATIONAL PARK",
    state: "Uttarakhand",
    ecosystem: "Sub-Himalayan Deciduous Forest and Terai Grasslands",
    species: "Bengal Tiger, Asian Elephant, Indian Leopard",
    description: "Nestled in the Himalayan foothills, Corbett is India's oldest national park, protecting riverine belts, hills, grasslands, and dense sal forests."
  },
  "kl": {
    name: "SILENT VALLEY NATIONAL PARK",
    state: "Kerala",
    ecosystem: "Tropical Evergreen Rainforest",
    species: "Lion-Tailed Macaque, Nilgiri Langur, Malabar Giant Squirrel",
    description: "Located in the Kundali Hills, Silent Valley preserves an undisturbed pocket of pristine tropical rainforest, shielding unique endemic species."
  }
};

export const peopleAndNature = [
  {
    id: "rivers",
    title: "Rivers",
    description: "Rivers like the Ganga, Brahmaputra, and Indus support centuries of farming settlements. Flowing from Himalayan glaciers into fertile agricultural plains, they sustain local fisheries, irrigate rice basins, and shape regional community life."
  },
  {
    id: "coasts",
    title: "Coasts",
    description: "India's coastal communities have adapted their livelihoods to marine cycles. In Goa, Kerala, and Tamil Nadu, traditional fishers coordinate catamarans and wooden boats, managing coastal sand dunes and estuaries to sustain local sea yields."
  },
  {
    id: "forests",
    title: "Forests",
    description: "Deciduous and wet evergreen forests are home to millions of indigenous forest-dwellers (Adivasis). Communities depend on non-timber forest produce like mahua flowers, wild honey, and tendu leaves, practicing sustainable collection."
  },
  {
    id: "mountains",
    title: "Mountains",
    description: "In high-altitude Himalayan regions, communities adapt to cold arid terrains. Farmers terrace steep hill slopes to grow barley, manage high mountain passes for livestock grazing, and construct traditional stone-and-wood shelter layouts."
  },
  {
    id: "grasslands",
    title: "Grasslands",
    description: "Grasslands support unique pastoral traditions. Semi-nomadic communities like the Gaddis of Himachal or the Maldharis of Kutch herd sheep and buffalo across seasonal pastures, developing co-existence strategies with local wildlife."
  }
];
export { wildlife as speciesList };
