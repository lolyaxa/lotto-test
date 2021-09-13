import React from 'react';
import styled from '@emotion/styled';

const Error = styled.div`
  background: #FF4040;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
`;

const GenericErrorPopup = ({ show }) => {
	const text = 'Упс, что-то пошло не так';
	if (show) {
		return (
			<Error>
				{text}
			</Error>
		)
	}
	return null;
}

export default GenericErrorPopup;