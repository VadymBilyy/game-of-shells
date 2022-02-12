export type GameLevel = 'easy' | 'hard';
export type GameStatus = 'Won' | 'Lost';

export interface GameConfig {
	shellsNumber: number;
	shuffleSpeed: number;
	level: GameLevel;
}

export const EASY_LEVEL_CONFIG: GameConfig = {
	shellsNumber: 3,
	shuffleSpeed: 1000,
	level: 'easy',
};
export const HARD_LEVEL_CONFIG: GameConfig = { shellsNumber: 7, shuffleSpeed: 500, level: 'hard' };

export const getGameConfig = (level: GameLevel): GameConfig => {
	switch (level) {
		case 'easy':
			return EASY_LEVEL_CONFIG;
		case 'hard':
			return HARD_LEVEL_CONFIG;
	}
};
