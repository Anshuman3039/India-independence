export const eras = [
  {
    id: "early",
    title: "Early Civilizations",
    period: "c. 2500 BCE – 1000 BCE",
    description: "The bronze-age Indus Valley (or Harappan) Civilization flourished in the northwest, featuring advanced urban planning, standardized weights, and extensive sea trade. This was followed by the early Vedic period and the composition of ancient hymns, marking transition to pastoral and agricultural societies.",
    primaryImage: "/images/history/era-early.jpg",
    supportingImages: ["/images/history/city-harappa.jpg", "/images/history/city-mohenjo.jpg"],
    milestones: [
      { year: "c. 2500 BCE", event: "Peak Harappan urbanism with major centers at Mohenjo-daro, Harappa, Lothal, and Dholavira." },
      { year: "c. 1900 BCE", event: "Gradual decline of urban centers and shift towards smaller agrarian communities." },
      { year: "c. 1500 BCE", event: "Composition of early Sanskrit texts (Rigveda) in the Indo-Gangetic northwest." }
    ]
  },
  {
    id: "kingdoms",
    title: "Kingdoms & Ideas",
    period: "c. 600 BCE – 500 CE",
    description: "The rise of sixteen republics and kingdoms (Mahajanapadas) in the plains triggered significant urban and intellectual growth. The Mauryan Empire unified massive territories under administrative networks, followed by the Sangam literary traditions in southern peninsula, and the classical arts, sciences, and mathematics of the Gupta period.",
    primaryImage: "/images/history/era-kingdoms.jpg",
    supportingImages: ["/images/history/idea-buddhism.jpg", "/images/history/history-intro-2.jpg"],
    milestones: [
      { year: "c. 268 BCE", event: "Reign of Emperor Ashoka, promoting ethical edicts (Dharma) inscribed on pillars across the subcontinent." },
      { year: "c. 300 BCE – 300 CE", event: "Composition of Tamil Sangam poetry anthologies documenting south Indian societies." },
      { year: "c. 320 – 550 CE", event: "Gupta administration, marked by breakthroughs in mathematics (zero system) and classical Sanskrit literature." }
    ]
  },
  {
    id: "medieval",
    title: "Medieval India",
    period: "c. 600 CE – 1700 CE",
    description: "A dynamic era of regional powers and maritime states. Empires like the Cholas established deep Indian Ocean trade routes, while the Delhi Sultanate introduced new architectural styles. Later, the Vijayanagara Empire in the south and the Mughal Empire in the north synthesized art, poetry, land reforms, and administrative networks.",
    primaryImage: "/images/history/era-medieval.jpg",
    supportingImages: ["/images/history/history-intro-4.jpg", "/images/history/history-intro-5.jpg"],
    milestones: [
      { year: "1010 CE", event: "Construction of the Brihadisvara Temple by Rajaraja Chola, reflecting architectural and maritime power." },
      { year: "1336 CE", event: "Foundation of the Vijayanagara Empire, serving as a hub for literature, trade, and temples." },
      { year: "1526 CE", event: "Establishment of the Mughal Empire, introducing centralized administrative reforms and imperial synthesis." }
    ]
  },
  {
    id: "colonial",
    title: "Colonial Era",
    period: "c. 1600 CE – 1947 CE",
    description: "Beginning as a series of trading outposts set up by European powers like the Portuguese, Dutch, French, and British, the era transitioned into political dominance by the British East India Company. Following 1857, direct British Crown rule reshaped the economy, infrastructure, and legal codes, sparking social reform movements.",
    primaryImage: "/images/history/era-colonial.jpg",
    supportingImages: ["/images/history/history-intro-6.jpg", "/images/history/freedom-1885.jpg"],
    milestones: [
      { year: "1600 CE", event: "Charter granted to the English East India Company to trade in the East Indies." },
      { year: "1757 CE", event: "Battle of Plassey, initiating Company territorial control over the Bengal region." },
      { year: "1858 CE", event: "Government of India Act transfers power from the Company to the British Crown." }
    ]
  },
  {
    id: "freedom",
    title: "Freedom Movement",
    period: "c. 1857 CE – 1947 CE",
    description: "The struggle for independence comprised diverse regional uprisings, intellectual debates, and mass mobilization. From the revolt of 1857 to the non-violent mass campaigns of the 20s and 30s led by the Indian National Congress and other groups, various political visions competed, culminating in the end of British rule, independence, and the partition of the subcontinent.",
    primaryImage: "/images/history/era-freedom.jpg",
    supportingImages: ["/images/history/freedom-1930.jpg", "/images/history/freedom-1942.jpg"],
    milestones: [
      { year: "1857 CE", event: "Subcontinent-wide rebellion challenging the East India Company administration." },
      { year: "1920 CE", event: "Launch of the Non-Cooperation Movement led by Mahatma Gandhi, promoting Swadeshi and civil disobedience." },
      { year: "1930 CE", event: "The Salt Satyagraha mobilizes millions against the colonial government's salt monopoly." },
      { year: "1947 CE", event: "India gains independence, accompanied by the Partition of British India into India and Pakistan." }
    ]
  },

  {
    id: "republic",
    title: "The Republic",
    period: "1947 CE – Today",
    description: "Following independence, India faced massive challenges of resettlement and national integration. The adoption of the Constitution in 1950 established a sovereign democratic republic. Succeeding decades witnessed linguistic reorganization, state-guided industrialization, the Green Revolution, economic reforms, and modern scientific and digital growth.",
    primaryImage: "/images/history/era-republic.jpg",
    supportingImages: ["/images/history/rep-science-now.jpg", "/images/history/rep-city-now.jpg"],
    milestones: [
      { year: "26 Jan 1950", event: "The Constitution of India comes into effect, declaring India a democratic republic." },
      { year: "1956 CE", event: "States Reorganization Act restructures borders along linguistic boundaries." },
      { year: "1991 CE", event: "Introduction of major economic liberalization and integration with global market systems." }
    ]
  }
];

export const cities = [
  {
    id: "harappa",
    name: "Harappa",
    location: "Punjab region (now in Pakistan)",
    period: "c. 3300 BCE – 1900 BCE",
    significance: "One of the first excavated urban sites, showing an organized settlement plan divided into a citadel and a lower town.",
    urbanPlanning: "Constructed with kiln-fired bricks of uniform ratio (4:2:1), aligned on a grid pattern with ventilated granary structures.",
    waterManagement: "Advanced street-level brick gutters linked to individual household bathing areas and waste chutes.",
    tradeCraft: "Manufactured steatite seals, shell bangles, and stone beads traded with contemporary Mesopotamian ports.",
    primaryImage: "/images/history/city-harappa.jpg",
    supportingImages: ["/images/history/history-intro-1.jpg"]
  },
  {
    id: "mohenjo",
    name: "Mohenjo-daro",
    location: "Sindh region (now in Pakistan)",
    period: "c. 2500 BCE – 1900 BCE",
    significance: "An expansive Harappan administrative center featuring grand public works, residential blocks, and an engineered bathing complex.",
    urbanPlanning: "Dominated by a mud-brick citadel mound raising administrative, religious, and storage buildings above flood levels.",
    waterManagement: "Features the 'Great Bath', a watertight brick pool lined with bitumen, and hundreds of public and private wells.",
    tradeCraft: "Exquisite bronze casting (the 'Dancing Girl') and terracotta figures showing specialized craftsmanship.",
    primaryImage: "/images/history/city-mohenjo.jpg",
    supportingImages: ["/images/history/era-early.jpg"]
  },
  {
    id: "dholavira",
    name: "Dholavira",
    location: "Kutch district, Gujarat, India",
    period: "c. 2600 BCE – 1800 BCE",
    significance: "A UNESCO World Heritage site known for its triple-fortification layout and sophisticated water conservation engineering.",
    urbanPlanning: "Divided into three fortified sectors: the Castle, the Bailey, and the Lower Town, using local sandstone instead of mud-brick.",
    waterManagement: "An extensive network of rock-cut rain reservoirs and check dams surrounding the city walls to harvest runoffs.",
    tradeCraft: "A center for bead manufacturing, copper smelting, and home to a monumental sign-board with ten symbols.",
    primaryImage: "/images/history/city-dholavira.jpg",
    supportingImages: ["/images/history/city-dholavira.jpg"] // Fallback if single
  },
  {
    id: "lothal",
    name: "Lothal",
    location: "Ahmedabad district, Gujarat, India",
    period: "c. 2400 BCE – 1900 BCE",
    significance: "A vital Harappan port city featuring a massive basin interpreted as a tidal dockyard, connecting trade to the Arabian Sea.",
    urbanPlanning: "Constructed with protective embankments to shield the warehouse complexes and bead factories from recurring river floods.",
    waterManagement: "An intake channel linked to the nearby Sabarmati river basin, with sluice gates to regulate dockyard water levels.",
    tradeCraft: "Exporter of raw gemstones, ivory, and copper items to Persian Gulf ports, confirmed by the discovery of Persian Gulf seals.",
    primaryImage: "/images/history/city-lothal.jpg",
    supportingImages: ["/images/history/city-lothal.jpg"]
  },
  {
    id: "kalibangan",
    name: "Kalibangan",
    location: "Hanumangarh district, Rajasthan, India",
    period: "c. 3500 BCE – 1900 BCE",
    significance: "A major Harappan provincial capital famous for containing the world's earliest recorded agricultural tilled field.",
    urbanPlanning: "Laid out with a fortified citadel and lower town using sun-dried mud bricks, featuring unique fire altars.",
    waterManagement: "Residential blocks equipped with circular brick wells, and wooden drains scooped out of tree trunks.",
    tradeCraft: "Known for the manufacture of terracotta bangles (giving the city its name, 'black bangles') and pottery styles.",
    primaryImage: "/images/history/city-kalibangan.jpg",
    supportingImages: ["/images/history/city-kalibangan.jpg"]
  }
];


export const ideas = [
  {
    id: "buddhism",
    title: "Buddhism Across Asia",
    description: "Originating in the middle Gangetic plains, Buddhist teachings traveled along merchant routes. Edicts of Ashoka, translation of texts, and monastic centers facilitated its spread across Sri Lanka, Central Asia, China, and Southeast Asia, transforming art, language, and philosophy.",
    routes: ["India", "Sri Lanka", "Central Asia", "China & Japan", "Southeast Asia"],
    primaryImage: "/images/history/idea-buddhism.jpg",
    details: "Archaeological findings like stupas, caves, and manuscript fragments trace the geographical movement, showing adaptation to local cultures."
  },
  {
    id: "trade",
    name: "Indian Ocean Maritime Exchange",
    description: "The monsoon winds supported regular trade networks linking Indian ports to the Red Sea, East Africa, and Southeast Asia. Spices, textiles, and metallurgy were exchanged alongside cultural elements, religious architecture, and Sanskrit literature.",
    routes: ["Malabar Ports", "Arabian Sea", "Red Sea & Egypt", "Bay of Bengal", "Java & Sumatra"],
    primaryImage: "/images/history/idea-trade.jpg",
    details: "Roman gold coin finds in south India and ancient Sanskrit inscriptions in Java demonstrate the scope of these historical exchanges."
  },
  {
    id: "bhakti-sufi",
    title: "The Bhakti & Sufi Movements",
    description: "Devotional movements that swept the subcontinent between the 8th and 17th centuries. Bhakti poets (like Kabir and Mirabai) and Sufi saints (like Nizamuddin Auliya) preached devotion to a personal god, using local vernacular languages and rejecting caste hierarchies.",
    routes: ["Tamil Nadu (Alvars/Nayanars)", "Karnataka (Vachanas)", "Maharashtra (Varkaris)", "Punjab (Sufis/Sikhs)", "Delhi & Bengal"],
    primaryImage: "/images/history/era-medieval.jpg",
    details: "This spiritual synthesis left a lasting impact on Indian music (bhajans, qawwalis), literature, and composite religious culture."
  }
];

export const peopleAndPower = [
  {
    id: "rulers",
    name: "Rulers & Administrations",
    description: "Historical states developed systems of governance, land surveying, tax registers, and legal codes—exemplified by Mauryan edicts, Chola bronze councils, and Mughal land registers (Todar Mal's Bandobast).",
    image: "/images/history/people-power-1.jpg",
    context: "Mughal court painter and manuscript depicting administrative processes."
  },
  {
    id: "craftspeople",
    name: "Craftspeople & Guilds",
    description: "Artisans organized into powerful guilds (Shrenis) regulated quality, trained apprentices, and funded temples. Their work survives in bronze sculptures, handloom weaves, and rock-cut cave architectures.",
    image: "/images/history/people-power-2.jpg",
    context: "Stone carvings and handloom weaving practices persisting across generations."
  }
];

export const freedomMovement = [
  {
    year: "1857",
    title: "The Uprising of 1857",
    description: "Initiated by sepoys in Meerut, the uprising quickly spread across northern and central India, mobilizing peasants, dispossessed princes, and artisans. It remains a watershed event that ended East India Company governance.",
    primaryImage: "/images/history/freedom-1857.jpg",
    context: "Archival lithograph depicting conflicts in Delhi and Lucknow."
  },
  {
    year: "1885",
    title: "Formation of the Congress",
    description: "The founding of the Indian National Congress in Bombay marked the emergence of a formal, modern political platform demanding administrative reforms, political representation, and critique of colonial economic policies.",
    primaryImage: "/images/history/freedom-1885.jpg",
    context: "Group photograph of delegates at the first session in Bombay."
  },
  {
    year: "1905",
    title: "Swadeshi Movement",
    description: "Sparked by the partition of Bengal, the Swadeshi campaign urged the boycott of foreign-made goods and encouraged domestic industries, national schools, and indigenous crafts, popularizing mass protests.",
    primaryImage: "/images/history/freedom-1905.jpg",
    context: "Archival print showing boycotts and public bonfires of imported British cloth."
  },
  {
    year: "1919",
    title: "Jallianwala Bagh",
    description: "The firing on a peaceful gathering in Amritsar under colonial military orders galvanized national opposition, prompting Rabindranath Tagore to renounce his knighthood and transforming the freedom struggle into a mass movement.",
    primaryImage: "/images/history/freedom-1919.jpg",
    context: "Historical photograph of the bullet-marked walls of the public enclosure."
  },
  {
    year: "1930",
    title: "The Salt Satyagraha",
    description: "Mahatma Gandhi led the 24-day Salt March to Dandi, violating the government salt monopoly. The campaign resulted in the arrest of over 60,000 volunteers and attracted global focus to the freedom movement.",
    primaryImage: "/images/history/freedom-1930.jpg",
    context: "Archival photograph of volunteers harvesting salt from tidal flats."
  },
  {
    year: "1942",
    title: "Quit India Movement",
    description: "Launched during World War II, this mass protest demanded immediate British withdrawal from India. Despite the swift arrest of national leaders, widespread regional protests and parallel local governments emerged.",
    primaryImage: "/images/history/freedom-1942.jpg",
    context: "Archival photo of demonstrators gathering at Gowalia Tank Maidan, Bombay."
  },
  {
    year: "1947",
    title: "Independence & Partition",
    description: "British colonial rule ended on August 15, 1947. This historic transition was accompanied by the Partition of the subcontinent, causing massive displacements, migration of millions, and intense communal conflicts.",
    primaryImage: "/images/history/freedom-1947.jpg",
    context: "Archival photograph of prime minister Jawaharlal Nehru delivering the 'Tryst with Destiny' address."
  }
];

export const republic = [
  {
    id: "transport",
    title: "Transport Infrastructure",
    thenImage: "/images/history/rep-train-then.jpg",
    nowImage: "/images/history/rep-train-now.jpg",
    thenDesc: "Steam locomotive engines and manually operated signals built during early colonial and state railways.",
    nowDesc: "Modern electric and high-speed Vande Bharat trains running on standardized broad-gauge tracks."
  },
  {
    id: "science",
    title: "Science & Space Exploration",
    thenImage: "/images/history/rep-science-then.jpg",
    nowImage: "/images/history/rep-science-now.jpg",
    thenDesc: "Early scientific rocket assembly in Thumba, transporting nose cones via bicycle carriers.",
    nowDesc: "Indian Space Research Organisation (ISRO) launching lunar and planetary missions via heavy launch vehicles."
  },
  {
    id: "cities",
    title: "Urban Spaces",
    thenImage: "/images/history/rep-city-then.jpg",
    nowImage: "/images/history/rep-city-now.jpg",
    thenDesc: "Mumbai streetscapes in the early 20th century, dominated by double-decker trams and horses.",
    nowDesc: "The modern Bandra-Worli Sea Link crossing the sea, representing contemporary infrastructure development."
  },
  {
    id: "communication",
    title: "Communication Systems",
    thenImage: "/images/history/rep-comm-then.jpg",
    nowImage: "/images/history/rep-comm-now.jpg",
    thenDesc: "Traditional red postboxes and telegram desks representing everyday physical postal networks.",
    nowDesc: "The ubiquitous digital and smartphone connectivity, driving mobile payments (UPI) and high-speed networks."
  }
];
