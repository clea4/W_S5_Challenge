import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [learners, setLearners] = useState([]);

  useEffect(() => {
    axios.get('/api/learners')
      .then(response => {
        setLearners(response.data);
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  return (
    <div>
      <header>
        <h1>Sprint 5 Challenge Submission</h1>
        <h2>Learner Cards</h2>
        <p className="info">No learner is selected</p>
      </header>
      <section>
        <div className="cards">
          {learners.map(learner => (
            <div key={learner.id} className="card">
              <h3>{learner.name}</h3>
              {/* other learner details */}
            </div>
          ))}
        </div>
      </section>
      <footer>© BLOOM INSTITUTE OF TECHNOLOGY 2024</footer>
    </div>
  );
};

export default App;
