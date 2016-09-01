/**
 * Created by akerr on 8/8/16.
 */
import * as Ui from "./Metro.js";
import React from "react";
import ReactDom from "react-dom";
import * as myConst from "../Extra Functionality/myConst.js";


let actionDropDownMessages = [
    {time: "just now", iconName: "fa fa-plus", message: " New user registered"},
    {time: "3 mins", iconName: "fa fa-plus-circle", message: " New user registered"},
    {time: "1 day", iconName: "fa fa-rocket", message: " New user registered"}
];
let actionDropDownTask =[{desc:"Metronic v1.0", percent:40},
                     {desc:"Plastic v1.0", percent:30},
                     {desc:"Paper v1.0", percent:20}];
let actionDropDownMail = [{
    id:"one",
    imgLocation: "https://d13yacurqjgara.cloudfront.net/users/107759/screenshots/2394890/sw3.gif",
    sender: "Alec Kerr",
    time: "Just Now",
    message: "This is an automated message please ignore..."
},
    {
        id:"two",
        imgLocation: "https://d13yacurqjgara.cloudfront.net/users/107759/screenshots/2394890/sw3.gif",
        sender: "John Kerr",
        time: "2 mins",
        message: "This is an automated message please ignore..."
    },
    {
        id:"three",
        imgLocation: "https://d13yacurqjgara.cloudfront.net/users/107759/screenshots/2394890/sw3.gif",
        sender: "Wayne Kerr",
        time: "1 day",
        message: "This is an automated message please ignore..."
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

var fixedHeaderNavClasses = {
    topMenuNavigation: {divClassName: "top-menu", ulClassName: "nav pull-right navbar-nav"},
    icon: {
        liClassName: "dropdown dropdown-extended nav-dropdown ",
        aClassName: "dropdown-toggle",
        notify:{spanClassName:"badge badge-default"},
        actionDropDown: {
            ulClassName: "dropdown-menu",
            actionDropDownHeader: {spanClassName: "bold", liClassName: "external"},
            slider: {
                divClassName: ["slimScrollDiv", "slimScrollBar", "slimScrollRail"],
                ulClassName: "dropdown-menu-list",
                actionDropDownMessage: {
                    spanClassName: ["time",
                        "details",
                        "label label-sm label-icon label-success edited-label"]
                },
                actionDropDownMail: {
                    spanClassName: ["photo", "subject", "time", "from", "message"],
                    imgClassName: "img-cricle"
                },
                actionDropDownTask: {
                    spanClassName: ["task", "desc", "percent", "progress",
                        "progress-bar progress-bar-success", "sr-only"]
                }
            }
        }

    },
    userProfile: {
        liClassName: "dropdown dropdown-user nav-dropdown",
        userIcon: {aClassName: "dropdown-toggle", imgClassName: "img-circle", spanClassName: "username"},
        profileMenu: {
            ulClassName: "dropdown-menu dropdown-menu-default",
            divider: {liClassName: "divider"},
            iconProfile: {
                noticeClassName: "badge badge-success",
            }
        }
    }

};
var data = {
    leftNavigation: {
        topSideBar: {
            companyIdentity: {
                index: '#',
                imgLocation: "./images/logo.png",
                alt: "Image of Bourbon"
            },
            sidebarMenuTrigger: {iconName: "icon-menu",}
        },
        sideBarMenu: testSideBarMenu
    },
    fixedNavigation: {
        iconMapper: [{
            iconName: 'icon-bell',
            liClassName: "dropdown-notification",
            actionDropDown: {
                headings: {pending: 12, message: "pending"},
                messages: actionDropDownTask
            },
            notify: 7
        },
            {
                iconName: 'icon-envelope-open',
                liClassName: "dropdown-inbox",
                actionDropDown: {
                    headings: {pending: 12, message: "pending"},
                    messages: actionDropDownMail
                }, notify: 7
            },
            {
                iconName: 'icon-calendar',
                liClassName: "dropdown-tasks",
                actionDropDown: {
                    headings: {pending: 12, message: "pending"},
                    messages: actionDropDownMessages
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
                {iconName: "icon-bell", href: "#", stringName: " My Profile"},
                {iconName: "icon-envelope-open", href: "#", stringName: " My Profile", notify: 2},
                {iconName: "icon-calendar", href: "#", stringName: " My Profile", notify: 2},
                {iconName: "icon-login", href: "#", stringName: " My Profile"},
                {iconName: "icon-key", href: "#", stringName: " My Profile"}]
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
ReactDom.render(<Ui.Central data={data} classes={fixedHeaderNavClasses}/>, document.getElementById("Navigation"));
// ReactDom.render(<Ui.SidebarMenu {...testSideBarMenu}/>, document.getElementById("example"));
// ReactDom.render(<Ui.ActionDropDown {...testActionDropDown}/>, document.getElementById("test"));
