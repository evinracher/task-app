import React from "react";

const TaskHeader = ({ children, loading }) => {
    const elements = React.Children.toArray(children);

    return (
        <header>
            {elements.map(child => React.cloneElement(child, {
                loading
            }))}
        </header>
    )
}

export { TaskHeader };