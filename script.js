// Game state
let gameState = {
    streak: 0,
    score: 0,
    currentAttacker: null,
    currentDefender: null,
    correctAnswer: null,
    answered: false,
    consecutiveNeutrals: 0,
    neutralRerollModifier: 1.0,
    debugMode: false,
    debugIndex: 0,
    debugCombinations: []
};

// DOM elements
const attackerElement = document.getElementById('attacker-type');
const defenderElement = document.getElementById('defender-type');
const answerButtons = document.querySelectorAll('.answer-btn');
const inlineFeedback = document.getElementById('inline-feedback');
const feedbackStatus = document.getElementById('feedback-status');
const feedbackExplanation = document.getElementById('feedback-explanation');
const nextButton = document.getElementById('next-btn');
const streakElement = document.getElementById('streak');
const scoreElement = document.getElementById('score');

// Initialize the game
function initGame() {
    // Check for debug mode
    const urlParams = new URLSearchParams(window.location.search);
    gameState.debugMode = urlParams.get('debug') === 'true';

    if (gameState.debugMode) {
        initDebugMode();
        console.log('🐛 Debug mode activated! Cycling through all type combinations.');
        console.log(`Total combinations: ${gameState.debugCombinations.length}`);
    }

    generateNewQuestion();

    // For initial load, update immediately without fade transition
    attackerElement.className = `type-badge attacker ${gameState.currentAttacker}`;
    attackerElement.querySelector('.type-icon').src = `icons/${gameState.currentAttacker}.svg`;
    attackerElement.querySelector('.type-icon').alt = `${gameState.currentAttacker} type`;
    attackerElement.querySelector('.type-name').textContent = gameState.currentAttacker.toUpperCase();

    defenderElement.className = `type-badge defender ${gameState.currentDefender}`;
    defenderElement.querySelector('.type-icon').src = `icons/${gameState.currentDefender}.svg`;
    defenderElement.querySelector('.type-icon').alt = `${gameState.currentDefender} type`;
    defenderElement.querySelector('.type-name').textContent = gameState.currentDefender.toUpperCase();

    // Update stats
    streakElement.textContent = gameState.streak;
    scoreElement.textContent = gameState.score;

    // In debug mode, auto-answer the question
    if (gameState.debugMode) {
        setTimeout(() => {
            autoAnswerQuestion();
        }, 100);
    }

    // Add event listeners
    answerButtons.forEach(button => {
        button.addEventListener('click', handleAnswer);
    });

    nextButton.addEventListener('click', nextQuestion);
}

// Initialize debug mode with all type combinations
function initDebugMode() {
    gameState.debugCombinations = [];

    // Generate all combinations sorted alphabetically by attacker, then defender
    for (const attacker of TYPES.sort()) {
        for (const defender of TYPES.sort()) {
            gameState.debugCombinations.push({
                attacker: attacker,
                defender: defender,
                effectiveness: getEffectiveness(attacker, defender)
            });
        }
    }

    gameState.debugIndex = 0;
}

// Auto-answer the current question in debug mode
function autoAnswerQuestion() {
    if (!gameState.debugMode) return;

    // Find the correct answer button
    const correctButton = Array.from(answerButtons).find(button =>
        parseFloat(button.dataset.multiplier) === gameState.correctAnswer
    );

    if (correctButton) {
        correctButton.click();
    }
}

// Generate a new question
function generateNewQuestion() {
    if (gameState.debugMode) {
        // Use debug combinations in sequential order
        if (gameState.debugIndex >= gameState.debugCombinations.length) {
            console.log('🎉 Debug mode complete! All combinations tested.');
            gameState.debugIndex = 0; // Reset to beginning
        }

        const combo = gameState.debugCombinations[gameState.debugIndex];
        gameState.currentAttacker = combo.attacker;
        gameState.currentDefender = combo.defender;
        gameState.correctAnswer = combo.effectiveness;

        console.log(`Debug ${gameState.debugIndex + 1}/${gameState.debugCombinations.length}: ${gameState.currentAttacker} → ${gameState.currentDefender} (×${gameState.correctAnswer})`);
        gameState.debugIndex++;
    } else {
        // Generate matchup with anti-neutral bias
        const matchup = generateMatchupWithBias();
        gameState.currentAttacker = matchup.attacker;
        gameState.currentDefender = matchup.defender;
        gameState.correctAnswer = getEffectiveness(gameState.currentAttacker, gameState.currentDefender);
    }

    gameState.answered = false;

    // Reset button states
    answerButtons.forEach(button => {
        button.classList.remove('correct', 'incorrect', 'disabled');
    });

    // Reset inline feedback
    inlineFeedback.classList.remove('show');
    feedbackStatus.style.display = 'flex'; // Reset for next question
    feedbackStatus.textContent = '';
    feedbackExplanation.textContent = '';

    // Hide next button instantly (no fade out needed)
    nextButton.classList.remove('show');
}

// Generate a matchup with bias against consecutive neutrals
function generateMatchupWithBias() {
    let attacker = getRandomType();
    let defender = getRandomType();
    let effectiveness = getEffectiveness(attacker, defender);

    // If it's neutral, check if we should reroll based on consecutive neutrals
    if (effectiveness === 1) {
        gameState.consecutiveNeutrals++;

        // Calculate acceptance probability (starts at 1, decreases exponentially)
        const acceptanceProbability = Math.pow(0.7, gameState.consecutiveNeutrals - 1);
        const roll = Math.random();

        // If we fail the acceptance roll, reroll once (whatever we get, we keep)
        if (roll > acceptanceProbability) {
            console.log(`Rerolling neutral matchup (${gameState.consecutiveNeutrals} consecutive, acceptance: ${acceptanceProbability.toFixed(2)}, rolled: ${roll.toFixed(3)})`);
            attacker = getRandomType();
            defender = getRandomType();
            effectiveness = getEffectiveness(attacker, defender);

            // Reset consecutive neutrals since we rerolled
            gameState.consecutiveNeutrals = effectiveness === 1 ? 1 : 0;
        } else {
            console.log(`Keeping neutral matchup (${gameState.consecutiveNeutrals} consecutive, acceptance: ${acceptanceProbability.toFixed(2)}, rolled: ${roll.toFixed(3)})`);
        }
    } else {
        // Reset consecutive neutrals for non-neutral matchups
        gameState.consecutiveNeutrals = 0;
    }

    return { attacker, defender };
}

// Update the UI with current question using smooth transitions
function updateUI() {
    // Fade out current type badges
    attackerElement.classList.add('fade-out');
    defenderElement.classList.add('fade-out');

    // After fade out completes, update content and fade in
    setTimeout(() => {
        // Update attacker type badge
        attackerElement.className = `type-badge attacker ${gameState.currentAttacker}`;
        attackerElement.querySelector('.type-icon').src = `icons/${gameState.currentAttacker}.svg`;
        attackerElement.querySelector('.type-icon').alt = `${gameState.currentAttacker} type`;
        attackerElement.querySelector('.type-name').textContent = gameState.currentAttacker.toUpperCase();

        // Update defender type badge
        defenderElement.className = `type-badge defender ${gameState.currentDefender}`;
        defenderElement.querySelector('.type-icon').src = `icons/${gameState.currentDefender}.svg`;
        defenderElement.querySelector('.type-icon').alt = `${gameState.currentDefender} type`;
        defenderElement.querySelector('.type-name').textContent = gameState.currentDefender.toUpperCase();

        // Update stats (no transition needed)
        streakElement.textContent = gameState.streak;
        scoreElement.textContent = gameState.score;
    }, 400); // Wait for fade out to complete
}

// Update only the stats without touching type badges
function updateStats() {
    streakElement.textContent = gameState.streak;
    scoreElement.textContent = gameState.score;
}

// Handle answer selection
function handleAnswer(event) {
    if (gameState.answered) return;

    const selectedMultiplier = parseFloat(event.currentTarget.dataset.multiplier);
    const isCorrect = selectedMultiplier === gameState.correctAnswer;

    gameState.answered = true;

    // Disable all buttons and show correct/incorrect states
    answerButtons.forEach(button => {
        button.classList.add('disabled');
        const buttonMultiplier = parseFloat(button.dataset.multiplier);

        if (buttonMultiplier === gameState.correctAnswer) {
            button.classList.add('correct');
        } else if (button === event.currentTarget && !isCorrect) {
            button.classList.add('incorrect');
        }
    });

    // Update score and streak
    if (isCorrect) {
        gameState.score += 10;
        gameState.streak += 1;
    } else {
        gameState.streak = 0;
    }

    // Show inline feedback
    showInlineFeedback(isCorrect);
    updateStats();

    // Show next button after a delay with fade-in
    setTimeout(() => {
        nextButton.classList.add('show');
    }, 400);
}

// Show inline feedback
function showInlineFeedback(isCorrect) {
    // Hide the status line completely
    feedbackStatus.style.display = 'none';

    // Show mnemonic with bold keywords (empty string for neutral matchups)
    const mnemonic = getMnemonic(gameState.currentAttacker, gameState.currentDefender, gameState.correctAnswer);
    feedbackExplanation.innerHTML = mnemonic;

    inlineFeedback.classList.add('show');
}

// Move to next question
function nextQuestion() {
    generateNewQuestion();
    updateUI();

    // Auto-answer in debug mode
    if (gameState.debugMode) {
        setTimeout(() => {
            autoAnswerQuestion();
        }, 500); // Wait for transitions to complete
    }
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    if (gameState.answered) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            nextQuestion();
        }
        return;
    }

    // Number keys 1-5 for answers
    const keyNumber = parseInt(event.key);
    if (keyNumber >= 1 && keyNumber <= 5) {
        event.preventDefault();
        answerButtons[keyNumber - 1].click();
    }
});

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    // Removed addKeyboardHints() to clean up the UI
});

// Add some celebratory effects for streaks
function celebrateStreak() {
    if (gameState.streak > 0 && gameState.streak % 5 === 0) {
        // Add streak celebration (you could add confetti or animations here)
        console.log(`Great streak! ${gameState.streak} in a row! 🔥`);
    }
}
