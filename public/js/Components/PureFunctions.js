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

    for (let [{data, classStyles},element] of elements) {
        result.push(React.createElement(element, {
            key:data.key,
            data: data,
            classStyles: classStyles,
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

export function getState(key,state){
    if(state.has(key)){
        return state.get(key);
    }else{
        return null
    }
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

export function TopMenuData(prevData=undefined){
    this.stateKeys=[];
    this.tasks =new Map();
    this.inbox =new Map();
    this.notifications =new Map();
    this.header =new Map();
    this.icons =new Map();
    this.userIcon ={};
    this.iconProfiles=new Map();
    this.profileMenu=false;
    this.userProfile=false;

    this.getTasks=()=>{
        return this.tasks;
    };
    this.getInbox=()=>{
        return this.inbox;
    };
    this.getNotifications=()=>{
        return this.notifications;
    };
    this.getHeader=(key)=>{
        return this._determineHeader(key);
    };
    this.getIconProfile = ()=>{
        return this.iconProfiles;
    };
    this.addTasks =(data)=>{
        data.map((data)=>{
            if(!data.hasOwnProperty("key")){
                data.key = data.desc;
            }
            this.tasks.set({data},FixedHeader.ActionDropDownTask);
        });
        return this;
    };
    this.addInbox =(data)=>{
        data.map((data)=>{
            if(!data.hasOwnProperty("key")){
                data.key = data.sender;
            }
            this.inbox.set({data},FixedHeader.ActionDropDownInbox);
        });
        return this;
    };
    this.addNotifications =(data)=>{
        data.map((data)=>{
            if(!data.hasOwnProperty("key")){
                let uniqueKey = data.time.slice(0,1) + data.iconName;
                data.key =uniqueKey;
            }

            this.notifications.set({data},FixedHeader.ActionDropDownNotify);
        });
        return this;
    };
    this.addHeader =(data)=>{
        data.map((dataEntry)=>{

            this.header.set(dataEntry.key,{data:dataEntry,fn:FixedHeader.ActionDropDownHeader});
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
        data.map((data,i)=>{
            if(!data.hasOwnProperty("key") && data.divider === undefined) {
                data.key = data.iconName;
            }else if(data.divider){
                data.key = "divider"+i;
                return this.iconProfiles.set({data},FixedHeader.Divider);
            }
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
    this.makeActionDropDown=(tempHeader,tempBody)=>{
        tempHeader.data.pending = tempBody.size; //total amount of notifications
        return{header:new Map([[{data:tempHeader.data},tempHeader.fn]]),
               body:tempBody};
    };
    this.generate=()=>{
        let obj = {icons:this._makeIcons(),userProfile:this._makeUserProfile(),stateKeys:this.stateKeys};
        this._purge();
        return obj
    };

    this._makeIcons=()=>{
        let icons = new Map();
        for(let [key,value] of this.icons){
            let {classStyles,...data} = value.data;
            let tempHeader = this._determineHeader(key);
            let tempBody = this._determineDropDown(key);
            data.actionDropDown=this.makeActionDropDown(tempHeader,tempBody);
            data.notice={
                notifyCount:tempBody.size
            };
            icons.set({data:data,classStyles:classStyles},FixedHeader.Icon);
        }

        return icons;

    };
    //TODO write test for purge
    this._purge=()=>{
        this.stateKeys=[];
        this.tasks =new Map();
        this.inbox =new Map();
        this.notifications =new Map();
        this.header =new Map();
        this.icons =new Map();
        this.userIcon ={};
        this.iconProfiles=new Map();
        this.profileMenu=false;
        this.userProfile=false;
    };
    this._determineHeader = (key)=>{
        if(this.header.has(key)){
            return this.header.get(key);
        }
    };
    this._determineDropDown=(key)=>{
        if(key==="notifications"){
            return this.notifications;
        }
        if(key==="inbox"){
            return this.inbox;
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