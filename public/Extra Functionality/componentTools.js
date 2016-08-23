/**
 * Created by akerr on 8/14/16.
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