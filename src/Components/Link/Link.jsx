// import PropTypes from 'prop-types';

const ComponentName = ({route}) => {
  return (
    <li className="mr-10 hover:bg-yellow-500 px-6"><a href={route.path}>{route.name}</a></li>
  );
};

// Link.propTypes= {
//   route: PropTypes.object

// }

export default ComponentName;