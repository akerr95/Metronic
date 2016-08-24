/**
 * Created by akerr on 8/17/16.
 */
export const ICONONLY = 0, ICONWITHNOTIFY = 1, ICONNONOTIFY =2;


export function InitializeProps(props,options){
    let x = Object.keys(props);

    let y=[];
    let u =options.name.length;
    let myObj ={};
    let temp;
    x.map((name)=>{
        temp = props[name];
        if(typeof temp  === "object" && Object.keys(temp).length===u){
           temp =props[name];
        }
    });
   return temp;

}

function _isImage(name){

    return _myTest("gif", name) || _myTest("jpeg", name) || _myTest("png", name) || _myTest("jpg", name) ? true : false;
}

function _hasString(obj){
    return _myTest("string",obj);
}
function _hasImg(obj){
    return _myTest("img",obj);
}
function _hasNumb(obj){
    return _myTest("num",obj);
}

function _hasIcon(obj){
    return _myTest("icon",obj);
}

function _MakeTests(obj){
    let o = [_hasIcon,_hasImg,_hasNumb,_hasString];
    let cnt=0;
    let test =[];
    o.map((func)=>{
        if(func(obj)){
            test.push(func);
        }

    });
    console.log(test);
}


function _myTest(type,subject){
    switch(type){
        case "gif":
            let gif =/\.gif$/;
            return gif.test(subject);
        case "jpeg":
            let jpeg =/\.jpeg$/;
            return jpeg.test(subject);
        case "jpg":
            let jpg =/\.jpg$/;
            return jpg.test(subject);
        case "png":
            let png =/\.png$/;
            return png.test(subject);
        case "img":
            let img = /(^img)|(^Img)|(img$)|(Img$)/;
            return img.test(subject);
        case "num":
            let num = /(^num)|(^Num)|(num$)|(Num$)/;
            return num.test(subject);
        case "string":
            let str = /(^string)|(^String)|(string$)|(String$)/;
            return str.test(subject);
        case "icon":
            let icon = /(^icon)|(^Icon)|(icon$)|(Icon$)/;
            return icon.test(subject);
        default:
            return undefined;
    }
}
