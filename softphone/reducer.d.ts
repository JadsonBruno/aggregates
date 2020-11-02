/**
 * IMPORTS
 */
import {Reducer} from 'redux';
import {ISoftphoneState} from 'src/aggregates/softphones/state.d';
import * as IEvents from 'src/aggregates/softphones/events.d';


/**
 * EXPORTS
 */

// agent reducer interface
export interface ISoftphoneReducer
{
    [key: string]: Reducer<ISoftphoneState, IEvents>;
}
