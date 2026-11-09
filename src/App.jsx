import { useState } from 'react';
import './App.css';

// Individual trivia question component
function TriviaItem({ question, answer }) {

    // Each question maintains its own visibility state
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="trivia-item">

            {/* Question button */}
            <button
                className="question"
                onClick={() => setIsVisible(!isVisible)}
                aria-expanded={isVisible}
            >
                <span>{question}</span>

                <span className="icon">
                    {isVisible ? '-' : '+'}
                </span>

            </button>

            {/* Display the answer only when visible */}
            {isVisible && (
                <div className="answer">
                    {answer}
                </div>
            )}

        </div>
    );
}


// Main application component
function App() {

    // Trivia questions stored as an array of objects
    const trivia = [

        {
            question: "Where did the term algorithm come from?",

            answer: "Algorithm is derived from the Latinized name of Muhammad ibn Musa al-Khwarizmi, a Persian mathematician who lived around 825 CE."
        },

        {
            question: "When was the term computer first introduced?",

            answer: "The term computer was recorded as early as 1613 and originally referred to a person who performed mathematical calculations."
        },

        {
            question: "When was the oldest known analog computer created?",

            answer: "The Antikythera mechanism, dating to approximately 150–100 BCE, was used to calculate astronomical positions."
        },

        {
            question: "What is the difference between analog and digital devices?",

            answer: "An analog signal is continuous, while a digital signal represents information using discrete values."
        }

    ];


    return (

        <div className="container">

            <header className="header">

                <div className="label">
                    COMPUTER SCIENCE
                </div>

                <h1>Code Trivia</h1>

                <p>
                    Test your knowledge of computer science
                    and discover some interesting facts!
                </p>

            </header>


            <main className="trivia">

                <h2>Did you know?</h2>

                <p className="instructions">
                    Click a question to reveal its answer.
                </p>


                {/* Generate a TriviaItem for each question */}
                {trivia.map((item, index) => (

                    <TriviaItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />

                ))}

            </main>


            <footer>
                Built with React and JavaScript
            </footer>

        </div>

    );

}

export default App;