import React, { useState } from 'react';
import axios from 'axios';
import "./comp.css";

function Comprehension() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''] }]);
  };

  const handleQuestionChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].question = value;
      return updatedQuestions;
    });
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options[optionIndex] = value;
      return updatedQuestions;
    });
  };

  const deleteQuestion = (index) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions.splice(index, 1);
      return updatedQuestions;
    });
  };

  const saveData = async () => {
    try {
      alert("Data is saved successfully")

      await axios.post('https://super-backend-atta.onrender.com/api/comprehension', { questions });
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div>
      <div className='con'>
        <pre>
        The Water Cycle Points
        Water is essential for life on Earth. It helps to regulate the planet's temperature. <br/>
        shapes its landscapes, and provides habitat for millions of species. What makes water <br/>
        so special is the water cycle, also known as the hydrological cycle.<br/>
        The water cycle describes the continuous movement of water on, above and below the<br/> 
        surface of the Earth. Water can exist in three states: liquid, gas and solid. <br/>
        As the Sun heats Earth's surface, water in rivers, lakes and oceans evaporates <br/>
        and turns into vapor or water gas in the clouds. The water vapor then rises and <br/>
        cools in the atmosphere, condensing into tiny droplets of liquid water that form clouds. <br/>
        When the droplets become too large and heavy to stay suspended in the atmosphere. <br/>
        they fall back to the surface as precipitation in the form of rain or snow.<br/>

        Some of the precipitation is intercepted by trees, vegetation and other objects <br/>
        and evaporates back into the atmosphere. Some of the precipitation is absorbed into the ground, <br/>
        where some of it evaporates, some of it seeps into groundwater aquifers, and some is used by plant roots,<br/> 
        Groundwater eventually emerges in the form of springs and seeps into streams, creeks, rivers and lakes, <br/>
        completing the cycle
        </pre>

        <div className='qscon'>
          <h5> According to the passage, one key feature of the water cycle is that: </h5>
          <form>
            <p> <input type="radio" /> <span> water evaporates from the surface into the 
        atmosphere</span></p>
            <p> <input type="radio" /> <span> water only exists in liquid form</span></p>
            <p> <input type="radio" /> <span> water moves from the surface to deep 
    underground</span></p>
            <p> <input type="radio" /> <span> water remains in the clouds forever</span></p>
          </form>
        </div>

        <div id="questioncon">
          {questions.map((q, index) => (
            <div key={index} className='qscon'>
              <h5>
                <input
                  type="text"
                  placeholder="Enter question here"
                  value={q.question}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                />
                <button onClick={() => deleteQuestion(index)}>Delete</button>
              </h5>
              <form>
                {q.options.map((option, optionIndex) => (
                  <p key={optionIndex}>
                    <input
                      type="radio"
                      name={`question_${index}`}
                      value={option}
                      onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
                    />
                    <span>
                      <input
                        type="text"
                        placeholder="Enter option here"
                        value={option}
                        onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
                      />
                    </span>
                  </p>
                ))}
              </form>
            </div>
          ))}
        </div>

        <button onClick={addQuestion} className='addq'>Add Question</button>
        <button className='save' onClick={saveData}>Save</button>
      </div>
    </div>
  );
}

export default Comprehension;
