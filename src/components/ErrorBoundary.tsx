"use client"
import { Component } from "react";

interface Props {
    children: React.ReactNode;
}
interface State {
    hasError: boolean;
}
export default class ErrorBoundary extends Component<Props, State> {
constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({hasError: true})
}

render (): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return children;
}
}


