/**
 * Created by akerr on 8/8/16.
 */
var UI = require('./Metro.js');
var React = require('react');
var ReactDom = require('react-dom');
var data = {
    index:'#',
    logo_Img: "https://d13yacurqjgara.cloudfront.net/users/109605/screenshots/2891300/bourbon_1x.png",
    alt: "Image of Bourbon",
    text:"Random text"
}
ReactDom.render(<UI.Navigation data={data}/>, document.getElementById('example'));
