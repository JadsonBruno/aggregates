/**
 * IMPORTS
 */
import {FETCH_SOFTPHONES} from 'src/aggregates/softphones/queries';
import {SoftphonesQueryError} from 'src/aggregates/softphones/err/softphoneadderror';
import {query} from 'src/services/facilis';


/**
 * TYPES
 */
import {IFetchSoftphonesResponse} from 'src/aggregates/softphones/queries.d';
import {ISoftphone} from 'src/aggregates/softphones/state.d';


/**
 * CODE
 */

/**
 * I get all softphones of a company.
 *
 * :param company: company id
 *
 * :returns: promise with softphones
 *
 * :throws SoftphoneAddError: on failed query
 */
const getSoftphones = async (company: number | null): Promise<ISoftphone[]> =>
{
    // initialize response
    let response: IFetchSoftphonesResponse;

    // fetch softphones
    try
    {
        response = await query(FETCH_SOFTPHONES, {company});
    }

    // softphones fetch failed: report error
    catch (e)
    {
        throw new SoftphonesQueryError(e);
    }

    // return softphones
    return response.data.softphones;
};


/**
 * EXPORTS
 */
export {
    getSoftphones
};
