import React, { useState, useEffect } from 'react';

function Edit({ task, onUpdateTask, onClose }) {
    const [editTask, setEditTask] = useState("");

    useEffect(() => {
        if (task) {
            setEditTask(task.task);
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editTask.trim()) {
            onUpdateTask({ ...task, task: editTask });
            onClose();
        }
    };

    return (
        <div className="edit-form">
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter your Task:</label>
                <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                />
                <button type="submit">Update Task</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}

export default Edit;
