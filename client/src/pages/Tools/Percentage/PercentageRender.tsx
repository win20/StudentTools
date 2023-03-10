import CalculateButton from '../../../shared/CalculateButton';
import { useEffect, useState } from 'react';
import { Helpers } from '../../../utils/helpers';

const RenderBigScreen = () => {
	return (
		<div id="large-screen-percentage" className="hidden md:flex">
			<div className="mt-5 flex flex-col">
				<div className="mb-5">
					<input
						id="xInput1"
						type="text"
						className="calculator-input"
						placeholder="50"
					/>
					is what percent of
					<input
						id="yInput1"
						type="text"
						className="calculator-input ml-2"
						placeholder="100"
					/>
				</div>
				<div className="mb-5">
					What is{' '}
					<input
						id="xInput2"
						type="text"
						className="calculator-input"
						placeholder="20"
					/>
					% of{' '}
					<input
						id="yInput2"
						type="text"
						className="calculator-input"
						placeholder="40"
					/>
				</div>
				<div>
					Percentage increase/decrease from
					<input
						id="xInput3"
						type="text"
						className="calculator-input ml-2"
						placeholder="500"
					/>
					to
					<input
						id="yInput3"
						type="text"
						className="calculator-input ml-2"
						placeholder="200"
					/>
				</div>
			</div>

			<div className="mt-5 flex flex-col">
				<div className="mb-5">
					<CalculateButton
						id="output1"
						inputs={['xInput1', 'yInput1']}
						functionName="Percentage_XIsWhatPercentOfY"
					/>
				</div>
				<div className="mb-5">
					<CalculateButton
						id="output2"
						inputs={['xInput2', 'yInput2']}
						functionName="Percentage_WhatIsXPercentOfY"
					/>
				</div>
				<div>
					<CalculateButton
						id="output3"
						inputs={['xInput3', 'yInput3']}
						functionName="Percentage_IncreaseOrDecrease"
					/>
				</div>
			</div>
		</div>
	);
};

const RenderSmallScreen = () => {
	return (
		<div id="small-screen-percentage" className="flex flex-col md:hidden">
			<div className="my-5">
				<input id="xInput1" type="text" className="calculator-input" />
				is what percent of
				<input id="yInput1" type="text" className="calculator-input ml-2" />
				<div className="mt-2">
					<CalculateButton
						id="output1"
						inputs={['xInput1', 'yInput1']}
						functionName="Percentage_XIsWhatPercentOfY"
					/>
				</div>
			</div>
			<div className="my-5">
				What is <input id="xInput2" type="text" className="calculator-input" />%
				of <input id="yInput2" type="text" className="calculator-input" />
				<div className="mt-2">
					<CalculateButton
						id="output2"
						inputs={['xInput2', 'yInput2']}
						functionName="Percentage_WhatIsXPercentOfY"
					/>
				</div>
			</div>

			<div className="my-5">
				Percentage increase/decrease from
				<input id="xInput3" type="text" className="calculator-input ml-2" />
				to
				<input id="yInput3" type="text" className="calculator-input ml-2" />
				<div className="mt-2">
					<CalculateButton
						id="output3"
						inputs={['xInput3', 'yInput3']}
						functionName="Percentage_IncreaseOrDecrease"
					/>
				</div>
			</div>
		</div>
	);
};

const PercentageRender = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		Helpers.windowResizeListener(setWindowWidth);
	});

	return <>{windowWidth > 768 ? <RenderBigScreen /> : <RenderSmallScreen />}</>;
};

export default PercentageRender;
