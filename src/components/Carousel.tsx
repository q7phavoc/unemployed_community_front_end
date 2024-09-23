import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface CarouselProps {
  items: string[];
  autoSlideInterval?: number; // 자동 슬라이드 간격 (밀리초)
}

const Carousel: React.FC<CarouselProps> = ({ items, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextItem = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevItem = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextItem, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlideInterval]);

  // 애니메이션 효과 후 transition 상태 초기화
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // 애니메이션 지속 시간과 일치시킴
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="flex items-center justify-center rounded-lg p-5">
      <button className="carousel-button" onClick={prevItem}>
        <FontAwesomeIcon icon={faChevronLeft} className="text-green text-xl mr-4" />
      </button>
      <div className={`relative transition-transform duration-500 ease-in-out`}>
        <img src={items[currentIndex]} alt={`Slide ${currentIndex}`} className="max-w-full max-h-48 rounded-lg transform transition-transform duration-500 hover:scale-105" />
      </div>
      <button className="carousel-button" onClick={nextItem}>
        <FontAwesomeIcon icon={faChevronRight} className="text-green text-xl ml-4" />
      </button>
    </div>
  );
};

export default Carousel;
