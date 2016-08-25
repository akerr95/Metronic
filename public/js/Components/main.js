/**
 * Created by akerr on 8/8/16.
 */
import * as Ui from "./Metro.js";
import React from "react";
import ReactDom from "react-dom";
import * as myConst from "../Extra Functionality/myConst.js";


let  actionDropDownMessages = [
    {time: "just now", iconName: "fa fa-plus", message: " New user registered"},
    {time: "3 mins", iconName: "fa fa-plus-circle", message: " New user registered"},
    {time: "1 day", iconName: "fa fa-rocket", message: " New user registered"}
];
let actionDropDownMail =[{
        imgLocation:"https://d13yacurqjgara.cloudfront.net/users/107759/screenshots/2394890/sw3.gif",
        sender:"Alec Kerr",
        time:"Just Now",
        message:"This is an automated message please ignore..."
    },
    {
        imgLocation:"https://d13yacurqjgara.cloudfront.net/users/107759/screenshots/2394890/sw3.gif",
        sender:"Alec Kerr",
        time:"2 mins",
        message:"This is an automated message please ignore..."
    },
    {
        imgLocation:"https://d13yacurqjgara.cloudfront.net/users/107759/screenshots/2394890/sw3.gif",
        sender:"Alec Kerr",
        time:"1 day",
        message:"This is an automated message please ignore..."
    },
];
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

var data = {
    leftNavigation: {
        topSideBar:{
        companyIdentity: {
            index: '#',
            imgLocation: "./images/logo.png",
            alt: "Image of Bourbon"
        },
        sidebarMenuTrigger: {iconName: "icon-menu",}},
        sideBarMenu:testSideBarMenu
    },
    rightNavigation: {
        iconMapper: [{
            iconName: 'icon-bell',
            actionDropDown: {
                headings: {pending: 12, message:"pending"},
                messages: actionDropDownMail
            },
            notify: 7
        },
            {
                iconName: 'icon-envelope-open',
                actionDropDown: {
                    headings: {pending: 12, message: "pending"},
                    messages: actionDropDownMail
                }, notify: 7
            },
            {
                iconName: 'icon-calendar', actionDropDown: {
                headings: {pending: 12, message: "pending"},
                messages: actionDropDownMail
            }, notify: 7
            },
            {
                iconName: "icon-logout", actionDropDown: {
                headings: {pending: 12, message: "pending"},
                messages: actionDropDownMail
            }, notify: 7
            }
        ],
        userIcon: {
            imgLocation: "https://d13yacurqjgara.cloudfront.net/users/107759/screenshots/2394890/sw3.gif",
            iconName: "icon-options-vertical",
            stringName: "Alec"
        },
        iconProfiles: {
            count: 4,
            icons: [{iconName: "icon-user", href: "#", stringName: " My Profile"},
                {iconName: "icon-user", href: "#", stringName: " My Profile"},
                {iconName: "icon-user", href: "#", stringName: " My Profile", notify: 2},
                {iconName: "icon-user", href: "#", stringName: " My Profile", notify: 2},
                {iconName: "icon-user", href: "#", stringName: " My Profile"},
                {iconName: "icon-user", href: "#", stringName: " My Profile"}]
        }
    }
};
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
var testActionDropDown = {
    headings: {pending: 12, message: "pending notifications"},
    messages: [{time: "just now", iconName: "fa fa-plus", message: " New user registered"},
        {time: "3 mins", iconName: "fa fa-plus-circle", message: " New user registered"},
        {time: "1 day", iconName: "fa fa-rocket", message: " New user registered"}]
};


var testSideBarMenuIcon = {mainIconName: "icon-home", menuName: "DashBord", dropDownIconName: "icon-arrow-left"};
ReactDom.render(<Ui.Navigation {...data}/>, document.getElementById("Navigation"));
// ReactDom.render(<Ui.SidebarMenu {...testSideBarMenu}/>, document.getElementById("example"));
// ReactDom.render(<Ui.ActionDropDown {...testActionDropDown}/>, document.getElementById("test"));
