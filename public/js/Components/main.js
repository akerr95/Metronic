/**
 * Created by akerr on 8/8/16.
 */
import * as Ui from "./Metro.js";
import React from "react";
import ReactDom from "react-dom";
import * as myConst from "../Extra Functionality/myConst.js";

var data = {
    leftNavigation: {
        companyIdentity: {
            index: '#',
            imgLocation: "./images/logo.png",
            alt: "Image of Bourbon"
        },
        sidebarMenu: {iconName: "icon-menu",}
    },
    rightNavigation: {
        iconMapper: [{iconName: 'icon-bell', notify: 7},
            {iconName: 'icon-envelope-open', notify: 7},
            {iconName: 'icon-calendar', notify: 7},
            {iconName: "icon-logout", notify: 7}
        ],
        userIcon: {
            imgLocation: "https://d13yacurqjgara.cloudfront.net/users/107759/screenshots/2394890/sw3.gif",
            iconName: "icon-options-vertical",
            stringName: "Alec"
        }
    }
};

var testNotice = {notify: 7};
var testIconMapper = {
    iconMapper: [{iconName: 'icon-bell', notify: 7},
        {iconName: 'icon-envelope-open', notify: 7}]
};
var testIconNotification = {message: "Tested String"}
var testSideBarMenu = {iconName: "icon-menu"};
ReactDom.render(<Ui.Navigation {...data}/>, document.getElementById("example"));
