// Pokemon Go Type Effectiveness Chart
// Values represent damage multipliers
const TYPE_CHART = {
    normal: {
        normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
        fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1,
        rock: 0.625, ghost: 0.39, dragon: 1, dark: 1, steel: 0.625, fairy: 1
    },
    fire: {
        normal: 1, fire: 0.625, water: 0.625, electric: 1, grass: 1.6, ice: 1.6,
        fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1.6,
        rock: 0.625, ghost: 1, dragon: 0.625, dark: 1, steel: 1.6, fairy: 1
    },
    water: {
        normal: 1, fire: 1.6, water: 0.625, electric: 1, grass: 0.625, ice: 1,
        fighting: 1, poison: 1, ground: 1.6, flying: 1, psychic: 1, bug: 1,
        rock: 1.6, ghost: 1, dragon: 0.625, dark: 1, steel: 1, fairy: 1
    },
    electric: {
        normal: 1, fire: 1, water: 1.6, electric: 0.625, grass: 0.625, ice: 1,
        fighting: 1, poison: 1, ground: 0.39, flying: 1.6, psychic: 1, bug: 1,
        rock: 1, ghost: 1, dragon: 0.625, dark: 1, steel: 1, fairy: 1
    },
    grass: {
        normal: 1, fire: 0.625, water: 1.6, electric: 1, grass: 0.625, ice: 1,
        fighting: 1, poison: 0.625, ground: 1.6, flying: 0.625, psychic: 1, bug: 0.625,
        rock: 1.6, ghost: 1, dragon: 0.625, dark: 1, steel: 0.625, fairy: 1
    },
    ice: {
        normal: 1, fire: 0.625, water: 0.625, electric: 1, grass: 1.6, ice: 0.625,
        fighting: 1, poison: 1, ground: 1.6, flying: 1.6, psychic: 1, bug: 1,
        rock: 1, ghost: 1, dragon: 1.6, dark: 1, steel: 0.625, fairy: 1
    },
    fighting: {
        normal: 1.6, fire: 1, water: 1, electric: 1, grass: 1, ice: 1.6,
        fighting: 1, poison: 0.625, ground: 1, flying: 0.625, psychic: 0.625, bug: 0.625,
        rock: 1.6, ghost: 0.39, dragon: 1, dark: 1.6, steel: 1.6, fairy: 0.625
    },
    poison: {
        normal: 1, fire: 1, water: 1, electric: 1, grass: 1.6, ice: 1,
        fighting: 1, poison: 0.625, ground: 0.625, flying: 1, psychic: 1, bug: 1,
        rock: 0.625, ghost: 0.625, dragon: 1, dark: 1, steel: 0.39, fairy: 1.6
    },
    ground: {
        normal: 1, fire: 1.6, water: 1, electric: 1.6, grass: 0.625, ice: 1,
        fighting: 1, poison: 1.6, ground: 1, flying: 0.39, psychic: 1, bug: 0.625,
        rock: 1.6, ghost: 1, dragon: 1, dark: 1, steel: 1.6, fairy: 1
    },
    flying: {
        normal: 1, fire: 1, water: 1, electric: 0.625, grass: 1.6, ice: 1,
        fighting: 1.6, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1.6,
        rock: 0.625, ghost: 1, dragon: 1, dark: 1, steel: 0.625, fairy: 1
    },
    psychic: {
        normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
        fighting: 1.6, poison: 1.6, ground: 1, flying: 1, psychic: 0.625, bug: 1,
        rock: 1, ghost: 1, dragon: 1, dark: 0.39, steel: 0.625, fairy: 1
    },
    bug: {
        normal: 1, fire: 0.625, water: 1, electric: 1, grass: 1.6, ice: 1,
        fighting: 0.625, poison: 0.625, ground: 1, flying: 0.625, psychic: 1.6, bug: 1,
        rock: 1, ghost: 0.625, dragon: 1, dark: 1.6, steel: 0.625, fairy: 0.625
    },
    rock: {
        normal: 1, fire: 1.6, water: 1, electric: 1, grass: 1, ice: 1.6,
        fighting: 0.625, poison: 1, ground: 0.625, flying: 1.6, psychic: 1, bug: 1.6,
        rock: 1, ghost: 1, dragon: 1, dark: 1, steel: 0.625, fairy: 1
    },
    ghost: {
        normal: 0.39, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
        fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1.6, bug: 1,
        rock: 1, ghost: 1.6, dragon: 1, dark: 0.625, steel: 1, fairy: 1
    },
    dragon: {
        normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
        fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1,
        rock: 1, ghost: 1, dragon: 1.6, dark: 1, steel: 0.625, fairy: 0.39
    },
    dark: {
        normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
        fighting: 0.625, poison: 1, ground: 1, flying: 1, psychic: 1.6, bug: 1,
        rock: 1, ghost: 1.6, dragon: 1, dark: 0.625, steel: 1, fairy: 0.625
    },
    steel: {
        normal: 1, fire: 0.625, water: 0.625, electric: 0.625, grass: 1, ice: 1.6,
        fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1,
        rock: 1.6, ghost: 1, dragon: 1, dark: 1, steel: 0.625, fairy: 1.6
    },
    fairy: {
        normal: 1, fire: 0.625, water: 1, electric: 1, grass: 1, ice: 1,
        fighting: 1.6, poison: 0.625, ground: 1, flying: 1, psychic: 1, bug: 1,
        rock: 1, ghost: 1, dragon: 1.6, dark: 1.6, steel: 0.625, fairy: 1
    }
};

// All Pokemon types
const TYPES = Object.keys(TYPE_CHART);

// Get effectiveness multiplier for attacker vs defender
function getEffectiveness(attackerType, defenderType) {
    return TYPE_CHART[attackerType][defenderType];
}

// Get random type
function getRandomType() {
    return TYPES[Math.floor(Math.random() * TYPES.length)];
}

// Get a random matchup that results in a specific multiplier
function getMatchupForMultiplier(multiplier) {
    const matchups = [];

    for (const attacker of TYPES) {
        for (const defender of TYPES) {
            if (TYPE_CHART[attacker][defender] === multiplier) {
                matchups.push({ attacker, defender });
            }
        }
    }

    return matchups[Math.floor(Math.random() * matchups.length)];
}

// Memorable mnemonics for type matchups
const TYPE_MNEMONICS = {
    // Fire matchups
    'fire-grass': '<strong>Flames</strong> burn <strong>plants</strong>',
    'fire-ice': '<strong>Fire</strong> melts <strong>ice</strong>',
    'fire-bug': '<strong>Heat</strong> burns <strong>bugs</strong>',
    'fire-steel': '<strong>Forge</strong> melts <strong>metal</strong>',
    'fire-water': '<strong>Flames</strong> are doused by <strong>water</strong>',
    'fire-rock': '<strong>Heat</strong> is absorbed by <strong>stone</strong>',
    'fire-dragon': '<strong>Flames</strong> fade on <strong>dragon scales</strong>',
    'fire-fire': '<strong>Flames</strong> cannot consume more <strong>fire</strong>',

    // Water matchups
    'water-fire': '<strong>Water</strong> extinguishes <strong>fire</strong>',
    'water-ground': '<strong>Water</strong> washes <strong>dirt</strong> away',
    'water-rock': '<strong>Waves</strong> erode <strong>stone</strong>',
    'water-grass': '<strong>Water</strong> only nourishes <strong>plants</strong>',
    'water-dragon': '<strong>Waves</strong> slide off <strong>dragon scales</strong>',
    'water-water': '<strong>Raindrops</strong> merge with the <strong>ocean</strong>',

    // Electric matchups
    'electric-water': '<strong>Lightning</strong> electrifies <strong>water</strong>',
    'electric-flying': '<strong>Lightning</strong> strikes <strong>birds</strong>',
    'electric-ground': '<strong>Electricity</strong> is grounded by <strong>earth</strong>',
    'electric-grass': '<strong>Electricity</strong> is stopped by <strong>rubber</strong>',
    'electric-dragon': '<strong>Lightning</strong> fizzles on <strong>dragon scales</strong>',
    'electric-electric': '<strong>Lightning</strong> only recharges a <strong>battery</strong>',

    // Grass matchups
    'grass-water': '<strong>Roots</strong> soak up <strong>water</strong>',
    'grass-ground': '<strong>Plants</strong> absorb nutrients from <strong>soil</strong>',
    'grass-rock': '<strong>Roots</strong> crack <strong>stone</strong>',
    'grass-fire': '<strong>Leaves</strong> burn in <strong>flames</strong>',
    'grass-poison': '<strong>Plants</strong> wilt when <strong>poisoned</strong>',
    'grass-flying': '<strong>Seeds</strong> scatter in the <strong>wind</strong>',
    'grass-bug': '<strong>Plants</strong> get eaten by <strong>bugs</strong>',
    'grass-steel': '<strong>Vines</strong> cannot bend <strong>metal</strong>',
    'grass-dragon': '<strong>Vines</strong> cannot ensnare big <strong>dragons</strong>',
    'grass-grass': '<strong>Vines</strong> get tangled with other <strong>vines</strong>',

    // Fighting matchups
    'fighting-normal': '<strong>Martial arts</strong> beat <strong>basic moves</strong>',
    'fighting-rock': '<strong>Fists</strong> shatter <strong>stone</strong>',
    'fighting-steel': '<strong>Strength</strong> bends <strong>metal</strong>',
    'fighting-ice': '<strong>Punches</strong> break <strong>ice</strong>',
    'fighting-dark': '<strong>Justice</strong> defeats <strong>evil</strong>',
    'fighting-flying': 'It is hard to <strong>punch</strong> a <strong>bird</strong>',
    'fighting-poison': '<strong>Strength</strong> is weakened by <strong>poison</strong>',
    'fighting-psychic': '<strong>Mind</strong> over <strong>body</strong>',
    'fighting-bug': 'It is hard to <strong>catch</strong> a <strong>fly</strong>',
    'fighting-ghost': 'It is impossible to <strong>punch</strong> a <strong>ghost</strong>',
    'fighting-fairy': '<strong>Brute force</strong> does not win against <strong>magic</strong>',

    // Poison matchups
    'poison-grass': '<strong>Toxins</strong> kill <strong>plants</strong>',
    'poison-fairy': '<strong>Venomous mists</strong> smother <strong>fairy light</strong>',
    'poison-poison': '<strong>Venom</strong> does not poison a <strong>snake</strong>',
    'poison-ground': '<strong>Disease</strong> does not infect <strong>the soil</strong>',
    'poison-rock': '<strong>Disease</strong> does not infect <strong>rock</strong>',
    'poison-ghost': '<strong>Disease</strong> does not infect <strong>ghosts</strong>',
    'poison-steel': '<strong>Disease</strong> cannot escape a <strong>metal container</strong>',

    // Ground matchups
    'ground-poison': '<strong>Natural remedies</strong> remove <strong>poison</strong>',
    'ground-rock': '<strong>Earthquakes</strong> destroy <strong>mountains</strong>',
    'ground-steel': '<strong>Rust</strong> corrodes <strong>metal</strong>',
    'ground-fire': '<strong>Dirt</strong> smothers <strong>flames</strong>',
    'ground-electric': '<strong>Earth</strong> grounds <strong>lightning</strong>',
    'ground-flying': '<strong>Earthquakes</strong> do nothing to <strong>birds</strong>',
    'ground-bug': '<strong>Soil</strong> covers <strong>bugs</strong>, but they dig their way out',
    'ground-grass': '<strong>Soil</strong> covers <strong>plants</strong>, but they grow their way out',

    // Flying matchups
    'flying-fighting': '<strong>Aerial</strong> beats <strong>ground combat</strong>',
    'flying-bug': '<strong>Birds</strong> eat <strong>insects</strong>',
    'flying-grass': '<strong>Wind</strong> scatters <strong>leaves</strong>',
    'flying-electric': '<strong>Lightning</strong> strikes <strong>high flyers</strong>',
    'flying-rock': '<strong>Stones</strong> ground <strong>birds</strong>',
    'flying-steel': '<strong>Metal</strong> is too heavy',
    'flying-ice': '<strong>Cold</strong> freezes <strong>wings</strong>',
    'flying-flying': '<strong>Sky</strong> battle royale',

    // Psychic matchups
    'psychic-fighting': '<strong>Mind</strong> over <strong>muscle</strong>',
    'psychic-poison': '<strong>Thoughts</strong> purify <strong>toxins</strong>',
    'psychic-steel': '<strong>Metal</strong> blocks <strong>telepathy</strong>',
    'psychic-psychic': '<strong>Mind</strong> vs <strong>mind</strong>',
    'psychic-dark': '<strong>Darkness</strong> blocks <strong>thoughts</strong>',

    // Bug matchups
    'bug-grass': '<strong>Insects</strong> eat <strong>plants</strong>',
    'bug-psychic': '<strong>Creepy crawlies</strong> scare <strong>minds</strong>',
    'bug-dark': '<strong>Light bugs</strong> pierce <strong>darkness</strong>',
    'bug-fighting': '<strong>Martial arts</strong> squash <strong>bugs</strong>',
    'bug-poison': '<strong>Toxins</strong> kill <strong>insects</strong>',
    'bug-flying': '<strong>Birds</strong> eat <strong>bugs</strong>',
    'bug-ghost': '<strong>Spirits</strong> spook <strong>insects</strong>',
    'bug-steel': '<strong>Metal</strong> crushes <strong>bugs</strong>',
    'bug-fire': '<strong>Flames</strong> burn <strong>bugs</strong>',
    'bug-fairy': '<strong>Magic</strong> protects from <strong>pests</strong>',
    'bug-bug': '<strong>Swarm</strong> vs <strong>swarm</strong>',

    // Rock matchups
    'rock-flying': '<strong>Stones</strong> ground <strong>birds</strong>',
    'rock-bug': '<strong>Rocks</strong> crush <strong>insects</strong>',
    'rock-ice': '<strong>Stones</strong> shatter <strong>ice</strong>',
    'rock-fire': '<strong>Rocks</strong> contain <strong>fire</strong>',
    'rock-fighting': '<strong>Stone</strong> deflects <strong>punches</strong>',
    'rock-ground': '<strong>Bedrock</strong> vs <strong>soil</strong>',
    'rock-steel': '<strong>Metal</strong> is harder',
    'rock-rock': '<strong>Mountain</strong> vs <strong>mountain</strong>',

    // Ghost matchups
    'ghost-ghost': '<strong>Spirit</strong> battles <strong>spirit</strong>',
    'ghost-psychic': '<strong>Spirits</strong> haunt <strong>minds</strong>',
    'ghost-normal': '<strong>Spirits</strong> pass through <strong>normal</strong>',
    'ghost-dark': '<strong>Darkness</strong> hides <strong>ghosts</strong>',

    // Dragon matchups
    'dragon-dragon': '<strong>Ancient</strong> rivalry continues',
    'dragon-steel': '<strong>Metal</strong> armor protects',
    'dragon-fairy': '<strong>Magic</strong> tames <strong>dragons</strong>',

    // Dark matchups
    'dark-ghost': '<strong>Darkness</strong> absorbs <strong>spirits</strong>',
    'dark-psychic': '<strong>Evil</strong> corrupts <strong>minds</strong>',
    'dark-fighting': '<strong>Dirty fighting</strong> beats <strong>honor</strong>',
    'dark-dark': '<strong>Shadow</strong> vs <strong>shadow</strong>',
    'dark-fairy': '<strong>Light</strong> banishes <strong>darkness</strong>',

    // Steel matchups
    'steel-ice': '<strong>Metal</strong> breaks <strong>ice</strong>',
    'steel-rock': '<strong>Steel</strong> is harder than <strong>stone</strong>',
    'steel-fairy': '<strong>Iron</strong> disrupts <strong>magic</strong>',
    'steel-steel': '<strong>Forge</strong> vs <strong>forge</strong>',
    'steel-water': '<strong>Metal</strong> rusts in <strong>water</strong>',
    'steel-electric': '<strong>Metal</strong> conducts <strong>electricity</strong>',
    'steel-fire': '<strong>Heat</strong> melts <strong>metal</strong>',
    'steel-fighting': '<strong>Armor</strong> deflects <strong>attacks</strong>',

    // Fairy matchups
    'fairy-fighting': '<strong>Magic</strong> overpowers <strong>strength</strong>',
    'fairy-dragon': '<strong>Fairy tales</strong> defeat <strong>dragons</strong>',
    'fairy-dark': '<strong>Light</strong> banishes <strong>evil</strong>',
    'fairy-poison': '<strong>Nature</strong> suffers from <strong>pollution</strong>',
    'fairy-steel': '<strong>Iron</strong> disrupts <strong>magic</strong>',
    'fairy-fire': '<strong>Flames</strong> burn <strong>magical forests</strong>',
    'fairy-fairy': '<strong>Enchantment</strong> vs <strong>enchantment</strong>',

    // Ice matchups
    'ice-flying': '<strong>Frost</strong> freezes <strong>wings</strong>',
    'ice-ground': '<strong>Ice age</strong> freezes <strong>earth</strong>',
    'ice-grass': '<strong>Frost</strong> kills <strong>plants</strong>',
    'ice-dragon': '<strong>Ice age</strong> froze <strong>dragons</strong>',
    'ice-steel': '<strong>Metal</strong> gets brittle in <strong>cold</strong>',
    'ice-fire': '<strong>Heat</strong> melts <strong>ice</strong>',
    'ice-water': '<strong>Ice</strong> floats on <strong>water</strong>',
    'ice-fighting': '<strong>Cold</strong> numbs <strong>muscles</strong>',
    'ice-ice': '<strong>Glacier</strong> meets <strong>glacier</strong>',

    // Normal matchups (mostly neutral, some key ones)
    'normal-rock': '<strong>Basic moves</strong> can\'t break <strong>stone</strong>',
    'normal-ghost': '<strong>Normal</strong> can\'t touch <strong>spirits</strong>',
    'normal-steel': '<strong>Metal</strong> deflects <strong>normal attacks</strong>',
    'normal-fighting': '<strong>Training</strong> beats <strong>basics</strong>',
    'normal-normal': '<strong>Basic</strong> vs <strong>basic</strong>'
};

// Get a memorable mnemonic for a type matchup
function getMnemonic(attackerType, defenderType, multiplier) {
    // Don't show mnemonic for neutral matchups
    if (multiplier === 1) {
        return '';
    }

    const key = `${attackerType}-${defenderType}`;
    return TYPE_MNEMONICS[key] || `<strong>${attackerType.charAt(0).toUpperCase() + attackerType.slice(1)}</strong> vs <strong>${defenderType.charAt(0).toUpperCase() + defenderType.slice(1)}</strong>`;
}

// Get explanation text for a matchup
function getExplanation(attackerType, defenderType, multiplier) {
    const capitalizedAttacker = attackerType.charAt(0).toUpperCase() + attackerType.slice(1);
    const capitalizedDefender = defenderType.charAt(0).toUpperCase() + defenderType.slice(1);

    if (multiplier === 2.56) {
        return `${capitalizedAttacker} is double super effective against ${capitalizedDefender}!`;
    } else if (multiplier === 1.6) {
        return `${capitalizedAttacker} is super effective against ${capitalizedDefender}!`;
    } else if (multiplier === 1) {
        return `${capitalizedAttacker} deals neutral damage to ${capitalizedDefender}.`;
    } else if (multiplier === 0.625) {
        return `${capitalizedAttacker} is not very effective against ${capitalizedDefender}.`;
    } else if (multiplier === 0.39) {
        return `${capitalizedDefender} double resists ${capitalizedAttacker} attacks!`;
    }

    return `${capitalizedAttacker} vs ${capitalizedDefender}: ${multiplier}× damage`;
}
