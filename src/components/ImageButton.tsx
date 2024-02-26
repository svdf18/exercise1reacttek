type ImageButton = {
  image: string,
  onClick: () => void;
};

const ImageButton: React.FC<ImageButton> = ({ image, onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={image} alt="ImageButton" />
    </button>
  );
};

export default ImageButton;