import React from 'react';
import "./Question.css";

const Question = () => {
    return (
        <div>
            <div className="questin-container">
                <div className="questin">
                    <h3>How does react js work?</h3>
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                </div>
                <div className="questin">
                    <h3>What is the difference between props and state in react js?</h3>
                    <p>Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</p>
                    <p>The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
                </div>
                <div className="questin">
                    <h3>What does useEffect do in react js?</h3>
                    <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                </div>

            </div>
        </div>
    );
};

export default Question;