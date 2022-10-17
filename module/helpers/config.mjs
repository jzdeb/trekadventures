export const trekadventures = {};

trekadventures.attributes = {
  "control": "trekadventures.AbilityControl",
  "daring": "trekadventures.AbilityDaring",
  "fitness": "trekadventures.AbilityFitness",
  "insight": "trekadventures.AbilityInsight",
  "reason": "trekadventures.AbilityReason",
  "presence": "trekadventures.AbilityPresence",
};

trekadventures.abilityAbbreviations = {
  "control": "trekadventures.AbilityControlAbr",
  "daring": "trekadventures.AbilityDaringAbr",
  "fitness": "trekadventures.AbilityFitnessAbr",
  "insight": "trekadventures.AbilityInsightAbr",
  "reason": "trekadventures.AbilityReasonAbr",
  "presence": "trekadventures.AbilityPresenceAbr",
};

trekadventures.SKILLS = [
  {
    'label': 'ACADEMIA',
    'key': "Academia",
    'focuses': ['TestArt', 'Cryptography', 'Finance', 'History', 'Linguistics', 'Occultism', 'Science']
  },
  {
    'label': 'ATHLETICS',
    'key': "Athletics",
    'focuses': ['Climbing', 'Lifting', 'Physical Training', 'Running', 'Swimming', 'Throwing']
  },
  {
    'label': 'ENGINEERING',
    'key': "Engineering",
    'focuses': ['Architecture', 'Combat Engineering', 'Electronics', 'Explosives', 'Mechanical Engineering']
  },
  {
    'label': 'FIGHTING',
    'key': "Fighting",
    'focuses': ['Close Quarters', 'Handguns', 'Hand-to-Hand', 'Heavy Weapons', 'Melee Weapons', 'Rifles',
      'Threat Awareness', 'Exotic']
  },
  {
    'label': 'MEDICINE',
    'key': "Medicine",
    'focuses': ['First Aid', 'Infectious Diseases', 'Pharmacology', 'Psychiatry', 'Surgery', 'Toxicology']
  },
  {
    'label': 'OBSERVATION',
    'key': "Observation",
    'focuses': ['Hearing', 'Instincts', 'Sight', 'Smell and Taste']
  },
  {
    'label': 'PERSUASION',
    'key': "Persuasion",
    'focuses': ['Charm', 'Innuendo', 'Intimidation', 'Negotiation', 'Rhetoric', 'Deceive', 'Invocation']
  },
  {
    'label': 'RESILIENCE',
    'key': "Resilience",
    'focuses': ['Fortitude', 'Discipline', 'Immunity']
  },
  {
    'label': 'STEALTH',
    'key': "Stealth",
    'focuses': ['Camouflage', 'Disguise', 'Rural Stealth', 'Urban Stealth']
  },
  {
    'label': 'SURVIVAL',
    'key': "Survival",
    'focuses': ['Animal Handling', 'Foraging', 'Hunting', 'Mysticism', 'Orienteering', 'Tracking']
  },
  {
    'label': 'TACTICS',
    'key': "Tactics",
    'focuses': ['Air Force', 'Army', 'Covert Operations', 'Leadership', 'Navy', 'Technical Projects']
  },
  {
    'label': 'VEHICLES',
    'key': "Vehicles",
    'focuses': ['Cars', 'Motorcycles', 'Heavy Vehicles', 'Tanks', 'Aircraft', 'Watercraft']
  }
];

trekadventures.Size = ["Trivial", "Minor", "Major"];

trekadventures.WEAPONS = {
  "range": {
    "reach": "trekadventures.RANGE.reach",
    "close": "trekadventures.RANGE.close",
    "medium": "trekadventures.RANGE.medium",
    "long": "trekadventures.RANGE.long",
    "extreme": "trekadventures.RANGE.extreme"
  },
  "weaponTypes": [
    {
      'label': "Melee",
      'bonusAttribute': 'control'
    },
    {
      'label': "Ranged",
      'bonusAttribute': 'fitness'
    },
    {
      'label': "Mental",
      'bonusAttribute': 'presence'
    }
  ],
  "effects": {
    "area": "pg.99",
    "backlash": "pg.99",
    "drain": "pg.99",
    "intense": "pg.99",
    "persistent": "pg.99",
    "piercing": "pg.99",
    "snare": "pg.99",
    "stun": "pg.99",
    "vicious": "pg.99"
  },
  "qualities": {
    "accurate": "pg.99",
    "bane": "GM's pg.58",
    "closeQuarters": "pg.99",
    "cumbersome": "pg.100", 
    "debilitating": "pg.100", 
    "escalation": "pg.100", 
    "giant-killer": "pg.100", 
    "heavy": "pg.100",
    "hidden": "pg.100",
    "hunger": "GM's pg.58 ",
    "inaccurate": "pg.100",
    "indirect": "pg.100",
    "munition": "pg.100",
    "parrying": "pg.100",
    "reliable": "pg.100",
    "subtle": "pg.100",
    "unreliable": "pg.100"
  }
}

trekadventures.spellcastingTypes = {
  "traditional":"traditional",
  "researcher":"researcher",
  "dabbler":"dabbler"
}



