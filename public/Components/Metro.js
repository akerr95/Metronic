/**
 * Created by akerr on 8/6/16.
 */
var React = require("react");

class Navigation extends React.Component {
    constructor(props){
     super(props);
    }
    render() {
        return (<div>
            <Identity info = {this.props.info.identityInfo}/>
            <Menu/>
            <Main_Menu info = {this.props.info.mainMenuInfo}/>
        </div>);
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
        this.props.info.icons.forEach(function(icon){
            icons.push(<Icon info = {icon}/>);
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
                </a>
                <Notice info={this.props.info.notify}/>
            </li>
        );
    }
}

class Notice extends React.Component{
    render(){
        return(
            <span>{this.props.info}</span>
        );
    }
}


Navigation.propTypes = {
    iconNotification: React.PropTypes.bool
};
Navigation.defaultProps = {
    iconNotification: false
};


module.exports = {
    Navigation
};