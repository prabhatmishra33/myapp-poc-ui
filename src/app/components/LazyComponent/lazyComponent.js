
import React from 'react';

class LazyComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
    console.log('In am a Lazy Component');
      return (
        <div>
          <h1>I am Lazy</h1>
        </div>
      )
    }
}

export default LazyComponent;