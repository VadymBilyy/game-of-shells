import { Button, Paper, Slide } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { shuffleArray } from '../../utils/array.util';
import { Cup } from '../cup/cup';
import { LevelSelector } from '../level-selector/level-selector';
import { EASY_LEVEL_CONFIG, GameConfig, GameLevel, GameStatus, getGameConfig } from './cups-container.model';
import { useCupContainerStyles } from './cups-container.styles';

export const CupsContainer = () => {
	const [gameStatus, handleGameStatus] = useState<GameStatus | null>(null);
	const [shellsPosition, setShellsPosition] = useState<number[]>([]);
	const [levelConfig, setLevelConfig] = useState<GameConfig>(EASY_LEVEL_CONFIG);
	const [openedShellIndex, setOpenedShellIndex] = useState<number>(-1);

	const classes = useCupContainerStyles({ numberOfShells: levelConfig.shellsNumber });

	const resetGame = () => {
		handleGameStatus(null);
		setOpenedShellIndex(-1);
	};

	const handleLevelSelect = (level: GameLevel) => {
		resetGame();
		const gameConfig = getGameConfig(level);
		setLevelConfig(gameConfig);
	};

	const handleShellClick = (isCorrect: boolean, index: number) => {
		if (!gameStatus) {
			setOpenedShellIndex(index);
			handleGameStatus(isCorrect ? 'Won' : 'Lost');
			!isCorrect &&
				setTimeout(() => {
					setOpenedShellIndex(0);
				}, 500);
		}
	};

	const handleShuffle = () => {
		resetGame();
		for (let i = 0; i < 3; i++) {
			setTimeout(() => {
				const updatedArray = shellsPosition.slice();
				setShellsPosition(shuffleArray(updatedArray));
			}, i * levelConfig.shuffleSpeed);
		}
	};

	useEffect(() => {
		const initialPositions = Array.from(Array(levelConfig.shellsNumber).keys());
		setShellsPosition(initialPositions);
	}, [levelConfig.shellsNumber]);

	const renderCups = (shellsPosition: number[]) =>
		Array.from(Array(levelConfig.shellsNumber).keys()).map((index) => (
			<Cup
				key={index}
				index={index}
				position={shellsPosition[index]}
				withBall={index === 0}
				onClick={handleShellClick}
				transitionTime={levelConfig.shuffleSpeed}
				isOpen={index === openedShellIndex}
			/>
		));

	return (
		<div className={classes.root}>
			<div className={classes.controls}>
				<h1>Game of shells for Onfido</h1>
				<LevelSelector onLevelChange={handleLevelSelect} />
				<Button variant={'contained'} color={'primary'} onClick={handleShuffle}>
					Shuffle
				</Button>
			</div>

			<div className={classes.gameContainer}>
				<div className={classes.cupsContainer}>{renderCups(shellsPosition)}</div>
			</div>
			<Slide direction={'right'} in={!!gameStatus} mountOnEnter unmountOnExit>
				<div className={classes.controls}>
					<h3>You {gameStatus}</h3>
					<Button variant={'contained'} color={'primary'} onClick={handleShuffle}>
						Play again
					</Button>
				</div>
			</Slide>
		</div>
	);
};
