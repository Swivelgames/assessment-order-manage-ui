import React from 'react';

import OrderInfo from 'Styled/orders/list-item/info';

const f = n => `${n}`.padStart(2,0);

const formatTime = (m, s) => `${
	m === 0 && s < 0 ? '-0' : f(m)
}:${
	f(Math.abs(s))
}`;

const calcTimeSince = (a, b) => {
	const diff = Math.round((a - b) / 1000);

	let m = Math.floor(diff / 60);
	let s = diff - (m * 60);

	if (m < 0) {
		m += 1;
		s -= 59;
	}

	return [m, s];
};

class OrderTimer extends React.Component {
	constructor(props) {
		super(props);

		this.state = { time: '00:00' };

		this.timeout = -1;
	}

	static getTime({ status, created, started, updated, autoStart }) {
		let timeSince = [0, 0];
		if (status === 'pending') {
			timeSince = calcTimeSince(
				Date.now(), created + autoStart
			);
		} else if (status === 'fulfilled') {
			timeSince = calcTimeSince(
				updated, started
			);
		} else {
			timeSince = calcTimeSince(
				Date.now(), started || Date.now()
			);
		}

		return formatTime(...timeSince);
	}

	static getDerivedStateFromProps(props, state) {
		const time = OrderTimer.getTime(props);
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
		const time = OrderTimer.getTime(this.props);
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
