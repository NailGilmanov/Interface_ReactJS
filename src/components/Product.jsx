import React from 'react';

const stars = (count) => {
  let stars = '';
  for(let i = 0; i < count; i++) {
    stars += '<i class="fas fa-star"></i>'
  }
  return stars;
};

const Product = () => {
  //ДАННЫЕ
  let products = new Array(5)
    .fill(0)
    .map(() => ({
      title: 'Тумба прикроватная Rubus c двумя ящиками',
      rating: Number((Math.random() * 5 + 1).toFixed(2)),
      price: Number((Math.random() * 50000).toFixed()),
      color: 'Черный',
      material: 'Ткань',
      size: 'ш. 349 Х в. 249 Х г.223',
      mechanism: 'Француская раскладушка',
      seller: 'Laska Family'
  })); 
      
  console.log(products); 

  //ПЕРЕРАБОТКА ДАННЫХ

  let productsItem = products
    .map((product) => {
      return (
        <div className='criterial__box active'>
          <ul className='criterial'>
            <li className='criterial_item pad'><img src="https://mebel-v-kazani.ru/images/cached/Upx-pUX_-0GXH-bzqRbFphJiHVJ4qJq9uyMJn4TUEqPahi2a-SvGmiuRIIt8t8_g9F5mOQLSowNAa6FepJ2mnrSgUpiLeGY_S2VnA_Ec9LfjiAtd1NpfkQn0tx5gMqdM.jpg" alt=""/></li>
            <li className='criterial_item pad'>{product.title}</li>
            <li className='criterial_item pad even'>{product.rating + ' / 5'}</li>
            <li className='criterial_item pad'>{product.price + ' Р'}</li>
            <li className='criterial_item_stats pad even'>{product.color}</li>
            <li className='criterial_item_stats pad'>{product.material}</li>
            <li className='criterial_item_stats even'>{product.size}</li>
            <li className='criterial_item_stats pad'>{product.mechanism}</li>
            <li className='criterial_item_stats even'><a href='#'>{product.seller}</a></li>
          </ul>
          <button type="button" class="btn btn-success"><i class="fas fa-shopping-cart"></i> Купить</button>
          <button type="button" class="btn btn-outline-danger"><i class="far fa-heart"></i></button>
        </div>
      );
    });  

  // ИНИЛИЗАЦИЯ
  return (
    <>
      { productsItem }
    </>
  );
}

export default Product;