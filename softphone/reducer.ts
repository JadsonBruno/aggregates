/**
 * IMPORTS
 */
import initialState from 'src/aggregates/softphones/initialState';
import Store from 'src/store';


/**
 * TYPES
 */
import * as Events from 'src/aggregates/softphones/events.d';
import {ISoftphoneReducer} from 'src/aggregates/softphones/reducer.d';
import {ISoftphoneState} from 'src/aggregates/softphones/state.d';


/**
 * CODE
 */

// softphones events reducers map
const eventsMap: ISoftphoneReducer = {

    /**
     * I set softphone status when softphone have been added.
     *
     * :param state: softphone state
     * :param event: softphone added event
     *
     * :returns: softphone state
     */
    [Events.types.SOFTPHONE_ADDED]:
        (state: ISoftphoneState | undefined,
         event: Events.ISoftphoneAdded): ISoftphoneState =>
        {
            // get softphone properties
            const {fullname} = event;
            const {uid} = event;
            const {channel} = event;
            const {session} = event;
            const {username} = event;
            const {appType} = event;

            // add softphone
            const softphone = {
                fullname,
                uid,
                channel,
                session,
                username,
                appType
            };

            // state is not defined: return initial state
            if (state === undefined)
            {
                return initialState;
            }

            // return softphone state
            return {
                ...state,
                byId: state.byId.set(uid, softphone)
            };
        },


    /**
     * I set softphone status when softphones has been updated.
     *
     * :param state: softphone state
     * :param event: softphones has updated event
     *
     * :returns: softphone state
     */
    [Events.types.SOFTPHONE_HAS_UPDATED]:
        (state: ISoftphoneState | undefined): ISoftphoneState =>
        {
            // state is not defined: return initial state
            if (state === undefined)
            {
                return initialState;
            }

            // return softphone state
            return {
                ...state,
                isUpdating: false,
            };
        },


    /**
     * I set softphone status when softphones have been loaded.
     *
     * :param state: softphone state
     * :param event: softphones loaded event
     *
     * :returns: softphone state
     */
    [Events.types.SOFTPHONE_LOADED]:
        (state: ISoftphoneState | undefined,
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         event: Events.ISoftphoneLoaded): ISoftphoneState =>
        {
            // state is not defined: return initial state
            if (state === undefined)
            {
                return initialState;
            }

            // return softphone state
            return {
                ...state,
                hasLoadError: false,
                isLoading: false,
                loaded: true
            };
        },


    /**
     * I set softphone status when loading softphones.
     *
     * :param state: softphone state
     * :param event: softphones loading event
     *
     * :returns: softphone state
     */
    [Events.types.SOFTPHONE_LOADING]:
        (state: ISoftphoneState | undefined): ISoftphoneState =>
        {
            // state is not defined: return initial state
            if (state === undefined)
            {
                return initialState;
            }

            // return softphone state
            return {
                ...state,
                hasLoadError: false,
                isLoading: true
            };
        },


    /**
     * I set softphone status when softphones have not been loaded.
     *
     * :param state: softphone state
     * :param event: softphones not loaded event
     *
     * :returns: softphone state
     */
    [Events.types.SOFTPHONE_NOT_LOADED]:
        (state: ISoftphoneState | undefined): ISoftphoneState =>
        {
            // state is not defined: return initial state
            if (state === undefined)
            {
                return initialState;
            }

            // return softphone state
            return {
                ...state,
                hasLoadError: true,
                isLoading: false
            };
        },


    /**
     * I set softphone status when softphones have not been updated.
     *
     * :param state: softphone state
     * :param event: softphones not loaded event
     *
     * :returns: softphone state
     */
    [Events.types.SOFTPHONE_NOT_UPDATED]:
        (state: ISoftphoneState | undefined): ISoftphoneState =>
        {
            // state is not defined: return initial state
            if (state === undefined)
            {
                return initialState;
            }

            // return softphone state
            return {
                ...state,
                hasUpdateError: true,
                isUpdating: false,
            };
        },


    /**
     * I set softphone status when softphone have been updated.
     *
     * :param state: softphone state
     * :param event: softphone added event
     *
     * :returns: softphone state
     */
    [Events.types.SOFTPHONE_UPDATED]:
        (state: ISoftphoneState | undefined,
         event: Events.ISoftphoneUpdated): ISoftphoneState =>
        {
            // get softphone properties
            const {fullname} = event;
            const {uid} = event;
            const {channel} = event;
            const {session} = event;
            const {username} = event;
            const {appType} = event;

            const softphone = {
                fullname,
                uid,
                channel,
                session,
                username,
                appType
            };

            // state is not defined: return initial state
            if (state === undefined)
            {
                return {
                    ...initialState,
                    hasUpdateError: false
                };
            }

            // return softphone state
            return {
                ...state,
                byId: state.byId.set(uid, softphone),
                hasUpdateError: false,
            };
        },


    /**
     * I set softphone status when updating softphones.
     *
     * :param state: softphone state
     * :param event: softphones updating event
     *
     * :returns: softphone state
     */
    [Events.types.SOFTPHONE_UPDATING]:
        (state: ISoftphoneState | undefined): ISoftphoneState =>
        {
            // state is not defined: return initial state
            if (state === undefined)
            {
                return initialState;
            }

            // return softphone state
            return {
                ...state,
                hasUpdateError: false,
                isUpdating: true,
                hasLoadError: false,
                isLoading: false,
            };
        },
};


// softphones reducer
const reducer = Store.createReducer(initialState, eventsMap);


/**
 * EXPORTS
 */
export default reducer;
