/**
 * TYPES
 */
import * as Events from 'src/aggregates/softphones/events.d';
import {IEventCreator} from 'src/aggregates/index.d';
import {_aggregates} from 'src/aggregates/index.d';
import {ApplicationType} from 'src/aggregates/softphones/state.d';
import {ChannelState} from 'src/aggregates/softphones/state.d';
import {SessionState} from 'src/aggregates/softphones/state.d';


/**
 * CODE
 */

/**
 * I create a softphone added event.
 *
 * :param fullname: softphone fullname
 * :param uid: softphone uid
 * :param channel: softphone channel
 * :param session: softphone session
 * :param username: softphone username
 * :param appType: softphone app type
 *
 * :returns: softphone added event
 */
const softphoneAdded: IEventCreator<Events.ISoftphoneAdded> =
    (fullname: string,
     uid: string,
     channel: ChannelState,
     session: SessionState,
     username: string,
     appType: ApplicationType
    ): Events.ISoftphoneAdded => ({
        _aggregate: _aggregates.SOFTPHONES,
        _name: Events.types.SOFTPHONE_ADDED,
        _target: null,
        appType,
        fullname,
        type: Events.types.SOFTPHONE_ADDED,
        channel,
        session,
        uid,
        username,
    });


/**
 * I create a softphone updated event.
 *
 * :param fullname: softphone fullname
 * :param uid: softphone uid
 * :param channel: softphone channel
 * :param session: softphone session
 * :param username: softphone username
 * :param appType: softphone app type
 *
 * :returns: softphone updated event
 */
const softphoneUpdated: IEventCreator<Events.ISoftphoneUpdated> =
    (fullname: string,
     uid: string,
     channel: ChannelState,
     session: SessionState,
     username: string,
     appType: ApplicationType
    ): Events.ISoftphoneUpdated => ({
        _aggregate: _aggregates.SOFTPHONES,
        _name: Events.types.SOFTPHONE_UPDATED,
        _target: null,
        appType,
        fullname,
        type: Events.types.SOFTPHONE_UPDATED,
        channel,
        session,
        uid,
        username,
    });


/**
 * I create a softphones updating event.
 *
 * :returns: softphones updating event
 */
const softphoneUpdating: IEventCreator<Events.ISoftphoneUpdating> =
    (): Events.ISoftphoneUpdating => ({
        _aggregate: _aggregates.SOFTPHONES,
        _name: Events.types.SOFTPHONE_UPDATING,
        _target: null,
        type: Events.types.SOFTPHONE_UPDATING
    });


/**
 * I create a softphones has updated event.
 *
 * :returns: softphones has updated event
 */
const softphoneHasUpdated: IEventCreator<Events.ISoftphoneHasUpdated> =
    (): Events.ISoftphoneHasUpdated => ({
        _aggregate: _aggregates.SOFTPHONES,
        _name: Events.types.SOFTPHONE_HAS_UPDATED,
        _target: null,
        type: Events.types.SOFTPHONE_HAS_UPDATED
    });


/**
 * I create a softphones loaded event.
 *
 * :returns: softphones loaded event
 */
const softphoneLoaded: IEventCreator<Events.ISoftphoneLoaded> =
    (): Events.ISoftphoneLoaded => ({
        _aggregate: _aggregates.SOFTPHONES,
        _name: Events.types.SOFTPHONE_LOADED,
        _target: null,
        type: Events.types.SOFTPHONE_LOADED
    });


/**
 * I create a softphone loading event.
 *
 * :returns: softphone loading event
 */
const softphoneLoading: IEventCreator<Events.ISoftphoneLoading> =
    (): Events.ISoftphoneLoading => ({
        _aggregate: _aggregates.SOFTPHONES,
        _name: Events.types.SOFTPHONE_LOADING,
        _target: null,
        type: Events.types.SOFTPHONE_LOADING
    });


/**
 * I create a softphone not updated event.
 *
 * :returns: softphone not updated event
 */
const softphoneNotUpdated: IEventCreator<Events.ISoftphoneNotUpdated> =
    (): Events.ISoftphoneNotUpdated => ({
        _aggregate: _aggregates.SOFTPHONES,
        _name: Events.types.SOFTPHONE_NOT_UPDATED,
        _target: null,
        type: Events.types.SOFTPHONE_NOT_UPDATED
    });

/**
 * I create a softphone not loaded event.
 *
 * :returns: softphone not loaded event
 */
const softphoneNotLoaded: IEventCreator<Events.ISoftphoneNotLoaded> =
    (): Events.ISoftphoneNotLoaded => ({
        _aggregate: _aggregates.SOFTPHONES,
        _name: Events.types.SOFTPHONE_NOT_LOADED,
        _target: null,
        type: Events.types.SOFTPHONE_NOT_LOADED
    });


/**
 * I create an event to start softphones.
 *
 * :returns: starting event
 */
const softphoneStarting: IEventCreator<Events.ISoftphoneStarting> =
    (): Events.ISoftphoneStarting => ({
        _aggregate: _aggregates.SOFTPHONES,
        _name: Events.types.SOFTPHONE_STARTING,
        _target: null,
        type: Events.types.SOFTPHONE_STARTING
    });


/**
 * EXPORTS
 */
export {
    softphoneAdded,
    softphoneUpdated,
    softphoneUpdating,
    softphoneHasUpdated,
    softphoneLoaded,
    softphoneLoading,
    softphoneNotUpdated,
    softphoneNotLoaded,
    softphoneStarting
};
