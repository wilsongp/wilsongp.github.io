import PropTypes from "prop-types";

export const mouseContext = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number
});

export const viewportContext = PropTypes.shape({
  width: PropTypes.number,
  height: PropTypes.number
});

export const scrollContext = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number
});
