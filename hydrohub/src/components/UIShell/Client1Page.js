import React, { Component } from 'react';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import ProgressBar from '@bit/react-bootstrap.react-bootstrap.progress-bar';

const Progress = () => {
	return(
		<div style={{ width: 400 }}>
		<ProgressBar  now={45} />
	</div>
	)
}

export default Progress;