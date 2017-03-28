import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import NoteListBox from './components/NoteListBox';
import NoteCreationBox from './components/NoteCreationBox';
import NoteStore from './store';

const appStyle = {
	width: '800px',
	height: '600px',
	margin: '0 auto',
	overflow: 'hidden',
	border: '3px solid #666',
	padding: '0 20px',
	fontSize: '10px',
};
function NoteApp() {
	return (
		<Provider store={NoteStore}>
			<div style={appStyle}>
				<h1> 간편메모장 </h1>
				<NoteListBox />
				<NoteCreationBox />
			</div>
		</Provider>
	);
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<NoteApp />, app);
