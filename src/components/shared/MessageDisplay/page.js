// components/MessageDisplay.jsx
import React from 'react';

const MessageDisplay = ({ messages }) => {
	return (
		<div className="flex items-center justify-center min-h-[50vh]">
			<div className="text-center">
				{messages.map((message, index) => (
					<p key={`${message}_id`}>{message}</p>
				))}
			</div>
		</div>
	);
};

export default MessageDisplay;
