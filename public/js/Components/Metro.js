/**
 * Created by akerr on 8/6/16.
 */
import React from "react";
import * as TopNav from "./FixedHeaderNavMenu";
import * as SideBar from "./SideBar";


export const Navigation = ({data,passedState})=>(
    <div className="navbar-fixed-top page-header navbar">
        <div className="page-header-inner">
            {console.log(data)}
            {/*<SideBar.MenuSideBarWidget {...leftNavigation}/>*/}
            <TopNav.TopMenuNavContainer data ={data} passedState = {passedState}/>
        </div>
    </div>
);






export {Navigation as default}

