import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { GameLevel } from '../cups-container/cups-container.model';
import { useLevelSelectorStyles } from './level-selector.styles';

interface LevelSelectorProps {
	onLevelChange(level: GameLevel): void;
}

export const CUP_SIZE = 100;

export const LevelSelector: FC<LevelSelectorProps> = ({ onLevelChange }) => {
	const classes = useLevelSelectorStyles();
	const [level, setLeLevel] = useState<GameLevel>('easy');

	const handleLevelChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
		const level = e.target.value as GameLevel;
		setLeLevel(level);
		onLevelChange(level);
	};

	return (
		<FormControl className={classes.root}>
			<InputLabel>Game Level</InputLabel>
			<Select value={level} onChange={handleLevelChange}>
				<MenuItem value={'easy'}>Easy</MenuItem>
				<MenuItem value={'hard'}>Hard</MenuItem>
			</Select>
		</FormControl>
	);
};
