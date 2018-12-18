import { combineReducers } from 'redux';
import game from './game';
import team from './team';

const rootReducer = combineReducers({
    game,
    team
});

export default rootReducer;