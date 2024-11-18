import { Goal } from "../App";


interface Props {
    goals: Goal[];
}


const GoalsList = ({goals} : Props) => {
    return (<>
        <ul>
            {goals.map((goal) =>
                <li key={goal.id}>
                    <h2>{goal.title}</h2>
                    <p>{goal.description}</p>
                    <button>DELETE</button>
                </li>

            )}
        </ul>
    </>)
}

export default GoalsList