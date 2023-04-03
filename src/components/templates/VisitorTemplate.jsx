import PropTypes from 'prop-types';
import MainNavigation from '../organisms/MainNavigation';

function VisitorTemplate({ children }) {
  return (
    <>
      <MainNavigation />
      <main className="mx-auto w-full absolute top-0">{children}</main>
    </>
  );
}

VisitorTemplate.propTypes = {
  children: PropTypes.node,
};

export default VisitorTemplate;
