import React from "react";

//TODO Examine what properties should be passed add Proptypes and default types.
export class MenuSideBarWidget extends React.Component{
    constructor(props){
        super(props);
        this._handleChange =  this._handleChange.bind(this);
        this.state={isCollapsed:true};
    }
    render(){

        return(
            <div>
                <LeftNavigation update={this._handleChange} isCollapsed={this.state.isCollapsed} {...this.props.topSideBar}/>
                <SidebarMenu isCollapsed={this.state.isCollapsed}{...this.props.sideBarMenu}/>
            </div>
        );
    }
    _handleChange(previousState){
        this.setState({isCollapsed:previousState});
    }
}

//TODO Examine what properties should be passed add Proptypes and default types.
export class LeftNavigation extends React.Component{
    render(){
        return ( <div className="page-logo" onClick={()=>this._handleClick()}>
            <CompanyIdentity isCollapsed ={this.props.isCollapsed}{...this.props.companyIdentity}/>
            <div className="menu-toggler sidebar-toggler">
                <SidebarMenuTrigger  {...this.props.sidebarMenuTrigger}/>
            </div>
        </div>)
    }
    _handleClick(){
        this.props.update(!this.props.isCollapsed);
    }

}

//TODO Examine what properties should be passed add Proptypes and default types.
export const CompanyIdentity = ({index, alt, imgLocation,isCollapsed})=> {
    return isCollapsed ? <a href={index}>
        <img className="logo-default" src={imgLocation} alt={alt}/>
    </a>:
        <a href={index}>
            <img className="logo-default completely-hidden" src={imgLocation} alt={alt}/>
        </a>

};

//TODO Examine what properties should be passed add Proptypes and default types.
export const SidebarMenuTrigger = ({iconName})=>(
    <li className="dropdown">
        <a>
            <i className={iconName}></i>
        </a>
    </li>
);

//TODO Examine what properties should be passed add Proptypes and default types.
export const IconMapper = ({icons})=> (
    <li className="dropdown">
        {console.log(icons)}
        {icons.map((iconMapper, i)=>
            <Icon key={i} {...icons}/>
        )}

    </li>
);

//TODO Examine what properties should be passed add Proptypes and default types.
export const IconNotificationDisplay = ({messages})=> {
    let iconNotifications = [];
    messages.map((message)=> {
        iconNotifications.push(<IconNotificationDisplay key={message.id} {...message}/>);
    });

    return (<ul>{iconNotifications}</ul>);
};

//TODO Examine what properties should be passed add Proptypes and default types.
export const SidebarMenu = ({searchBar, sidebarHeading, sidebarMenuIcons,isCollapsed})=> {
    let active = "active";
    let icons = [];
    let classes = "nav-item " + "active";
    sidebarMenuIcons.map((sidebarMenuIcon, i)=> {
        if (i === 0) {
            icons.push(<SidebarMenuIcon classes ={classes} key={i}{...sidebarMenuIcon}/>);
        } else {
            icons.push(<SidebarMenuIcon key={i}{...sidebarMenuIcon}/>);
        }

    });
    if(isCollapsed){
        return ( <div className="sidebar-position page-sidebar navbar-collapse collapse">
            <ul className="page-sidebar-menu page-header-fixed">
                <li className="sidebar-search-wrapper"><SearchBar{...searchBar}/></li>
                <SidebarHeading {...sidebarHeading}/>
                {icons}
            </ul>
        </div>)
    }else{
        return ( <div className="sidebar-position when-closed page-sidebar navbar-collapse collapse">
            <ul className="page-sidebar-menu page-header-fixed">
                <li className="sidebar-search-wrapper"><SearchBar{...searchBar}/></li>
                <SidebarHeading {...sidebarHeading}/>
                {icons}
            </ul>
        </div>)
    }
    ;
};

//TODO Examine what properties should be passed add Proptypes and default types.
export const SidebarMenuIcon = ({classes,mainIconName, menuName, ...data})=>(
    <li className={classes}>
        <a className="nav-link nav-toggle">
            <i className={ "large "+mainIconName}></i>
            <span className="selected"></span>
            <span className="title completely-hidden">{menuName}</span>
            <DropDownIcon {...data}/>
        </a>
    </li>

);

// export const SideBarMenuDrop =({})=>(
//     <a className="nav-link nav-toggle">
//         <i className={ "large "+mainIconName}></i>
//         <span className="selected"></span>
//         <span className="title completely-hidden">{menuName}</span>
//     </a>
// );
export const DropDownIcon = ({dropDownIconName})=>(
    <span className="myarrow completely-hidden"><i className={dropDownIconName}></i></span>
);

//TODO Examine what properties should be passed add Proptypes and default types.
export const SidebarHeading = ({heading})=>(
    <li className="heading kinda-hidden">
        <h3 className="uppercase">{heading}</h3>
    </li>
);

//TODO Examine what properties should be passed add Proptypes and default types.
export const SearchBar = ({placeHolder, iconName})=>(
    <form className="sidebar-search">
        <div className="input-group">
            <input type="text" className="form-control" placeholder={placeHolder}/>
            <span className="input-group-btn">
                    <a className="btn submit">
                        <i className={iconName}></i>
                    </a>
                </span>
        </div>
    </form>
);

//Todo Interesting idea about static function
// function addNotification(notifObj) {
//     myComponent.setState(({ list }) => ({ list: [notifObj, ...list] }));
// }