import React from 'react';
import TextArea from './TextArea';

const createStyle = {
	float: 'right',
	width: '400px',
	height: '500px'
};
const NoteCreationBox = () => (
	<div style={createStyle}>
		<h1>'Text Area'</h1>
		<TextArea />
	</div>
);

export default NoteCreationBox;
