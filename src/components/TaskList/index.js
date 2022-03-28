const TaskList = (props) => {
    const renderFunction = props.render ?? props.children;
    return (
        <section className="TaskList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.total) && props.onEmpty()}
            {(!!props.total && !props.filteredTasks.length) && props.onEmptyResults(props.searchValue)}
            <ul className="task-list">
                {(!props.loading && !props.error) && props.filteredTasks.map((task, index) =>
                    renderFunction(task, index)
                )}
            </ul>
        </section>
    )
}

export { TaskList };