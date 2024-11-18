import { useState } from 'react';
import goalsImg from './assets/goals.jpg';
import Goals from "./components/Goals.tsx";
import Header from "./components/Header.tsx";
import NewGoals from './components/NewGoals.tsx';


export interface Goal {
  title: string;
  description: string; 
  id: number;

}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function addGoalHandler(goal:string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: Goal = {
        id: Math.random(),
        title: goal,
        description: summary,
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
      <NewGoals onAddGoal={addGoalHandler}/>
      <Goals onDeleteGoal={deleteGoalHandler}
        goals={goals} />
    </main>
  )
}
