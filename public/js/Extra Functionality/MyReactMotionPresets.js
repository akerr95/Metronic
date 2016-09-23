/**
 * Created by akerr on 9/21/16.
 */
import {spring} from "react-motion"
export const ICON = {
    scale: 1,
    factor:0.35,
    extra: {
        stiffness: 200,
        damping: 10
    }
};
export const NOTICE = {
    scale: 1,
    factor:0.2,
    extra: {
        stiffness: 110,
        damping: 5
    }
};
export const USERPROFILE = {
    scale: 1,
    factor:0.2,
    extra: {
        stiffness: 110,
        damping: 5
    }
};
export const presets= {
    genScale: function (subject,element) {
        return {scale: spring(this.clicked(subject.iconName,subject.state)?element.scale+element.factor:element.scale,element.extra)};
    },
    genOpacity:function(subject,element){
        return {opacity: spring(this.clicked(subject.iconName,subject.state)?element.opacity+element.factor:element.opacity,element.extra)};
    },
    clicked: function (iconName,state){
        let isClicked=false;
        if(state.has(iconName)){
            isClicked =state.get(iconName);
        }
        return isClicked;
    }
};

