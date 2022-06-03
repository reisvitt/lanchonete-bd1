import PropTypes from 'prop-types';
import { spinalCase } from './case_styles';

const breakpoints = ['576px', '768px', '992px', '1200px', '1400px']

const allowNumber = ['z-index', 'opacity'];

const propsAllowed = [
  'd',
  'w', 'h', 'maxW', 'minW', 'maxH', 'minH',
  'px', 'py', 'pl', 'pr', 'pt', 'pb', 'p',
  'mx', 'my', 'ml', 'mr', 'mt', 'mb', 'm',
  'display', 'flexWrap', 'flexDir', 'flexBasics', 'flexGrow',
  'alignItems', 'alignContent',
  'justifyItems', 'justifyContent',
  'textAlign', 'pos',
  'bg', 'bgc',
  'opacity', 'zIndex',
  'fw', 'fs',
];

const renderValue = (value, prop) => (typeof value === 'number' && !allowNumber.includes(prop) ? `${value}px` : value);

const renderResponsive = (index, prop, value) => {
  if (index) {
    return `
      @media (min-width: ${breakpoints[index + 1]}) {
        ${prop}: ${renderValue(value, prop)};
      }
    `;
  }
  return `${prop}: ${renderValue(value, prop)};`;
};

const removeAbbr = (prop) => {
  switch (prop) {
    case 'd': return 'display';
    case 'w': return 'width';
    case 'h': return 'height';
    case 'px': return ['padding-left', 'padding-right'];
    case 'py': return ['padding-top', 'padding-bottom'];
    case 'pl': return 'padding-left';
    case 'pr': return 'padding-right';
    case 'pt': return 'padding-top';
    case 'pb': return 'padding-bottom';
    case 'p': return 'padding';
    case 'mx': return ['margin-left', 'margin-right'];
    case 'my': return ['margin-top', 'margin-bottom'];
    case 'ml': return 'margin-left';
    case 'mr': return 'margin-right';
    case 'mt': return 'margin-top';
    case 'mb': return 'margin-bottom';
    case 'm': return 'margin';
    case 'pos': return 'position';
    case 'bg': return 'background';
    case 'bgc': return 'background-color';
    case 'fw': return 'font-weight';
    case 'fs': return 'font-size';
    case 'flexDir': return 'flex-direction';
    case 'maxW': return 'max-width';
    case 'minW': return 'min-width';
    case 'maxH': return 'max-height';
    case 'minH': return 'min-height';
    default: return prop;
  }
};

const getProps = (key, value) => {
  if (Array.isArray(value)) {
    return value.map((v, i) => renderResponsive(i, key, v)).join('');
  }

  return renderResponsive(0, key, value);
};

export const applyProps = (props) => Object.keys(props)
  .filter((key) => propsAllowed.includes(key)).map((key) => {
    const attr = removeAbbr(key);

    if (typeof attr === 'object') {
      return attr.map((at) => getProps(spinalCase(at), props[key])).join('\n');
    }

    const prop = getProps(spinalCase(attr), props[key]);
    return typeof prop === 'object' ? prop.join('\n') : prop;
  });

const propStringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);

const propDefault = PropTypes.oneOfType([
  propStringOrNumber,
  PropTypes.arrayOf(propStringOrNumber),
]);

export const propTypesStyledHTML = {
  w: propDefault,
  maxW: propDefault,
  minW: propDefault,
  h: propDefault,
  maxH: propDefault,
  minH: propDefault,
  px: propDefault,
  py: propDefault,
  pl: propDefault,
  pr: propDefault,
  pt: propDefault,
  pb: propDefault,
  p: propDefault,
  mx: propDefault,
  my: propDefault,
  ml: propDefault,
  mr: propDefault,
  mt: propDefault,
  mb: propDefault,
  m: propDefault,
  bg: propDefault,
  bgc: propDefault,
  d: propDefault,
  fw: propDefault,
  fs: propDefault,
};

export const generateColor = (opacidade = 1) => {
  const r = parseInt(Math.random() * 255, 10);

  const g = parseInt(Math.random() * 255, 10);

  const b = parseInt(Math.random() * 255, 10);

  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
};
