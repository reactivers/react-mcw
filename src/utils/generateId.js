/**
 * Created by Utku on 24/03/2017.
 */
let lastId = 0;

export default function(prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}