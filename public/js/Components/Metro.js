/**
 * Created by akerr on 8/6/16.
 */
import React from "react";
import styles from "../../css/less/Metronic.less";
// import CSSMODULES from "react-css-modules";
import myFunctions from "../Extra Functionality/componentTools.js";
import * as myConst from "../Extra Functionality/myConst.js";


export const Navigation = ({leftNavigation, rightNavigation})=>(
    <div className={"navbar-fixed-top " + styles.pageHeaderNavbar}>
        <div className="page-header-inner">

            <LeftNavigation{...leftNavigation}/>
            <RightNavigation {...rightNavigation}/>
        </div>
    </div>
);

export const LeftNavigation = ({companyIdentity,sidebarMenu})=>(
    <div className={styles.pageLogo}>
        <CompanyIdentity {...companyIdentity}/>
        <div className={styles.menuTrigger}>
            <SidebarMenu {...sidebarMenu}/>
        </div>
    </div>
);
export const RightNavigation = ({iconMapper,userIcon})=>(
    <div className={styles.topMenu}>
        <ul className={"nav pull-right navbar-nav " + styles.navBarNav}>
            {/*<IconMapper {...iconMapper}/>*/}
            {iconMapper.map((icon)=>
                <Icon {...icon}/>
            )}
            <li className="dropdown-user"><UserIcon {...userIcon}/></li>
        </ul>
    </div>
);

export const Button = ()=>(
    <button>Update Notification</button>
);


export const CompanyIdentity = ({index,alt,imgLocation})=>(
    <a href={index}>
        <img className={styles.logoDefault} src={imgLocation} alt={alt}/>
    </a>
);

export const SidebarMenu = ({iconName})=>(
    <li className="dropdown">
        <a className={styles.dropDownToggle}>
            <i className={iconName}></i>
        </a>
    </li>
);

export const IconMapper = ({icons})=> (
    <li className="dropdown">
        {console.log(icons)}
        {icons.map((iconMapper,i)=>
            <Icon key={i} {...icons}/>
        )}

    </li>
);

export const Icon = ({iconName,...notify})=> {
    return (
        <li className="dropdown">
            {console.log(notify)}
            <a className={styles.dropDownToggle}>
                <i className={iconName}></i>
                <Notice {...notify}/>
                {/*<IconNotificationDisplay {...data}/>*/}
            </a>
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
export const Notice = ({notify})=>(<span className="badge">{notify}</span>);

export const UserIcon = ({imgLocation, stringName, iconName})=>(
    <a className={styles.dropDownToggle}>
        <img className={styles.imgCircle} src={imgLocation} alt="Image of User"/>
        <span className={styles.userName}>{stringName}</span>
        <i className={iconName}></i>
    </a>
);

UserIcon.propTypes = {
    imgLocation: React.PropTypes.string,
    stringName: React.PropTypes.string.isRequired,
    iconName: React.PropTypes.string.isRequired
};




