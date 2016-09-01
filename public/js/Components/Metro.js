/**
 * Created by akerr on 8/6/16.
 */
import React from "react";
import * as TopNav from "./FixedHeaderNavMenu";
import * as SideBar from "./SideBar";


export const Navigation = ({leftNavigation, fixedNavigation, classes})=>(
    <div className="navbar-fixed-top page-header navbar">
        <div className="page-header-inner">
            {/*<SideBar.MenuSideBarWidget {...leftNavigation}/>*/}
            <TopNav.TopMenuNavigation classes ={classes} fixedNavigation={fixedNavigation}/>
        </div>
    </div>
);

export class Central extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return <Navigation classes = {this.props.classes}{...this.props.data}/>
    }
}





export {Central as default}

