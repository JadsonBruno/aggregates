/**
 * TYPES
 */
import {ISoftphoneLoad} from 'src/aggregates/softphones/commands.d';
import {ISoftphoneStart} from 'src/aggregates/softphones/commands.d';
import {ISoftphoneUpdate} from 'src/aggregates/softphones/commands.d';
import {_names} from 'src/aggregates/softphones/commands.d';
import {_aggregates} from 'src/aggregates/index.d';


/**
 * CODE
 */

/**
 * I am a command creator for softphone update.
 *
 * :param company: company id
 *
 * :returns: softphone update command
 */
const update = (company: number | null): ISoftphoneUpdate => ({
    _aggregate: _aggregates.SOFTPHONES,
    _name: _names.SOFTPHONE_UPDATE,
    _target: null,
    company
});

/**
 * I am a command creator for softphone load.
 *
 * :param company: company id
 *
 * :returns: softphone load command
 */
const load = (company: number | null): ISoftphoneLoad => ({
    _aggregate: _aggregates.SOFTPHONES,
    _name: _names.SOFTPHONE_LOAD,
    _target: null,
    company
});


/**
 * I am a command creator for softphone start.
 *
 * :returns: softphone start command
 */
const start = (): ISoftphoneStart => ({
    _aggregate: _aggregates.SOFTPHONES,
    _name: _names.SOFTPHONE_START,
    _target: null,
});


/**
 * EXPORTS
 */
export {
    update,
    load,
    start
};
