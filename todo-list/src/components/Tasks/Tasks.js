import React from 'react';
import iconEdit from '../../assets/img/edit.svg';
import './Tasks.scss';

const Tasks = ({title}) => {
    return (
        <div className="tasks">
            <h2 className="tasks__title">
                {title}
                <img className="tasks__title_edit" src={iconEdit} alt="edit title" />
            </h2>
            <div className="tasks__list">

                <div className="tasks__list_item">
                    <label className="task__list_checkbox_wrapper">
                        <input className="tasks__list__checkbox" type="checkbox" />
                        <span className="task__list__checkbox_circle">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </label>
                    <p>ReactJS Hooks (useState, useReducer, useEffect и т.д.)</p>
                </div>

                <div className="tasks__list_item">
                    <label className="task__list_checkbox_wrapper">
                        <input className="tasks__list__checkbox" type="checkbox" />
                        <span className="task__list__checkbox_circle">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </label>
                    <p>Redux (redux-observable, redux-saga)</p>
                </div>

                <div className="tasks__list_item">
                    <label className="task__list_checkbox_wrapper">
                        <input className="tasks__list__checkbox" type="checkbox" />
                        <span className="task__list__checkbox_circle">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </label>
                    <p>Изучить паттерны проектирования</p>
                </div>
            </div>
        </div>
    )
}

export default Tasks;
