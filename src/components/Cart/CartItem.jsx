import React from 'react'

const CartItem = (props) => {
  return (
    <div className='youtube-item'>
        <div className="youtube-image">
        <img src={props.img} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "This is example of title"}
          </h3>
          <h4 className="youtube-author">
            {props.author || "This is example of author name"}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default CartItem