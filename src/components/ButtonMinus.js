const ButtonMinus = ({ counter, setCounter }) => {
  const decrementation = () => {
    console.log("Je suis la fonction decrementation");
    setCounter(counter - 1);
  };

  return (
    <div>
      <button
        className="minus"
        style={{ display: counter === 0 ? "none" : "inherit" }}
        onClick={decrementation}
      >
        -
      </button>
    </div>
  );
};

export default ButtonMinus;
