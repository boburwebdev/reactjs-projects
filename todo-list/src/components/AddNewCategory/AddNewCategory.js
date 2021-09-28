import React, { useState } from 'react';
import plusIcon from '../../assets/img/add.svg';
import closeIcon from '../../assets/img/close.svg';
import List from '../List/List';
import classNames from 'classnames';
import uuid from 'uuid/dist/v4';

import './AddNewCategory.scss';


const AddNewCategory = ({ colors, addCategory }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedColor, setSelectedColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');

    const handleClickList = () => {
        setIsModalVisible(true);
    }

    const closeModal = () => {
        resetPopupData();
    }

    const handleChange = e => {
        setInputValue(e.target.value);
    }

    const handleClickAddCategory = () => {
        addCategory({
            "id": uuid(),
            "name": inputValue,
            "color": colors.find(c => c.id === selectedColor).name
        });
        resetPopupData();
    }

    const resetPopupData = () => {
        setIsModalVisible(false);
        setSelectedColor(colors[0].id);
        setInputValue('');
    }

    return (
        <div className="add_new_category">
            <List
                onClick={handleClickList}
                items={[
                    {
                        className: 'list__item list__item_add',
                        icon: plusIcon,
                        name: 'Добавить категорию'
                    }
            ]} />
            {
                isModalVisible && (
                    <div className="add_new_category__popup">
                        <div className="close__btn" onClick={closeModal}>
                            <img className="close__btn_img"  src={closeIcon} alt="close" />
                        </div>
                        <input 
                            className="input_field" 
                            type="text" placeholder="Название категории" 
                            value={inputValue}
                            onChange={handleChange} 
                        />
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
                        <button 
                            className="btn btn__green btn__add_category"
                            onClick={handleClickAddCategory} >Добавить</button>
                    </div>
                )
            }
        </div>
    )
}

export default AddNewCategory;
