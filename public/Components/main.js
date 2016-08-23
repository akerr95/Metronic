/**
 * Created by akerr on 8/8/16.
 */
var UI = require('./Metro.js');
var React = require('react');
var ReactDom = require('react-dom');
var data = {
    identityInfo: {
        index: '#',
        logo_Img: "./images/logo.png",
        alt: "Image of Bourbon",
    },
    mainMenuInfo: {
        icons: [{name: 'icon-bell', iconImg: 'example',notify: 7},
            {name: 'icon-envelope-open', iconImg: 'example',notify: 7},
            {name: 'icon-calendar', iconImg: 'example',notify: 7},
            {name:"icon-logout", iconImg:"example"},
            {name:"icon-user", iconImg:"example"}
        ]
    }
};

ReactDom.render(<UI.Navigation info={data}/>, document.getElementById('example'));
