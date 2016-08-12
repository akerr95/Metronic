/**
 * Created by akerr on 8/8/16.
 */
var UI = require('./Metro.js');
var React = require('react');
var ReactDom = require('react-dom');
var data = {
    identityInfo: {
        index: '#',
        logo_Img: "https://d13yacurqjgara.cloudfront.net/users/109605/screenshots/2891300/bourbon_1x.png",
        alt: "Image of Bourbon",
    },
    mainMenuInfo: {
        icons: [{name: 'Home', iconImg: 'example',notify: 7},
            {name: 'Settings', iconImg: 'example',notify: 7},
            {name: 'Profile', iconImg: 'example',notify: 7}
        ]
    }
};
ReactDom.render(<UI.Navigation info={data}/>, document.getElementById('example'));
