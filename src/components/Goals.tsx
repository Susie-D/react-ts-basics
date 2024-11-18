import { Goal } from "../App";
import GoalsList from "./GoalsList";

interface Props {
    goals: Goal[];
    onDeleteGoal: (id: number) => void;
}

const Goals = ({
    goals,
    onDeleteGoal,
}: Props) => {
    return (
        <article>
            <GoalsList goals={goals} onDelete={onDeleteGoal}/>
        </article>
    )
}

export default Goals;