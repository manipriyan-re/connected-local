import "./spinner.scss";
const Spinner = ({ backgroundColor = "#FFFFFF", spinnerColor = "#FF3D00" }) => {
  return (
    <span
      className="custom-loader"
      style={{
        border: `5px solid ${backgroundColor}`,
        borderBottom: `5px solid ${spinnerColor}`,
      }}
    ></span>
  );
};

export default Spinner;
