import React from 'react';

const noteStyle = {
	width: '300px',
	marginBottom: '10px',
	border: '1px solid #ddd',
	fontSize: '20px',
	lineHeight: '30px',
	padding: '0 5px',
	minHeight: '10px'
};
const Note = ({ text }) => (
	<div style={noteStyle}>{ text }</div>
);
Note.propTypes = {
	text: React.PropTypes.string.isRequired
};
Note.propTypes = {
	text: React.PropTypes.string.isRequired
};
const Noteinfo = ({ dispatch }) => {
	let input;
	return (
		<div style={noteStyle.root}>
			<textarea style={noteStyle.area} ref={(node) => { input = node; }} />
			<input
				style={noteStyle.button} type="button" value={'보기'}
				onClick={() => { dispatch(showNote(input.value)); input.value = ''; }}
			/>
		</div>
	);
};
Noteinfo.propTypes = {
	dispatch: React.PropTypes.function
};
export default Note;
