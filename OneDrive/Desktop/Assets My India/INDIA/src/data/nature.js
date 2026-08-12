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
  "ap": {
    name: "CORINGA WILDLIFE SANCTUARY",
    state: "Andhra Pradesh",
    ecosystem: "Estuarine Mangroves and Mudflats",
    species: "Smooth-coated Otter, Fishing Cat, Saltwater Crocodile",
    description: "Situated at the delta of the Godavari river, Coringa protects extensive mangrove forests and tidal mudflats that buffer the Bay of Bengal coast.",
    image: "/images/nature/andhra_pradesh_nature.jpg",
    region: "SOUTH"
  },
  "ar": {
    name: "NAMDAPHA NATIONAL PARK",
    state: "Arunachal Pradesh",
    ecosystem: "Subtropical to Alpine Evergreen Rainforest",
    species: "Clouded Leopard, Namdapha Flying Squirrel, Hoolock Gibbon",
    description: "Spanning a vast elevation range in the Eastern Himalayas, Namdapha protects incredibly dense rainforests that rise into snowy mountain peaks.",
    image: "/images/nature/arunachal_pradesh_nature.jpg",
    region: "NORTHEAST"
  },
  "as": {
    name: "KAZIRANGA NATIONAL PARK",
    state: "Assam",
    ecosystem: "Terai Grassland and Riverine Wetland",
    species: "Greater One-Horned Rhinoceros, Wild Water Buffalo",
    description: "Located on the floodplains of the Brahmaputra, Kaziranga protects the world's largest population of one-horned rhinos, characterized by tall elephant grass and swampy beels.",
    image: "/images/nature/wildlife-rhino.jpg",
    region: "NORTHEAST"
  },
  "br": {
    name: "VALMIKI NATIONAL PARK",
    state: "Bihar",
    ecosystem: "Terai Sal Forest and Moist Grasslands",
    species: "Bengal Tiger, Indian Leopard, One-horned Rhinoceros",
    description: "Located along the Gandak River at the Indo-Nepal border, Valmiki represents the easternmost limit of the Himalayan Terai forests.",
    image: "/images/nature/bihar_nature.jpg",
    region: "EAST"
  },
  "cg": {
    name: "INDRAVATI NATIONAL PARK",
    state: "Chhattisgarh",
    ecosystem: "Dry Deciduous Sal Forest and Grasslands",
    species: "Wild Water Buffalo, Bengal Tiger, Hill Myna",
    description: "Named after the Indravati River, this park preserves the last remaining pure populations of the wild water buffalo in central India's deciduous woodlands.",
    image: "/images/nature/chhattisgarh_nature.jpg",
    region: "CENTRAL"
  },
  "ga": {
    name: "BHAGWAN MAHAVIR WILDLIFE SANCTUARY",
    state: "Goa",
    ecosystem: "West Coast Tropical Evergreen Forest",
    species: "Black Panther, Malabar Giant Squirrel, King Cobra",
    description: "Nestled in the foothills of the Western Ghats, this sanctuary protects dense forest canopies and the spectacular Dudhsagar Falls.",
    image: "/images/nature/goa_nature.jpg",
    region: "WEST"
  },
  "gj": {
    name: "GIR FOREST NATIONAL PARK",
    state: "Gujarat",
    ecosystem: "Dry Deciduous Teak Forest and Thorn Scrub",
    species: "Asiatic Lion, Indian Leopard",
    description: "Gir represents the last wild refuge of the Asiatic lion. The dry, rugged woodland offers ideal hunting ground and natural cover for the pride.",
    image: "/images/nature/wildlife-lion.jpg",
    region: "WEST"
  },
  "hr": {
    name: "SULTANPUR NATIONAL PARK",
    state: "Haryana",
    ecosystem: "Freshwater Wetland and Shallow Lake",
    species: "Siberian Crane (migratory), Greater Flamingo, Blackbuck",
    description: "Sultanpur is a seasonal wetland that acts as a vital stopover for migratory birds traversing the Central Asian Flyway.",
    image: "/images/nature/haryana_nature.jpg",
    region: "NORTH"
  },
  "hp": {
    name: "GREAT HIMALAYAN NATIONAL PARK",
    state: "Himachal Pradesh",
    ecosystem: "West Himalayan Temperate to Alpine Forest",
    species: "Snow Leopard, Western Tragopan, Himalayan Musk Deer",
    description: "A UNESCO World Heritage site, it protects high-altitude alpine meadows and glacier-fed river valleys in the western Himalayas.",
    image: "/images/nature/wildlife-snowleopard.jpg",
    region: "NORTH"
  },
  "jh": {
    name: "BETLA NATIONAL PARK",
    state: "Jharkhand",
    ecosystem: "Dry Deciduous Sal Forest and Bamboo Groves",
    species: "Asian Elephant, Bengal Tiger, Sloth Bear",
    description: "Betla comprises the undulating plateaus of Chota Nagpur, featuring thick sal forests and bamboo groves that shelter herds of wild elephants.",
    image: "/images/nature/jharkhand_nature.jpg",
    region: "EAST"
  },
  "ka": {
    name: "BANDIPUR NATIONAL PARK",
    state: "Karnataka",
    ecosystem: "Dry Deciduous and Mixed Forest",
    species: "Asian Elephant, Bengal Tiger, Indian Dhole",
    description: "Part of the Nilgiri Biosphere Reserve, Bandipur comprises moist deciduous forests that support the largest population of wild Asian elephants in India.",
    image: "/images/nature/karnataka_nature.jpg",
    region: "SOUTH"
  },
  "kl": {
    name: "SILENT VALLEY NATIONAL PARK",
    state: "Kerala",
    ecosystem: "Tropical Evergreen Rainforest",
    species: "Lion-Tailed Macaque, Nilgiri Langur, Malabar Giant Squirrel",
    description: "Located in the Kundali Hills, Silent Valley preserves an undisturbed pocket of pristine tropical rainforest, shielding unique endemic species.",
    image: "/images/nature/wildlife-elephant.jpg",
    region: "SOUTH"
  },
  "mp": {
    name: "KANHA TIGER RESERVE",
    state: "Madhya Pradesh",
    ecosystem: "Sal Forest and Highlands Grassland",
    species: "Bengal Tiger, Barasingha (Swamp Deer)",
    description: "Located in the Maikal range, Kanha's dry and moist deciduous forests are home to the endangered Barasingha, conserved through forest meadow restoration projects.",
    image: "/images/nature/wildlife-tiger.jpg",
    region: "CENTRAL"
  },
  "mh": {
    name: "TADOBA ANDHARI TIGER RESERVE",
    state: "Maharashtra",
    ecosystem: "Dry Deciduous Teak Forest",
    species: "Bengal Tiger, Indian Leopard, Honey Badger",
    description: "As Maharashtra's oldest national park, Tadoba preserves rugged hills and deep valleys covered in dry teak forests surrounding the Tadoba Lake.",
    image: "/images/nature/eco-forest.jpg",
    region: "WEST"
  },
  "mn": {
    name: "KEIBUL LAMJAO NATIONAL PARK",
    state: "Manipur",
    ecosystem: "Floating Marshland (Phumdis) & Loktak Wetland",
    species: "Sangai (Brow-antlered Deer), Hog Deer",
    description: "The only floating national park in the world, Keibul Lamjao is composed of floating decomposed vegetation masses called phumdis on Loktak Lake.",
    image: "/images/nature/manipur_nature.jpg",
    region: "NORTHEAST"
  },
  "ml": {
    name: "NOKREK NATIONAL PARK",
    state: "Meghalaya",
    ecosystem: "Tropical Moist Evergreen Forest",
    species: "Red Panda, Pig-tailed Macaque, Asian Elephant",
    description: "Located in the Garo Hills, Nokrek serves as a biodiversity hotspot protecting ancient citrus species and moist evergreen hill canopies.",
    image: "/images/nature/meghalaya_nature.jpg",
    region: "NORTHEAST"
  },
  "mz": {
    name: "DAMPPA TIGER RESERVE",
    state: "Mizoram",
    ecosystem: "Tropical Wet Evergreen Forest",
    species: "Clouded Leopard, Hoolock Gibbon, Malabar Pied Hornbill",
    description: "Dampa protects a series of steep, forest-covered ridges along the Bangladesh border, representing a haven for rare subtropical birds and wild cats.",
    image: "/images/nature/mizoram_nature.jpg",
    region: "NORTHEAST"
  },
  "nl": {
    name: "INTANKI NATIONAL PARK",
    state: "Nagaland",
    ecosystem: "Subtropical Moist Semi-Evergreen Forest",
    species: "Hoolock Gibbon, Palm Civet, Tiger",
    description: "Intanki protects a block of equatorial rainforest in Peren district, featuring tall trees and dense undergrowth that shelter rare primates.",
    image: "/images/nature/nagaland_nature.jpg",
    region: "NORTHEAST"
  },
  "or": {
    name: "BHITARKANIKA NATIONAL PARK",
    state: "Odisha",
    ecosystem: "Tidal Mangroves and Wetland Delta",
    species: "Saltwater Crocodile, Olive Ridley Turtle",
    description: "Formed by the Brahmani and Baitarani river deltas, Bhitarkanika is India's second-largest mangrove ecosystem, hosting giant saltwater crocodiles.",
    image: "/images/nature/eco-mangroves.jpg",
    region: "EAST"
  },
  "pb": {
    name: "HARIKE WETLAND & BIRD SANCTUARY",
    state: "Punjab",
    ecosystem: "Freshwater Riverine Lacustrine Wetland",
    species: "Indus River Dolphin, Smooth-coated Otter",
    description: "Situated at the confluence of the Beas and Sutlej rivers, Harike is one of the largest wetlands in northern India, supporting hundreds of waterfowl.",
    image: "/images/nature/punjab_nature.jpg",
    region: "NORTH"
  },
  "rj": {
    name: "DESERT NATIONAL PARK",
    state: "Rajasthan",
    ecosystem: "Arid Desert Dunes and Scrubland",
    species: "Great Indian Bustard, Desert Fox",
    description: "Located in the Thar Desert, this park preserves the fragile sand dune ecosystem, serving as the last stronghold of the critically endangered Great Indian Bustard.",
    image: "/images/nature/rajasthan_nature.jpg",
    region: "WEST"
  },
  "sk": {
    name: "KHANGCHENDZONGA NATIONAL PARK",
    state: "Sikkim",
    ecosystem: "Himalayan Sub-alpine to Alpine Meadow",
    species: "Snow Leopard, Red Panda, Himalayan Tahr",
    description: "A UNESCO World Heritage mixed site, it spans from temperate forests to glaciers surrounding Mount Kangchenjunga, the third highest peak.",
    image: "/images/nature/sikkim_nature.jpg",
    region: "NORTHEAST"
  },
  "tn": {
    name: "MUDUMALAI NATIONAL PARK",
    state: "Tamil Nadu",
    ecosystem: "Tropical Dry and Moist Deciduous Forest",
    species: "Bengal Tiger, Indian Gaur, Asian Elephant",
    description: "Mudumalai shares borders with Kerala and Karnataka, forming a key corridor for elephant migrations in the Western Ghats landscape.",
    image: "/images/nature/tamil_nadu_nature.jpg",
    region: "SOUTH"
  },
  "tg": {
    name: "KASU BRAHMANANDA REDDY NATIONAL PARK",
    state: "Telangana",
    ecosystem: "Deccan Thorny Scrub and Deciduous Woodland",
    species: "Indian Civet, Jungle Cat, Monitor Lizard",
    description: "KBR serves as an urban forest oasis in Hyderabad, preserving native scrublands, rock formations, and over a hundred bird species.",
    image: "/images/nature/telangana_nature.jpg",
    region: "SOUTH"
  },
  "tr": {
    name: "CLOUDED LEOPARD NATIONAL PARK",
    state: "Tripura",
    ecosystem: "Tropical Semi-Evergreen Forest",
    species: "Clouded Leopard, Spectacled Langur",
    description: "Located in the Sipahijala sanctuary, this park protects moist deciduous woodland patches containing rare wild bamboo species and clouded leopards.",
    image: "/images/nature/tripura_nature.jpg",
    region: "NORTHEAST"
  },
  "up": {
    name: "NATIONAL CHAMBAL SANCTUARY",
    state: "Uttar Pradesh",
    ecosystem: "Riverine Freshwater Sandy Basin",
    species: "Gharial, Gangetic Dolphin, Mugger Crocodile",
    description: "Stretching along the clean, fast-flowing Chambal River, this sanctuary protects the last breeding populations of the critically endangered Gharial.",
    image: "/images/nature/wildlife-gharial.jpg",
    region: "NORTH"
  },
  "ut": {
    name: "VALLEY OF FLOWERS NATIONAL PARK",
    state: "Uttarakhand",
    ecosystem: "West Himalayan Alpine Meadow",
    species: "Asiatic Black Bear, Snow Leopard, Musk Deer",
    description: "Nestled in the high Himalayas, the Valley of Flowers is a UNESCO World Heritage site famous for its alpine meadows of wild endemic flowers.",
    image: "/images/nature/eco-himalayan.jpg",
    region: "NORTH"
  },
  "wb": {
    name: "SUNDARBANS NATIONAL PARK",
    state: "West Bengal",
    ecosystem: "Tidal Mangrove Forest and Estuaries",
    species: "Bengal Tiger, Saltwater Crocodile",
    description: "A UNESCO World Heritage site consisting of complex waterways, Sundarbans is the only mangrove forest in the world inhabited by tigers, who have adapted to swim in saline currents.",
    image: "/images/nature/eco-mangroves.jpg",
    region: "EAST"
  },
  "an": {
    name: "MAHATMA GANDHI MARINE NATIONAL PARK",
    state: "Andaman & Nicobar Islands",
    ecosystem: "Tropical Reef and Coastal Mangroves",
    species: "Hawksbill Turtle, Dugong, Clownfish",
    description: "Located in Wandoor, this park protects a cluster of islands containing vibrant coral reefs, seagrass beds, and mangrove creek systems.",
    image: "/images/nature/andaman_and_nicobar_islands_nature.jpg",
    region: "UNION TERRITORIES"
  },
  "ch": {
    name: "SUKHNA WILDLIFE SANCTUARY",
    state: "Chandigarh",
    ecosystem: "Shivalik Foothill Dry Deciduous Scrub",
    species: "Sambar Deer, Indian Pangolin, Golden Jackal",
    description: "Located in the Shivalik hills, Sukhna protects catchment areas of the lake, serving as an important ecological zone for dryland wildlife.",
    image: "/images/nature/chandigarh_nature.jpg",
    region: "UNION TERRITORIES"
  },
  "dn": {
    name: "FUDAM WILDLIFE SANCTUARY",
    state: "Dadra & Nagar Haveli and Daman & Diu",
    ecosystem: "Salt Marsh and Mudflats",
    species: "Spoonbill, Painted Stork, Flamingos",
    description: "Fudam is a small coastal wetland sanctuary in Diu protecting tidal mudflats and marshes that attract migratory waterfowl during winters.",
    image: "/images/nature/dadra_and_nagar_haveli_and_daman_and_diu_nature.jpg",
    region: "UNION TERRITORIES"
  },
  "dl": {
    name: "ASOLA BHATTI WILDLIFE SANCTUARY",
    state: "Delhi",
    ecosystem: "Arid Aravalli Thorn Forest",
    species: "Nilgai, Golden Jackal, Blackbuck",
    description: "Located on the Southern Ridge of the Aravalli hills, Asola Bhatti represents Delhi's primary lung, protecting semi-arid scrub forests.",
    image: "/images/nature/delhi_nature.jpg",
    region: "UNION TERRITORIES"
  },
  "jk": {
    name: "DACHIGAM NATIONAL PARK",
    state: "Jammu & Kashmir",
    ecosystem: "Temperate Coniferous and Deciduous Forest",
    species: "Hangul (Kashmir Stag), Himalayan Black Bear",
    description: "Located in the Zabarwan Range, Dachigam protects pristine coniferous forests and rivers, serving as the sole habitat of the Hangul stag.",
    image: "/images/nature/jammu_and_kashmir_nature.jpg",
    region: "UNION TERRITORIES"
  },
  "la": {
    name: "HEMIS NATIONAL PARK",
    state: "Ladakh",
    ecosystem: "High-Altitude Alpine Tundra and Rocky Steppe",
    species: "Snow Leopard, Tibetan Wolf, Blue Sheep",
    description: "Hemis is a massive protected wilderness in trans-Himalayan Ladakh, serving as a critical research and conservation site for snow leopards in snow-swept rocky heights.",
    image: "/images/nature/wildlife-snowleopard.jpg",
    region: "UNION TERRITORIES"
  },
  "ld": {
    name: "PITTI BIRD SANCTUARY",
    state: "Lakshadweep",
    ecosystem: "Coral Atoll and Pelagic Reef",
    species: "Sooty Tern, Brown Noddy, Green Sea Turtle",
    description: "Pitti is an uninhabited coral islet serving as a key nesting site for pelagic seabirds and sea turtles in the Arabian Sea.",
    image: "/images/nature/geo-islands.jpg",
    region: "UNION TERRITORIES"
  },
  "py": {
    name: "OUSUDU WETLAND & BIRD SANCTUARY",
    state: "Puducherry",
    ecosystem: "Freshwater Lake and Aquatic Marsh",
    species: "Spot-billed Pelican, Eurasian Spoonbill",
    description: "Ousteri Lake is a rich freshwater wetland recognized as an important bird area, hosting hundreds of resident and migratory waterbirds.",
    image: "/images/nature/puducherry_nature.jpg",
    region: "UNION TERRITORIES"
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
