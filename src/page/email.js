
class EmailInput extends React.Component {
    state = {
        email: this.props.email
    };

    render() {
        return <input onChange={this.handleChange} value={this.state.email} />;
    }

    handleChange = event => {
        this.setState({ email: event.target.value });
    };

    // This lifecycle will be re-run any time the component is rendered,
    // Even if props.email has not changed.
    // For this reason, it should not update state in the way shown below!
    componentWillReceiveProps(nextProps) {
        // This will erase any local state updates!
        // Do not do this!
        this.setState({ email: nextProps.email });
    }
}

// This component uses a timer to simulate arbitrary re-renders.
// In a real application, this could happen for a variety of reasons:
// Event handlers that call setState, Flux updates, network responses, etc.
export  default class Timer extends  React.Component {
    state = {
        count: 0
    };

    componentDidMount() {
        this.interval = setInterval(
            () =>
                this.setState(prevState => ({
                    count: prevState.count + 1
                })),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <React.Fragment>
                <h1>This demo illustrates a derived state anti-pattern</h1>
                <blockquote>Type in the box below:</blockquote>
                <EmailInput email="example@google.com" />
                <p>
                    This component will re-render every second. Each time it renders, the
                    text you type will be reset. This illustrates a derived state
                    anti-pattern.
                </p>
                <p>
                    Read the inline comments in <code>index.js</code> to learn why.
                </p>
            </React.Fragment>
        );
    }
}