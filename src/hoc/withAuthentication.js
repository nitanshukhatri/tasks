import React from "react";

function withAuthentication<T>(WrappedComponent) {
  return function WithAuthentication(props) {
    const isAuthenticated = true; // replace with actual authentication logic
    return isAuthenticated ? <WrappedComponent {...props} /> : <div>You must be logged in to view this content.</div>;
  };
}
export default withAuthentication;
