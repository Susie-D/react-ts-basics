import { Goal } from "../App";


interface Props {
    goals: Goal[];
    onDelete: (id: number) => void;
}


const GoalsList = ({goals, onDelete} : Props) => {
    return (<>
        <ul>
            {goals.map((goal) =>
                <li key={goal.id}>
                    <h2>{goal.title}</h2>
                    <p>{goal.description}</p>
                    <button onClick={() => onDelete(goal.id)}>DELETE</button>
                </li>

            )}
        </ul>
    </>)
}

export default GoalsList