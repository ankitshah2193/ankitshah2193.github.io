import { overComplete, updateTeamScore, updateNoOfBalls, 
    updateOverDetails, changeStriker, recordWicket, inningsOver, declareWinner, declareTie, changeBowler } from "../actions/actions";

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
            currentBowlingTeamName = updatedState.game.currentBowlingTeam,
            previousBattingTeamName = updatedState.game.previousBattingTeam,
            batsman = updatedState.game.currentBatsmen.filter(batsman => batsman.isStriker)[0].name,
            bowler = updatedState.game.currentBowler,
            extraRuns = isExtra && (extraType === 'N' || extraType === 'W') ? 1 : 0,
            run = runs ? parseInt(runs, 10) : 0,
            totalWickets = updatedState.game.noOfWickets;

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
                if(previousBattingTeamName) {
                    checkForWinner(updatedState, currentBattingTeamName, previousBattingTeamName, dispatch);
                    return;
                } else {
                    dispatch(inningsOver());
                }
            } else {
                dispatch(overComplete(currentBattingTeamName));
                dispatch(changeStriker());
                dispatch(changeBowler(currentBowlingTeamName, bowler));
            }
        }

        if(isOut) {
            if(currentTeam.wickets + 1 === totalWickets) {
                if(previousBattingTeamName) {
                    checkForWinner(updatedState, currentBattingTeamName, previousBattingTeamName, dispatch);
                    return;
                } else {
                    dispatch(inningsOver())   
                }
            } else {
                dispatch(recordWicket(currentBattingTeamName, batsman));
            }
        }
    }

    function checkForWinner(updatedState, currentBattingTeamName, previousBattingTeamName, dispatch) {
        if (updatedState.team[currentBattingTeamName].totalScore === updatedState.team[previousBattingTeamName].totalScore) {
            dispatch(declareTie());
        }
        else {
            let winner = updatedState.team[currentBattingTeamName].totalScore > updatedState.team[previousBattingTeamName].totalScore
                ? currentBattingTeamName : previousBattingTeamName;
            dispatch(declareWinner(winner));
        }
    }
}
