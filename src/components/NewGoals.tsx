import { type FormEvent, useRef } from "react";

interface Props {
    onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({ onAddGoal }: Props) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        new FormData(event.currentTarget);

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        onAddGoal(enteredGoal, enteredSummary);
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" ref={summary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}

export default NewGoal; 