import { makeStyles, Theme } from '@material-ui/core';

interface ContainerStyleProps {
	numberOfShells: number;
}

export const useCupContainerStyles = makeStyles<Theme, ContainerStyleProps>({
	controls: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		'& h1, & h3': { textTransform: 'uppercase' },
	},
	gameContainer: {
		height: 150,
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	cupsContainer: {
		height: 100,
		width: (props) => props.numberOfShells * 100,
		position: 'relative',
	},
});
