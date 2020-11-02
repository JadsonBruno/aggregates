/**
 * TYPES
 */
import {Map} from 'immutable';
import {ISoftphoneState} from 'src/aggregates/softphones/state.d';


/**
 * CODE
 */

// softphones initial state
const initialState: ISoftphoneState = {
    byId: Map(),
    hasUpdateError: false,
    hasLoadError: false,
    isLoading: false,
    isUpdating: false,
    loaded: false
};


/**
 * EXPORTS
 */
export default initialState;
