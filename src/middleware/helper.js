<<<<<<< HEAD
import { overComplete, updateTeamScore, updateNoOfBalls, updateOverDetails, changeStriker, recordWicket } from "../actions/actions";
import Popup from "../components/Popup";
=======
import { overComplete, updateTeamScore, updateNoOfBalls, updateOverDetails, changeStriker, inningsOver, declareWinner } from "../actions/actions";
>>>>>>> develop

function getValidNoOfBalls(over) {
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
            currentTeam = {...updatedState.team[updatedState.game.currentBattingTeam]},
            currentBattingTeamName = updatedState.game.currentBattingTeam,
            previousBattingTeamName = updatedState.game.previousBattingTeam,
            batsman = updatedState.game.currentBatsmen.filter(batsman => batsman.isStriker)[0].name,
            bowler = updatedState.game.currentBowler,
            extraRuns = isExtra ? 1 : 0,
            run = runs ? parseInt(runs, 10) : 0;


        let currentOver = currentTeam.overs.length - 1,
            noOfValidBalls =  currentTeam.overs[currentOver].length > 0 ? getValidNoOfBalls(currentTeam.overs[currentOver]) : 0;

        const totalRuns = run + extraRuns;

        dispatch(updateTeamScore(currentBattingTeamName, totalRuns));

        if (isValidDelivery(isExtra, extraType)) {
            dispatch(updateNoOfBalls(currentBattingTeamName));
            noOfValidBalls += 1;
        }

        const deliveryData = {
            batsman: batsman,
            bowler: bowler,
            isExtra: isExtra,
            isOut: isOut,
            extraRuns: extraRuns,
            runs: run,
            extraType: extraType
        };

        dispatch(updateOverDetails(currentBattingTeamName, deliveryData, currentOver));

        if(previousBattingTeamName) {
            const previousBattingTeam = updatedState.team[previousBattingTeamName];
            const teamHasWon = previousBattingTeam.totalScore < (currentTeam.totalScore + totalRuns);
            if(teamHasWon) {
                dispatch(declareWinner(currentBattingTeamName));
                return;
            }
        } 

        if(runs % 2 > 0) {
            dispatch(changeStriker());
        }

        if (noOfValidBalls === 6) {
            if(currentTeam.overs.length === updatedState.game.noOfOvers) {
                dispatch(inningsOver());
            } else {
                dispatch(overComplete(currentBattingTeamName));
                dispatch(changeStriker());
            }
        }

        if(isOut) {
            dispatch(recordWicket(currentBattingTeamName, batsman));
            // onOpenModal
        }
    }
}
