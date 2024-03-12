import { useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification';
function App() {
 
 const [guestOpinion,setguestOpinion]=useState({good: 0,
    neutral: 0,
    bad:0,});
  const updateFeedback = (feedbackType) => {
    setguestOpinion({ ...guestOpinion, [feedbackType]: guestOpinion[feedbackType] + 1 });
  };
  const totalFeedback = guestOpinion.good + guestOpinion.bad + guestOpinion.neutral;
  const handleResetButtonClick = () => {
    setguestOpinion({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  };
  return (
    <>
     
      <h1>Vite + React</h1>
     <h2> Модуль2. Віджет відгуків</h2> 
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedbackNumber={totalFeedback} onResetButtonClick={handleResetButtonClick} />
      {totalFeedback === 0 ? <Notification /> : <Feedback guestOpinion={guestOpinion} />}
      
    </>
  )
}

export default App
