import actionCreator from "./actionCreator";

export const overComplete = actionCreator('OVER_COMPLETE', 'teamName');

export const updateTeamScore = actionCreator('UPDATE_TEAM_SCORE', 'teamName', 'totalRuns');

export const updateNoOfBalls = actionCreator('UPDATE_NO_OF_BALLS', 'teamName');

export const updateOverDetails = actionCreator('UPDATE_OVER_DETAILS', 'teamName', 'deliveryData', 'currentOver');

export const changeStriker = actionCreator('CHANGE_STRIKER');