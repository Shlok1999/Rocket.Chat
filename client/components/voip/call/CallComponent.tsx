import { Box } from '@rocket.chat/fuselage';
import React, { FC } from 'react';

import CallControls from './CallControls';
import CallerInfo from './CallerInfo';
import Header from './Header';
import { ButtonsList } from './hooks/useButtonsLists';

type CallComponentProps = {
	state?: any;
	data?: any;
	callData?: any;
	test?: any;
	buttons: ButtonsList;
};

const CallComponent: FC<CallComponentProps> = ({ data, callData, buttons }) => {
	const callInfoStates = ['incoming', 'current'];
	const disabled = buttons.internalStates.find((state) => state.id === 'hold-call')?.state;
	console.log(disabled, buttons);

	return (
		<Box is='footer' p='x16' width='auto'>
			<Header state={data.state} buttonList={buttons} calls={data.callsInQueue} />

			{callInfoStates.includes(data.state) && (
				<Box display='flex' opacity={disabled ? '0.4' : '1'}>
					<CallerInfo callerData={callData} data={data} />
					<CallControls state={data.state} disabled={disabled} />
				</Box>
			)}
		</Box>
	);
};

export default CallComponent;
