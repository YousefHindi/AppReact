import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MyCard = ({ image_url, title, category }) => {
  const [showGif, setShowGif] = useState(false);

  const showGifTemporarily = () => {
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
    }, 2000);
  };

  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Button variant="primary" onClick={showGifTemporarily}>Eat</Button>
        
        {showGif && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="https://64.media.tumblr.com/5844c4cdcbb48acfb45d7521db145ef8/tumblr_p0kb2r6WS91rgpubao4_540.gif" alt="Your GIF" style={{ width: '50%', height: 'auto' }} />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default MyCard;
