const TaskList = (props) => {
    return (
        <section>
            <ul className="task-list">
                {props.children}
            </ul>
        </section>
    )
}

export { TaskList };