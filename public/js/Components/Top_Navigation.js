/**
 * Created by akerr on 8/26/16.
 */
/**
 * Created by akerr on 8/26/16.
 */
import React from "react";

//TODO Examine what properties should be passed add Proptypes and default types..
export class TopMenuNavigation extends React.Component{
    constructor(props){
        super(props);
        this._handleChange= this._handleChange.bind(this);
        let len = props.rightNavigation.iconMapper.length;
        this.state={};
        this.state = this._createState(len);
    }
    render(){
        let mapState = this._convertArrToMap(this.state.whoIsOpen);
        return(
            <RightNavigation UpdateOpened ={this._handleChange} iconState={mapState}{...this.props.rightNavigation}/>
        )
    }
    _createState(count){
        let arr =[];
        for(let i =0; i<count;i++){
            let names = this.props.rightNavigation.iconMapper[i].iconName;
            arr.push([names,false]);
        }
        let names = this.props.rightNavigation.userIcon.iconName;
        arr.push([names,false]);
        return {whoIsOpen:arr};
    }
    _convertArrToMap(arr){
        let myMap = new Map(arr);
        return myMap;
    }
    _convertMapToArr(map){
        let arr =[];
        for(let [key,value] of map){
            arr.push([key,value]);
        }
        return arr;
    }
    _handleChange(state){
        let arr = this._convertMapToArr(state);
        this.setState({whoIsOpen:arr});
    }
}
//TODO Examine what properties should be passed add Proptypes and default types..
//
export const RightNavigation = ({iconMapper, userIcon, iconProfiles,iconState, UpdateOpened})=>(
    <div className="top-menu">
        {console.log(iconState)}
        <ul className="nav pull-right navbar-nav">
            {iconMapper.map((icon)=>(
                <Icon UpdateOpened ={UpdateOpened} iconState = {iconState} {...icon}/>
            ))}
            <UserProfile UpdateOpened ={UpdateOpened} iconState ={iconState} userIcon = {userIcon} iconProfiles={iconProfiles}/>
        </ul>
    </div>
);

//TODO Examine what properties should be passed add Proptypes and default types..
export class UserProfile extends React.Component{
    render(){
        let classes = "dropdown dropdown-user nav-dropdown";
        if (this._isTrue()){
            classes+=" isOpen";
        }

        return(
            <li onClick={()=>this._handleClick()} className={classes}>
                <UserIcon  {...this.props.userIcon}/>
                <ProfileMenu  {...this.props.iconProfiles}/>
            </li>);

    }
    _isTrue(){
        let iconName = this.props.userIcon.iconName;
        let myMap = this.props.iconState;
        return myMap.get(iconName);
    }
    _handleClick(){
        let myMap = this.props.iconState;
        let iconName = this.props.userIcon.iconName;
        for (let [key, value] of this.props.iconState){
            key===iconName ? myMap.set(key,!value):myMap.set(key,false);
        }
        this.props.UpdateOpened(this.props.iconState);
    }
}
//TODO Examine what properties should be passed add Proptypes and default types..
export class Icon extends React.Component{
    render(){
        let classes = "dropdown dropdown-extended dropdown-inbox nav-dropdown";
        if(this._isTrue()){
            classes += " isOpen";
        }
        return(<li onClick={()=>this._handleClick()} className={classes}>
            <a className="dropdown-toggle">
                <i className={this.props.iconName}></i>
                <Notice notify={this.props.notify}/>
                {/*<IconNotificationDisplay {...data}/>*/}
            </a>
            <ActionDropDown {...this.props.actionDropDown}/>
        </li>);
    }
    _isTrue(){
        let iconName = this.props.iconName;
        let myMap = this.props.iconState;
        return myMap.get(iconName);
    }
    _handleClick(){
        let myMap = this.props.iconState;
        let iconName = this.props.iconName;
        for (let [key, value] of this.props.iconState){
            key===iconName ? myMap.set(key,!value):myMap.set(key,false);
        }
        this.props.UpdateOpened(this.props.iconState);
    }
}

//TODO Examine what properties should be passed add Proptypes and default types..
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
//TODO Examine what properties should be passed add Proptypes and default types..
export const UserIcon = ({imgLocation, stringName, iconName})=>(
    <a className="dropdown-toggle">
        <img className="img-circle" src={imgLocation} alt="Image of User"/>
        <span className="username">{stringName}</span>
        <i className={iconName}></i>
    </a>
);
export const Notice = ({notify})=>(<span className="badge badge-default">{notify}</span>);
//TODO Examine what properties should be passed add Proptypes and default types..
export const IconProfile = ({iconName, href, stringName, notify})=> {
    let span = <span className="badge badge-success">{notify}</span>;
    return (
        <a href={href}>
            <i className={iconName}>{stringName}</i>
            {notify > 0 ? span : false}
        </a>);
};
//TODO Examine what properties should be passed add Proptypes and default types..
export const Divider = ()=>(
    <li className="divider">

    </li>
);
//TODO Examine what properties should be passed add Proptypes and default types..
export const  ActionDropDown =({headings, ...messages})=>(
    <ul className="dropdown-menu">
        <ActionDropDownHeader  {...headings}/>
        <li><Slider {...messages}/></li>
    </ul>
);

//TODO Examine what properties should be passed add Proptypes and default types..
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

//TODO Examine what properties should be passed add Proptypes and default types..
export const Slider = ({messages})=>(
    <div className="slimScrollDiv">
        <ul className="dropdown-menu-list">
            {messages.map((message,i)=>
                <ActionDropDownTask key={i}/>
            )}
        </ul>
        <div className="slimScrollBar"></div>
        <div className="slimScrollRail"></div>
    </div>
);

//TODO Examine what properties should be passed add Proptypes and default types..
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
//TODO Examine what properties should be passed add Proptypes and default types..
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
//TODO Examine what properties should be passed add Proptypes and default types..
export const ActionDropDownTask = ()=>(
    <li>
        <a>
            <span className="task">
                <span className="desc">new Release</span>
                <span className="percent">30%</span>
            </span>
            <span className="progress">
                <span className="progress-bar progress-bar-success">
                    <span className="sr-only">40% Complete</span>
                </span>
            </span>
        </a>
    </li>
);

UserIcon.propTypes = {
    imgLocation: React.PropTypes.string,
    stringName: React.PropTypes.string.isRequired,
    iconName: React.PropTypes.string.isRequired
};