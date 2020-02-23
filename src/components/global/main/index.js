import { connect } from 'react-redux';

import Main from './main';

const mapStateToProps = ({ modal: { open }}) => ({
	modalOpen: open ? true : false
});

const ConnectedMain = connect(mapStateToProps)(Main);

export default ConnectedMain;
