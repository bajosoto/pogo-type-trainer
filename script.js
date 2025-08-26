// Game state
let gameState = {
    streak: 0,
    score: 0,
    currentAttacker: null,
    currentDefender: null,
    correctAnswer: null,
    answered: false
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

    // Add event listeners
    answerButtons.forEach(button => {
        button.addEventListener('click', handleAnswer);
    });

    nextButton.addEventListener('click', nextQuestion);
}

// Generate a new question
function generateNewQuestion() {
    gameState.currentAttacker = getRandomType();
    gameState.currentDefender = getRandomType();
    gameState.correctAnswer = getEffectiveness(gameState.currentAttacker, gameState.currentDefender);
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
