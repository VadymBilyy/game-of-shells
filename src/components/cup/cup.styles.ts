import { makeStyles, Theme } from '@material-ui/core';

interface CupStyleProps {
	position: number;
	transitionTime: number;
}

export const useCupStyles = makeStyles<Theme, CupStyleProps>({
	button: {
		position: 'absolute',
		width: 100,
		height: 100,
		padding: 10,
		boxSizing: 'border-box',
		left: (props) => props.position,
		transition: (props) => `left ${props.transitionTime}ms`,
		flexShrink: 0,
		background: 'transparent',
		border: 'none',
		'&:hover': {
			cursor: 'pointer',
		},
		zIndex: 2,
	},
	content: {
		width: '100%',
		height: '100%',
		transition: 'all 0.3s',
	},
	open: {
		transform: 'translateY(-40px)',
	},
	ball: {
		position: 'absolute',
		zIndex: -1,
		left: 40,
		bottom: 25,
		width: 20,
		height: 20,
		backgroundColor: 'red',
		borderRadius: '50%',
	},
	icon: {
		width: '100%',
		height: '100%',
	},
});
