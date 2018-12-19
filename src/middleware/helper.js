import { updateTeamDetails } from "../actions/actions";

function getNoOfBalls(over) {
    let count = 0;
    over.forEach(ball => {
        if (isValidDelivery(ball.isExtra, ball.extraType)) {
            count++;
        }
    })

    return count;
}

function isValidDelivery(isExtra, extraType) {
    return !isExtra || (isExtra && (extraType === 'Lb' || extraType === 'B'));
}

export function recordRunThunk(runs, isExtra, extraType, isOut) {
    return function (dispatch, getState) {
        const updatedState = getState(), 
            currentTeam = updatedState.team[updatedState.game.currentBattingTeam],
            batsman = updatedState.game.currentBatsmen.filter(batsman => batsman.isStriker)[0].name,
            bowler = updatedState.game.currentBowler,
            extraRuns = isExtra ? 1 : 0,
            run = runs ? parseInt(runs, 10) : 0;

        let currentOver = currentTeam.overs.length > 0 ? currentTeam.overs.length - 1 : 0,
            noOfValidBalls = currentTeam.overs[currentOver] && currentTeam.overs[currentOver].length > 0 ? getNoOfBalls(currentTeam.overs[currentOver]) : 0;

        currentTeam.totalScore += run + extraRuns;

        if (isValidDelivery(isExtra, extraType)) {
            currentTeam.noOfBalls += 1;
            noOfValidBalls += 1;
        }

        if (noOfValidBalls === 6) {
            currentTeam.overs.push([]);
        }

        if (!currentTeam.overs[currentOver]) {
            currentTeam.overs[currentOver] = [];
        }

        if (isOut) {
            currentTeam.wickets += 1;
            currentTeam.players[batsman].isAvaialbleForBatting = false;
        }

        currentTeam.overs[currentOver].push({
            batsman: batsman,
            bowler: bowler,
            isExtra: isExtra,
            isOut: isOut,
            extraRuns: extraRuns,
            runs: run,
            extraType: extraType
        });

        dispatch(updateTeamDetails(updatedState.game.currentBattingTeam, currentTeam));
    }
}
