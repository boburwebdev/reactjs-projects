import React from 'react';
import uuid from 'uuid/dist/v4';
import classNames from 'classnames';
import './List.scss';

const List = ({ items, isRemovable, onClick }) => {
    return (
        <ul className="list" onClick={onClick}>
            {
                items.map(item => {
                    return item.icon ? (
                            <li className={classNames(item.className, {active: item.isActive})} key={uuid()}>
                                <img className="list__item_icon" src={item.icon} alt={item.text} />
                                {item.text}
                            </li>
                        ) : (
                            <li className={
                                classNames(`list__item`, `list__item_sub`, item.color, {active: item.isActive})
                            } key={uuid()}>
                                {item.text}
                            </li>
                        )
                })
            }
        </ul>
    )
}

export default List;
