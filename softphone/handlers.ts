/**
 * IMPORTS
 */
import * as events from 'src/aggregates/softphones/events';
import * as utils from 'src/aggregates/softphones/utils';


/**
 * TYPES
 */
import * as Commands from 'src/aggregates/softphones/commands.d';
import {ISoftphone} from 'src/aggregates/softphones/state.d';
import {IEvent} from 'src/aggregates/index.d';
import {LOGGER} from 'src/logger';


/**
 * CODE
 */

/**
 * I am a softphones load command handler.
 *
 * :param command: command
 * :param state: state
 *
 * :generates: events
 */
async function* load (
    command: Commands.ISoftphoneLoad
): AsyncIterable<IEvent>
{
    // generate loading softphones event
    yield events.softphoneLoading();

    // initialize softphones
    let softphones: ISoftphone[];

    // load softphones
    try
    {
        softphones = await utils.getSoftphones(command.company);
    }

    // softphones load failed: generate softphones not loaded event and stop
    catch (e)
    {
        // log error
        LOGGER.error('CVJAG0002E', {'reason': e});
        yield events.softphoneNotLoaded();
        return;
    }

    // softphones load succeeded: generate added event for each softphone
    for (const softphone of softphones)
    {
        yield events.softphoneAdded(softphone.fullname,
                                    softphone.uid,
                                    softphone.channel,
                                    softphone.session,
                                    softphone.username,
                                    softphone.appType);
    }

    // generate softphones loaded event
    yield events.softphoneLoaded();
}


/**
 * I am a start command handler.
 *
 * :param command: command
 * :param state: application state
 *
 * :generates: events
 */
async function* start (): AsyncIterable<IEvent>
{
    yield events.softphoneStarting();
}


/**
 * I am a softphones update command handler.
 *
 * :param command: command
 * :param state: state
 *
 * :generates: events
 */
async function* update (
    command: Commands.ISoftphoneUpdate
): AsyncIterable<IEvent>
{
    // generate updating softphones event
    yield events.softphoneUpdating();

    // initialize softphones
    let softphones: ISoftphone[];

    // load softphones
    try
    {
        softphones = await utils.getSoftphones(command.company);
    }

    // softphones load failed: generate softphones not updated event and stop
    catch (e)
    {
        // log error
        LOGGER.error('CVJAG0001E', {'reason': e});
        yield events.softphoneNotUpdated();
        return;
    }

    // softphones load succeeded: generate added event for each softphone
    for (const softphone of softphones)
    {
        yield events.softphoneUpdated(softphone.fullname,
                                      softphone.uid,
                                      softphone.channel,
                                      softphone.session,
                                      softphone.username,
                                      softphone.appType);
    }

    // generate softphone has updated event
    yield events.softphoneHasUpdated();
}


/**
 * EXPORTS
 */
export {
    load,
    start,
    update
};
