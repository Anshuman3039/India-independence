export const regions = [
  {
    id: "north",
    name: "North India",
    intro: "Characterized by flatbreads, pulses, and rich gravies, wheat-producing North India features a wide array of food traditions influenced by seasonal shifts, agricultural abundance, and historical trade.",
    dishes: [
      { name: "Roti & Paratha traditions", desc: "Whole-wheat flatbreads cooked in tandoor ovens or on griddles (tawas), serving as the main grain source." },
      { name: "Dal & Rajma", desc: "Slow-cooked black lentils (Dal Makhani) or kidney beans in onion-tomato gravy (Rajma) prepared in everyday homes." },
      { name: "Mughlai influences", desc: "Mildly spiced gravies enriched with cream, seeds, and nuts, representing medieval culinary exchanges." }
    ],
    image: "/images/food/region-north.jpg"
  },
  {
    id: "west",
    name: "West India",
    intro: "Stretching from dry desert plains to humid coastal hills, West India features diverse food cultures—ranging from purely vegetarian community thalis to spicy coconut-marinated seafood.",
    dishes: [
      { name: "Gujarati Thali traditions", desc: "A balanced platter of sweet, sour, salty, and spicy dishes including dhokla, kadhi, and flatbreads." },
      { name: "Goan Coastal Cuisine", desc: "Representing a synthesis of regional Konkan practices and historic Portuguese ingredients like vinegar and red chilies." },
      { name: "Malvani & Maharashtrian dishes", desc: "Using local kokum souring agents, fresh fish, and dry coconut spices (Goda masala)." }
    ],
    image: "/images/food/region-west.jpg"
  },
  {
    id: "east",
    name: "East India",
    intro: "Centered around fertile river deltas, East Indian cuisine is defined by rice cultivation, river freshwater fish, and mustard oil, creating distinct comforting and sharp flavor profiles.",
    dishes: [
      { name: "Pakhala", desc: "Fermented rice soaked in seasoned water, widely consumed in Odisha to beat the hot summer humidity." },
      { name: "Machha-based Cuisines", desc: "Freshwater fish curries prepared with mustard paste (Beshara) or light tomato-ginger broths (Jholo)." },
      { name: "Dalma & Pitha", desc: "Lentils cooked with raw vegetables, and traditional steamed or fried rice-flour cakes (Pithas)." }
    ],
    image: "/images/food/region-east.jpg"
  },
  {
    id: "south",
    name: "South India",
    intro: "Unified by rice, coconut, and souring agents like tamarind, South India features highly distinct regional cuisines that leverage local millets, spices, and fermentation processes.",
    dishes: [
      { name: "Idli, Dosa & Sambar", desc: "Fermented rice-and-lentil batters steamed as soft cakes or griddled as thin crepes, served with lentil stews." },
      { name: "Rice-based Cuisines", desc: "A variety of mixed rice preparations like lemon rice, tamarind rice (Puliyodarai), and coconut rice." },
      { name: "Spiced Curry Leaves & Mustard Seeds", desc: "The ubiquitous tempering (tadka) using local coconut oil, dry chilies, and curry leaves." }
    ],
    image: "/images/food/region-south.jpg"
  },
  {
    id: "northeast",
    name: "Northeast India",
    intro: "The Northeast comprises diverse high-altitude and river valley food cultures. It is defined by zero-oil boiling techniques, smoking, fermenting bamboo shoots or fish, and minimal dry spices.",
    dishes: [
      { name: "Fermented Bamboo Shoot", desc: "Used as a souring and aromatic cooking agent in pork, fish, and vegetable stews across the hills." },
      { name: "Assamese Khar", desc: "A unique digestive liquid prepared by filtering water through the ash of sun-dried banana peels, cooked with raw papaya." },
      { name: "Smoked Meat traditions", desc: "Meats cured over home hearths, preserving them for long periods and infusing rich wood-fire aromas." }
    ],
    image: "/images/food/region-northeast.jpg"
  },
  {
    id: "himalayan",
    name: "Himalayan Regions",
    intro: "Influenced by cold climate conditions and dry mountain terrain, Himalayan food cultures prioritize barley, buckwheat, fermented leafy vegetables, and warming noodle soups.",
    dishes: [
      { name: "Thukpa & Momos", desc: "Hearty vegetable or meat noodle soups, and steamed wheat dumplings reflecting trans-Himalayan connectivity." },
      { name: "Himachali Siddu", desc: "Local yeast-leavened wheat breads stuffed with poppy seeds, walnut paste, or split lentils, steamed and served with ghee." },
      { name: "Gundruk", desc: "Fermented and sun-dried mustard or radish leaves, used to prepare sour soups during winter snows." }
    ],
    image: "/images/food/region-himalayan.jpg"
  },
  {
    id: "coastal",
    name: "Coastal India",
    intro: "Stretching along thousands of kilometers of coastline, these cuisines are shaped by coconut groves, coastal wetlands, and the daily catch of marine seafood.",
    dishes: [
      { name: "Seafood preparations", desc: "Fresh fish and prawns cooked in fiery curries seasoned with dry red chilies and local souring fruits." },
      { name: "Coconut Milk bases", desc: "Squeezed coconut milk used to mellow spiced gravies, characteristic of Mangalorean and Malabari cooking." },
      { name: "Rice Appam & Puttu", desc: "Steamed cylinder rice cakes with coconut (Puttu) or lacy fermented rice pancakes (Appam)." }
    ],
    image: "/images/food/region-coastal.jpg"
  }
];

export const ingredients = [
  {
    id: "rice",
    name: "Rice",
    grown: "Grown in wet alluvial river basins across India (West Bengal, Uttar Pradesh, Punjab, Andhra Pradesh, Odisha).",
    description: "Rice is deeply connected to food traditions across many parts of India, particularly regions with suitable rainfall and irrigation. From fragrant long-grain Basmati in the north to short-grain aromatic Joha in the east and parboiled Ponni in the south, it is a staple of everyday meals and sacred rituals.",
    details: {
      regions: ["Kerala", "West Bengal", "Odisha", "Tamil Nadu", "Assam", "Andhra Pradesh"],
      uses: ["Steamed staple grain", "Fermented batters for idli/dosa", "Sweet puddings (Kheer/Payasam)", "Puffed and flaked snacks"]
    },
    image: "/images/food/ingredient-rice.jpg"
  },
  {
    id: "millets",
    name: "Millets (Bajra/Ragi)",
    grown: "Cultivated in semi-arid drylands and rainfed regions of Rajasthan, Maharashtra, Karnataka, and Tamil Nadu.",
    description: "Millets represent some of the oldest cultivated grains in the subcontinent. Resistant to droughts and poor soils, pearl millet (Bajra), finger millet (Ragi), and sorghum (Jowar) provide dense nutrition and form the base of rustic flatbreads and hot porridges.",
    details: {
      regions: ["Rajasthan", "Karnataka", "Maharashtra", "Tamil Nadu", "Gujarat"],
      uses: ["Flatbreads (Rotlas/Bhakhri)", "Fermented breakfast porridges (Koozh)", "Steamed dumplings (Mudde)"]
    },
    image: "/images/food/ingredient-millets.jpg"
  },
  {
    id: "lentils",
    name: "Lentils (Dals)",
    grown: "Cultivated widely in dry agricultural soils across central, northern, and western India.",
    description: "Lentils are the primary protein source in traditional Indian vegetarian diets. Split pulses like yellow pigeon peas (Toor), black gram (Urad), red lentils (Masoor), and green gram (Moong) are boiled, seasoned with tempered oil, and served with rice or rotis.",
    details: {
      regions: ["Madhya Pradesh", "Uttar Pradesh", "Maharashtra", "Rajasthan"],
      uses: ["Everyday spiced dals", "Crisp paper-thin papads", "Fritters (Vadas)", "Savory pancakes (Pesarattu)"]
    },
    image: "/images/food/ingredient-lentils.jpg"
  },
  {
    id: "chilies",
    name: "Chilies",
    grown: "Grown extensively in dry climates, particularly Andhra Pradesh, Karnataka, Kashmir, and Rajasthan.",
    description: "Introduced by Portuguese traders in the 16th century, chilies quickly integrated into the Indian spice lexicon. Ranging from mild, vibrantly red Kashmiri chilies to fiery Guntur chilies and the intense Bhut Jolokia of the Northeast, they provide heat and color to curries.",
    details: {
      regions: ["Andhra Pradesh", "Kashmir", "Nagaland", "Karnataka", "Rajasthan"],
      uses: ["Spiced curry powders", "Pickles and chutneys", "Whole fried tempering (Tadka)", "Smoked spices"]
    },
    image: "/images/food/ingredient-chilies.jpg"
  },
  {
    id: "coconut",
    name: "Coconut",
    grown: "Thrives in tropical coastal regions (Kerala, Karnataka, Tamil Nadu, Goa, Andhra Pradesh).",
    description: "A cornerstone of coastal cuisine, coconut is utilized in all forms: fresh grated flesh, extracted thick milk, and cold-pressed oil. It provides fat, body, and a sweet balance to fiery spiced curries.",
    details: {
      regions: ["Kerala", "Goa", "Karnataka", "Tamil Nadu", "Odisha"],
      uses: ["Grind spice pastes", "Curry bases", "Chutneys", "Coconut-oil frying", "Sweet fillings"]
    },
    image: "/images/food/ingredient-coconut.jpg"
  },
  {
    id: "tamarind",
    name: "Tamarind",
    grown: "Harvested from mature trees in dry, warm tropical plains across southern and central India.",
    description: "Tamarind pods contain a sticky sour pulp that serves as a vital souring agent. Its rich, fruity acidity balances spices in classic stews like sambar, rasam, fish curries, and sweet-and-sour street food chutneys.",
    details: {
      regions: ["Tamil Nadu", "Andhra Pradesh", "Karnataka", "Maharashtra"],
      uses: ["Sambar and Rasam bases", "Sweet-and-sour chutneys", "Fish curry souring", "Preservatives"]
    },
    image: "/images/food/ingredient-tamarind.jpg"
  },
  {
    id: "ginger",
    name: "Ginger",
    grown: "Cultivated in moist, warm undergrowths (Kerala, Karnataka, Meghalaya, West Bengal).",
    description: "Ginger provides a sharp, warm pungency used as a foundational aromatic. It is commonly ground with garlic into a base paste, brewed in hot tea, or sliced as a digestive garnish in heavy stews.",
    details: {
      regions: ["Meghalaya", "Kerala", "Assam", "West Bengal"],
      uses: ["Ginger-garlic base paste", "Ginger spiced tea (Adrak Chai)", "Pickles", "Digestive remedies"]
    },
    image: "/images/food/ingredient-ginger.jpg"
  },
  {
    id: "turmeric",
    name: "Turmeric",
    grown: "Produced extensively in agricultural zones of Andhra Pradesh, Tamil Nadu, and Odisha.",
    description: "Revered for its earthy warmth, bright golden color, and antiseptic properties, turmeric rhizomes are dried and ground into a powder. It is added to almost every traditional curry, dal, and dry vegetable stir-fry.",
    details: {
      regions: ["Andhra Pradesh", "Tamil Nadu", "Odisha", "Maharashtra"],
      uses: ["Spiced coloring base", "Traditional pickling", "Warming milk brews (Haldi Doodh)"]
    },
    image: "/images/food/ingredient-turmeric.jpg"
  },
  {
    id: "mustard-oil",
    name: "Mustard Oil",
    grown: "Cultivated in alluvial plains of Rajasthan, Uttar Pradesh, Haryana, Madhya Pradesh, and West Bengal.",
    description: "Known for its sharp, pungent aroma and high smoke point. It serves as the primary cooking medium and flavoring agent in Eastern and Northern India, essential for authentic fish curries, pickles, and dry vegetable stirs.",
    details: {
      regions: ["West Bengal", "Odisha", "Bihar", "Uttar Pradesh", "Assam"],
      uses: ["Pungent frying medium", "Raw dressing in mashed dishes (Bhortas)", "Oil-base pickling"]
    },
    image: "/images/food/ingredient-mustardoil.jpg"
  },
  {
    id: "saffron",
    name: "Saffron (Kesar)",
    grown: "Exclusively harvested from the high-altitude plateaus of Pampore, Jammu & Kashmir.",
    description: "Derived from the delicate stigmas of the purple crocus flower. It is the most expensive spice in the world, valued for its unique floral aroma, golden color, and sweet-savory versatility in royal cuisines.",
    details: {
      regions: ["Jammu & Kashmir", "Uttar Pradesh (Awadh)", "Delhi"],
      uses: ["Fragrant biryani infusions", "Rich festival desserts (Kheer/Halwa)", "Kashmiri Kahwa tea brews"]
    },
    image: "/images/food/ingredient-saffron.jpg"
  }
];


export const geography = {
  "ap": {
    name: "ANDHRA PRADESH",
    image: "/images/food/ingredient-chilies.jpg",
    dishes: [
      { name: "Gongura Pachadi", desc: "A tangy, fiery chutney prepared from sorrel leaves (gongura) pounded with green chilies, garlic, and hot oil." },
      { name: "Rayalaseema Ragi Sangati", desc: "Steamed finger-millet dumplings served with spicy chicken or vegetable gravy." },
      { name: "Andhra Biryani", desc: "A fragrant rice dish cooked with short-grain rice, spiced chicken, fried onions, and ghee." }
    ]
  },
  "ar": {
    name: "ARUNACHAL PRADESH",
    image: "/images/food/arunachal_pradesh_food.jpg",
    dishes: [
      { name: "Chura Sabji", desc: "A warming soup cooked with fermented yak cheese, fresh herbs, and small hot chilies." },
      { name: "Lukter", desc: "Smoked dry meat flakes pounded with birds-eye chilies and local aromatic spices." },
      { name: "Pehak", desc: "A savory condiment paste prepared by fermenting soy beans with ginger and bird's-eye chilies." }
    ]
  },
  "as": {
    name: "ASSAM",
    image: "/images/food/region-northeast.jpg",
    dishes: [
      { name: "Masor Tenga", desc: "A refreshing, sour freshwater fish curry flavored with tomatoes and lemon juice." },
      { name: "Assamese Khar", desc: "A alkaline starter stew filtered through banana-leaf ashes, cooked with raw papaya." },
      { name: "Outenga Dal", desc: "Yellow lentils simmered with dried elephant apple slices for a unique fruity sourness." }
    ]
  },
  "br": {
    name: "BIHAR",
    image: "/images/food/region-east.jpg",
    dishes: [
      { name: "Litti Chokha", desc: "Wheat balls stuffed with roasted gram flour (sattu) baked on open embers and dipped in ghee, served with mashed eggplant." },
      { name: "Sattu Paratha", desc: "Flatbreads stuffed with dry spiced roasted chickpea flour, providing daily agricultural nutrition." },
      { name: "Thekua", desc: "A rustic deep-fried sweet biscuit prepared from wheat flour, fennel seeds, dry coconut, and sugarcane jaggery." }
    ]
  },
  "cg": {
    name: "CHHATTISGARH",
    image: "/images/food/chhattisgarh_food.jpg",
    dishes: [
      { name: "Chhela Roti", desc: "Thin, savory rice-flour crepes griddled on cast-iron pans and served with spicy tomato chutney." },
      { name: "Fara", desc: "Steamed rice-flour cylinders tossed in oil with mustard seeds, sesame, and fresh coriander." },
      { name: "Bore Basi", desc: "Cold fermented rice soaked in water, eaten in summer with pickle, green chilies, and onions." }
    ]
  },
  "ga": {
    name: "GOA",
    image: "/images/food/region-coastal.jpg",
    dishes: [
      { name: "Fish Curry Rice", desc: "Fresh sea catch simmered in coconut milk gravy flavored with red chilies, turmeric, and local kokum fruit." },
      { name: "Pork Vindaloo", desc: "A highly spiced, tangy dish prepared with vinegar, red chilies, garlic, and local spices." },
      { name: "Bebinca", desc: "A rich multi-layered traditional dessert baked with coconut milk, egg yolks, flour, and sugar." }
    ]
  },
  "gj": {
    name: "GUJARAT",
    image: "/images/food/region-west.jpg",
    dishes: [
      { name: "Gujarati Thali", desc: "A multi-dish vegetarian feast showcasing dhokla, shaak, sweet kadhi, and flatbreads." },
      { name: "Handvo", desc: "A savory baked cake made of fermented lentils, rice, mixed vegetables, and tempered mustard seeds." },
      { name: "Undhiyu", desc: "A seasonal winter vegetable dish prepared upside-down in underground clay pots with green garlic." }
    ]
  },
  "hr": {
    name: "HARYANA",
    image: "/images/food/haryana_food.jpg",
    dishes: [
      { name: "Bajra Khichri", desc: "Pearl millet slow-cooked with split green gram, serving as a hearty winter staple with ghee." },
      { name: "Hara Dhania Cholia", desc: "Green chickpeas cooked in an onion-tomato gravy with fresh coriander and ginger." },
      { name: "Singri ki Sabji", desc: "Dried desert beans tossed with local yogurt, mustard seeds, and dry whole spices." }
    ]
  },
  "hp": {
    name: "HIMACHAL PRADESH",
    image: "/images/food/himachal_pradesh_food.jpg",
    dishes: [
      { name: "Himachali Siddu", desc: "Yeast-leavened wheat dough stuffed with poppy seeds, walnut paste, or split lentils, steamed and served with ghee." },
      { name: "Madra", desc: "A creamy, slow-cooked chickpea curry prepared in a spiced yogurt gravy flavored with cardamom." },
      { name: "Chha Gosht", desc: "Marinated meat slow-simmered in a rich yogurt and gram-flour sauce with local mountain herbs." }
    ]
  },
  "jh": {
    name: "JHARKHAND",
    image: "/images/food/jharkhand_food.jpg",
    dishes: [
      { name: "Duska", desc: "Deep-fried savory pancakes made from a batter of soaked rice and split bengal gram, served with potato curry." },
      { name: "Chilka Roti", desc: "A traditional crepe prepared from a thin batter of local brown rice flour, cooked on flat griddles." },
      { name: "Madua ki Roti", desc: "Earthy, nutritious flatbreads rolled from finger millet (ragi) flour, cooked on open fires." }
    ]
  },
  "ka": {
    name: "KARNATAKA",
    image: "/images/food/karnataka_food.jpg",
    dishes: [
      { name: "Bisi Bele Bath", desc: "A comforting, hot rice and lentil pot cooked with mixed vegetables, tamarind, and roasted spices." },
      { name: "Ragi Mudde", desc: "Steamed finger-millet balls swallowed whole, serving as a primary source of slow-release energy for farmers." },
      { name: "Neer Dosa", desc: "Soft, lacy, paper-thin crepes prepared from a light, unfermented rice batter, served with coconut chutney." }
    ]
  },
  "kl": {
    name: "KERALA",
    image: "/images/food/ingredient-coconut.jpg",
    dishes: [
      { name: "Appam with Ishtu", desc: "Lacy, fermented rice pancakes served with a mild, cardamon-infused coconut milk vegetable or meat stew." },
      { name: "Puttu", desc: "Steamed cylinders of ground rice and grated coconut layers, eaten with black chickpea curry." },
      { name: "Malabar Biryani", desc: "A fragrant rice dish cooked with short-grain Khaima rice, spiced chicken, fried onions, and ghee." }
    ]
  },
  "mp": {
    name: "MADHYA PRADESH",
    image: "/images/food/region-north.jpg",
    dishes: [
      { name: "Bhutte ka Kees", desc: "Grated sweet corn slow-cooked in milk, seasoned with mustard seeds, green chilies, and fresh coconut." },
      { name: "Indori Poha-Jalebi", desc: "Flattened rice seasoned with turmeric and steamed, topped with sev, and paired with sweet crispy jalebis." },
      { name: "Dal Bafla", desc: "Boiled and baked wheat dough balls dipped in pure ghee, served with spiced mixed lentils and mango pickle." }
    ]
  },
  "mh": {
    name: "MAHARASHTRA",
    image: "/images/food/everyday-lunch.jpg",
    dishes: [
      { name: "Misal Pav", desc: "A fiery-spiced curry made of sprouted moth beans, topped with crunchy farsan mix and raw onions." },
      { name: "Pithla Bhakri", desc: "A rustic chickpea-flour porridge seasoned with garlic and green chilies, paired with sorghum flatbreads." },
      { name: "Puran Poli", desc: "Sweet wheat flatbreads stuffed with a cooked paste of split chana dal and jaggery." }
    ]
  },
  "mn": {
    name: "MANIPUR",
    image: "/images/food/manipur_food.jpg",
    dishes: [
      { name: "Eromba", desc: "A traditional mashed dish of boiled vegetables and fish, flavored with hot chilies and fermented fish." },
      { name: "Kangshoi", desc: "A comforting, oil-free vegetable stew flavored with sliced onions, ginger, and dried fish." },
      { name: "Chak-Hao Kheer", desc: "A rich, aromatic purple dessert made by boiling Manipuri black sticky rice with milk and cardamom." }
    ]
  },
  "ml": {
    name: "MEGHALAYA",
    image: "/images/food/meghalaya_food.jpg",
    dishes: [
      { name: "Jadoh", desc: "Fragrant red hill-rice cooked with smoked pork or chicken stock, ginger, and local wild greens." },
      { name: "Dohneiiong", desc: "A rich, savory pork stew cooked with roasted black sesame paste, ginger-garlic, and green chilies." },
      { name: "Tungrymbai", desc: "A pungent tribal condiment paste made from fermented soy beans, cooked with ginger, garlic, and chili." }
    ]
  },
  "mz": {
    name: "MIZORAM",
    image: "/images/food/mizoram_food.jpg",
    dishes: [
      { name: "Bai", desc: "An oil-free vegetable stew made of boiled mustard leaves, pumpkin, and beans, seasoned with fermented pork fat." },
      { name: "Vawksa Rep", desc: "Smoked pork strips stir-fried with fresh mustard greens, ginger-garlic, and bird's-eye chilies." },
      { name: "Sawhchiar", desc: "A comforting porridge of local rice cooked with chicken or pork stock and mild black peppercorns." }
    ]
  },
  "nl": {
    name: "NAGALAND",
    image: "/images/food/nagaland_food.jpg",
    dishes: [
      { name: "Axone (Akhuni)", desc: "Pork or vegetable stews seasoned with a pungent paste of fermented soy beans, garlic, and chilies." },
      { name: "Smoked Pork with Anishi", desc: "Smoked pork pieces cooked with dried yam leaves paste and bird's-eye chilies." },
      { name: "Galho", desc: "A comforting rice-and-lentil pot cooked with seasonal wild forest greens and smoked meats." }
    ]
  },
  "or": {
    name: "ODISHA",
    image: "/images/food/region-east.jpg",
    dishes: [
      { name: "Pakhala", desc: "Fermented rice soaked in cold water, served with curd, mustard-fried greens, and mashed potatoes to beat summer heat." },
      { name: "Dalma", desc: "A nutritious stew of split yellow lentils cooked with raw papaya, green banana, eggplant, and dry-roasted spices." },
      { name: "Chhena Poda", desc: "A baked cheese dessert made of fresh cottage cheese kneaded with sugar, cardamom, and baked in leaf-lined pans." }
    ]
  },
  "pb": {
    name: "PUNJAB",
    image: "/images/food/punjab_food.jpg",
    dishes: [
      { name: "Sarson ka Saag", desc: "Slow-simmered mustard greens enriched with bathua leaves, finished with butter and ginger." },
      { name: "Makki di Roti", desc: "Golden flatbreads made of stone-ground yellow maize flour, griddled on iron pans." },
      { name: "Pindi Chole", desc: "Chickpeas slow-boiled with black tea leaves, dry-spiced with pomegranate seeds and dry mango powder." }
    ]
  },
  "rj": {
    name: "RAJASTHAN",
    image: "/images/food/rajasthan_food.jpg",
    dishes: [
      { name: "Dal Baati Churma", desc: "Oven-baked wheat balls dipped in pure ghee, served with spiced mixed lentils and sweet wheat powder." },
      { name: "Ker Sangri", desc: "A unique dryland dish made of wild desert berries and dried beans simmered in mustard oil." },
      { name: "Lal Maas", desc: "A hot, fiery mutton curry prepared with garlic, spices, and a large amount of local Mathania red chilies." }
    ]
  },
  "sk": {
    name: "SIKKIM",
    image: "/images/food/sikkim_food.jpg",
    dishes: [
      { name: "Momo & Thukpa", desc: "Steamed flour dumplings filled with vegetables or meat, and hot noodle soups with winter greens." },
      { name: "Sha Phaley", desc: "Deep-fried bread pockets stuffed with spiced minced meat, served with a hot chili dip." },
      { name: "Sinki", desc: "A traditional winter preserve made by fermenting radish roots in underground pits, cooked into soups." }
    ]
  },
  "tn": {
    name: "TAMIL NADU",
    image: "/images/food/region-south.jpg",
    dishes: [
      { name: "Ven Pongal", desc: "A comforting breakfast pot of rice and split mung lentils cooked soft, tempered with ghee, pepper, and ginger." },
      { name: "Idli & Dosa", desc: "Fermented steamed rice cakes and griddled crepes paired with coconut chutneys and hot tamarind sambar." },
      { name: "Chettinad Kozhi", desc: "A highly aromatic chicken curry prepared with freshly roasted coriander, fennel, dry red chilies, and kalpasi." }
    ]
  },
  "tg": {
    name: "TELANGANA",
    image: "/images/food/region-south.jpg",
    dishes: [
      { name: "Sarvapindi", desc: "A savory, crispy rice-flour pancake containing peanuts, chana dal, sesame seeds, green chilies, and curry leaves." },
      { name: "Jonna Rotte", desc: "Soft, paper-thin flatbreads made from sorghum millet flour, cooked on hot clay griddles." },
      { name: "Sakinalu", desc: "A deep-fried concentric ring snack made of rice flour and sesame seeds, prepared during Sankranti." }
    ]
  },
  "tr": {
    name: "TRIPURA",
    image: "/images/food/tripura_food.jpg",
    dishes: [
      { name: "Mui Borok", desc: "Local stews flavored with fermented fish, boiled without oil along with seasonal herbs and potatoes." },
      { name: "Kosoi Bwtwi", desc: "A traditional oil-free stew prepared from green beans, garlic, and fermented fish seasoning." },
      { name: "Wahan Mosdeng", desc: "Pounded roasted pork cubes seasoned with roasted green chilies, raw onions, and fresh ginger." }
    ]
  },
  "up": {
    name: "UTTAR PRADESH",
    image: "/images/food/region-north.jpg",
    dishes: [
      { name: "Galouti Kebab", desc: "Melt-in-the-mouth minced meat patties flavored with raw papaya paste and a blend of over 100 dry spices." },
      { name: "Tehri", desc: "A yellow spiced rice pot cooked with potatoes, green peas, cauliflower, and tempered with cumin." },
      { name: "Malaiyo", desc: "A seasonal winter dessert made by whipping fresh milk cream under morning dew, flavored with saffron." }
    ]
  },
  "ut": {
    name: "UTTARAKHAND",
    image: "/images/food/uttarakhand_food.jpg",
    dishes: [
      { name: "Kafuli", desc: "A thick, green curry of slow-boiled spinach and fenugreek leaves, thickened with rice paste and cooked in mustard oil." },
      { name: "Bhang ki Chutney", desc: "A tangy, nutty condiment prepared from roasted hemp seeds pounded with mint, coriander, and lemon juice." },
      { name: "Aloo Ke Gutke", desc: "Parboiled mountain potatoes stir-fried with dry red chilies and jakhiya seeds." }
    ]
  },
  "wb": {
    name: "WEST BENGAL",
    image: "/images/food/ingredient-mustardoil.jpg",
    dishes: [
      { name: "Machher Jhol", desc: "A light, comforting freshwater fish curry simmered with potatoes and cumin in pungent mustard oil." },
      { name: "Shorshe Ilish", desc: "Hilsa fish steaks slow-steamed in a thick paste of sharp yellow mustard seeds and green chilies." },
      { name: "Shukto", desc: "A bitter-sweet starter stew of mixed vegetables in a ginger-mustard milk broth." }
    ]
  },
  "an": {
    name: "ANDAMAN & NICOBAR ISLANDS",
    image: "/images/food/andaman_and_nicobar_islands_food.jpg",
    dishes: [
      { name: "Coastal Fish Curry", desc: "Fresh marine catches cooked in spicy tamarind and coconut milk gravy." },
      { name: "Coconut Prawn Curry", desc: "Succulent prawns simmered in warm spices, squeezed coconut milk, and curry leaves." },
      { name: "Nicobarese Pandanus Bread", desc: "A dense, boiled bread prepared from the starchy pulp of the wild pandanus fruit." }
    ]
  },
  "ch": {
    name: "CHANDIGARH",
    image: "/images/food/chandigarh_food.jpg",
    dishes: [
      { name: "Tandoori Roti & Dal", desc: "Clay-oven baked whole-wheat flatbreads, served with slow-cooked buttery black lentils." },
      { name: "Paneer Tikka", desc: "Cubes of fresh cottage cheese marinated in spiced yogurt and grilled on skewers." },
      { name: "Chhole Bhature", desc: "Spicy chickpea curry paired with deep-fried leavened flatbreads and pickles." }
    ]
  },
  "dn": {
    name: "DADRA & NAGAR HAVELI AND DAMAN & DIU",
    image: "/images/food/dadra_and_nagar_haveli_and_daman_and_diu_food.jpg",
    dishes: [
      { name: "Crab Masala", desc: "Fresh crabs cooked in a spicy gravy of roasted coconut, dry red chilies, and garlic." },
      { name: "Ubadiyu", desc: "A traditional winter dish of mixed root vegetables and beans cooked upside-down in clay pots lined with local leaves." },
      { name: "Val ni Khichdi", desc: "A comforting rice pot cooked with sprouted field beans, turmeric, and dry spices." }
    ]
  },
  "dl": {
    name: "DELHI",
    image: "/images/food/delhi_food.jpg",
    dishes: [
      { name: "Butter Chicken", desc: "Tandoor-roasted chicken simmered in a smooth, creamy tomato gravy sweetened with butter." },
      { name: "Aloo Chaat", desc: "Crispy deep-fried potato cubes tossed with spice powders, tangy tamarind chutney, and fresh coriander." },
      { name: "Nihari", desc: "A slow-cooked beef or mutton shank stew flavored with dry ginger, fennel seeds, and served with naan." }
    ]
  },
  "jk": {
    name: "JAMMU & KASHMIR",
    image: "/images/food/jammu_and_kashmir_food.jpg",
    dishes: [
      { name: "Kashmiri Rogan Josh", desc: "Mutton pieces simmered in a rich gravy colored with local cockscomb flowers and Kashmiri red chilies." },
      { name: "Gustaba", desc: "Soft minced lamb dumplings cooked in a rich, cardamom-flavored yogurt gravy." },
      { name: "Kashmiri Kahwa", desc: "A green tea brew prepared with saffron strands, crushed almonds, cinnamon, and cardamom." }
    ]
  },
  "la": {
    name: "LADAKH",
    image: "/images/food/ladakh_food.jpg",
    dishes: [
      { name: "Tsampa", desc: "Roasted barley flour kneaded with hot butter tea, serving as a calorie-dense mountain staple." },
      { name: "Skyu", desc: "A comforting winter soup containing thumb-sized wheat dough discs, root vegetables, and meat pieces." },
      { name: "Gur-Gur Chai", desc: "Traditional salty tea churned with tea leaves, baking soda, milk, and yak butter." }
    ]
  },
  "ld": {
    name: "LAKSHADWEEP",
    image: "/images/food/lakshadweep_food.jpg",
    dishes: [
      { name: "Mas Kadhila", desc: "A dry coconut-based curry cooked with shredded skipjack tuna fillets and curry leaves." },
      { name: "Coconut Octopus Fry", desc: "Octopus stir-fried with fresh coconut slices, green chilies, turmeric, and onion." },
      { name: "Kadlakka", desc: "A sweet pudding prepared from ground rice, coconut milk, sugar, and cooked eggs." }
    ]
  },
  "py": {
    name: "PUDUCHERRY",
    image: "/images/food/puducherry_food.jpg",
    dishes: [
      { name: "Creole Fish Curry", desc: "A fusion curry combining local Tamil spices with French techniques, simmered in coconut milk." },
      { name: "Pondicherry Vindail", desc: "A regional adaptation of vindaloo cooked with local vinegar, spices, and curry leaves." },
      { name: "Kourma", desc: "A rich, mildly spiced vegetable stew prepared with cashews, coconut paste, and cream." }
    ]
  }
};


export const everydayFood = [
  {
    id: "chai",
    title: "The Tea Stall (Chai)",
    description: "At corners of busy roads and quiet lanes, roadside tea stalls serve as social hubs. Milk, strong black tea leaves, crushed ginger, and cardamom are boiled in steel kettles, strained, and poured into clay cups (kulhads) or small glasses.",
    image: "/images/food/everyday-chai.jpg"
  },
  {
    id: "vendor",
    title: "Street Food Vendors",
    description: "Everyday food culture includes mobile carts selling freshly prepared local snacks. Across cities, vendors prepare panipuri—crisp hollow dough balls filled with spiced potatoes and tangy green herb water—catering to daily commuters.",
    image: "/images/food/everyday-vendor.jpg"
  },
  {
    id: "lunch",
    title: "Tiffin Meal Delivery",
    description: "Representing ordinary kitchen-to-worker connections, lunch boxes carry home-cooked meals to offices. In Mumbai, the dabbawala system coordinates the delivery of thousands of warm tiffin carriers every day with high precision.",
    image: "/images/food/everyday-lunch.jpg"
  }
];

export const stories = [
  {
    id: "rice-shaping",
    title: "How Rice Shapes Regional Cuisines",
    text: "Rice cultivation requires substantial water, leading to its dominance in river valleys, deltas, and monsoon-heavy coastlines. Over centuries, these wet zones developed distinct rice varieties and preservation methods—fermenting it into idli batter in the south, puffing it into mudhi in the east, or steaming it inside bamboo tubes in the northeast—showing how agricultural ecology shapes daily diets."
  },
  {
    id: "spice-ocean",
    title: "The Journey of Spices Across the Indian Ocean",
    text: "Rather than being isolated flavors, spices like black pepper, cardamom, and ginger were central to historic Indian Ocean trade. Ships navigated monsoon winds to trade spices from the Malabar coast for textiles and pottery. Later, international trade routes introduced New World crops—like green chilies, tomatoes, and potatoes—which transformed traditional subcontinent cuisines."
  },
  {
    id: "millets-role",
    title: "Millets in Traditional Dryland Food Systems",
    text: "Before irrigation systems made rice and wheat widely available, drought-resistant millets were the staple grains of drylands. Pearl millet (Bajra), finger millet (Ragi), and sorghum (Jowar) consume fractionally less water than paddy rice and grow in poor soils. Today, they remain vital crops for farmers facing changing climates, representing an ancient dryland culinary heritage."
  },
  {
    id: "coastal-geography",
    title: "Coastal Geography & Souring Agents",
    text: "Access to the sea dictates a reliance on fresh catches, but the real geographic signature of coastal cuisines lies in their souring agents. While inland northern kitchens use dried mango powder (amchur) or curd, southern and western coastal belts use fresh tamarind, wild kokum fruits, or dried mango fish slices, matching the local tropical vegetation."
  },
  {
    id: "markets-farmers",
    title: "How Weekly Markets Connect Grains and Kitchens",
    text: "Weekly farmers' markets (shandies or mandis) serve as direct links between rural growers and regional consumers. Rather than relying on commercial processed ingredients, everyday Indian kitchens are connected to seasonal harvests of dry lentils, fresh leafy greens, and hand-ground spice mixtures sold in open burlap bags, reinforcing community-scale food systems."
  }
];
