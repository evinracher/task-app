import React from "react"

const CreateButton = ({ setOpenModal }) => {
    const handleClick = () => {
        setOpenModal(true);
    }

    return (
        <button
            style={{ margin: 'auto' }}
            onClick={handleClick}
        >New Task</button>
    )
}

export { CreateButton }