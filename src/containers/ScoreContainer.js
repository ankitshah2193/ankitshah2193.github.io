import { connect } from 'react-redux';
import Score from '../components/scoreentry/Score';
import { recordRunThunk } from '../middleware/helper';

const mapDispatchToProps = (dispatch) => {
    return {
        recordRuns(runs, isExtra, extraType, isOut) {
            dispatch(recordRunThunk(runs, isExtra, extraType, isOut))
        }
    }
}

export default connect(null, mapDispatchToProps)(Score);