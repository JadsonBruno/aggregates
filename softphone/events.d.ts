/**
 * TYPES
 */
import {IEvent} from 'src/aggregates/index.d';
import {_aggregates} from 'src/aggregates/index.d';
import {ApplicationType} from 'src/aggregates/softphones/state.d';
import {ChannelState} from 'src/aggregates/softphones/state.d';
import {SessionState} from 'src/aggregates/softphones/state.d';


/**
 * EXPORTS
 */

/**
 * Events types.
 */
export enum types
{
    SOFTPHONE_ADDED = 'SOFTPHONE_ADDED',
    SOFTPHONE_UPDATED = 'SOFTPHONE_UPDATED',
    SOFTPHONE_UPDATING = 'SOFTPHONE_UPDATING',
    SOFTPHONE_HAS_UPDATED = 'SOFTPHONE_HAS_UPDATED',
    SOFTPHONE_LOADED = 'SOFTPHONE_LOADED',
    SOFTPHONE_LOADING = 'SOFTPHONE_LOADING',
    SOFTPHONE_NOT_UPDATED = 'SOFTPHONE_NOT_UPDATED',
    SOFTPHONE_NOT_LOADED = 'SOFTPHONE_NOT_LOADED',
    SOFTPHONE_STARTING = 'SOFTPHONE_STARTING'
}


/**
 * Events interfaces.
 */
export interface ISoftphoneAdded extends IEvent
{
    _aggregate: _aggregates.SOFTPHONES;
    _name: types.SOFTPHONE_ADDED;
    appType: ApplicationType;
    channel: ChannelState;
    fullname: string;
    session: SessionState;
    type: types.SOFTPHONE_ADDED;
    uid: string;
    username: string;
}

export interface ISoftphoneUpdated extends IEvent
{
    _aggregate: _aggregates.SOFTPHONES;
    _name: types.SOFTPHONE_UPDATED;
    appType: ApplicationType;
    channel: ChannelState;
    fullname: string;
    session: SessionState;
    type: types.SOFTPHONE_UPDATED;
    uid: string;
    username: string;
}

export interface ISoftphoneUpdating extends IEvent
{
    _aggregate: _aggregates.SOFTPHONES;
    _name: types.SOFTPHONE_UPDATING;
    type: types.SOFTPHONE_UPDATING;
}

export interface ISoftphoneHasUpdated extends IEvent
{
    _aggregate: _aggregates.SOFTPHONES;
    _name: types.SOFTPHONE_HAS_UPDATED;
    type: types.SOFTPHONE_HAS_UPDATED;
}

export interface ISoftphoneLoaded extends IEvent
{
    _aggregate: _aggregates.SOFTPHONES;
    _name: types.SOFTPHONE_LOADED;
    type: types.SOFTPHONE_LOADED;
}

export interface ISoftphoneLoading extends IEvent
{
    _aggregate: _aggregates.SOFTPHONES;
    _name: types.SOFTPHONE_LOADING;
    type: types.SOFTPHONE_LOADING;
}

export interface ISoftphoneNotUpdated extends IEvent
{
    _aggregate: _aggregates.SOFTPHONES;
    _name: types.SOFTPHONE_NOT_UPDATED;
    type: types.SOFTPHONE_NOT_UPDATED;
}

export interface ISoftphoneNotLoaded extends IEvent
{
    _aggregate: _aggregates.SOFTPHONES;
    _name: types.SOFTPHONE_NOT_LOADED;
    type: types.SOFTPHONE_NOT_LOADED;
}

export interface ISoftphoneStarting extends IEvent
{
    _aggregate: _aggregates.SOFTPHONES;
    _name: types.SOFTPHONE_STARTING;
    type: types.SOFTPHONE_STARTING;
}
