import classNames from 'classnames';
import React, { FC } from 'react';
import { DedalIcon } from '../../icons/dedal.icon';
import { useCupStyles } from './cup.styles';

interface CupProps {
	position: number;
	withBall: boolean;
	isOpen: boolean;
	index: number;
	transitionTime: number;
	onClick(isCorrect: boolean, index: number): void;
}

export const CUP_SIZE = 100;

export const Cup: FC<CupProps> = ({ index, isOpen, position, withBall, transitionTime, onClick }) => {
	const leftPosition = position * CUP_SIZE;

	const classes = useCupStyles({ position: leftPosition, transitionTime });
	const contentClassName = classNames(classes.content, isOpen && classes.open);
	return (
		<button className={classes.button} onClick={() => onClick(withBall, index)}>
			<div className={contentClassName}>
				<DedalIcon className={classes.icon} />
			</div>
			{withBall && <span className={classes.ball} />}
		</button>
	);
};
