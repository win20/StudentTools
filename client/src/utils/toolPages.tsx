import PercentageIndex from 'pages/Tools/Percentage/PercentageIndex';
import FractionToPercentageIndex from 'pages/Tools/FractionToPercentage/FractionToPercentageIndex';
import AreaOfACircleIndex from 'pages/Tools/AreaOfACircle/AreaOfACircleIndex';
import DensityIndex from 'pages/Tools/Density/DensityIndex';
import VelocityIndex from 'pages/Tools/Velocity/VelocityIndex';
import { toolsArray, Tool } from './tools';
import { Helpers } from './helpers';

const setToolTitles = (): string[] => {
	const titles: string[] = [];
	toolsArray.forEach((tool: Tool) => {
		titles.push(Helpers.urlCleaner(tool.title));
	});

	return titles;
};

const urlSuffixes: string[] = setToolTitles();

interface AssociativeArray {
	[key: string]: JSX.Element;
}

const toolPages: AssociativeArray = {
	[urlSuffixes[0]]: <PercentageIndex />,
	[urlSuffixes[1]]: <FractionToPercentageIndex />,
	[urlSuffixes[2]]: <AreaOfACircleIndex />,
	[urlSuffixes[3]]: <DensityIndex />,
	[urlSuffixes[4]]: <VelocityIndex />,
};

export default toolPages;
