
import React from 'react';

class HelloWorld extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
    console.log('In hellow world renderer');
      return (
        <div>
          <h1>Hello World</h1>
        </div>
      )
    }
}

export default HelloWorld;
