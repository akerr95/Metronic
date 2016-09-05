/**
 * Created by akerr on 8/26/16.
 * Fixed Header nav Menu is always situated at the top of a navigation header.
 */
import React from "react";

var _dropDownMap = new Map();

//TODO Examine what properties should be passed add Proptypes and default types..
export class TopMenuNavigation extends React.Component {
    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
        let len = props.fixedNavigation.iconMapper.length;
        this.state = {};
        this.state = this._createState(len);
    }

    render() {
        let {topMenuNavigation, icon, userProfile} = this.props.classes;
        let stateMap = this._convertArrToMap(this.state.whoIsOpen);
        let icons = this._populateIcons(stateMap, icon);
        return (<div className={topMenuNavigation.divClassName}>
            <ul className={topMenuNavigation.ulClassName}>
                {icons}
                <UserProfile classes={userProfile} updateOpened={this._handleChange} iconState={stateMap}
                             userIcon={this.props.fixedNavigation.userIcon}
                             iconProfiles={this.props.fixedNavigation.iconProfiles}/>
            </ul>
        </div>)
    }

    _populateIcons(stateMap, classes) {
        let icons = [];
        this.props.fixedNavigation.iconMapper.map((icon)=> {
            icons.push(<Icon key={icon.iconName} classes={classes} updateOpened={this._handleChange}
                             iconState={stateMap} {...icon}/>);
        });
        return icons;

    }

    _createState(count) {
        let iconStateParameters = [];
        for (let i = 0; i < count; i++) {
            let names = this.props.fixedNavigation.iconMapper[i].iconName;
            iconStateParameters.push([names, false]);
        }
        let names = this.props.fixedNavigation.userIcon.iconName;
        iconStateParameters.push([names, false]);
        return {whoIsOpen: iconStateParameters};
    }

    _convertArrToMap(iconStateParameters) {
        let stateMap = new Map(iconStateParameters);
        return stateMap;
    }

    _convertMapToArr(stateMap) {
        let iconStateParameters = [];
        for (let [key,value] of stateMap) {
            iconStateParameters.push([key, value]);
        }
        return iconStateParameters;
    }

    _handleChange(state) {
        let iconStateParameters = this._convertMapToArr(state);
        this.setState({whoIsOpen: iconStateParameters});
    }
}

//TODO Examine what properties should be passed add Proptypes and default types..
export class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this._handleIconClick = IconClicked;
        this._handleIconClick = this._handleIconClick.bind(this);
    }

    render() {
        let {liClassName, userIcon, profileMenu}=this.props.classes;
        let classes = liClassName;
        if (this._isTrue()) {
            classes += " isOpen";
        }

        return (
            <li onClick={this._handleIconClick} className={classes}>
                <UserIcon classes={userIcon} {...this.props.userIcon}/>
                <ProfileMenu classes={profileMenu}
                             updateOpened={this.props.updateOpened}
                             iconState={this.props.iconState}
                             triggerName={this.props.userIcon.iconName}
                             {...this.props.iconProfiles}/>
            </li>);

    }

    _isTrue() {
        let iconName = this.props.userIcon.iconName;
        let stateMap = this.props.iconState;
        return stateMap.get(iconName);
    }

}

//TODO Examine what properties should be passed add Proptypes and default types..
export class Icon extends React.Component {

    constructor(props) {
        super(props);
        this._handleIconClick = IconClicked;
        this._handleIconClick = this._handleIconClick.bind(this);
    }

    render() {
        let {liClassName, aClassName, notify, actionDropDown} = this.props.classes;
        liClassName += this.props.liClassName;
        if (this._isClosedTrue()) {
            liClassName += " isOpen";
        }
        return (<li onClick={this._handleIconClick} className={liClassName}>
            <a className={aClassName}>
                <i className={this.props.iconName}></i>
                <Notice totalNotifications={this.props.notify} {...notify}/>
            </a>
            <ActionDropDown dropDownOpt={this.props.liClassName}
                            actionDropDown={this.props.actionDropDown}
                            triggerName={this.props.iconName}
                            updateOpened={this.props.updateOpened}
                            iconState={this.props.iconState}
                            classes={actionDropDown}/>
        </li>);
    }

    _isClosedTrue() {
        let iconName = this.props.iconName;
        let stateMap = this.props.iconState;
        return stateMap.get(iconName);
    }

}

//TODO Examine what properties should be passed add Proptypes and default types..
export class ProfileMenu extends React.Component {
    constructor(props) {
        super(props);
        this._LostFocus = IconClicked;
        this._LostFocus = this._LostFocus.bind(this);
    }

    render() {
        let {ulClassName, divider, iconProfile} = this.props.classes;
        let iconProfiles = this._PopulateIconProfile(divider, iconProfile);

        return (
            <ul onMouseLeave={this._LostFocus} className={ulClassName}>
                {iconProfiles}
            </ul>
        );
    }

    _PopulateIconProfile(divider, iconClasses) {
        let iconProfiles = [];
        this.props.icons.map((icon, i)=> {
            if (this.props.count !== i) {
                iconProfiles.push(<li key={icon.iconName}><IconProfile classes={iconClasses}{...icon}/></li>);
            } else {
                iconProfiles.push(<Divider classes={divider} key={"Divider"}/>);
                iconProfiles.push(<li key={icon.iconName}><IconProfile classes={iconClasses}{...icon}/></li>);
            }
        });
        return iconProfiles;
    }
}
//TODO Examine what properties should be passed add Proptypes and default types..
export const UserIcon = ({imgLocation, stringName, iconName, classes})=>(
    <a className={classes.aClassName}>
        <img className={classes.imgClassName} src={imgLocation} alt="Image of User"/>
        <span className={classes.spanClassName}>{stringName}</span>
        <i className={iconName}></i>
    </a>
);
UserIcon.propTypes = {
    imgLocation: React.PropTypes.string,
    stringName: React.PropTypes.string.isRequired,
    iconName: React.PropTypes.string.isRequired
};
export const Notice = ({totalNotifications, spanClassName})=>(
    <span className={spanClassName}>{totalNotifications}</span>);
//TODO Examine what properties should be passed add Proptypes and default types..
export const IconProfile = ({iconName, href, stringName, notify, classes})=> {
    let span = <Notice spanClassName={classes.noticeClassName} totalNotifications={notify}/>;
    return (
        <a href={href}>
            <i className={iconName}>{stringName}</i>
            {notify > 0 ? span : false}
        </a>);
};

//TODO Examine what properties should be passed add Proptypes and default types..
// export const ActionDropDownHeader = ({pending,message,classes})=> {
//     let {spanClassName,liClassName } = classes;
//     let newNotifications = <h3><span className={spanClassName}>{pending +" "+ message + " "}</span>notifications</h3>;
//     let noNewNotifications = <h3><span className={spanClassName}>{message}</span></h3>;
//     return (
//
//         <li className={liClassName}>
//             {pending > 0 ? newNotifications : noNewNotifications }
//             <a className={pending > 0 ? "":"hide"} href="#">view all</a>
//         </li>
//     );
// };


/************************
 * State-Full Components*
 ***********************/

// export class ActionDropDown extends React.Component {
//     constructor(props) {
//         super(props);
//         this._LostFocus = IconClicked;
//         this._LostFocus = this._LostFocus.bind(this);
//     }
//
//     render() {
//         let {ulClassName, actionDropDownHeader, slider} =this.props.classes;
//
//         return ( <ul onMouseLeave={()=> {
//             this._LostFocus(this.props.triggerName, this.props.iconState, this.props.updateOpened);
//         }} className={ulClassName}>
//             <ActionDropDownHeader classes={actionDropDownHeader} {...this.props.actionDropDown.headings}/>
//             <li><Slider classes={slider}
//                         dropDownOpt={this.props.dropDownOpt}
//                         messages={this.props.actionDropDown.messages}/>
//             </li>
//         </ul>);
//     }
// }

/***************************
 * Pure Stateless Components*
 ***************************/
export const ActionDropDown = ({data,element, callback, passedState, styles})=>(
    <ul onMouseLeave={function () {
        IconClicked(data.triggerName,
            passedState.iconState,
            callback);
    }} className={styles.ulClassName}>
        {element.header}
        <li>{element.body}</li>
    </ul>
);
ActionDropDown.propTypes = {
    data:React.PropTypes.object,
    element:React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    styles: React.PropTypes.object,
    callback: React.PropTypes.func
};
ActionDropDown.defaultProps = {
    data:{triggerName:"icon-fire"},
    element:{header:<div></div>,body:<div></div>},
    styles:{ulClassName:"dropdown-menu"},
    callback:()=>{console.error("Please specify a callback function")},
};
export const ActionDropDownHeader = ({data, styles})=>(
    <li className={styles.liClassName}>
        <h3 className={styles.head}>
            <span className={styles.bold}>{data.pending + " " + data.subject + " "}</span>
            {data.heading}
        </h3>
        <a className={styles.aClassName}>{data.actionMessage}</a>
    </li>
);
ActionDropDownHeader.propTypes = {
    data: React.PropTypes.object,
    styles: React.PropTypes.object
};
ActionDropDownHeader.defaultProps = {
    data: {pending: "one", subject: "Default", heading: "view all"},
    styles: {head: "", bold: "bold", liClassName: "external", aClassName: ""}
};
export const Divider = ({styles})=>(
    <li className={styles.liClassName}></li>
);
Divider.propTypes = {
    styles: React.PropTypes.object
};
Divider.defaultProps = {
    styles: {liClassName: "divider"}
};
export const ActionDropDownError = ({data, styles})=> (
    <span>
                <span className={styles.err}>{data.errorMessage}</span>
                <ul><Divider/></ul>
                <span className={styles.solution}>{data.solution}</span>
        </span>
);
ActionDropDownError.propTypes = {
    data: React.PropTypes.shape({
        errorMessage: React.PropTypes.string.isRequired,
        solution: React.PropTypes.string.isRequired
    }),
    styles: React.PropTypes.object
};
ActionDropDownError.defaultProps = {
    styles: {err: "error", solution: "solution"}
};
export const Slider = ({data, styles})=> (
    <div className={styles.slider}>
        <ul className={styles.ul}>
            {data}
        </ul>
        <div className={styles.bar}></div>
        <div className={styles.rail}></div>
    </div>
);
Slider.propTypes = {
    data: React.PropTypes.element.isRequired,
    styles: React.PropTypes.object,
};
Slider.defaultProps = {
    styles: {
        slider: "slimScrollDiv",
        ul: "dropdown-menu-list",
        bar: "slimScrollBar",
        rail: "slimScrollRail"
    }
};
export const ClickableList = ({data, styles}) =>(
    <li className={styles.liClassName}>
        <a className={styles.aClassName}>
            {data}
        </a>
    </li>
);
ClickableList.propTypes = {
    data: React.PropTypes.element.isRequired,
    styles: React.PropTypes.object
};
ClickableList.defaultProps = {
    styles: {liClassName: "", aClassName: ""}
};
export const ActionDropDownTask = ({data, styles})=>(
    <span>
       <span className={styles.task}>
           <span className={styles.desc}>{data.desc}</span>
           <span className={styles.percent}>{data.percent + '%'}</span>
       </span>
       <span className={styles.progress}>
           <span className={styles.progressbar}>
               <span className={styles.sr}></span>
           </span>
       </span>
   </span>
);
ActionDropDownTask.propTypes = {
    data: React.PropTypes.object,
    styles: React.PropTypes.object
};
ActionDropDownTask.defaultProps = {
    data: {desc: "Metronic V1.0", percent: 40},
    styles: {
        task: "task",
        desc: "desc",
        percent: "percent",
        progress: "progress",
        progressbar: "progress-bar progress-bar-success",
        sr: "sr-only"
    },
};
export const ActionDropDownInbox = ({data, styles})=>(
    <span>
        <span className={styles.photo}><img src={data.imgLocation} className={styles.img || "img-circle"}/></span>
        <span className={styles.subject}>
            <span className={styles.time}>{data.time}</span>
            <span className={styles.from}>{data.sender}</span>
        </span>
        <span className={styles.message}>{data.message}</span>
    </span>
);
ActionDropDownInbox.propTypes = {
    data: React.PropTypes.object,
    styles: React.PropTypes.object
};
ActionDropDownInbox.defaultProps = {
    data: {
        imgLocation: "https://d13yacurqjgara.cloudfront.net/users/559591/screenshots/2928328/wild_west_bandit_tubik_illustration_art_design_colors_character_brush_adobe_arthur_avakyan_1x.jpg",
        sender: "Alec",
        time: "just now",
        message: "Default message.",
    },
    styles: {
        photo: "photo",
        img: "img-circle",
        subject: "subject",
        time: "time",
        from: "from",
        message: "message"
    }
};
export const ActionDropDownNotify = ({data, styles})=>(
    <span>
            <span className={styles.time}>{data.time}</span>
            <span className={styles.details}>
                <span className={styles.label}>
                    <i className={data.iconName}></i>
                </span>
                {data.message}
            </span>
     </span>
);
ActionDropDownNotify.propTypes = {
    data: React.PropTypes.object,
    styles: React.PropTypes.object
};
ActionDropDownNotify.defaultProps = {
    data: {time: "just now", message: "this is a default message", iconName: "fa fa-plus"},
    styles: {time: "time", details: "details", label: "label label-sm label-icon label-success edited-label"}
};

/*****************
 * Pure Functions*
 *****************/
export function IconClicked(triggerName, iconState, fn) {
    let stateMap = new Map();
    for (let [key, value] of iconState) {
        key === triggerName ? stateMap.set(key, !value) : stateMap.set(key, false);
    }
    fn(stateMap);
}