/**
 * Created by akerr on 8/6/16.
 */
import React from "react";
import * as TopNav from "./Top_Navigation";
import * as SideBar from "./SideBar";


export const Navigation = ({leftNavigation, rightNavigation})=>(
    <div className="navbar-fixed-top page-header navbar">
        <div className="page-header-inner">
            <SideBar.MenuSideBarWidget {...leftNavigation}/>
            <TopNav.TopMenuNavigation rightNavigation={rightNavigation}/>
        </div>
    </div>
);

/**
 * Top Menu Navigation Component
 * Holds state for all Top menu Navigation
 */

/**
 *Side Bar Navigation Component
 * Two main components
 * Side Bar and (Menu Logo and Trigger)
 */





export {Navigation as default}

