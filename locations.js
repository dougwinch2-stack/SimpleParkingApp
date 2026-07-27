const parkingLocations = [
  {
    "id": 0,
    "hospital": "TBC",
    "name": "TBC",
    "link": "TBC",
    "coordinates": "TBC",
    "notes": ""
  },
  {
    "id": 1,
    "hospital": "Basildon",
    "name": "RENAL",
    "link": "https://www.google.com/maps/search/?api=1&query=51.559212,0.452781",
    "coordinates": "51.559212,0.452781",
    "notes": ""
  },
  {
    "id": 2,
    "hospital": "Basildon",
    "name": "OUTPATIENTS",
    "link": "https://www.google.com/maps/search/?api=1&query=51.558180,0.450663",
    "coordinates": "51.558180,0.450663",
    "notes": ""
  },
  {
    "id": 3,
    "hospital": "Basildon",
    "name": "JUBILEE ENTRANCE",
    "link": "https://www.google.com/maps/search/?api=1&query=51.5569224,0.4519968",
    "coordinates": "51.5569224,0.4519968",
    "notes": ""
  },
  {
    "id": 4,
    "hospital": "Basildon",
    "name": "CTC - FRONT",
    "link": "https://www.google.com/maps/search/?api=1&query=51.557045,0.452337",
    "coordinates": "51.557045,0.452337",
    "notes": ""
  },
  {
    "id": 5,
    "hospital": "Basildon",
    "name": "CTC - BACK",
    "link": "https://www.google.com/maps/search/?api=1&query=51.556590,0.452468",
    "coordinates": "51.556590,0.452468",
    "notes": ""
  },
  {
    "id": 6,
    "hospital": "Basildon",
    "name": "MENTAL HEALTH - FRONT",
    "link": "https://www.google.com/maps/search/?api=1&query=51.557065,0.450527",
    "coordinates": "51.557065,0.450527",
    "notes": ""
  },
  {
    "id": 7,
    "hospital": "Basildon",
    "name": "MENTAL HEALTH - BACK",
    "link": "https://www.google.com/maps/search/?api=1&query=51.556741,0.451309",
    "coordinates": "51.556741,0.451309",
    "notes": ""
  },
  {
    "id": 8,
    "hospital": "Basildon",
    "name": "A & E",
    "link": "https://www.google.com/maps/search/?api=1&query=51.558601,0.451255",
    "coordinates": "51.558601,0.451255",
    "notes": ""
  },
  {
    "id": 9,
    "hospital": "Basildon",
    "name": "NURSERY",
    "link": "https://www.google.com/maps/search/?api=1&query=51.557697,0.455518",
    "coordinates": "51.557697,0.455518",
    "notes": ""
  },
  {
    "id": 10,
    "hospital": "Basildon",
    "name": "DAY SURGERY",
    "link": "https://www.google.com/maps/search/?api=1&query=51.557518,0.452253",
    "coordinates": "51.557518,0.452253",
    "notes": ""
  },
  {
    "id": 11,
    "hospital": "Basildon",
    "name": "ENDOSCOPY",
    "link": "https://www.google.com/maps/search/?api=1&query=51.558453,0.451058",
    "coordinates": "51.558453,0.451058",
    "notes": ""
  },
  {
    "id": 12,
    "hospital": "TBC",
    "name": "TBC",
    "link": "TBC",
    "coordinates": "TBC",
    "notes": ""
  },
  {
    "id": 13,
    "hospital": "TBC",
    "name": "TBC",
    "link": "TBC",
    "coordinates": "TBC",
    "notes": ""
  },
  {
    "id": 14,
    "hospital": "St Luke's - Basildon",
    "name": "ST LUKE'S BASILDON",
    "link": "https://www.google.com/maps/search/?api=1&query=51.561464,0.451921",
    "coordinates": "51.561464,0.451921",
    "notes": ""
  },
  {
    "id": 15,
    "hospital": "St Luke's - Dunton",
    "name": "ST LUKE'S THURROCK (DUNTON)",
    "link": "https://www.google.com/maps/search/?api=1&query=51.547655,0.405826",
    "coordinates": "51.547655,0.405826",
    "notes": ""
  },
  {
    "id": 16,
    "hospital": "Southend",
    "name": "CARLINGFORD ENTRANCE",
    "link": "https://www.google.com/maps/search/?api=1&query=51.554627,0.690533",
    "coordinates": "51.554627,0.690533",
    "notes": ""
  },
  {
    "id": 17,
    "hospital": "Southend",
    "name": "PET CT SCANNER",
    "link": "https://www.google.com/maps/search/?api=1&query=51.554301,0.690223",
    "coordinates": "51.554301,0.690223",
    "notes": "**WARNING** PET CT Scanner has moved and is believed to be in a mobile unit in the main car park|Exact mobile scanner location is not confirmed|Use the car park entrance from Prittlewell Chase, not Carlingford Drive|Google may suggest a route blocked by a fence"
  },
  {
    "id": 18,
    "hospital": "Southend",
    "name": "CARDIGAN ENTRANCE",
    "link": "https://www.google.com/maps/search/?api=1&query=51.554172,0.686205",
    "coordinates": "51.554172,0.686205",
    "notes": ""
  },
  {
    "id": 19,
    "hospital": "Southend",
    "name": "PRITTLEWELL ENTRANCE",
    "link": "https://www.google.com/maps/search/?api=1&query=51.553771,0.687720",
    "coordinates": "51.553771,0.687720",
    "notes": "OLD MAIN ENTRANCE"
  },
  {
    "id": 20,
    "hospital": "Southend",
    "name": "TOWER BLOCK ENTRANCE",
    "link": "https://www.google.com/maps/search/?api=1&query=51.553622,0.689443",
    "coordinates": "51.553622,0.689443",
    "notes": ""
  },
  {
    "id": 21,
    "hospital": "Southend",
    "name": "RADIOTHERAPY",
    "link": "https://www.google.com/maps/search/?api=1&query=51.5543812,0.686461",
    "coordinates": "51.5543812,0.686461",
    "notes": ""
  },
  {
    "id": 22,
    "hospital": "Southend",
    "name": "EYE UNIT",
    "link": "https://www.google.com/maps/search/?api=1&query=51.554939,0.688601",
    "coordinates": "51.554939,0.688601",
    "notes": ""
  },
  {
    "id": 23,
    "hospital": "Broomfield",
    "name": "Zone-A - Main Entrance & Outpatients",
    "link": "https://www.google.com/maps/search/?api=1&query=51.773486,0.467352",
    "coordinates": "51.773486,0.467352",
    "notes": "Good for most wards / rooms in Zone-A - some are closer to Zone-E and these will show that"
  },
  {
    "id": 24,
    "hospital": "Broomfield",
    "name": "Zone-B - Back Door",
    "link": "https://www.google.com/maps/search/?api=1&query=51.774049,0.463927",
    "coordinates": "51.774049,0.463927",
    "notes": "Good for most wards / rooms in Zone-B and in Zone-C - some are closer to other entrances and these will show that"
  },
  {
    "id": 25,
    "hospital": "Broomfield",
    "name": "Zone-C - Back Door",
    "link": "https://www.google.com/maps/search/?api=1&query=51.774049,0.463927",
    "coordinates": "51.774049, 0.463927",
    "notes": "Good for most wards / rooms in Zone-C and in Zone-B - some are closer to other entrances and these will show that"
  },
  {
    "id": 26,
    "hospital": "Broomfield",
    "name": "Zone-D - East Entrance",
    "link": "https://www.google.com/maps/search/?api=1&query=51.774632,0.467356",
    "coordinates": "51.774632,0.467356",
    "notes": "Not sure of best parking place for Zone-D so use Zone-E for now as it's not awful"
  },
  {
    "id": 27,
    "hospital": "Broomfield",
    "name": "Zone-E - East Entrance",
    "link": "https://www.google.com/maps/search/?api=1&query=51.774632,0.467356",
    "coordinates": "51.774632,0.467356",
    "notes": "Use for Zone-E and currently also for Zone-D where indicated"
  },
  {
    "id": 28,
    "hospital": "Southend",
    "name": "HILLBOROUGH ENTRANCE",
    "link": "https://www.google.com/maps/search/?api=1&query=51.5543307,0.6885691",
    "coordinates": "51.5543307,0.6885691",
    "notes": ""
  }
];