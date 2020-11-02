/**
 * TYPES
 */
import {Map} from 'immutable';


/**
 * EXPORTS
 */
export enum SessionState
{
    AVAILABLE = 'available',
    PAUSED = 'paused',
    UNAVAILABLE = 'unavailable'
}

export enum ChannelState {
    IDLE = 'idle',
    INCOMING = 'incoming',
    OUTGOING = 'outgoing'
}

export enum ApplicationType
{
    AGENT = 'agent',
    SOFTPHONE = 'softphone',
    SUPERVISOR = 'supervisor'
}

export interface ISoftphone
{
    appType: ApplicationType;
    channel: ChannelState;
    fullname: string;
    session: SessionState;
    uid: string;
    username: string;
}

export interface ISoftphoneState
{
    byId: ISoftphoneById;
    hasUpdateError: boolean;
    hasLoadError: boolean;
    isLoading: boolean;
    isUpdating: boolean;
    loaded: boolean;
}

export type ISoftphoneById = Map<(string), ISoftphone>
