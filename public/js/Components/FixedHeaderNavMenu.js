/**
 * Created by akerr on 8/26/16.
 * Fixed Header nav Menu is always situated at the top of a navigation header.
 */
import React from "react";
import * as PureFunc from './PureFunctions.js';
/************************
 * State-Full Components*
 ***********************/
export class TopMenuNavContainer extends React.Component {
    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
        this.state = {};
    }

    render() {
        return (
            <TopMenuNav data={this.props.data} passedState={this.props.passedState} callback={this._handleChange}/>
        )
    }

    _createState(count) {
        let iconStateParameters = [];
        for (let i = 0; i < count; i++) {
            let names = this.props.data.Icon.iconName;
            iconStateParameters.push([names, false]);
        }
        let names = this.props.fixedNavigation.userIcon.iconName;
        iconStateParameters.push([names, false]);
        return {whoIsOpen: iconStateParameters};
    }

    _handleChange(state) {
        let iconStateParameters = PureFunc.ConvertMapToArr(state);
        this.setState({whoIsOpen: iconStateParameters});
    }
}
TopMenuNavContainer.propTypes={
   data:React.PropTypes.object,
   styles:React.PropTypes.object
};
TopMenuNavContainer.defaultProps ={
    data:{},
    styles:{}
};
/***************************
 * Pure Stateless Components*
 ***************************/


export const IconProfile = ({data}) => (
    <li>
    <a href={data.href}>
        <i className={data.iconName}>{data.stringName}</i>
    </a>
        </li>
);
IconProfile.propTypes = {
    data: React.PropTypes.object,
};
IconProfile.defaultProps = {
    data: {href: "#", iconName: "icon-lock", stringName: "Lock"}
};


export const ProfileMenu = ({data,passedState, callback, styles})=>(
    <ul onMouseLeave={()=>{PureFunc.IconTriggered(data.triggerName,
        passedState.iconState,
        callback);}} className={styles.ulClassName}>
        {PureFunc.populateElement(data.iconProfiles,passedState,callback)}
    </ul>
);
ProfileMenu.propTypes = {
    data: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    styles: React.PropTypes.object,
    callback: React.PropTypes.func
};
ProfileMenu.defaultProps = {
    data:{iconProfiles:new Map([
        [{},IconProfile],
        [{iconName:"icon-plus",href:"#",stringName:"tester"},IconProfile]
    ])},
    styles: {ulClassName: "dropdown-menu dropdown-menu-default"},
    callback:()=>{console.error("No Callback Provided")}
};

export const UserIcon = ({data, styles})=>(
    <a className={styles.aClassName}>
        <img className={styles.imgClassName} src={data.imgLocation} alt="Image of User"/>
        <span className={styles.spanClassName}>{data.stringName}</span>
        <i className={data.iconName}></i>
    </a>
);
UserIcon.propTypes = {
    data: React.PropTypes.object,
    styles: React.PropTypes.object
};
UserIcon.defaultProps = {
    data: {
        imgLocation: "http://bit.ly/2bSKJyn",
        stringName: "Alec",
        iconName: "icon-lock"
    },
    styles: {
        aClassName: "dropdown-toggle",
        imgClassName: "img-circle",
        spanClassName: "username"
    }
};

export const Notice = ({data, style})=>(
    <span className={style.notice}>{data.notifyCount}</span>
);
Notice.propTypes = {
    data: React.PropTypes.object.isRequired,
    style: React.PropTypes.object
};
Notice.defaultProps = {
    data: {notifyCount: 7},
    style: {notice: "badge badge-default"}
};

export const ActionDropDown = ({data,callback, passedState, styles})=>(
    <ul onMouseLeave={function () {
        PureFunc.IconTriggered(data.triggerName,
            passedState,
            callback);
    }} className={styles.ulClassName}>
        {PureFunc.populateElement(data.header)}
        {PureFunc.populateElement(data.body)}
    </ul>
);
ActionDropDown.propTypes = {
    data: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    styles: React.PropTypes.object,
    callback: React.PropTypes.func
};
ActionDropDown.defaultProps = {
    data: {header: <div></div>, body: <div></div>,triggerName: "icon-fire"},
    styles: {ulClassName: "dropdown-menu"},
    callback:()=>{console.error("No Callback Provided")}
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
    data: {pending:1, subject: "Default", heading: "notifications" ,actionMessage:"view all"},
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
    <li>
        <a>
    <span>
                <span className={styles.err}>{data.errorMessage}</span>
                <ul><Divider/></ul>
                <span className={styles.solution}>{data.solution}</span>
        </span>
                </a>
    </li>
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

export const ActionDropDownTask = ({data, styles})=>(
<li className={styles.liClassName}>
    <a className={styles.aClassName}>
       <span className={styles.task}>
           <span className={styles.desc}>{data.desc}</span>
           <span className={styles.percent}>{data.percent + '%'}</span>
       </span>
       <span className={styles.progress}>
           <span className={styles.progressbar}>
               <span className={styles.sr}></span>
           </span>
       </span>
    </a>
</li>
);
ActionDropDownTask.propTypes = {
    data: React.PropTypes.object,
    styles: React.PropTypes.object
};
ActionDropDownTask.defaultProps = {
    data: {desc: "Metronic Default V1.0", percent: 40},
    styles: {
        liClassName:"",
        aClassName:"",
        task: "task",
        desc: "desc",
        percent: "percent",
        progress: "progress",
        progressbar: "progress-bar progress-bar-success",
        sr: "sr-only"
    },
};

export const ActionDropDownInbox = ({data, styles})=>(
    <li className={styles.liClassName}>
        <a className={styles.aClassName}>
        <span className={styles.photo}><img src={data.imgLocation} className={styles.img }/></span>
        <span className={styles.subject}>
            <span className={styles.time}>{data.time}</span>
            <span className={styles.from}>{data.sender}</span>
        </span>
        <span className={styles.message}>{data.message}</span>
</a>
</li>

);
ActionDropDownInbox.propTypes = {
    data: React.PropTypes.object,
    styles: React.PropTypes.object
};
ActionDropDownInbox.defaultProps = {
    data: {
        imgLocation: "http://bit.ly/2bSKJyn",
        sender: "Alec",
        time: "just now",
        message: "Default message.",
    },
    styles: {
        liClassName:"",
        aClassName:"",
        photo: "photo",
        img: "img-circle",
        subject: "subject",
        time: "time",
        from: "from",
        message: "message"
    }
};

export const ActionDropDownNotify = ({data, styles})=>(
    <li className={styles.liClassName}>
        <a className={styles.aClassName}>
            <span className={styles.time}>{data.time}</span>
            <span className={styles.details}>
                <span className={styles.label}>
                    <i className={data.iconName}></i>
                </span>
                {data.message}
            </span>
        </a>
    </li>
);
ActionDropDownNotify.propTypes = {
    data: React.PropTypes.object,
    styles: React.PropTypes.object
};
ActionDropDownNotify.defaultProps = {
    data: {time: "just now", message: "this is a default message", iconName: "fa fa-plus"},
    styles: {liClassName:"",aClassName:"",time: "time", details: "details", label: "label label-sm label-icon label-success edited-label"}
};

export const Icon = ({data,styles,passedState,callback})=>(
    <li  onClick={()=>{
        PureFunc.IconTriggered(data.iconName,passedState,callback);
    }} className={styles.liClassName + PureFunc.isOpen(data.iconName,passedState)}>
        <a className={styles.aClassName}>
            <i className={data.iconName}></i>
            <Notice/>
        </a>
        <ActionDropDown data={data.actionDropDown} passedState={passedState} callback={callback}/>
    </li>
);
Icon.propTypes = {
    data: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    styles: React.PropTypes.object,
    callback: React.PropTypes.func
};
Icon.defaultProps ={
    data:{iconName:"icon-plus",triggerName:"fire",actionDropDown:{
        header:new Map([[{},ActionDropDownHeader]]),
        body:new Map([
        [{data:{
            errorMessage:"1 min",
            solution:"Include your own Action Drop Down element",
        }}, ActionDropDownError]
    ])
    }},
    callback:()=>{console.log("Me gusta");} ,
    styles:{
        liClassName: "dropdown dropdown-extended nav-dropdown ",
        aClassName: "dropdown-toggle",
    }
};

export const UserProfile = ({data,passedState,styles,callback})=>(
    <li onClick={()=>{
        PureFunc.IconTriggered(data.userIcon.iconName,passedState,callback);
    }} className={styles.liClassName + PureFunc.isOpen(data.userIcon.iconName,passedState)}>
        <UserIcon data={data.userIcon}/>
        <ProfileMenu data={data.profileMenu} passedState={passedState}/>
    </li>
);
UserProfile.propTypes = {
    data: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    styles: React.PropTypes.object,
    callback: React.PropTypes.func
};
UserProfile.defaultProps ={
    styles: {liClassName:"dropdown dropdown-user nav-dropdown "},
    callback:()=>{console.log("No callback passed")}
};

export const TopMenuNav =({data,passedState,styles,callback})=>(
    <div className={styles.divClassName}>
        <ul className={styles.ulClassName}>
            {PureFunc.populateElement(data.icons,passedState,callback)}
            <UserProfile data={data.userProfile}  passedState={passedState}/>
        </ul>
    </div>
);
TopMenuNav.propTypes ={
    data: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    styles: React.PropTypes.object,
    callback: React.PropTypes.func
};
TopMenuNav.defaultProps ={
    data:{icons:new Map([[{},Divider]])},
    styles: {divClassName:"top-menu",ulClassName:"nav pull-right navbar-nav"},
    callback: ()=>{console.log("No callback provided.");}
};

