/**
 * Created by akerr on 8/6/16.
 */
var React = require("react");
var style = require("./Styles/Metronic.css");
var myFunctions = require("../Extra Functionality/componentTools.js");


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this._iconsHandler = this._iconsHandler.bind(this);
        this._handleButton = this._handleButton.bind(this);
        let myMap = this._iconsMount();
        let temp = this._iconsHandler(myMap);
        this.state = {notifyMessage: temp};

    }

    componentWillMount() {
        //this._iconsHandler();
    }

    _iconsMount() {
        let myMap = new Map();

        this.props.info.mainMenuInfo.icons.map((icon)=> {
            let mySet = new Set();
            mySet.add("No new notifications");
            myMap.set(icon.name, mySet);
        });

        return myMap;
    }

    _iconsHandler(mapStructure) {
        let arr = [];
        for (var [key,value] of mapStructure) {
            arr.push([key, value]);
        }
        //console.log(arr);
        return arr;

    }

    render() {
        return (<div>
            <div className={style.page_header_navbar + " navbar-fixed-top"}>
                <div className={"page-header-inner"}>
                    <div className={style.page_logo}>
                        <Identity info={this.props.info.identityInfo}/>
                        <div className={style.menu_trigger}>
                        <Menu/>
                    </div>
                    </div>
                    <div className={style.top_menu} >
                    <Main_Menu info={this.props.info.mainMenuInfo} special={this.state.notifyMessage}/>
                    </div>
                    </div>
            </div>
            <div style={{position: 'relative',top: '250px'}}>
                <Button Clicked={this._handleButton} name={"Home"}/>
                <Button Clicked={this._handleButton} name={"Settings"}/>
                <Button Clicked={this._handleButton} name={"Profile"}/>
            </div>
        </div>);
    }

    _handleButton(message) {
        let temps = new Map(this.state.notifyMessage);

        for (let key of message.keys()) {
            if (temps.has(key)) {
                temps.delete(key);
                temps.set(key, message.get(key));
            }
        }

        let arr = this._iconsHandler(temps);
        // this._iconsUpdateHandler();
        this.setState({notifyMessage: arr});
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this._sendNotification = this._sendNotification.bind(this);
        let temp = this._GenMessage();
        this.state = {generated: temp, firstRun: true};
    }

    render() {
        return (
            <button onClick={this._sendNotification}>Update Notification</button>

        );
    }

    _UpdateMessage() {
        let temp = this.state.generated;
        let size = temp.get(this.props.name).size;
        size += 1;
        temp.get(this.props.name).add("New Notification example" + size);
        return temp;
    }

    _GenMessage() {
        let myMap = new Map();
        let mySet = new Set();

        mySet.add("New Notification example");
        myMap.set(this.props.name, mySet);
        return myMap;
    }

    _sendNotification() {
        if (this.state.firstRun) {
            this.props.Clicked(this.state.generated);
            this.state.firstRun = false;
        } else {
            this.props.Clicked(this._UpdateMessage());
        }

    }
}

class Identity extends React.Component {
    render() {
        return (
            <a href={this.props.info.index}>
                <img className={style.logo_default} src={this.props.info.logo_Img} alt={this.props.info.alt}/>
            </a>
        );
    }
}
class Menu extends React.Component {
    render() {
        return (
            <span></span>
        );
    }
}
class Main_Menu extends React.Component {
    render() {

        let icons = [];
        this.props.info.icons.map((icon, index)=> {
            icons.push(<Icon key={icon.name} info={icon} special={this.props.special[index]}/>);
        });
        return (
            <ul className={"nav " + style.navbar_nav+ " pull-right"+" navbar-nav"}>
                {icons}
            </ul>

        );
    }
}

class Icon extends React.Component {
    render() {
        let temp = new Set();
        this.props.special.forEach((item)=> {
            if (typeof item !== 'string') {
                temp = item;
            }
        });
        return (
            <li className={"dropdown"}>
                <a className={style.dropdown_toggle}>
                    <i className={this.props.info.name}></i>
                    <Notice info={this.props.info.notify}/>
                </a>
                <IconNotificationDisplay special={temp}/>
            </li>
        );
    }
}

class IconNotificationDisplay extends React.Component {
    render() {
        let iconNotification = [];
        let keys = myFunctions.UniqueId('Icon' + this.props.special, this.props.special.size);

        let index = 0;
        for (let item of this.props.special) {
            iconNotification.push(<IconNotification key={keys[index]} special={item}/>);
            index++;
        }
        return (<ul>
            {iconNotification}
        </ul>);
    }
}

class IconNotification extends React.Component {
    render() {
        return (
            <li className>{this.props.special}</li>
        );
    }
}
class Notice extends React.Component {
    render() {
        return (
            <span className={"badge"}>{this.props.info}</span>
        );
    }
}

module.exports = {
    Navigation
};