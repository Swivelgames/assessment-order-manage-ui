import React from 'react';

import OrderInfo from 'Styled/orders/list-item/info';

const f = n => `${n}`.padStart(2,0);
const formatTime = (m, s) => `${f(m)}:${f(s)}`;

const calcTimeSince = (a, b) => {
	const diff = Math.round((a - b) / 1000);

	const m = Math.floor(diff / 60);
	const s = diff - (m * 60);

	return [m, s];
};

class OrderTimer extends React.Component {
	constructor(props) {
		super(props);

		this.timeout = -1;
	}

	static getTime(status, created, started) {
		let timeSince = [0, 0];
		if (status === 'pending') {
			timeSince = calcTimeSince(
				created, Date.now()
			);
		} else {
			timeSince = calcTimeSince(
				Date.now(), started
			);
		}

		return formatTime(...timeSince);
	}

	static getDerivedStateFromProps(props, state) {
		const { status, created, started } = props;
		const time = OrderTimer.getTime(status, created, started);
		return { ...state, time };
	}

	componentDidMount() {
		this.startTimeout();
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
	}

	startTimeout() {
		this.timeout = setTimeout(
			() => this.updateTimer(), 400
		);
	}

	updateTimer() {
		const { status, created, started } = this.props;
		const time = OrderTimer.getTime(status, created, started);
		this.setState({ time }, () => {
			this.startTimeout();
		});
	}

	render() {
		const { time } = this.state;

		const { id, type } = this.props;

		const orderNo = `${id}`.slice(-2);

		return (
			<OrderInfo type={type} time={time} number={orderNo} />
		);
	}
}

export default OrderTimer;
