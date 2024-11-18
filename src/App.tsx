import { useState } from 'react';
import goalsImg from './assets/goals.jpg';
import Goals from "./components/Goals.tsx";
import Header from "./components/Header.tsx";


export interface Goal {
  title: string;
  description: string; 
  id: number;

}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function addGoalHandler() {
    setGoals(prevGoals => {
      const newGoal: Goal = {
        id: Math.random(),
        title: 'Learning things...',
        description: 'Learn in depth',
      };
      return [...prevGoals, newGoal ]
    });
  }

   function deleteGoalHandler(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !==id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Goals:</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal:</button>
      <Goals onDeleteGoal={deleteGoalHandler}
        goals={goals} />
    </main>
  )
}
