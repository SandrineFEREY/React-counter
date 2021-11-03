const ButtonReset = ({ counter, setCounter }) => {
  const reinitialisation = () => {
    console.log("Je réinialise");
    setCounter((counter = 0));
  };

  return (
    <div>
      <button className="reset" onClick={reinitialisation}>
        Reset
      </button>
    </div>
  );
};

export default ButtonReset;
