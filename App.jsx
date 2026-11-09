import { useState } from 'react';
import './App.css';

function TriviaItem({ question, answer }) {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="trivia-item">

            <h3
                className="question"
                onClick={() => setIsVisible(!isVisible)}
            >
                {question}
            </h3>

            {isVisible && (
                <p className="answer">
                    {answer}
                </p>
            )}

        </div>
    );
}

function App() {

    const trivia = [
        {
            question: "Where did the term algorithm come from?",
            answer: "Algorithm comes from the name of Persian mathematician al-Khwarizmi, who lived around 825 CE."
        },
        {
            question: "When was the term computer first introduced?",
            answer: "The term computer was recorded as early as 1613 and originally referred to a person who performed calculations."
        },
        {
            question: "When was the oldest known analog computer created?",
            answer: "The Antikythera mechanism, dating to approximately 150–100 BCE, was used to calculate astronomical positions."
        },
        {
            question: "What is the difference between analog and digital devices?",
            answer: "Analog devices use continuous signals, while digital devices use discrete values."
        }
    ];

    return (
        <div className="container">

            <h1>Code Trivia</h1>

            {trivia.map((item, index) => (
                <TriviaItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />
            ))}

        </div>
    );
}

export default App;
