/**
 * Created by akerr on 8/26/16.
 * Fixed Header nav Menu is always situated at the top of a navigation header.
 */
import React from "react";



//TODO Examine what properties should be passed add Proptypes and default types..
export class TopMenuNavigation extends React.Component {
    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
        this.state = {};
        this.state = this._createState(len);
    }

    render() {
        // let stateMap = ConvertArrToMap(this.state.whoIsOpen);
        return (
            <TopMenuNav passedState={stateMap} callback={this._handleChange}/>
        )
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

    _handleChange(state) {
        let iconStateParameters = ConvertMapToArr(state);
        this.setState({whoIsOpen: iconStateParameters});
    }
}

/************************
 * State-Full Components*
 ***********************/

/***************************
 * Pure Stateless Components*
 ***************************/
export const UserProfile = ({data,passedState,styles,callback})=>(
    <li onClick={()=>{
        IconTriggered(data.triggerName,passedState,callback);
    }} className={styles.liClassName += isOpen(data.triggerName,passedState)}>
        <UserIcon/>
        <ProfileMenu/>
    </li>
);
UserProfile.propTypes = {
    data: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    styles: React.PropTypes.object,
    callback: React.PropTypes.func
};
UserProfile.defaultProps ={
    data:{triggerName:"icon-plus"},
    styles: {liClassName:"dropdown dropdown-user nav-dropdown "},
    callback:()=>{console.log("No callback passed")}
};

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

export const Icon = ({data,styles,passedState,callback})=>(
    <li onClick={()=>{
        IconTriggered(data.triggerName,passedState,callback);
    }} className={styles.liClassName += isOpen(data.triggerName,passedState)}>
        <a className={styles.aClassName}>
            <i className={data.iconName}></i>
            <Notice/>
        </a>
        <ActionDropDown data={data.ActionDropDown} passedState={passedState} callback={callback}/>
    </li>
);
Icon.propTypes = {
    data: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    styles: React.PropTypes.object,
    callback: React.PropTypes.func
};
Icon.defaultProps ={
  data:{iconName:"icon-plus",triggerName:"fire"},
  callback:()=>{console.log("Me gusta");} ,
  styles:{
      liClassName: "dropdown dropdown-extended nav-dropdown ",
      aClassName: "dropdown-toggle",
  }
};

export const ProfileMenu = ({data,passedState, callback, styles})=>(
    <ul onMouseLeave={()=>{IconTriggered(data.triggerName,
        passedState.iconState,
        callback);}} className={styles.ulClassName}>
        {populateElement(data.iconProfiles)}
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

export const ActionDropDown = ({data, element, callback, passedState, styles})=>(
    <ul onMouseLeave={function () {
        IconTriggered(data.triggerName,
            passedState.iconState,
            callback);
    }} className={styles.ulClassName}>
        {element.header}
        <li>{element.body}</li>
    </ul>
);
ActionDropDown.propTypes = {
    data: React.PropTypes.object,
    element: React.PropTypes.object,
    passedState: React.PropTypes.object.isRequired,
    styles: React.PropTypes.object,
    callback: React.PropTypes.func
};
ActionDropDown.defaultProps = {
    data: {triggerName: "icon-fire"},
    element: {header: <div></div>, body: <div></div>},
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
        imgLocation: "http://bit.ly/2bSKJyn",
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

export const TopMenuNav =({data,passedState,styles,callback})=>(
    <div className={styles.divClassName}>
        <ul className={styles.ulClassName}>
            {populateElement(data.Icons)}
            <UserProfile  passedState={passedState}/>
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
    data:{Icons:new Map([[{},Divider]])},
    styles: {divClassName:"top-menu",ulClassName:"nav pull-right navbar-nav"},
    callback: ()=>{console.log("No callback provided.");}
};

/*****************
 * Pure Functions*
 *****************/
export function IconTriggered(triggerName, iconState, fn) {
    let stateMap = new Map();
    for (let [key, value] of iconState) {
        key === triggerName ? stateMap.set(key, !value) : stateMap.set(key, false);
    }
    fn(stateMap);
}
export function populateElement(elements) {
    let result = [];
    for (let [{data, styles, callback, passedState},element] of elements) {
        result.push(React.createElement(element, {
            data: data,
            styles: styles,
            callback: callback,
            passedState: passedState
        }));
    }
    return result;
}
export function isOpen(elClassName,elState,customClass){
    customClass = customClass ||{};
    return elState.get(elClassName) ? customClass.first||"isOpen": customClass.second || "isClosed";
}
function ConvertMapToArr(stateMap) {
    let iconStateParameters = [];
    for (let [key,value] of stateMap) {
        iconStateParameters.push([key, value]);
    }
    return iconStateParameters;
}
function ConvertArrToMap(iconStateParameters) {
    let stateMap = new Map(iconStateParameters);
    return stateMap;
}