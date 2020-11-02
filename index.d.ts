/**
 * IMPORTS
 */
import {Action} from 'redux';
import {IUserState} from 'src/aggregates/user/state.d';
import {ISoftphoneState} from 'src/aggregates/softphones/state.d';


/**
 * EXPORTS
 */

/**
 * Aggregates names.
 */
export enum _aggregates
{
    USER = 'user',
    SOFTPHONES = 'softphones'
}


/**
 * Application state interface.
 */
export interface IAppState
{
    user: IUserState;
    softphones: ISoftphoneState;
}


/**
 * Command interface.
 */
export interface ICommand
{
    _aggregate: string;
    _name: string;
    _target: number | null;
}


/**
 * Command creator interface.
 */
export interface ICommandCreator<C>
{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]): C;
}


/**
 * Event interface.
 */
export interface IEvent extends Action
{
    _aggregate: string;
    _name: string;
    _target: number | string | null;
    type: string;
}


/**
 * Event creator interface.
 */
export interface IEventCreator<E>
{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]): E;
}


/**
 * Command handler interface.
 */
export interface IHandler<C>
{
    (command: C, state: IAppState): AsyncIterable<IEvent>;
}
