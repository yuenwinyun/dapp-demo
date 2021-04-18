import React from "react";

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends React.PureComponent<{}, State> {
    static displayName = "ErrorBoundary";

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    constructor(props: {}) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error({ error, errorInfo });
    }

    render() {
        const { children } = this.props;
        return this.state.hasError ? "Oops, something bad happened" : children;
    }
}
