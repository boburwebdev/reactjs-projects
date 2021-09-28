import React from 'react';
import uuid from 'uuid/dist/v4';
import classNames from 'classnames';
import removeIcon from '../../assets/img/remove.svg';
import './List.scss';

const List = ({ items, onClick, removeItem }) => {
    return (
        <ul className="list" onClick={onClick}>
            {
                items.map(item => {
                    return item.icon ? (
                            <li className={classNames(item.className, {active: item.isActive})} key={uuid()}>
                                <img className="list__item_icon" src={item.icon} alt={item.name} />
                                {item.name}
                            </li>
                        ) : (
                            <li className={
                                classNames(`list__item`, `list__item_sub`, item.color, {active: item.isActive})
                            } key={uuid()}>
                                {item.name}
                                <img onClick={() => removeItem(item.id)} className="list__item_remove" src={removeIcon} alt="remove" />
                            </li>
                        )
                })
            }
        </ul>
    )
}

export default List;
