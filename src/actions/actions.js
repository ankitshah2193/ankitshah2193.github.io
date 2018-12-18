import actionCreator from "./actionCreator";

export const recordRuns = actionCreator('RECORD_RUNS', 'teamName', 'batsman', 'bowler', 'runs', 'isExtra', 'extraType', 'isOut');
