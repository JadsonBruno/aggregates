/**
 * TYPES
 */
import {ICommand} from 'src/aggregates/index.d';
import {_aggregates} from 'src/aggregates/index.d';


/**
 * EXPORTS
 */

/**
 * Commands names.
 */
export enum _names
{
    SOFTPHONE_UPDATE = 'SOFTPHONE_UPDATE',
    SOFTPHONE_LOAD = 'SOFTPHONE_LOAD',
    SOFTPHONE_START = 'SOFTPHONE_START'
}


/**
 * Commands interfaces.
 */
export interface ISoftphoneUpdate extends ICommand
{
    _aggregate: _aggregates.SOFTPHONES;
    _name: _names.SOFTPHONE_UPDATE;
    company: number | null;
}

export interface ISoftphoneLoad extends ICommand
{
    _aggregate: _aggregates.SOFTPHONES;
    _name: _names.SOFTPHONE_LOAD;
    company: number | null;
}

export interface ISoftphoneStart extends ICommand
{
    _aggregate: _aggregates.SOFTPHONES;
    _name: _names.SOFTPHONE_START;
}
