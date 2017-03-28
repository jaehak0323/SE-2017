import React from 'react';
import { connect } from 'react-redux';
import addNote from '../actions';
import ReactDOM from 'react-dom';

const textStyle = {
	root: {
		textAlign: 'right'
	},
	area: {
		width: '100%',
		height: '400px',
		fontSize: '20px'
	},
	button: {
		width: '100px',
		height: '50px',
		display: 'inline-block',
		marginTop: '30px',
		background: 'rgb(111, 158, 255)',
		fontSize: '20px'
	}
};

const TextArea = ({ dispatch }) => {
	let input;
	return (
		<div style={textStyle.root}>
			<textarea style={textStyle.area} ref={(node) => { input = node; }} />
			<input
				style={textStyle.button} type="button" value={'저장'}
				onClick={() => { dispatch(addNote(input.value)); input.value = ''; }}
			/>
		</div>
	);
};
TextArea.propTypes = {
	dispatch: React.PropTypes.function
};

export default connect()(TextArea);
