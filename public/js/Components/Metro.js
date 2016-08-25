/**
 * Created by akerr on 8/6/16.
 */
import React from "react";


export const Navigation = ({leftNavigation, rightNavigation})=>(
    <div className="navbar-fixed-top page-header navbar">
        <div className="page-header-inner">
            <MenuSideBarWidget {...leftNavigation}/>
            <RightNavigation {...rightNavigation}/>
        </div>
    </div>
);
/**
 *Side Bar Navigation Component
 * Two main components
 * Side Bar and Menu Navigation
 */
class MenuSideBarWidget extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <LeftNavigation {...this.props.topSideBar}/>
                <SidebarMenu{...this.props.sideBarMenu}/>
            </div>
        );
    }
}
export const LeftNavigation = ({companyIdentity, sidebarMenuTrigger})=>(
    //TODO Add State for button here
    <div className="page-logo">
        <CompanyIdentity {...companyIdentity}/>
        <div className="menu-toggler sidebar-toggler">
            <SidebarMenuTrigger {...sidebarMenuTrigger}/>
        </div>
    </div>

);

export const RightNavigation = ({iconMapper, userIcon, iconProfiles})=>(
    //TODO Add State for button here
    <div className="top-menu">
        <ul className="nav pull-right navbar-nav">
            {iconMapper.map((icon)=>
                <Icon {...icon}/>
            )}
            <li className="dropdown dropdown-user"><UserIcon {...userIcon}/>
                <ProfileMenu {...iconProfiles}/>

            </li>
        </ul>
    </div>
);

export const Button = ()=>(
    <button>Update Notification</button>
);


export const CompanyIdentity = ({index, alt, imgLocation})=>(
    <a href={index}>
        <img className="logo-default" src={imgLocation} alt={alt}/>
    </a>
);

export const SidebarMenuTrigger = ({iconName})=>(
    <li className="dropdown">
        <a>
            <i className={"large " + iconName}></i>
        </a>
    </li>
);

export const IconMapper = ({icons})=> (
    <li className="dropdown">
        {console.log(icons)}
        {icons.map((iconMapper, i)=>
            <Icon key={i} {...icons}/>
        )}

    </li>
);

export const Icon = ({iconName, actionDropDown,...notify})=> {
    return (
        <li className="dropdown dropdown-extended dropdown-notification">
            <a className="dropdown-toggle">
                <i className={iconName}></i>
                <Notice {...notify}/>
                {/*<IconNotificationDisplay {...data}/>*/}
            </a>
            <ActionDropDown {...actionDropDown}/>
        </li>

    );
};
export const IconNotificationDisplay = ({messages})=> {
    let iconNotifications = [];
    messages.map((message)=> {
        iconNotifications.push(<IconNotificationDisplay key={message.id} {...message}/>);
    });

    return (<ul>{iconNotifications}</ul>);
};
export const IconNotification = ({message})=>(<li className={styles.hide}>{message}</li>);

export const Notice = ({notify})=>(<span className="badge badge-default">{notify}</span>);

export const UserIcon = ({imgLocation, stringName, iconName})=>(
    <a className="dropdown-toggle">
        <img className="img-circle" src={imgLocation} alt="Image of User"/>
        <span className="username">{stringName}</span>
        <i className={iconName}></i>
    </a>
);



export const SidebarMenu = ({searchBar, sidebarHeading, sidebarMenuIcons})=> {
    let active = "active";
    let icons = [];
    sidebarMenuIcons.map((sidebarMenuIcon, i)=> {
        if (i === 0) {
            icons.push(<li className={"nav-item " + active}><SidebarMenuIcon key={i}{...sidebarMenuIcon}/></li>);
        } else {
            icons.push(<li className="nav-item"><SidebarMenuIcon key={i}{...sidebarMenuIcon}/></li>);
        }

    });
    return ( <div className="when-open page-sidebar navbar-collapse collapse">
        <ul className="page-sidebar-menu page-header-fixed">
            <li className="sidebar-search-wrapper"><SearchBar{...searchBar}/></li>
            <SidebarHeading {...sidebarHeading}/>
            {icons}
        </ul>
    </div>);
};

export const SidebarMenuIcon = ({mainIconName, menuName, dropDownIconName})=>(
    <a className="nav-link nav-toggle">
        <i className={mainIconName}></i>
        <span className="selected"></span>
        <span className="title">{menuName}</span>
        <span className="myarrow"><i className={dropDownIconName}></i></span>
    </a>
);

export const SidebarHeading = ({heading})=>(
    <li className="heading">
        <h3 className="uppercase">{heading}</h3>
    </li>
);

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
export const IconProfile = ({iconName, href, stringName, notify})=> {
    let span = <span className="badge badge-success">{notify}</span>;
    return (
        <a href={href}>
            <i className={iconName}>{stringName}</i>
            {notify > 0 ? span : false}
        </a>);
};

export const Divider = ()=>(
    <li className="divider">

    </li>
);
export const ProfileMenu = ({icons, count})=> {
    let iconProfiles = [];
    icons.map((icon, i)=> {
        if (count !== i) {

            iconProfiles.push(<li><IconProfile  key={i} {...icon}/></li>);
        } else {

            iconProfiles.push(<Divider/>);
            iconProfiles.push(<li><IconProfile  key={i} {...icon}/></li>);
        }
    });
    return(
        <ul className="dropdown-menu dropdown-menu-default">
            {iconProfiles}
        </ul>
    );
};

export const ActionDropDownHeader = ({pending,message})=> {
        let newNotifications = <h3><span className="bold">{pending +" "+ message + " "}</span>notifications</h3>;
        let noNewNotifications = <h3><span className="bold">{message}</span></h3>;
    return (

            <li className="external">
                {pending > 0 ? newNotifications : noNewNotifications }
                <a className={pending > 0 ? "":"hide"} href="#">view all</a>
            </li>
    );
};

export const Slider = ({messages})=>(
    <div className="slimScrollDiv">
        <ul className="dropdown-menu-list">
        {messages.map((message,i)=>
            <ActionDropDownMail key={i} {...message}/>
        )}
        </ul>
        <div className="slimScrollBar"></div>
        <div className="slimScrollRail"></div>
    </div>
);

export const ActionDropDownMessage = ({time,iconName,message})=>(
    <li>
        <a>
            <span className="time">{time}</span>
            <span className="details">
                <span  className="label label-sm label-icon label-success edited-label">
                    <i className={iconName}></i>
                </span>
                {message}
            </span>
        </a>
    </li>
);
export const ActionDropDownMail = ({imgLocation,sender,time,message})=>(
    <li>
        <a>
            <span className="photo"><img src={imgLocation} className="img-circle"/></span>
            <span className="subject">
                <span className="time">{time}</span>
                <span className="from">{sender}</span>
            </span>
            <span  className="message">{message}</span>
        </a>
    </li>
);
export const  ActionDropDown =({headings, ...messages})=>(
    <ul className="dropdown-menu">
        <ActionDropDownHeader  {...headings}/>
        <li><Slider {...messages}/></li>
    </ul>
);
export {Navigation as default}

UserIcon.propTypes = {
    imgLocation: React.PropTypes.string,
    stringName: React.PropTypes.string.isRequired,
    iconName: React.PropTypes.string.isRequired
};