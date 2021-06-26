import '../src/styles/globals.scss'
import PropTypes from 'prop-types';

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;