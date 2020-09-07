import React from 'react';

/**
 * Set background if image does not exist
 * @param e react event
 */
const handleImage404Error = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = 'lightgrey';
  e.currentTarget.style.display = 'block';
};

function FallbackImageComponent(props: { imageUrl: string, imageAlt: string }) {
  const { imageUrl, imageAlt } = props;
  return (
    <img
      src={imageUrl}
      alt={imageAlt}
      onError={handleImage404Error}
    />
  );
}

export default FallbackImageComponent;
