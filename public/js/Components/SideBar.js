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
        console.log(previousState);
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
    sidebarMenuIcons.map((sidebarMenuIcon, i)=> {
        if (i === 0) {
            icons.push(<li className={"nav-item " + active}><SidebarMenuIcon key={i}{...sidebarMenuIcon}/></li>);
        } else {
            icons.push(<li className="nav-item"><SidebarMenuIcon key={i}{...sidebarMenuIcon}/></li>);
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
export const SidebarMenuIcon = ({mainIconName, menuName, dropDownIconName})=>(
    <a className="nav-link nav-toggle">
        <i className={ "large "+mainIconName}></i>
        <span className="selected"></span>
        <span className="title completely-hidden">{menuName}</span>
        <span className="myarrow completely-hidden"><i className={dropDownIconName}></i></span>
    </a>
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