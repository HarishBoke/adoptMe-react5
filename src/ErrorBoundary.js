import React from "react";
//https://reactjs.org/docs/error-boundaries.html
import { Link, Redirect } from "@reach/router";
import Details from "./Details";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    redirect: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundart cought an err", error, info);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        redirect: true,
      });
    }, 5000);
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was error with this listing. <Link to="/">Click Here</Link> to
          go back to Home page or wait for five seconds
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
