"use client";

import React from 'react';
import { gsap } from 'gsap';

import './FlowingMenu.css';

function FlowingMenu({ items = [] }) {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ text, content }) {
  const itemRef = React.useRef(null);
  const popupRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = ev => {
    ev.preventDefault();
    ev.stopPropagation();

    console.log('Dropdown clicked!', text, 'Current state:', isOpen);

    if (!popupRef.current) {
      console.log('No popup ref found');
      return;
    }

    const newState = !isOpen;
    setIsOpen(newState);

    if (newState) {
      // Opening
      console.log('Opening dropdown for:', text);
      popupRef.current.style.display = 'block';
      popupRef.current.style.pointerEvents = 'auto';
      popupRef.current.style.opacity = '1';
      popupRef.current.style.maxHeight = '500px';
      popupRef.current.style.transform = 'translateY(0)';
    } else {
      // Closing
      console.log('Closing dropdown for:', text);
      popupRef.current.style.opacity = '0';
      popupRef.current.style.maxHeight = '0';
      popupRef.current.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        if (popupRef.current) {
          popupRef.current.style.display = 'none';
          popupRef.current.style.pointerEvents = 'none';
        }
      }, 300);
    }
  };

  // Initialize popup and create flowing text effect
  React.useEffect(() => {
    if (itemRef.current) {
      const marqueeText = itemRef.current.querySelector('.marquee__text');
      if (marqueeText) {
        gsap.to(marqueeText, {
          x: '-100%',
          duration: 12,
          ease: 'none',
          repeat: -1,
          delay: Math.random() * 2
        });
      }
    }

    // Initialize popup state
    if (popupRef.current) {
      popupRef.current.style.display = 'none';
      popupRef.current.style.opacity = '0';
      popupRef.current.style.maxHeight = '0';
      popupRef.current.style.pointerEvents = 'none';
      popupRef.current.style.transform = 'translateY(-10px)';
    }
  }, []);

  return (
    <div className="menu__item" ref={itemRef}>
      <button className="menu__item-link" onClick={handleClick}>
        <div className="marquee">
          <div className="marquee__inner">
            <span className="marquee__text">{text} • {text} • {text} • {text} • </span>
          </div>
        </div>
        <div className="menu__title">{text}</div>
        <span className={`menu__chevron ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {/* Dropdown that appears below */}
      <div className="menu__popup" ref={popupRef}>
        <div className="menu__popup-content">
          <div className="menu__popup-text">
            <h4>{text}</h4>
            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;