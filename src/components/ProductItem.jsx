import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

    const {currency} = useContext(ShopContext);
  return (
    <Link className='text-blue-900 cursor-pointer' to={`/product/${id}`}>

        <div className='overflow-hidden rounded-2xl'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="image of a product" onClick={scrollToTop} />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>

    </Link >
  )
}

export default ProductItem