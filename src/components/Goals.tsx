import { Goal } from "../App";
import GoalsList from "./GoalsList";

interface Props {
    goals: Goal[];
}

const Goals = ({
    goals
}: Props) => {
    return (
        <article>
            <GoalsList goals={goals} />
        </article>
    )
}

export default Goals;