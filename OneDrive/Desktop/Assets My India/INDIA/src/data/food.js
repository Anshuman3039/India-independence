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
  "or": {
    name: "ODISHA",
    dishes: [
      { name: "Pakhala", desc: "Fermented rice soaked in cold water, served with curd, mustard-fried greens, and mashed potatoes to ease hot weather." },
      { name: "Dalma", desc: "A nutritious, non-oil stew of split chickpeas cooked with raw papaya, green banana, eggplant, and dry-roasted spices." },
      { name: "Pitha traditions", desc: "Griddled, steamed, or fried rice cakes prepared during seasonal agricultural celebrations (Raja festival)." }
    ]
  },
  "kl": {
    name: "KERALA",
    dishes: [
      { name: "Appam with Ishtu", desc: "Lacy fermented rice pancakes with soft spongy centers, served with a mild, cardamom-infused coconut milk stew." },
      { name: "Puttu", desc: "Steamed cylinders of ground rice and grated coconut layers, typically eaten with spicy chickpea curry (Kadala)." },
      { name: "Coastal Seafood", desc: "Fresh marine catches simmered in spicy, sour gravies seasoned with local tamarind (Kodampuli) and coconut." }
    ]
  },
  "rj": {
    name: "RAJASTHAN",
    dishes: [
      { name: "Dal Baati Churma", desc: "Wood-fired baked wheat balls (Baati) crushed and soaked in ghee, served with spiced mixed lentils and sweet powdered wheat." },
      { name: "Bajra-based Foods", desc: "Pearl millet flatbreads (Sogra) prepared in winter, accompanied by garlic chutney and jaggery." },
      { name: "Ker Sangri", desc: "A unique dryland dish made of wild desert berries (Ker) and dried beans (Sangri) simmered in mustard oil and spices." }
    ]
  },
  "pb": {
    name: "PUNJAB",
    dishes: [
      { name: "Sarson ka Saag", desc: "Slow-simmered mustard greens enriched with spinach and bathua leaves, finished with a dollop of white butter." },
      { name: "Makki di Roti", desc: "Golden flatbreads rolled from maize flour, griddled, and traditionally paired with mustard greens in winter." },
      { name: "Lentil & tandoor traditions", desc: "Whole black urad dal simmered overnight, and tandoori-baked whole-wheat flatbreads." }
    ]
  },
  "tn": {
    name: "TAMIL NADU",
    dishes: [
      { name: "Ven Pongal", desc: "A comforting breakfast dish of rice and split yellow mung lentils cooked soft, tempered with ghee, pepper, and cashews." },
      { name: "Idli & Dosa", desc: "Everyday steamed rice cakes and griddled crepes accompanied by spicy coconut chutneys and hot sambar." },
      { name: "Chettinad preparations", desc: "Deeply aromatic dishes using freshly roasted spices like fennel, star anise, and stone flower (Kalpasi)." }
    ]
  },
  "as": {
    name: "ASSAM",
    dishes: [
      { name: "Rice-based cuisines", desc: "Sticky rice (Bora saul) steamed in bamboo tubes or eaten dry with curd and jaggery as breakfast (Jolpan)." },
      { name: "Khar", desc: "A digestive preparation made by filtering water through charred sun-dried banana trunk ashes, cooked with seasonal vegetables." },
      { name: "Masor Tenga", desc: "A refreshing, sour freshwater fish curry made using tomatoes, lemon, or dried elephant apple (Outenga)." }
    ]
  },
  "gj": {
    name: "GUJARAT",
    dishes: [
      { name: "Gujarati Thali", desc: "A sprawling vegetarian feast balancing sweet, salty, sour, and spicy dishes (shaak, dal, kadhi, rotli)." },
      { name: "Dhokla & Khandvi", desc: "Savory fermented gram-flour cakes steamed soft, and rolled chickpea flour sheets tempered with mustard seeds." },
      { name: "Undhiyu", desc: "A rich, mixed winter vegetable dish cooked upside-down in earthen pots fired from above, seasoned with green garlic." }
    ]
  },
  "mh": {
    name: "MAHARASHTRA",
    dishes: [
      { name: "Vada Pav", desc: "Mumbai's signature street burger featuring a spicy fried potato dumpling in a soft bread roll with garlic chutney." },
      { name: "Puran Poli", desc: "A sweet flatbread stuffed with a soft, sweet paste of split bengal gram (chana dal) and jaggery, flavored with cardamom." },
      { name: "Misal Pav", desc: "A spicy curry made of sprouted moth beans (usal), topped with crunchy farsan mix, onions, and served with bread rolls." }
    ]
  },
  "ap": {
    name: "ANDHRA PRADESH",
    dishes: [
      { name: "Gongura Pachadi", desc: "A tangy, fiery chutney prepared from sorrel leaves (gongura) pounded with green chilies, garlic, and hot oil." },
      { name: "Andhra Chili Chicken", desc: "A dry-spiced pan-fried chicken dish seasoned with Guntur red and green chilies, curry leaves, and ginger." },
      { name: "Pootharekulu", desc: "A delicate, paper-thin sweet wrapper made from rice starch, stuffed with sugar/jaggery dust and pure ghee." }
    ]
  },
  "up": {
    name: "UTTAR PRADESH",
    dishes: [
      { name: "Galouti Kebab", desc: "Melt-in-the-mouth minced meat patties flavored with raw papaya paste and a blend of over 100 aromatic dry spices." },
      { name: "Baati Chokha", desc: "Wheat balls baked over cow-dung cakes, dipped in pure ghee, and paired with smoky mashed eggplant and potatoes." },
      { name: "Mathura Petha / Peda", desc: "Translucent sugar-candied ash gourd blocks, and soft caramelized milk fudge rounds seasoned with cardamom." }
    ]
  },
  "wb": {
    name: "WEST BENGAL",
    dishes: [
      { name: "Machher Jhol", desc: "A light, comforting freshwater fish curry simmered with potatoes, pointed gourd, ginger, and cumin in pungent mustard oil." },
      { name: "Shorshe Ilish", desc: "Hilsa fish steaks slow-steamed in a thick paste of sharp yellow mustard seeds, green chilies, and coconut milk." },
      { name: "Sweets (Roshogolla & Sandesh)", desc: "Soft, spongy cheese balls boiled in sugar syrup, and dry milk fudge squares made of date-palm jaggery (nolen gur)." }
    ]
  },
  "ka": {
    name: "KARNATAKA",
    dishes: [
      { name: "Bisi Bele Bath", desc: "A comforting hot dish of rice, lentils, and mixed vegetables cooked together with a spicy roasted masala powder." },
      { name: "Mysore Pak", desc: "A rich, porous sweet prepared by roasting chickpea flour in large quantities of bubbling hot ghee and sugar syrup." },
      { name: "Neer Dosa", desc: "Paper-thin, light, and lacy crêpes prepared from a thin unfermented rice batter, served with fresh coconut chutney." }
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
