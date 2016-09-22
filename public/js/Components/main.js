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
let inboxes = [
    {
        imgLocation: "http://bit.ly/2cbi5bL",
        time: "just now",
        sender: "Alec kerr",
        message: "This was made from a test file."
    }, {
        imgLocation: "http://bit.ly/2cbi5bL",
        time: "2 hours",
        sender: "John kerr",
        message: "This was made from a test file."
    }, {
        imgLocation: "http://bit.ly/2cbi5bL",
        time: "59 mins",
        sender: "Johnny Bravo",
        message: "This was made from a test file."
    }];
let task = [
    {
        desc: "Metronic V1.1",
        percent: 10
    }, {
        desc: "Metronic V1.2",
        percent: 100
    }, {
        desc: "Metronic V1.3",
        percent: 50
    }];
let notify =[
    {
    time:"just now",
    iconName:"icon-plus",
    message: `This is a test...`
},{
    time:"14 mins",
    iconName:"icon-key",
    message: `This is a test...`
},{
    time:"2 days",
    iconName:"icon-lock",
    message: `This is a test...`
}];
let icons = [
    {
    key:"inbox",
    iconName: envelop,
    actionDropDown:{},
    classStyles:{
        liClassName: "dropdown dropdown-extended nav-dropdown dropdown-inbox ",
        aClassName: "dropdown-toggle",
    }
},{
    key:"tasks",
    iconName: calendar,
    actionDropDown:{},
    classStyles:{
        liClassName: "dropdown dropdown-extended nav-dropdown dropdown-tasks ",
        aClassName: "dropdown-toggle",
    }
},{
    key:"notifications",
    iconName: bell,
    actionDropDown:{},
    classStyles:{
        liClassName: "dropdown dropdown-extended nav-dropdown dropdown-notification ",
        aClassName: "dropdown-toggle",
    }
}];
let userIcon = {
    imgLocation: "http://bit.ly/2cbi5bL",
    stringName: "Alec Kerr",
    iconName: "icon-options-vertical"
};
let iconProfiles = [
    {
        iconName: envelop,
        stringName: " My Profile",
        href: "#"
    }, {
        iconName: "icon-calendar",
        stringName: " My Profile",
        href: "#"
    }, {
        iconName: "icon-compass",
        stringName: " My Profile",
        href: "#"
    },{divider:true},
    {
        iconName: "icon-lock",
        stringName: " My Profile",
        href: "#"
    },
    {
        iconName: "icon-key",
        stringName: " My Profile",
        href: "#"
    }];
let headers =[{key:"inbox",
    pending: 0,
    subject: "Test",
    heading: "Notifications",
    actionMessage: "view all"
},{
    key:"tasks",
    pending: 0,
    subject: "Test1",
    heading: "Notifications",
    actionMessage: "view all"
},{
    key:"notifications",
    pending: 0,
    subject: "Test2",
    heading: "Notifications",
    actionMessage: "view all"
}];
var testdata = new PureFunc.TopMenuData();
testdata.addHeader(headers).
addInbox(inboxes).
addIcon(icons).
addTasks(task).
addNotifications(notify).
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