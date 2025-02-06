import React, { useState, useEffect } from 'react';

const EasterEggModal = () => {
	const [typedKeys, setTypedKeys] = useState('');
	const [isModalVisible, setIsModalVisible] = useState(false);
	const secretCode = '1337';

	// Event listener for key presses
	useEffect(() => {
		const handleKeydown = (event) => {
			setTypedKeys((prevTypedKeys) => {
				const newTypedKeys = prevTypedKeys + event.key;

				// If the typed keys match the secret code
				if (newTypedKeys.endsWith(secretCode)) {
					setIsModalVisible(true);
					return ''; // Reset the typed keys after showing modal
				}

				// Limit the length of typedKeys to the length of the secretCode
				if (newTypedKeys.length > secretCode.length) {
					return newTypedKeys.slice(1); // Remove the first character if it's too long
				}

				return newTypedKeys;
			});
		};

		window.addEventListener('keydown', handleKeydown);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	}, []);

	// Close the modal
	const handleCloseModal = () => {
		setIsModalVisible(false);
	};

	// Close the modal if the user clicks outside of the modal content
	const handleOutsideClick = (event) => {
		if (event.target === event.currentTarget) {
			setIsModalVisible(false);
		}
	};

	return (
		<>
			{isModalVisible && (
				<div
					id="easteregg-modal"
					className="modal"
					onClick={handleOutsideClick}
					style={{ display: 'flex' }}
				>
					<div className="modal-content">
						<span className="close" id="close-modal" onClick={handleCloseModal}>&times;</span>
						<h2>Welcome to the hidden modal!</h2>
						<p>You've typed the secret code "1337"!</p>
					</div>
				</div>
			)}
		</>
	);
};

export default EasterEggModal;
