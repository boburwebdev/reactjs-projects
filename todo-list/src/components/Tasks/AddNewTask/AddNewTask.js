import React, { useState } from 'react';
import axios from 'axios';

import addIcon from '../../../assets/img/add.svg';

import './AddNewTask.scss';

const AddNewTask = ({ addNewTask, listId }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleBtnClick = () => {
        setIsFormVisible(true);
    }

    const handleChange = e => {
        setInputValue(e.target.value);
    }

    const handleAddTask = () => {
        const objNewTask = {
            listId: listId,
            text: inputValue,
            completed: false
        }

        axios.post(`http://localhost:4004/tasks`, objNewTask)
              .then(({ data }) => {
                  addNewTask(data);
                  console.log(data);
              })
              .catch(err => console.log(err));

        handleCancel();
    }

    const handleCancel = () => {
        setInputValue('');
        setIsFormVisible(false);
    }

    return (
        <div className="add_new_task">
            {
                isFormVisible ? (
                    <>
                        <input 
                            className="input_field" 
                            type="text" placeholder="Введите задачу" 
                            value={inputValue}
                            onChange={handleChange} 
                        />
                        <div className="buttons">
                            <button className="btn btn__green btn__add_task" onClick={handleAddTask}>Добавить</button>
                            <button className="btn btn__cancel" onClick={handleCancel}>Отмена</button>
                        </div>
                    </>
                ) : (
                    <div className="add_new_task__button" onClick={handleBtnClick}>
                        <img src={addIcon} alt="plus icon" />
                        <span>Новая задача</span>
                    </div>
                )
            }
        </div>
    )
}

export default AddNewTask;
