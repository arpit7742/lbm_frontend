import PropTypes from "prop-types";

const Loader = ({ size = "16", color = "blue-500", borderWidth = "4" }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={`h-${size} w-${size} animate-spin rounded-full border-${borderWidth} border-solid border-${color} border-t-transparent`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  borderWidth: PropTypes.string,
};

export default Loader;
