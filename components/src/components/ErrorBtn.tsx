import React from "react";
 const ErrorBtn = () => {
    const handleError = () => {
       alert(`throw new Error('Oops, something went wrong!')`);
    }

    return (
        <div>
        <button onClick={handleError}>Throw Error</button>
        </div>
    )
}
export default ErrorBtn