/**
 * Created by akerr on 9/21/16.
 */
import {spring} from "react-motion"
export const iconConfig = {
    x: 1,
    stiffness: 300,
    damping: 40,
    mySpring: function (iconName,state) {
        return {val: spring(this.iconStyle(iconName,state)?this.x+0.25:this.x, {stiffness: this.stiffness, damping: this.damping})};
    },
    iconStyle(iconName,state){
        let isClicked=false;
        if(state.has(iconName)){
            isClicked =state.get(iconName);
        }
        return isClicked;
    }
};

export const userConfig ={
    opacity:0.5,
    stiffness:300,
    damping:40,
    mySpring:function(iconName,state){
        return {val:spring(this.iconStyle(iconName,state)?this.opacity+0.5:this.x, {stiffness: this.stiffness, damping: this.damping})};
    },
    iconStyle(iconName,state){
        let isClicked=false;
        if(state.has(iconName)){
            isClicked =state.get(iconName);
        }
        return isClicked;
    }
};