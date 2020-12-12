/**
 * IMPORTS
 */
import {execute} from 'src/aggregates/execute';
import * as commands from 'src/aggregates/softphones/commands';
import * as handlers from 'src/aggregates/softphones/handlers';


/**
 * CODE
 */

/**
 * I am an API to start softphones.
 *
 * :param company: company id
 *
 * :returns: promise with nothing
 */
async function start (company: number | null): Promise<void>
{
    // execute start command
    await execute(commands.start(), handlers.start);

    // execute load command
    await execute(commands.load(company), handlers.load);
}


/**
 * I am an API to update softphones.
 *
 * :param company: company id
 *
 * :returns: promise with nothing
 */
async function update (company: number | null): Promise<void>
{
    // execute update command
    await execute(commands.update(company), handlers.update);
}


/**
 * EXPORTS
 */
export {
    start,
    update
};
