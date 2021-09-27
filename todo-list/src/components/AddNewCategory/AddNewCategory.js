import React, { useState } from 'react';
import plusIcon from '../../assets/img/add.svg';
import closeIcon from '../../assets/img/close.svg';
import List from '../List/List';
import classNames from 'classnames';

import './AddNewCategory.scss';


const AddNewCategory = ({ colors }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedColor, setSelectedColor] = useState(colors[0].id);

    const handleListClick = () => {
        console.log(isModalVisible);
        setIsModalVisible(true);
    }

    const closeModal = () => {
        console.log(isModalVisible);
        setIsModalVisible(false);
    }

    return (
        <div className="add_new_category">
            <List
                onClick={handleListClick}
                items={[
                    {
                        className: 'list__item list__item_add',
                        icon: plusIcon,
                        text: 'Добавить категорию'
                    }
            ]} />
            {
                isModalVisible && (
                    <div className="add_new_category__popup">
                        <div className="close__btn" onClick={closeModal}>
                            <img className="close__btn_img"  src={closeIcon} alt="close" />
                        </div>
                        <input className="input_field" type="text" placeholder="Название категории" />
                        <div className="add_new_category__colors">
                            {
                                colors.map(color => (
                                    <div
                                        key={color.id} 
                                        className={classNames("add_new_category__colors_item", {'active': color.id === selectedColor})} 
                                        style={{backgroundColor: `${color.hex}`}}
                                        onClick={() => setSelectedColor(color.id)}
                                        ></div>
                                ))
                            }
                        </div>
                        <button className="btn btn__green btn__add_category">Добавить</button>
                    </div>
                )
            }
        </div>
    )
}

export default AddNewCategory;
