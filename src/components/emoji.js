import React from 'react';

export default props => {
	const styles = {
		fontSize: props.size + 'rem'
	};

	return (
		<span style={styles} role="img" aria-label="emoji">
			{props.emoji}
		</span>
	);
};
