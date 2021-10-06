import React, { useState, useEffect }  from 'react';
import iconEdit from '../../assets/img/edit.svg';
import AddNewTask from './AddNewTask/AddNewTask';
import './Tasks.scss';

const Tasks = ({ taskItems, addNewTask, updateTitle }) => {

    const { id, name, tasks } = taskItems;
    const [ titleText, setTitleText ] = useState(name);
    const [ titleBeingEdited, setTitleBeingEdited ] = useState(false);

    useEffect(() => {
        handleReset();
    }, [id]);

    const handleTitleClick = () => {
        setTitleBeingEdited(true);
    }

    const handleTitleChange = e => {
        setTitleText(e.target.value);
    }

    const handleUpdateTitle = () => {
        updateTitle(taskItems.id, titleText);
        setTitleBeingEdited(false);
    }

    const handleReset = () => {
        setTitleText(name);
        setTitleBeingEdited(false);
    }
    
    return (
        <div className="tasks">
            <h2 className="tasks__title">
                {
                    titleBeingEdited ? (
                        <>
                            <input 
                                className="input_field" 
                                type="text" placeholder="Название категории" 
                                value={titleText}
                                onChange={handleTitleChange} 
                            />
                            <div className="buttons">
                                <button className="btn btn__green btn__save" onClick={handleUpdateTitle}>Сохранить</button>
                                <button className="btn btn__cancel" onClick={handleReset}>Отмена</button>
                            </div>
                        </>
                        
                    ) : (
                        <>
                        {name}
                        <img 
                            className="tasks__title_edit" 
                            src={iconEdit} alt="edit title"
                            onClick={handleTitleClick} />
                        </>
                    )
                }
            </h2>
            <div className="tasks__list">
                {
                    taskItems && tasks?.length > 0 ? 
                    (   
                        <>
                            {
                                tasks.map(task => (
                                    <div className="tasks__list_item" key={task.id}>
                                        <label className="task__list_checkbox_wrapper">
                                            <input className="tasks__list__checkbox" type="checkbox" />
                                            <span className="task__list__checkbox_circle">
                                                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </span>
                                        </label>
                                        <p>{task.text}</p>
                                    </div>
                                    
                                ))
                            }
                            <AddNewTask listId={id} addNewTask={addNewTask} />
                        </>
                    ) : (
                        <>
                            <AddNewTask listId={id} addNewTask={addNewTask} />
                            <p className="tasks__list_empty">Задачи отсутствуют</p>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Tasks;
