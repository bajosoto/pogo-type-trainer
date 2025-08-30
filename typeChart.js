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
    'fire-bug': '<strong>Flames</strong> roast <strong>bugs</strong>',
    'fire-steel': '<strong>Fire</strong> melts <strong>steel</strong>',
    'fire-water': '<strong>Flames</strong> are doused by <strong>water</strong>',
    'fire-rock': '<strong>Heat</strong> is absorbed by <strong>stone</strong>',
    'fire-dragon': '<strong>Dragons</strong> resist <strong>all 4 starter types of 1st gen</strong>',
    'fire-fire': '"Fight <strong>fire</strong> with <strong>fire</strong>" doesn\'t really work in practice',

    // Water matchups
    'water-fire': '<strong>Water</strong> extinguishes <strong>fire</strong>',
    'water-ground': '<strong>Water</strong> washes <strong>soil</strong> away',
    'water-rock': '<strong>Waves</strong> erode <strong>stone</strong>',
    'water-grass': '<strong>Plants</strong> nourish from drinking <strong>water</strong>',
    'water-dragon': '<strong>Dragons</strong> resist <strong>all 4 starter types of 1st gen</strong>',
    'water-water': '<strong>Raindrops</strong> merge with the <strong>ocean</strong>',

    // Electric matchups
    'electric-water': '<strong>Lightning</strong> electrifies <strong>water</strong>',
    'electric-flying': '<strong>Lightning</strong> strikes <strong>birds</strong>',
    'electric-ground': '<strong>Electricity</strong> is grounded by <strong>earth</strong> and has <u>no effect</u> on it',
    'electric-grass': '<strong>Plants</strong> are well grounded against <strong>lightning</strong>',
    'electric-dragon': '<strong>Dragons</strong> resist <strong>all 4 starter types of 1st gen</strong>',
    'electric-electric': '<strong>Lightning</strong> only recharges a <strong>battery</strong>',

    // Grass matchups
    'grass-water': '<strong>Plants</strong> nourish from drinking <strong>water</strong>',
    'grass-ground': '<strong>Plants</strong> drain nutrients from <strong>soil</strong>',
    'grass-rock': '<strong>Roots</strong> crack <strong>stone</strong>',
    'grass-fire': '<strong>Leaves</strong> burn in <strong>flames</strong>',
    'grass-poison': '<strong>Plants</strong> dissolve in <strong>acid</strong>',
    'grass-flying': '<strong>Seeds</strong> scatter in the <strong>wind</strong>',
    'grass-bug': '<strong>Plants</strong> get eaten by <strong>bugs</strong>',
    'grass-steel': '<strong>Plants</strong> cannot grow roots in <strong>metal</strong>',
    'grass-dragon': '<strong>Dragons</strong> resist <strong>all 4 starter types of 1st gen</strong>',
    'grass-grass': 'A <strong>tree</strong> fighting another <strong>tree</strong>? That\'s going to take a while...',

    // Fighting matchups
    'fighting-normal': '<strong>Martial arts</strong> beat <strong>basic moves</strong>',
    'fighting-rock': 'A trained <strong>fist</strong> can shatter <strong>rocks</strong>',
    'fighting-steel': '<strong>Strength</strong> bends <strong>metal</strong>',
    'fighting-ice': '<strong>Punches</strong> break <strong>ice</strong>',
    'fighting-dark': '<strong>Justice</strong> defeats <strong>evil</strong>',
    'fighting-flying': 'It is hard to <strong>punch</strong> a <strong>bird</strong>',
    'fighting-poison': '<strong>Melee attacks</strong> against <strong>poisonous creatures</strong> is a bad idea',
    'fighting-psychic': '<strong>Mind</strong> over <strong>body</strong>',
    'fighting-bug': 'It is very hard to <strong>swat</strong> a <strong>fly</strong>',
    'fighting-ghost': 'It is impossible to <strong>punch</strong> a <strong>ghost</strong>',
    'fighting-fairy': '<strong>Fighters</strong> are at disadvantage against the range of a <strong>wizard</strong>',

    // Poison matchups
    'poison-grass': '<strong>Toxic waste</strong> kills <strong>trees</strong, weakening <strong>forest fairies</strong>',
    'poison-fairy': '<strong>Toxic waste</strong> kills <strong>trees</strong, weakening <strong>forest fairies</strong>',
    'poison-poison': '<strong>Venom</strong> does not poison a <strong>snake</strong>',
    'poison-ground': '<strong>Poison</strong> affects living matter, <strong>soil</strong> not so much',
    'poison-rock': '<strong>Poisons</strong> affects living matter, <strong>rocks</strong> not so much',
    'poison-ghost': '<strong>Poison</strong> affects living matter, <strong>ghosts</strong> not so much',
    'poison-steel': '<strong>Poison</strong> has <u>no effect</u> on <strong>steel</strong> it can\'t permeate',

    // Ground matchups
    'ground-poison': '<strong>Soil</strong> absorbs <strong>toxins</strong> over time',
    'ground-rock': '<strong>Earthquakes</strong> destroy <strong>mountains</strong>',
    'ground-steel': '<strong>Rust</strong> corrodes <strong>metal</strong>',
    'ground-fire': '<strong>Dirt</strong> smothers <strong>flames</strong>',
    'ground-electric': '<strong>Earth</strong> grounds <strong>lightning</strong>',
    'ground-flying': '<strong>Earthquakes</strong> do nothing to <strong>birds</strong>',
    'ground-bug': '<strong>Soil</strong> covers <strong>bugs</strong>, but they dig their way out',
    'ground-grass': '<strong>Soil</strong> covers <strong>plants</strong>, but they grow their way out',

    // Flying matchups
    'flying-fighting': '<strong>Aerial attacks</strong> bombard <strong>ground troops</strong>',
    'flying-bug': '<strong>Birds</strong> eat <strong>insects</strong>',
    'flying-grass': '<strong>Wind</strong> scatters <strong>leaves</strong>',
    'flying-electric': '<strong>Lightning</strong> strikes <strong>high flyers</strong>',
    'flying-rock': '<strong>Stones</strong> ground <strong>birds</strong>',
    'flying-steel': '<strong>Birds</strong> cannot break out of <strong>cages</strong>',

    // Psychic matchups
    'psychic-fighting': '<strong>Mind</strong> over <strong>body</strong>',
    'psychic-poison': '<strong>Meditation</strong> purifies <strong>disease</strong>',
    'psychic-steel': 'It is hard to bend a <strong>spoon</strong> with <strong>psychic powers</strong>',
    'psychic-psychic': '<strong>Mind tricks</strong> do not work on <strong>illusionists</strong>',
    'psychic-dark': '<strong>The mind</strong> fears <strong>darkness</strong>',

    // Bug matchups
    'bug-grass': '<strong>Insects</strong> eat <strong>plants</strong>',
    'bug-psychic': '<strong>Spiders</strong> scare <strong>minds</strong>',
    'bug-dark': 'The light from a <strong>firefly</strong> pierces through <strong>darkness</strong>',
    'bug-fighting': '<strong>Bugs</strong> can\'t bite through tough <strong>fighter\'s</strong> skin',
    'bug-poison': '<strong>Bugs</strong> perish in <strong>insecticide</strong>',
    'bug-flying': '<strong>Insects</strong> can\'t keep up with <strong>birds</strong> to bite them',
    'bug-ghost': '<strong>Insects</strong> can\'t bite immaterial <strong>ghosts</strong>',
    'bug-steel': '<strong>Bugs</strong> cannot chew through <strong>metal</strong>',
    'bug-fire': '<strong>Flames</strong> roast <strong>bugs</strong>',
    'bug-fairy': '<strong>Bugs</strong> obey <strong>witches and druids</strong>, not hurt them',

    // Rock matchups
    'rock-flying': 'One can hit two <strong>birds</strong> with one <strong>stone</strong>',
    'rock-bug': '<strong>Rocks</strong> crush <strong>insects</strong>',
    'rock-ice': '<strong>Stones</strong> shatter <strong>ice</strong>',
    'rock-fire': '<strong>Heat</strong> is absorbed by <strong>stone</strong>',
    'rock-fighting': 'A trained <strong>fist</strong> can shatter <strong>rocks</strong>',
    'rock-ground': '<strong>Rocks</strong> sink on <strong>quicksand</strong>',
    'rock-steel': 'Sticks and <strong>stone</strong> are not effective against hard <strong>steel</strong>',

    // Ghost matchups
    'ghost-ghost': '<strong>Ghosts</strong> hurt other <strong>ghosts</strong> in the spiritual plane',
    'ghost-psychic': '<strong>Ghosts</strong> scare <strong>minds</strong>',
    'ghost-normal': '<strong>Spirits</strong> pass through <strong>normal</strong> beings',
    'ghost-dark': '<strong>Spirits</strong> are swallowed by <strong>darkness</strong>',

    // Dragon matchups
    'dragon-dragon': 'The only true match for a <strong>dragon</strong> is another <strong>dragon</strong>',
    'dragon-steel': '<strong>Dragon claws</strong> don\'t cut through <strong>plate armor</strong>',
    'dragon-fairy': '<strong>Dragon claws</strong> have <u>no effect</u> against <strong>magical barriers</strong>',

    // Dark matchups
    'dark-ghost': '<strong>Spirits</strong> are swallowed by <strong>darkness</strong>',
    'dark-psychic': '<strong>Evil</strong> corrupts <strong>minds</strong>',
    'dark-fighting': '<strong>Evil</strong> never beats <strong>justice</strong>',
    'dark-dark': '<strong>Shadow</strong> vs <strong>shadow</strong>',
    'dark-fairy': '<strong>Light</strong> banishes <strong>darkness</strong>',

    // Steel matchups
    'steel-ice': '<strong>Steel icepicks</strong> break <strong>ice</strong>',
    'steel-rock': '<strong>Steel tools</strong> break <strong>stone</strong>',
    'steel-fairy': '<strong>Blades</strong> hurt <strong>squishy mages</strong>',
    'steel-steel': '<strong>Blades</strong> are blocked by <strong>shields</strong>',
    'steel-water': '<strong>Steel</strong> sinks in <strong>water</strong>',
    'steel-electric': '<strong>Steel</strong> conducts <strong>electricity</strong>',
    'steel-fire': '<strong>Fire</strong> melts <strong>steel</strong>',

    // Fairy matchups
    'fairy-fighting': '<strong>Magic</strong> overpowers <strong>strength</strong>',
    'fairy-dragon': '<strong>Magic</strong> defeats <strong>dragons</strong> in fairy tales',
    'fairy-dark': '<strong>Light</strong> banishes <strong>darkness</strong>',
    'fairy-poison': '<strong>Faeries</strong> choke in <strong>pollution</strong>',
    'fairy-steel': '<strong>Magic</strong> cannot penetrate through <strong>steel</strong> walls',
    'fairy-fire': '<strong>Fairy light</strong> is dimmed by <strong>fire</strong>',

    // Ice matchups
    'ice-flying': '<strong>Snow storms</strong> freeze <strong>flying</strong> creatures',
    'ice-ground': '<strong>Ice</strong> freezes and cracks <strong>the ground</strong>',
    'ice-grass': '<strong>Frost</strong> kills <strong>plants</strong>',
    'ice-dragon': '<strong>Cold</strong> freezes cold-blooded <strong>reptiles</strong>',
    'ice-steel': '<strong>Ice</strong> doesn\'t slow down <strong>steel</strong> machines',
    'ice-fire': '<strong>Fire</strong> melts <strong>ice</strong>',
    'ice-water': '<strong>Ice</strong> adds to <strong>water</strong>',
    'ice-ice': '<strong>Two icebergs</strong> colliding will only weaken each other',

    // Normal matchups (mostly neutral, some key ones)
    'normal-rock': '<strong>Basic moves</strong> can\'t break <strong>stone</strong>',
    'normal-ghost': '<strong>Normal</strong> can\'t touch <strong>spirits</strong>',
    'normal-steel': '<strong>Claws</strong> can\'t pierce <strong>plate armor</strong>'
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
