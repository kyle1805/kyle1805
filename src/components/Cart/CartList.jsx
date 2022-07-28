import React from 'react'
import { data, newdata } from '../../data';
import CartItem from './CartItem';

const CartList = (props) => {
  return (
    <div className='youtube-list'>
        {props.children}
        {data.map(item => {
            return <CartItem key={item.id}
                img = {item.img}
                author = {item.author}
                title = {item.title}
                avatar = {item.avatar}
            />
        })}

        
    </div>
  )
}

export default CartList