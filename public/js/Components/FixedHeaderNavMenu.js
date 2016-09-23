/**
 * Created by akerr on 8/26/16.
 * Fixed Header nav Menu is always situated at the top of a navigation header.
 */
import React from "react";
import {presets,ICON,NOTICE, USERPROFILE} from "../Extra Functionality/MyReactMotionPresets.js";
import {Motion, spring} from "react-motion"
import * as PureFunc from './PureFunctions.js';
/************************
 * State-Full Components*
 ***********************/
export class TopMenuNavContainer extends React.Component {
    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
        this.state = PureFunc.CreateBooleanState(this.props.data.stateKeys);
    }
    _handleChange(state) {
        let iconStateParameters = PureFunc.ConvertMapToArr(state);
        this.setState({elementBool: iconStateParameters});
    }

    render() {
        let stateMap =PureFunc.ConvertArrToMap(this.state.elementBool);
        return (
            <TopMenuNav  data={this.props.data} passedState={stateMap} callback={this._handleChange}/>
        )
    }
}
TopMenuNavContainer.propTypes={
   data:React.PropTypes.object,
   classStyles:React.PropTypes.object
};
TopMenuNavContainer.defaultProps ={
    data:{},
    classStyles:{}
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


export const ProfileMenu = ({data,passedState, callback, classStyles})=>(
    <ul onMouseLeave={()=>{PureFunc.IconTriggered(data.triggerName,
        passedState,callback);}} className={classStyles.ulClassName}>
        {PureFunc.populateElement(data.iconProfiles)}
    </ul>
);
ProfileMenu.propTypes = {
    data: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    classStyles: React.PropTypes.object,
    callback: React.PropTypes.func
};
ProfileMenu.defaultProps = {
    data:{iconProfiles:new Map([
        [{},IconProfile],
        [{iconName:"icon-plus",href:"#",stringName:"tester"},IconProfile]
    ])},
    classStyles: {ulClassName: "dropdown-menu dropdown-menu-default"},
    callback:()=>{console.error("No Callback Provided")}
};

export const UserIcon = ({data, classStyles,style})=>(
    <a className={classStyles.aClassName}>
            <img style={style} className={classStyles.imgClassName} src={data.imgLocation} alt="Image of User"/>
            <span style={style}  className={classStyles.spanClassName}>{data.stringName}</span>
        <i style={style} className={data.iconName}></i>
    </a>
);
UserIcon.propTypes = {
    data: React.PropTypes.object,
    classStyles: React.PropTypes.object
};
UserIcon.defaultProps = {
    data: {
        imgLocation: "http://bit.ly/2bSKJyn",
        stringName: "Alec",
        iconName: "icon-lock"
    },
    classStyles: {
        aClassName: "dropdown-toggle",
        imgClassName: "img-circle",
        spanClassName: "username"
    }
};

export const Notice = ({data, classStyles,style})=>(
    <span style={style} className={classStyles.notice}>
        {data.notifyCount}
    </span>
);
Notice.propTypes = {
    data: React.PropTypes.object.isRequired,
    classStyles: React.PropTypes.object
};
Notice.defaultProps = {
    data: {notifyCount: 7},
    classStyles: {notice: "badge badge-default"}
};

export const ActionDropDown = ({data,callback, passedState, classStyles})=>(
    <ul onMouseLeave={function () {
        PureFunc.IconTriggered(data.triggerName,
            passedState,
            callback);
    }} className={classStyles.ulClassName}>
        {PureFunc.populateElement(data.header)}
        <Slider data ={data.body}/>
    </ul>
);
ActionDropDown.propTypes = {
    data: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    classStyles: React.PropTypes.object,
    callback: React.PropTypes.func
};
ActionDropDown.defaultProps = {
    data: {header: <div></div>, body: <div></div>,triggerName: "icon-fire"},
    classStyles: {ulClassName: "dropdown-menu"},
    callback:()=>{console.error("No Callback Provided")}
};

export const ActionDropDownHeader = ({data, classStyles})=>(
    <li className={classStyles.liClassName}>
        <h3 className={classStyles.head}>
            <span className={classStyles.bold}>{data.pending + " " + data.subject + " "}</span>
            {data.heading}
        </h3>
        <a className={classStyles.aClassName}>{data.actionMessage}</a>
    </li>
);
ActionDropDownHeader.propTypes = {
    data: React.PropTypes.object,
    classStyles: React.PropTypes.object
};
ActionDropDownHeader.defaultProps = {
    data: {pending:1, subject: "Default", heading: "notifications" ,actionMessage:"view all"},
    classStyles: {head: "", bold: "bold", liClassName: "external", aClassName: ""}
};

export const Divider = ({classStyles})=>(
    <li className={classStyles.liClassName}></li>
);
Divider.propTypes = {
    classStyles: React.PropTypes.object
};
Divider.defaultProps = {
    classStyles: {liClassName: "divider"}
};

export const ActionDropDownError = ({data, classStyles})=> (
    <li>
        <a>
    <span>
                <span className={classStyles.err}>{data.errorMessage}</span>
                <ul><Divider/></ul>
                <span className={classStyles.solution}>{data.solution}</span>
        </span>
                </a>
    </li>
);
ActionDropDownError.propTypes = {
    data: React.PropTypes.shape({
        errorMessage: React.PropTypes.string.isRequired,
        solution: React.PropTypes.string.isRequired
    }),
    classStyles: React.PropTypes.object
};
ActionDropDownError.defaultProps = {
    classStyles: {err: "error", solution: "solution"}
};

export const Slider = ({data, classStyles})=> (
    <div className={classStyles.slider}>
        <ul className={classStyles.ul}>
            {PureFunc.populateElement(data)}
        </ul>
        <div className={classStyles.bar}></div>
        <div className={classStyles.rail}></div>
    </div>
);
Slider.propTypes = {
    data: React.PropTypes.object.isRequired,
    classStyles: React.PropTypes.object,
};
Slider.defaultProps = {
    classStyles: {
        slider: "slimScrollDiv",
        ul: "dropdown-menu-list",
        bar: "slimScrollBar",
        rail: "slimScrollRail"
    }
};

export const ActionDropDownTask = ({data, classStyles})=>(
<li className={classStyles.liClassName}>
    <a className={classStyles.aClassName}>
       <span className={classStyles.task}>
           <span className={classStyles.desc}>{data.desc}</span>
           <span className={classStyles.percent}>{data.percent + '%'}</span>
       </span>
       <span className={classStyles.progress}>
           <span className={classStyles.progressbar} style={{width:data.percent+'%'}}>
               <span className={classStyles.sr}></span>
           </span>
       </span>
    </a>
</li>
);
ActionDropDownTask.propTypes = {
    data: React.PropTypes.object,
    classStyles: React.PropTypes.object
};
ActionDropDownTask.defaultProps = {
    data: {desc: "Metronic Default V1.0", percent: 40},
    classStyles: {
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

export const ActionDropDownInbox = ({data, classStyles})=>(
    <li className={classStyles.liClassName}>
        <a className={classStyles.aClassName}>
        <span className={classStyles.photo}><img src={data.imgLocation} className={classStyles.img }/></span>
        <span className={classStyles.subject}>
            <span className={classStyles.time}>{data.time}</span>
            <span className={classStyles.from}>{data.sender}</span>
        </span>
        <span className={classStyles.message}>{data.message}</span>
</a>
</li>

);
ActionDropDownInbox.propTypes = {
    data: React.PropTypes.object,
    classStyles: React.PropTypes.object
};
ActionDropDownInbox.defaultProps = {
    data: {
        imgLocation: "http://bit.ly/2bSKJyn",
        sender: "Alec",
        time: "just now",
        message: "Default message.",
    },
    classStyles: {
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

export const ActionDropDownNotify = ({data, classStyles})=>(
    <li className={classStyles.liClassName}>
        <a className={classStyles.aClassName}>
            <span className={classStyles.time}>{data.time}</span>
            <span className={classStyles.details}>
                <span className={classStyles.label}>
                    <i className={data.iconName}></i>
                </span>
                {data.message}
            </span>
        </a>
    </li>
);
ActionDropDownNotify.propTypes = {
    data: React.PropTypes.object,
    classStyles: React.PropTypes.object
};
ActionDropDownNotify.defaultProps = {
    data: {time: "just now", message: "this is a default message", iconName: "fa fa-plus"},
    classStyles: {liClassName:"",aClassName:"",time: "time", details: "details", label: "label label-sm label-icon label-success edited-label"}
};

export const Icon = ({data,classStyles,passedState,callback})=>(

            <li  onClick={()=>{
                PureFunc.IconTriggered(data.iconName,passedState,callback);
            }} className={classStyles.liClassName + PureFunc.isOpen(data.iconName,passedState)}>
                <a className={classStyles.aClassName}>

                    <Motion style={presets.genScale({iconName:data.iconName,state:passedState},ICON)}>
                        {({scale})=>(
                            <i style={{transform:`scale(${scale})`}} className={data.iconName}></i>
                        )}
                </Motion>
                    <Motion style={presets.genScale({iconName:data.iconName,state:passedState},NOTICE)}>
                        {({scale})=>(
                    <Notice style={{transform:`scale(${scale})`}}  data={data.notice}/>
                    )}
                </Motion>
                </a>
                <ActionDropDown data={data.actionDropDown} passedState={passedState} callback={callback}/>
            </li>

);
Icon.propTypes = {
    data: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    classStyles: React.PropTypes.object,
    callback: React.PropTypes.func
};
Icon.defaultProps ={
    data:{iconName:"icon-plus",triggerName:"fire",actionDropDown:{
        header:new Map([[{},ActionDropDownHeader]]),
        notice:{notifyCount:2},
        body:new Map([
        [{data:{
            errorMessage:"1 min",
            solution:"Include your own Action Drop Down element",
        }}, ActionDropDownError]
    ])
    }},
    callback:()=>{console.log("Me gusta");} ,
    classStyles:{
        liClassName: "dropdown dropdown-extended nav-dropdown ",
        aClassName: "dropdown-toggle",
    }
};

export const UserProfile = ({data,passedState,classStyles,callback})=>(
    <li onClick={()=>{
        PureFunc.IconTriggered(data.userIcon.iconName,passedState,callback);
    }} className={classStyles.liClassName + PureFunc.isOpen(data.userIcon.iconName,passedState)}>
        <Motion style={presets.genScale({iconName:data.userIcon.iconName,state:passedState},USERPROFILE)}>
            {({scale})=>(
                <UserIcon style={{transform:`scale(${scale})`}} data={data.userIcon}/>
            )}

        </Motion>
        <ProfileMenu data={data.profileMenu} passedState={passedState} callback={callback}/>
    </li>
);
UserProfile.propTypes = {
    data: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    classStyles: React.PropTypes.object,
    callback: React.PropTypes.func
};
UserProfile.defaultProps ={
    classStyles: {liClassName:"dropdown dropdown-user nav-dropdown "},
    callback:()=>{console.log("No callback passed")}
};

export const TopMenuNav =({data,passedState,classStyles,callback})=>(
    <div className={classStyles.divClassName}>
        <ul className={classStyles.ulClassName}>
            {PureFunc.populateElement(data.icons,passedState,callback)}
            <UserProfile data={data.userProfile}  passedState={passedState} callback={callback}/>
        </ul>
    </div>
);
TopMenuNav.propTypes ={
    data: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    classStyles: React.PropTypes.object,
    callback: React.PropTypes.func
};
TopMenuNav.defaultProps ={
    data:{icons:new Map([[{},Divider]])},
    classStyles: {divClassName:"top-menu",ulClassName:"nav pull-right navbar-nav"},
    callback: ()=>{console.log("No callback provided.");}
};

