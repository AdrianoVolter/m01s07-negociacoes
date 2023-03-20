import PropTypes from "prop-types";

export const Header = (props) => {
  
  return (
    <h1 className="text-center py-5 bg-primary text-light">{props.titulo}</h1>
  );
};

// Header.propTypes = {
//   titulo: PropTypes.string.isRequired,
// };
