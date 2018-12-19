import reducer from './team';

describe('Team Reducer', () => {
    it('should update data for given team', () => {
        const action = {
            type:'UPDATE_TEAM_DETAILS',
            teamName: 'Team1',
            teamData: {
                totalScore: 2,
                noOfBalls : 1,
                wickets: 0,
                players: {
                    Player1: {
                        isAvaialbleForBatting : true,
                        isAvaialbleForBowling : true
                    },
                    Player2: {
                        isAvaialbleForBatting : true,
                        isAvaialbleForBowling : true
                    }
                },
                overs: [
                    [
                        {
                            runs: 2,
                            batsman: 'Player1',
                            bowler: 'Player3',
                            isExtra: false,
                            isOut: false
                        }
                    ]
                ]
            }
        };

        const updatedState = reducer(undefined,action);
        expect(updatedState.Team1.totalScore).toEqual(2);
        expect(updatedState.Team1.wickets).toEqual(0);
        expect(updatedState.Team1.noOfBalls).toEqual(1);
    });
});