import React from 'react';
import './List.scss';

const List = ({ items }) => {
    return (
        <ul className="list">
            {
                items.map(item => {
                    return item.icon ? (
                            <li className={item.isActive ? `list__item active` : `list__item`}>
                                <img className="list__item_icon" src={item.icon} alt={item.text} />
                                {item.text}
                            </li>
                        ) : (
                            <li className={
                                item.isActive ? 
                                `list__item list__item_sub ${item.color} active` : 
                                `list__item list__item_sub ${item.color}`
                            }>
                                {item.text}
                            </li>
                        )
                })
            }
        </ul>
    )
}

export default List;
