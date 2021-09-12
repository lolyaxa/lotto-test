import React from 'react';
import styled from '@emotion/styled';

const Notification = styled.div`
  background: ${(props) => props.isWinner ? '#A1FA89' : '#FDA6A2'};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
`;

const NotificationPopup = (props) => {
  const { show, isWinner } = props;
	const text = isWinner ? 'Поздравляем, вы выиграли!' : 'К сожалению, вы проиграли :( в другой раз точно повезёт!';
	if (show) {
		return (
			<Notification isWinner={isWinner}>
				{text}
			</Notification>
		)
	}
	return <div />;
}

export default NotificationPopup;