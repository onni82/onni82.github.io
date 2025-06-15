import React, { useState, useEffect, useRef } from "react";

const EasterEggModal: React.FC = () => {
	const typedKeysRef = useRef("");
	const [isModalVisible, setIsModalVisible] = useState(false);
	const secretCode = "1337";

	useEffect(() => {
		const handleKeydown = (event: KeyboardEvent) => {
			typedKeysRef.current += event.key;

			if (typedKeysRef.current.endsWith(secretCode)) {
				setIsModalVisible(true);
				typedKeysRef.current = "";
			} else if (typedKeysRef.current.length > secretCode.length) {
				typedKeysRef.current = typedKeysRef.current.slice(1);
			}
		};

		window.addEventListener("keydown", handleKeydown);
		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, []);

	const handleCloseModal = () => setIsModalVisible(false);

	const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
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
					style={{ display: "flex" }}
				>
					<div className="modal-content">
						<span className="close" id="close-modal" onClick={handleCloseModal}>
							&times;
						</span>
						<h2>Welcome to the hidden modal!</h2>
						<p>You've typed the secret code "1337"!</p>
					</div>
				</div>
			)}
		</>
	);
};

export default EasterEggModal;
