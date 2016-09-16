/**
 * Created by akerr on 9/12/16.
 */
"use strict";
import React from "react";
import * as FixedHeader from "./FixedHeaderNavMenu.js"
/*****************
 * Pure Functions*
 *****************/
export function IconTriggered(triggerName, iconState, fn) {
    let stateMap = new Map();
    for (let [key, value] of iconState) {
        key === triggerName ? stateMap.set(key, !value) : stateMap.set(key, false);
    }
    fn(stateMap);
}
export function populateElement(elements,passedState,callback) {
    let result = [];
    for (let [{data, styles},element] of elements) {
        result.push(React.createElement(element, {
            data: data,
            styles: styles,
            callback: callback,
            passedState: passedState
        }));
    }
    return result;
}
export function isOpen(elClassName,elState,customClass){
    customClass = customClass ||{};
    return elState.get(elClassName) ? customClass.first||"isOpen": customClass.second || "isClosed";
}
export function ConvertMapToArr(stateMap) {
    let iconStateParameters = [];
    for (let [key,value] of stateMap) {
        iconStateParameters.push([key, value]);
    }
    return iconStateParameters;
}
export function ConvertArrToMap(iconStateParameters) {
    let stateMap = new Map(iconStateParameters);
    return stateMap;
}
export function CreateBooleanState(states) {
    let iconStateParameters = [];
    let sorted  = new Set(states);
    let arr = [...sorted];
    arr.map((state)=>{
        iconStateParameters.push([state,false]);
    });
    return {elementBool: iconStateParameters};
}

export function TopMenuData(){
    this.stateKeys=[];
    this.tasks =new Map();
    this.inboxes =new Map();
    this.notifies =new Map();
    this.header =new Map();
    this.icons =new Map();
    this.userIcon ={};
    this.iconProfiles=new Map();
    this.profileMenu=false;
    this.userProfile=false;

    this.addTasks =(data)=>{
        data.map((data)=>{
            this.tasks.set({data},FixedHeader.ActionDropDownTask);
        });
        return this;
    };
    this.addInboxes =(data)=>{
        data.map((data)=>{
            this.inboxes.set({data},FixedHeader.ActionDropDownInbox);
        });
        return this;
    };
    this.addNotifies =(data)=>{
        data.map((data)=>{
            this.notifies.set({data},FixedHeader.ActionDropDownNotify);
        });
        return this;
    };
    this.addHeader =(data)=>{
        data.map((dataEntry)=>{
            let {key,...data} = dataEntry;
            this.header.set(key,{data,fn:FixedHeader.ActionDropDownHeader});
        });
        return this;
    };
    this.addIcon =(data)=>{
        data.map((dataEntry)=>{
            let key = dataEntry.key;
            this.stateKeys.push(dataEntry.iconName);
            this.icons.set(key,{data:dataEntry});
        });
        return this;
    };
    this.addUserIcon =(data)=>{
        this.stateKeys.push(data.iconName);
        this.userIcon =data;
        return this;
    };
    this.addIconProfile =(data)=>{
        data.map((data)=>{
            this.iconProfiles.set({data},FixedHeader.IconProfile);
        });
        return this;
    };
    this.hasProfileMenu =(data)=>{
        this.profileMenu = data;
        return this;
    };
    this.hasUserProfile =(data)=>{
        this.userProfile=data;
        return this;
    };
    this.generate=()=>{
        return {icons:this._makeIcons(),userProfile:this._makeUserProfile(),stateKeys:this.stateKeys};

    };

    this._makeIcons=()=>{
        let icons = new Map();
        for(let [key,value] of this.icons){
            let {actionDropDown,notice,styles,...rest} = value.data;
            let tempHeader = this._determineHeader(key);
            let tempBody = this._determineDropDown(key);
            notice={
              notifyCount:tempBody.size
            };
            actionDropDown={
                header:new Map([[{data:tempHeader.data},tempHeader.fn]]),
                body:tempBody};
            rest.actionDropDown=actionDropDown;
            rest.notice=notice;
            icons.set({data:rest,styles:styles},FixedHeader.Icon);
        }

        return icons;

    };
    this._determineHeader = (key)=>{
        if(this.header.has(key)){
            return this.header.get(key);
        }
    };
    this._determineDropDown=(key)=>{
        if(key==="notifications"){
            return this.notifies;
        }
        if(key==="inbox"){
            return this.inboxes;
        }
        if(key==="tasks"){
            return this.tasks;
        }
    };

    this._makeUserProfile=()=>{
        let userProfile ={};
        if(this.userProfile) {
            userProfile.userIcon = this.userIcon;
            if(this.profileMenu){
                userProfile.profileMenu = {iconProfiles:this.iconProfiles};
            }
        }
        return userProfile;
    }
}