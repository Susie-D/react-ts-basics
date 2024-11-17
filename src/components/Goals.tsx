interface Props {
    title: string;
    description: string;
}

const Goals = ({
    title,
    description,
}: Props) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button>DELETE</button>
        </article>
    )
}

export default Goals;