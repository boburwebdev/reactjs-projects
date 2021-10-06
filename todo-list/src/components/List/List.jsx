import React from 'react';
import uuid from 'uuid/dist/v4';
import classNames from 'classnames';
import removeIcon from '../../assets/img/remove.svg';
import './List.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const List = ({ items, onClickList, onClickListItem, removeItem, activeItem }) => {
    const handleRemoveItem = (id) => {
        axios.delete(`http://localhost:4004/lists/${id}`).then(data => {
            removeItem(id);
        });
    }

    return (
        <ul className="list" onClick={onClickList}>
            {
                items.map(item => {
                    return item?.icon ? (
                            <li className={classNames(item.className, {active: item.isActive})} key={uuid()}>
                                <Link to="/">
                                    <img className="list__item_icon" src={item.icon} alt={item.name} />
                                    {item?.name}
                                </Link>
                            </li>
                        ) : (
                            <li 
                                className={
                                    classNames(`list__item`, `list__item_sub`, item?.color?.name, {active: activeItem === item})
                                } 
                                key={uuid()}
                                onClick={() => onClickListItem(item)}>
                                    <Link to={"/lists/" + item.id}>
                                        {item?.name} ({item?.tasks?.length})
                                        <img onClick={() => handleRemoveItem(item.id)} className="list__item_remove" src={removeIcon} alt="remove" />
                                    </Link>
                            </li>
                        )
                })
            }
        </ul>
    )
}

export default List;
