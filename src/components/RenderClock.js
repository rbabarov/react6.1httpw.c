import React from 'react';
import { RenderNumber } from './RenderNumber';
import { RenderArrows } from './RenderArrows';
import propTypes from 'prop-types';

export const RenderClock = (props) => {
  const {data, onClokDelete} = props;
  if(data.length === 0) {return;}

  function deleteClok(evt) {
    const delet = evt.target.closest('.blok_clock').id;
    onClokDelete(delet);
  }
  return(
    <div className='clocks'>
      {data.map((el) => {
        const {city, id, arrows} = el;
        const background = city === 'Moskow'? 'clock Moskow': 'clock';
        return(
          <div id={id} key={id} className='blok_clock'>
            <h3 className='city'>{city}</h3>
            <div className={background}>
              <RenderNumber/>
              <RenderArrows data={arrows}/>
            </div>
            <button className='butt' id="bt" onClick={deleteClok}>удалить</button> 
          </div>
        )
      })}
    </div>  
  )  
}

RenderClock.propTypes = {
  data: propTypes.object,
  deleteClok: propTypes.func,
  onClokDelete: propTypes.func
}
