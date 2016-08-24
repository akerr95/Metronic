/**
 * Created by akerr on 8/14/16.
 */
/**
 *
 * @param name of component to use as its id
 * @param count total amount of items
 * @returns {Array} used as a key to react components
 * @constructor
 */
function UniqueId(name,count){
    let keys=[];
    for(let i = 0; i< count; i++){
        keys.push(name + i);
    }

    return keys;
}

module.exports ={
    UniqueId
};