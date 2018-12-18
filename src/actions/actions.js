import actionCreator from "./actionCreator";

export const nextBall = actionCreator('NEXT_BALL', 'teamName', 'batsman', 'bowler', 'runs', 'isExtra', 'extraType', 'extraRuns', 'isOut');

export const changeStriker = actionCreator('CHANGE_STRIKER');
