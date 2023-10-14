import React from 'react';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from "prop-types";

export default function AddWatch ({onAdd})  {
    const [form, setForm] = useState({name: '', zone: ''})

    const handleChange = (e) => { // следит за изменением
        const {name, value} = e.target;
  
        setForm(prevForm =>       //создает новый объект
            ({...prevForm, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name.trim() === '' || form.zone.trim() === '') { // если ничего не введено, то ничего не делать
            return
        }

        const watch = {id: uuidv4(), ...form}
        onAdd(watch);
        setForm({name: '', zone: ''}) // очищаем 
    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    <p>Название</p>
                    <input type='text' name='name' value={form.name} onChange={handleChange} required></input>
                </label>
                <label>
                    <p>Временная зона </p>
                    <input type='number' name='zone' value={form.zone} onChange={handleChange} required></input>
                </label>
                <button className='add__btn'>Добавить</button>
            </form>
        </>
    )
}

AddWatch.propTypes = {
    addWatch: PropTypes.func.isRequired,
  }
