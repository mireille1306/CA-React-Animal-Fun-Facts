import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const showBackground = true;
const background = <img className="background" src="/images/ocean.jpg" alt="ocean" />;
const images = [];

const displayFact = (animal) => (event) => {
  const facts = animals[animal].facts
  const total = facts.length;
  const index = Math.floor(Math.random() * Math.floor(total));
  document.getElementById('fact').innerHTML = facts[index];
}

for (let animal in animals) {
  images.push(<img 
    key={animal} 
    className="animal" 
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role="button"
    onMouseOver={displayFact(animal)} />);
}

const animalFacts = (
  <div>
    <h1>
      {!title.length ? 'Click an animal for a fun fact': title}
    </h1>
    <p id="fact"></p>
    {showBackground && background}
    <div className="animals">{images}</div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));