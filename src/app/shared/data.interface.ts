/**
 * It defines the formats to store different kinds of data.
 * Do discuss the contributors associated about any changes in this file.
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

/**
 * Basic structure of the data to store a loo entry.
 * These are the basic properties of the data to be stored. New temporary properties can be added runtime without mentioning here.
 */
export interface Loo {
    /** Latitue of the Loo */
    latitude?: number;
    /** Longitude of the Loo */
    longitude?: number;
    /** 
     * Name of the Loo.
     * Most of the loo are named as (pay and use toliet), they don't count. But some loo are named after a location or communitiy who built it. That counts.
     */
    name?: string;
    /**
     * Fees to use the loo.
     * If the loo is free, user must enter 0.
     */
    fees: number;
    /** 
     * Physical address of the Loo.
     * Because we can't trust GPS fully.
     */
    address?: string;
    /** 
     * How clean the loo is.
     * On the scale of 0 to 9.
     */
    cleanliness: number;
}