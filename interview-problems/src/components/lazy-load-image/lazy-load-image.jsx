import React, { useState } from 'react';

export default function ImageGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/seed/${i + 1}/400/300`,
  }));

  return (
    <div style={{ padding: 20 }}>
      <h2>Image Gallery</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '10px',
        }}
      >
        {images.map((img) => (
          <img
            key={img.id}
            src={img.url}
            alt={`Random ${img.id}`}
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedImage(img.url)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0, 
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="enlarged"
            style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '8px' }}
          />
        </div>
      )}
    </div>
  );
}
