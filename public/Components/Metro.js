/**
 * Created by akerr on 8/6/16.
 */
var React = require("react");

class Navigation extends React.Component {
    render() {
        return (<div>
            <Identity data= {this.props.data}/>
            <Menu/>
            <Main_Menu text = {this.props.data.text}/>
        </div>);
    }
}


class Identity extends React.Component {
    render() {
        return (
            <a href={this.props.data.index}>
                <img src={this.props.data.logo_Img} alt={this.props.data.alt}/>
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
        return (
            <ul>
                <Icon text={this.props.text}></Icon>
            </ul>
        );
    }
}

class Icon extends React.Component {
    render() {
        return (
            <li>{this.props.text}</li>
        );
    }
}


Navigation.propTypes = {
    name: React.PropTypes.string
};
Navigation.defaultProps = {
    name: "Alec"
};


module.exports = {
    Navigation
};