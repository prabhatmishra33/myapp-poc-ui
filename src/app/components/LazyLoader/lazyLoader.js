import React from 'react';
/**
 * Asynchronously loads the component for Forecast Page.
 */
var path = require('path');
import Loadable from 'react-loadable';
// import LoadingIndicator from 'components/LoadingIndicator';

export default Loadable({
  loader: () => import('./../LazyComponent/lazyComponent'),
  loading: () => <div> Loading ... </div>
});
