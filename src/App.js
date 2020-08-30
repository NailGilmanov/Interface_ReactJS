import React from 'react';
import './App.css';
import Product from './components/Product'

function App() {
  //Критерии
  return (
    <div>
      <div className='app_wrapper'>
        <div className='criterial__box reit'>
          <ul className='criterial'>
            <li className='criterial_item pad'>&nbsp;</li>
            <li className='criterial_item pad'>&nbsp;</li>
            <li className='criterial_item pad'>&nbsp;</li>
            <li className='criterial_item pad'>&nbsp;</li>
            <li className='criterial_item pad'>&nbsp;</li>
            <li className='criterial_item pad'>&nbsp;</li>
            <li className='criterial_item pad'>&nbsp;</li>
            <li className='criterial_item pad'>&nbsp;</li>
            <li className='criterial_item pad'>&nbsp;</li>
            <li className='criterial_item pad'>&nbsp;</li>
            <li className='criterial_item pad even'>Рейтинг:</li>
            <li className='criterial_item pad '>Цена:</li>
            <li className='criterial_item pad even'>Цвет:</li>
            <li className='criterial_item pad '>Материал:</li>
            <li className='criterial_item pad even'>Размер:</li>
            <li className='criterial_item pad '>Механизм:</li>
            <li className='criterial_item pad even'>Продавец:</li>
          </ul>
        </div>
        < Product />
      </div>  
    </div>
  );
}

export default App;
