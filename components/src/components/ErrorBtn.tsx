import React from "react";
export default class ErrorBtn extends React.Component {
    handleError = () => {
       alert(`throw new Error('Oops, something went wrong!')`);
    }
render () {
    return (
        <>
        <button onClick={this.handleError}>Throw Error</button>
        </>
    )
}
}