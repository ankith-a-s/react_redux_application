import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ size, title, imageUrl }) => {
  return (
    <div className={`${size} menu-item`} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
