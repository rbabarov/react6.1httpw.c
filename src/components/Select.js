import React from 'react';
import { correction } from '../data/correction';
import { TimeStart } from './utils/timeStart';
import {nanoid} from 'nanoid';
import propTypes from 'prop-types';

export const Select = (props) => {
  const {onSelectTimeZone} = props;
  let list = Object.entries(correction);

  const handelChange = (evt) =>{
    let city = evt.target.value;
    const delta = correction[city];
    const arrowsVstart = TimeStart(delta);
    const clock = {
      id: nanoid(),
      city: city,
      arrows: arrowsVstart
    }
    onSelectTimeZone(clock);
    document.getElementById('select').selectedIndex = 0;
  }
  return (
    <select id='select' className='correction' autoFocus onChange={handelChange}>
      <option value='empty' selected>Добавить часовой пояс</option>
      {list.map((el, index) => {
          return(<option key={index} value={el[0]}>{el[0]}</option>)
      })}
    </select>
  )
}

Select.propTypes = {
  list: propTypes.object,
  handelChange: propTypes.func,
  onSelectTimeZone: propTypes.func
}
