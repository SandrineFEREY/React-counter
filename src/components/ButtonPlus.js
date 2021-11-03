const ButtonPlus = ({ counter, setCounter }) => {
  const incrementation = () => {
    console.log("Je suis la fonction incrementation");
    setCounter(counter + 1);
  };

  return (
    <div>
      <button
        className="plus"
        style={{ display: counter === 10 ? "none" : "inherit" }}
        onClick={incrementation}
      >
        +
      </button>
    </div>
  );
};

export default ButtonPlus;
