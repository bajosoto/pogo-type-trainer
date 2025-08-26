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
    updateUI();

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
    feedbackStatus.textContent = '';
    feedbackExplanation.textContent = '';

    nextButton.style.visibility = 'hidden';
}

// Update the UI with current question
function updateUI() {
    // Update type badges
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
    updateUI();

    // Show next button after a delay
    setTimeout(() => {
        nextButton.style.visibility = 'visible';
    }, 800);
}

// Show inline feedback
function showInlineFeedback(isCorrect) {
    const icon = isCorrect ? '✅' : '❌';
    const text = isCorrect ? 'Correct!' : 'Incorrect!';

    feedbackStatus.innerHTML = `${icon} ${text}`;
    feedbackStatus.className = `feedback-status ${isCorrect ? 'correct' : 'incorrect'}`;

    feedbackExplanation.textContent = getExplanation(
        gameState.currentAttacker,
        gameState.currentDefender,
        gameState.correctAnswer
    );

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

// Add visual feedback for keyboard hints
function addKeyboardHints() {
    answerButtons.forEach((button, index) => {
        const hint = document.createElement('span');
        hint.className = 'keyboard-hint';
        hint.textContent = index + 1;
        hint.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            background: rgba(0, 0, 0, 0.1);
            color: #64748b;
            font-size: 12px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
        `;

        button.style.position = 'relative';
        button.appendChild(hint);
    });
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    addKeyboardHints();
});

// Add some celebratory effects for streaks
function celebrateStreak() {
    if (gameState.streak > 0 && gameState.streak % 5 === 0) {
        // Add streak celebration (you could add confetti or animations here)
        console.log(`Great streak! ${gameState.streak} in a row! 🔥`);
    }
}
