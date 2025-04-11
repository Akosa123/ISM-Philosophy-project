// Define the questions as situations with their corresponding categories
const questions = [
    {
        situation: "You are on a trolley and the lever can either save five people by killing one person, or do nothing and let the trolley kill five. What do you do?",
        options: [
            { answer: "Pull the lever to save five", category: 'Utilitarianism' },
            { answer: "Do nothing, letting five die", category: 'Deontological Ethics' }
        ]
    },
    {
        situation: "You find a wallet on the ground with money in it. The person who lost it is nearby, but you could really use the money. Do you keep it or return it?",
        options: [
            { answer: "Return the wallet", category: 'Virtue Ethics' },
            { answer: "Keep the money", category: 'Egoism' }
        ]
    },
    {
        situation: "A close friend confesses that they cheated on their partner, but asks you to keep it a secret. If you tell their partner, the truth will hurt them, but if you don’t, the friend might stay in a toxic relationship. What do you do?",
        options: [
            { answer: "Tell the partner the truth", category: 'Deontological Ethics' },
            { answer: "Keep the secret to protect the friend", category: 'Virtue Ethics' }
        ]
    },
    {
        situation: "You're at a store, and an item you want is accidentally scanned at a lower price. Do you tell the cashier about the mistake, or do you take advantage of the situation?",
        options: [
            { answer: "Tell the cashier about the mistake", category: 'Moral Realism' },
            { answer: "Take advantage of the error", category: 'Moral Anti-Realism' }
        ]
    },
    {
        situation: "You're a doctor, and you have two patients who need urgent care, but only one can be saved. One is a child, and the other is an elderly person. Who do you save?",
        options: [
            { answer: "Save the child", category: 'Utilitarianism' },
            { answer: "Save the elderly person", category: 'Virtue Ethics' }
        ]
    },
    {
        situation: "A new law is proposed that would violate the rights of a minority group for the supposed greater good of society. Do you support the law?",
        options: [
            { answer: "Support the law for the greater good", category: 'Utilitarianism' },
            { answer: "Oppose the law to protect the minority's rights", category: 'Deontological Ethics' }
        ]
    },
    {
        situation: "You are part of a jury, and the defendant is guilty of a crime. However, you know that the punishment will destroy their life completely. Do you still recommend the punishment?",
        options: [
            { answer: "Recommend the punishment", category: 'Deontological Ethics' },
            { answer: "Recommend a lesser punishment", category: 'Virtue Ethics' }
        ]
    },
    {
        situation: "A person you know is about to make a significant moral mistake, but you know they will face consequences for it. Do you intervene and stop them?",
        options: [
            { answer: "Intervene to stop them", category: 'Virtue Ethics' },
            { answer: "Let them make the mistake", category: 'Moral Realism' }
        ]
    },
    {
        situation: "You're presented with a choice to break the law in order to help someone in need. Do you break the law or follow it?",
        options: [
            { answer: "Break the law to help someone", category: 'Pragmatism' },
            { answer: "Follow the law", category: 'Deontological Ethics' }
        ]
    },
    {
        situation: "You're in a situation where you could harm one person to save many others. The harm is significant, but the greater good is clear. Do you act?",
        options: [
            { answer: "Act to save the many", category: 'Utilitarianism' },
            { answer: "Do not act, even if it harms the greater good", category: 'Deontological Ethics' }
        ]
    },
    {
        situation: "A friend asks you to lie to their partner to protect them from hurt feelings. What do you do?",
        options: [
            { answer: "Lie to protect their feelings", category: 'Virtue Ethics' },
            { answer: "Tell the truth, even if it hurts", category: 'Deontological Ethics' }
        ]
    },
    {
        situation: "You witness a person being unfairly treated, but intervening could cause personal harm to you. Do you step in?",
        options: [
            { answer: "Intervene and help", category: 'Virtue Ethics' },
            { answer: "Do nothing to avoid personal harm", category: 'Egoism' }
        ]
    },
    {
        situation: "You have the power to stop a war, but it would require a sacrifice of your own life. Would you make that sacrifice?",
        options: [
            { answer: "Sacrifice yourself to stop the war", category: 'Altruism' },
            { answer: "Choose your own survival", category: 'Egoism' }
        ]
    },
    {
        situation: "You find out that someone is lying to you, but revealing the lie would cause them embarrassment and ruin their reputation. Do you expose the lie?",
        options: [
            { answer: "Expose the lie", category: 'Moral Realism' },
            { answer: "Let the lie go to avoid harming them", category: 'Moral Anti-Realism' }
        ]
    },
    {
        situation: "A person is in danger, and you could help, but it requires violating a rule you’ve always followed. Do you help?",
        options: [
            { answer: "Help the person, violating the rule", category: 'Pragmatism' },
            { answer: "Follow the rule and do nothing", category: 'Deontological Ethics' }
        ]
    },
    {
        situation: "You're in a position to make a decision that would harm a minority group for the benefit of the majority. What do you do?",
        options: [
            { answer: "Support the decision for the greater good", category: 'Utilitarianism' },
            { answer: "Oppose the decision to protect the minority", category: 'Rights Theory' }
        ]
    },
    {
        situation: "You are tasked with judging a person’s actions. Do you judge them based on their intentions or the outcomes of their actions?",
        options: [
            { answer: "Judge based on intentions", category: 'Deontological Ethics' },
            { answer: "Judge based on outcomes", category: 'Consequentialism' }
        ]
    },
    {
        situation: "You can tell a lie to save someone’s life, but you know it’s still wrong. Do you go ahead and lie?",
        options: [
            { answer: "Lie to save the life", category: 'Utilitarianism' },
            { answer: "Tell the truth, even if it harms", category: 'Deontological Ethics' }
        ]
    }
];

// Store the scores for each category
let userScores = {
    'Utilitarianism': 0,
    'Deontological Ethics': 0,
    'Virtue Ethics': 0,
    'Egoism': 0,
    'Pragmatism': 0,
    'Moral Realism': 0,
    'Moral Anti-Realism': 0,
    'Rights Theory': 0,
    'Consequentialism': 0,
    'Altruism': 0
};

let currentQuestionIndex = 0;

// Descriptions for each meta-ethical category
const descriptions = {
    'Utilitarianism': "Utilitarianism is the belief that the best action is the one that maximizes overall happiness or well-being for the greatest number of people.",
    'Deontological Ethics': "Deontological Ethics focuses on the morality of actions themselves rather than the consequences, emphasizing duties and rules.",
    'Virtue Ethics': "Virtue Ethics emphasizes moral character and the cultivation of virtues over following rules or evaluating consequences.",
    'Egoism': "Egoism is the ethical theory that individuals should act in ways that are in their own best interest, prioritizing self-interest over others.",
    'Pragmatism': "Pragmatism emphasizes practical consequences and real-world results over theoretical or absolute principles.",
    'Moral Realism': "Moral Realism is the belief that objective moral facts exist and that moral statements are truth-apt.",
    'Moral Anti-Realism': "Moral Anti-Realism denies the existence of objective moral facts, suggesting that moral judgments are subjective or based on social constructs.",
    'Rights Theory': "Rights Theory holds that individuals have inherent rights that must be respected, and these rights are paramount in moral decision-making.",
    'Consequentialism': "Consequentialism asserts that the morality of an action is determined by its outcomes or consequences, regardless of the means used.",
    'Altruism': "Altruism is the selfless concern for the well-being of others, even at the cost of one's own self-interest."
};

// Load the next question
function loadQuestion() {
    // Hide the "Next Question" button if it's visible
    document.getElementById('nextBtn').style.display = 'none';

    // Get the current situation and its options
    const situation = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('questionContainer');
    
    // Clear previous question and answers
    questionContainer.innerHTML = '';
    
    // Display the situation text
    const situationText = document.createElement('p');
    situationText.innerText = situation.situation;
    questionContainer.appendChild(situationText);
    
    // Display the answer options
    situation.options.forEach(option => {
        const optionLabel = document.createElement('label');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `q${currentQuestionIndex}`;
        optionInput.value = option.category;
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option.answer));
        questionContainer.appendChild(optionLabel);
        questionContainer.appendChild(document.createElement('br'));
    });

    // Show the "Next Question" button
    document.getElementById('nextBtn').style.display = 'block';
}

// Handle the click of the "Next Question" button
document.getElementById('nextBtn').addEventListener('click', () => {
    // Calculate the result for the current question
    const formElements = document.getElementById('questionContainer').querySelectorAll('input');
    let answered = false;

    // Loop through all radio inputs and check if one is selected
    formElements.forEach(input => {
        if (input.checked) {
            answered = true;
            // Update the score based on the selected answer
            userScores[input.value]++;
        }
    });

    // If no answer was selected, we don't move on
    if (!answered) {
        alert('Please select an answer before moving to the next question.');
        return;
    }

    // Move to the next question or show results if finished
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Show the results with a description of the meta-ethical category
function showResults() {
    const resultText = document.getElementById('resultText');
    let highestScoreCategory = '';
    let highestScore = 0;

    // Find the category with the highest score
    for (let category in userScores) {
        if (userScores[category] > highestScore) {
            highestScore = userScores[category];
            highestScoreCategory = category;
        }
    }

    // Display the result category
    resultText.innerText = `You align most with: ${highestScoreCategory}`;

    // Display the description for the selected category
    const resultDescription = document.getElementById('resultDescription');
    resultDescription.innerText = descriptions[highestScoreCategory];

    // Collapse the question container and show the result section
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}

// Reset the user scores and start over when the page loads
window.onload = function() {
    userScores = {
        'Utilitarianism': 0,
        'Deontological Ethics': 0,
        'Virtue Ethics': 0,
        'Egoism': 0,
        'Pragmatism': 0,
        'Moral Realism': 0,
        'Moral Anti-Realism': 0,
        'Rights Theory': 0,
        'Consequentialism': 0,
        'Altruism': 0
    };
    currentQuestionIndex = 0;
    loadQuestion();
};
