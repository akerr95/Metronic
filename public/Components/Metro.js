/**
 * Created by akerr on 8/6/16.
 */
var React = require("react");


class Navigation extends React.Component {
    constructor(){
        super();
        this.state={notifyMessage:"No Message"};
        this._handleButton = this._handleButton.bind(this);
    }
    render() {
        return (<div>
            <Identity info = {this.props.info.identityInfo}/>
            <Menu/>
            <Main_Menu info = {this.props.info.mainMenuInfo} special = {this.state.notifyMessage}/>
            <Button Clicked={this._handleButton}/>
        </div>);
    }
    _handleButton(message){
        this.setState({notifyMessage:message});
    }
}

class Button extends React.Component{
    constructor(){
        super();
        this._sendNotification = this._sendNotification.bind(this);
    }

    render(){
        return(
            <button onClick={this._sendNotification}>Update Notification</button>

        );
    }
    _GenMessage(){
        return "Hello this is a Notification";
    }
    _sendNotification(){
        this.props.Clicked(this._GenMessage());
    }
}

class Identity extends React.Component {
    render() {
        return (
            <a href={this.props.info.index}>
                <img src={this.props.info.logo_Img} alt={this.props.info.alt}/>
            </a>
        );
    }
}
class Menu extends React.Component {
    render() {
        return (
            <a href="#">
                <p>Vision</p>
            </a>
        );
    }
}
class Main_Menu extends React.Component {
    render() {
        var icons = [];
        this.props.info.icons.map((icon)=>{
            icons.push(<Icon key = {icon.name} info = {icon} special = {this.props.special}/>);
        });
        return (
            <ul>
                {icons}
            </ul>
        );
    }
}

class Icon extends React.Component {
    render() {
        return (
            <li>
                <a href="#">
                    <i className={this.props.info.name}>{this.props.info.iconImg}</i>
                    <Notice info={this.props.info.notify}/>
                </a>
                <IconNotificationDisplay special ={this.props.special}/>
            </li>
        );
    }
}

class IconNotificationDisplay extends React.Component{
    render(){
        return(<ul>
            <li>{this.props.special}</li>
        </ul>);
    }
}

class Notice extends React.Component{
    render(){
        return(
            <span>{this.props.info}</span>
        );
    }
}



module.exports = {
    Navigation
};