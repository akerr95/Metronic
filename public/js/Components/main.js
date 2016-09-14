/**
 * Created by akerr on 8/8/16.
 */
import * as Ui from "./Metro.js";
import React from "react";
import ReactDom from "react-dom";
import * as PureFunc from './PureFunctions.js';


var testSideBarMenu = {
    searchBar: {placeHolder: "Search...", iconName: "icon-cup"},
    sidebarHeading: {heading: "My Features"},
    sidebarMenuIcons: [
        {mainIconName: "icon-shield", menuName: "Shield", dropDownIconName: "icon-arrow-left"},
        {mainIconName: "icon-magnet", menuName: "Magnet", dropDownIconName: "icon-arrow-left"},
        {mainIconName: "icon-diamond", menuName: "Diamond", dropDownIconName: "icon-arrow-left"},
        {mainIconName: "icon-wrench", menuName: "Wrench", dropDownIconName: "icon-arrow-left"},
    ]
};
let calendar = "icon-calendar";
let user = "icon-user";
let envelop = "icon-envelope-open";
let bell = "icon-bell";
let inboxes = [{
    key: envelop, imgLocation: "http://bit.ly/2cbi5bL", time: "just now",
    sender: "Alec kerr",
    message: "This was made from a test file."
}];
let task =[{
    key:calendar,
    desc:"Metronic V1.1",
    percent:40
}];
let notify =[{
    key:bell,
    time:"just now",
    iconName:"icon-plus",
    message:"This was a message generated from some serve ....jokes"
}];
let icons = [{
    iconName: envelop,
    actionDropDown:{},
    styles:{
        liClassName: "dropdown dropdown-extended nav-dropdown dropdown-inbox ",
        aClassName: "dropdown-toggle",
    }
},{
    iconName: calendar,
    actionDropDown:{},
    styles:{
        liClassName: "dropdown dropdown-extended nav-dropdown dropdown-tasks ",
        aClassName: "dropdown-toggle",
    }
},{
    iconName: bell,
    actionDropDown:{},
    styles:{
        liClassName: "dropdown dropdown-extended nav-dropdown dropdown-notification ",
        aClassName: "dropdown-toggle",
    }
}];
let userIcon = {
    imgLocation: "http://bit.ly/2cbi5bL",
    stringName: "Alec Kerr",
    iconName: "icon-options-vertical"
};
let iconProfiles =[{
    iconName: envelop,
    stringName: " My Profile",
    href: "#"
},{
    iconName: "icon-calendar",
    stringName: " My Profile",
    href: "#"
}];
let headers =[{key: envelop,
    pending: 2,
    subject: "Test",
    heading: "Notifications",
    actionMessage: "view all"
},{
    key: calendar,
    pending: 1,
    subject: "Test1",
    heading: "Notifications",
    actionMessage: "view all"
},{
    key: bell,
    pending: 2,
    subject: "Test2",
    heading: "Notifications",
    actionMessage: "view all"
}];
var testdata = new PureFunc.TopMenuData();
testdata.addHeader(headers).
addInboxes(inboxes).
addIcon(icons).
addTasks(task).
addNotifies(notify).
hasUserProfile(true).
hasProfileMenu(true).
addUserIcon(userIcon).
addIconProfile(iconProfiles);

let state = new Map([[envelop,false]]);



ReactDom.render(<Ui.Navigation data={testdata.generate()} passedState ={state}/>, document.getElementById("Navigation"));
// ReactDom.render(<Ui.SidebarMenu {...testSideBarMenu}/>, document.getElementById("example"));
// ReactDom.render(<Ui.ActionDropDown {...testActionDropDown}/>, document.getElementById("test"));






var testSideBarMenu = {
    searchBar: {placeHolder: "Search...", iconName: "icon-cup"},
    sidebarHeading: {heading: "My Features"},
    sidebarMenuIcons: [
        {mainIconName: "icon-shield", menuName: "Shield", dropDownIconName: "icon-arrow-left"},
        {mainIconName: "icon-magnet", menuName: "Magnet", dropDownIconName: "icon-arrow-left"},
        {mainIconName: "icon-diamond", menuName: "Diamond", dropDownIconName: "icon-arrow-left"},
        {mainIconName: "icon-wrench", menuName: "Wrench", dropDownIconName: "icon-arrow-left"},
    ]
};