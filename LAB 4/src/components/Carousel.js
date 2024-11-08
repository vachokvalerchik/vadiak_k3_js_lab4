import React, { useState } from 'react';

const Carousel = ({ onAddToCart }) => {
    const items = [
        {
          name: 'Soccer ball',
          image: '/photo/ball1.png',
          description: 'a ball used in the game of soccer. Its standards are determined by FIFA. Soccer ball. Image. Weight, 430 ± 20 grams.',
          price: '15$',
        },
        {
          name: 'Golden ball',
          image: '/photo/ball2.png',
          description: 'award to the best football player in Europe, since 2007 - to the best football player in the world.',
          price: '30$',
        },
        {
          name: 'Basketball ball',
          image: '/photo/ball3.png',
          description: 'it is an air-filled round ball for playing basketball.',
          price: '14$',
        },
        {
          name: 'Volleyball ball',
          image: '/photo/ball4.jpg',
          description: 'it is a part of volleyball equipment together with shoes, volleyball knee pads.',
          price: '13$',
        },
        {
          name: 'Tennis ball',
          image: '/photo/ball5.png',
          description: 'a horn-shaped rubber ball covered with white or yellow fluffy fabric, weighing 56.7-58.5 g, 6.35-6.67 cm in diameter.',
          price: '6$',
        },
        {
          name: 'Pinball ball',
          image: '/photo/ball6.png',
          description: 'an object of spherical or other convex shape, mostly used in sports games.',
          price: '2$',
        },
        {
          name: 'Golf ball',
          image: '/photo/ball7.jpg',
          description: 'specially created for this game and has specific physical and aerodynamic characteristics.',
          price: '7$',
        },
      ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <h2>Асортимент</h2>
      <div className="carousel-item">
        <img src={items[currentIndex].image} alt={items[currentIndex].name} style={{ width: '20%', borderRadius: '100px' }} />
        <h3>{items[currentIndex].name}</h3>
        <p>{items[currentIndex].description}</p>
        <p>{items[currentIndex].price}</p>
        <button className="learn-more" onClick={() => onAddToCart(items[currentIndex])}>Замовити</button>
      </div>
      <div className="carousel-controls">
        <button onClick={prevItem} className="carousel-button">←</button>
        <button onClick={nextItem} className="carousel-button">→</button>
      </div>
    </div>
  );
};

export default Carousel;
