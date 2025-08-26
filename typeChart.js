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
