/**
 * Created by akerr on 8/29/16.
 */
"use-strict"
import React from "react";
import renderer from 'react-test-renderer';
import * as PureFunc from '../js/Components/PureFunctions.js';
import * as FixedHeader from "../js/Components/FixedHeaderNavMenu.js";

const walkNode = (node, func)=> {
    func(node);
    node = node.firstChild;
    while (node) {
        walkNode(node, func);
        node = node.nextSibling;
    }
};
const elementCheck = (node)=> {
    if (node.nodeType === 1) {
        elements.push(node.tagName);
    }
};
const elementClassName = (node)=> {
    if (node.nodeType === 1) {
        if (node.className.length > 1) {
            elements.push(node.className);
        }

    }
};
const elementContent = node => {
    if (node.nodeType === 1 && node.firstChild !== null) {
        if (node.firstChild.nodeType === 3) {
            elements.push(node.firstChild.textContent);
        }

    }
};



describe("ActionDropDownTask", ()=> {


    var custom = {
        classStyles: {task: "Test1", desc: "Test2", percent: "Test3", progress: "Test4", progressbar: "Test5", sr: "Test6"},
        data: {desc: "Metronic V1.0", percent: 40}
    };
    const defaultComponent = renderer.create(
        <FixedHeader.ActionDropDownTask/>
    );
    const customComponent = renderer.create(
        <FixedHeader.ActionDropDownTask data={custom.data} classStyles={custom.classStyles}/>
    );


    it("added to the dom successfully", ()=> {
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("has custom Props", ()=> {
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).not.toEqual(defaultTree);
        expect(tree).toMatchSnapshot();
    });
});
describe("Slider",()=>{

        let data =new PureFunc.TopMenuData();
        data.addHeader([{
            key:"notifications",
            pending:0,
            subject:"pending",
            heading: "Notifications",
            actionMessage: "view all"}]).addNotifications([{
            time: "1 min",
            iconName: "icon-plus",
            message: "This was made from a test file.",
        }]);
        let mergedData = data.makeActionDropDown(data.getHeader("notifications"),data.getNotifications());

        const defaultComponent = renderer.create(
            <FixedHeader.Slider data ={mergedData.body}/>
        );

        it("added to the dom successfully", ()=> {
            let tree = defaultComponent.toJSON();
            expect(tree).toMatchSnapshot();
        });
});
describe("ActionDropDownInbox", ()=> {

    var custom = {
        classStyles: {photo: "Test1", subject: "Test3", img: "Test2", time: "Test4", from: "Test5", message: "Test6"},
        data: {imgLocation: "test.png", time: "just now", sender: "alec", message: "default message"}
    };

    const defaultComponent = renderer.create(
        <FixedHeader.ActionDropDownInbox/>
    );
    const customComponent = renderer.create(
        <FixedHeader.ActionDropDownInbox data={custom.data} classStyles={custom.classStyles}/>
    );

    it("added to the dom successfully", ()=> {
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("has custom Props", ()=> {
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).not.toEqual(defaultTree);
        expect(tree).toMatchSnapshot();
    });
});
describe("ActionDropDownNotify", ()=> {
    var custom = {
        classStyles: {time: "Test1", details: "Test2", label: "Test3"},
        data: {time: "just now", iconName: "icon-arrow", message: "default message"},
    };
    const defaultComponent = renderer.create(
        <FixedHeader.ActionDropDownNotify/>
    );
    const customComponent = renderer.create(
        <FixedHeader.ActionDropDownNotify data={custom.data} classStyles={custom.classStyles}/>
    );

    it("added to the dom successfully", ()=> {
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("has custom Props", ()=> {
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).not.toEqual(defaultTree);
        expect(tree).toMatchSnapshot();
    });
});
describe("ActionDropDownError", ()=> {
    var custom = {
        classStyles: {err: "err", solution: "sol"},
        data: {errorMessage: "test1", solution: "test2"}
    };
    const defaultComponent = renderer.create(
        <FixedHeader.ActionDropDownError data={custom.data} classStyles={custom.classStyles}/>
    );

    it("added to the dom successfully", ()=> {
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
describe("Divider", ()=> {
    const custom = {
        classStyles: {
            liClassName: "Alec"
        }
    };
    const defaultComponent = renderer.create(
        <FixedHeader.Divider/>
    );
    const customComponent = renderer.create(
        <FixedHeader.Divider classStyles={custom.classStyles}/>
    );
    it("successfully added into dom", ()=> {
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("has custom Props", ()=> {
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).not.toEqual(defaultTree);
    });
});
describe("ActionDropDownHeader", ()=> {

    let custom = {
        data: {pending: 12, actionMessage: "view all", subject: "New", heading: "notifications"},
        classStyles: {liClassName: "external", head: "", bold: "bold", aClassName: "hide"}
    };

    const defaultComponent = renderer.create(
        <FixedHeader.ActionDropDownHeader/>
    );
    const customComponent = renderer.create(
        <FixedHeader.ActionDropDownHeader data={custom.data} classStyles={custom.classStyles}/>
    );

    it("added to the dom successfully", ()=> {
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("has custom component", ()=> {
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).not.toEqual(defaultTree);
    });
});

describe("ActionDropDown", ()=> {
    let data = new PureFunc.TopMenuData();
    data.addHeader([{key:"notifications",pending:0,subject:"test",heading:"notifications",actionMessage:"view all"}]);
    data.addNotifications([{time:"just now",iconName:"icon-plus",message:"this is a test..."}]);

    let header = data.getHeader("notifications");
    let body = data.getNotifications();
    let componentData = data.makeActionDropDown(header,body);
    let state = new Map([["icon-plus",true]]);
    let callback =jest.fn();
    const defaultComponent = renderer.create(
        <FixedHeader.ActionDropDown data={componentData} passedState={state} callback={callback}/>
    );
    const noCallbackComponent = renderer.create(
        <FixedHeader.ActionDropDown data={componentData} passedState={state}/>
    );
    it("added to the dom successfully", ()=> {
        let tree = defaultComponent.toJSON();
        tree.props.onMouseLeave();
        expect(tree).toMatchSnapshot();
        expect(callback).toBeCalled();
    });
    it("testing default callBack", ()=> {
        let tree = noCallbackComponent.toJSON();
        tree.props.onMouseLeave();
    });

});

describe("Notice", ()=> {

    const defaultComponent = renderer.create(
        <FixedHeader.Notice/>
    );
    it("added to the dom successfully", ()=> {
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
describe("ProfileMenu", ()=> {

   let data = new PureFunc.TopMenuData();
    data.addIconProfile([{href: "#", iconName: "icon-plus", stringName: "My profile"},
       {href: "#", iconName: "icon-key", stringName: "My profile"},
        {divider:true},
        {href: "#", iconName: "icon-Lock", stringName: "My profile"},
    ]);


    let mergedData ={iconProfiles:data.getIconProfile()};
    let passedState = new Map([["test", false]]);
    let callback =jest.fn();

    const defaultComponent = renderer.create(<FixedHeader.ProfileMenu data={mergedData} passedState={passedState} callback={callback}/>);
    const noCallbackComponent = renderer.create(<FixedHeader.ProfileMenu data={mergedData} passedState={passedState}/>);

    it("added to the dom successfully", ()=> {
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
        tree.props.onMouseLeave();
        expect(callback).toBeCalled()
    });
    it("testing default callBack", ()=> {
        let tree = noCallbackComponent.toJSON();
        tree.props.onMouseLeave();
    });

});
describe("IconProfile", ()=> {
    const defaultComponent = renderer.create(
        <FixedHeader.IconProfile/>
    );

    it("added to the dom successfully", ()=> {
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
describe("Icon", ()=> {

    let data  = new PureFunc.TopMenuData();
    data.addHeader([{
        key:"notifications",pending:0,subject:"test",heading:"notifications",actionMessage:"view all"
    }]).addNotifications([{
        time:"just now",iconName:"icon-plus",message:"this is a test..."
    }]).addIcon([{
        iconName: "icon-calendar",
        key:"notifications",
        notice:{},
        actionDropDown: {},
        classStyles: {
            liClassName: "dropdown dropdown-extended nav-dropdown dropdown-notification",
            aClassName: "dropdown-toggle"
        }
    }]);

    let icons= data.generate().icons;
    let mergedData;
    for(let [data] of icons){
        mergedData = data.data;
    }
    let state = new Map([["test", false], ["test1", false]]);
    const callback =jest.fn();
    const defaultComponent = renderer.create(
        <FixedHeader.Icon data={mergedData} callback={callback} passedState={state}/>
    );
    const noCallbackComponent = renderer.create(
        <FixedHeader.Icon data={mergedData} passedState={state}/>
    );

    it("added to the dom successfully", ()=> {
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("called callback function ",()=>{
        let tree = defaultComponent.toJSON();
        tree.props.onClick();
        expect(callback).toBeCalled();
    });
    it("called callback function ",()=>{
        let tree = noCallbackComponent.toJSON();
        tree.props.onClick();
    });


});
describe("UserIcon", ()=> {
    const defaultComponent = renderer.create(
        <FixedHeader.UserIcon/>
    );

    it("added to the dom successfully", ()=> {
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
describe("UserProfile",()=>{
    let envelop = "icon-envelope-open";
    let userIcon = {
        imgLocation: "http://bit.ly/2cbi5bL",
        stringName: "Alec Kerr",
        iconName: "icon-options-vertical"
    };
    let iconProfiles =[{
        iconName: envelop,
        stringName: " My Profile",
        href: "#"
    },{
        iconName: "icon-calendar",
        stringName: " My Profile",
        href: "#"
    }];
    let genData = new PureFunc.TopMenuData();
    let  data = genData.
    addIconProfile(iconProfiles).
    addUserIcon(userIcon).
    hasProfileMenu(true).
    hasUserProfile(true).
    generate().userProfile;

    let state = new Map([[envelop,false]]);
    let callback = jest.fn();
    const defaultComponent = renderer.create(
        <FixedHeader.UserProfile data={data} passedState={state} callback={callback}/>
    );
    it("called callback function ",()=>{
        let tree = defaultComponent.toJSON();
        tree.props.onClick();
        expect(callback).toBeCalled();
    });
});
describe("TopMenuNavContainer", ()=> {
    let inbox = [
        {
            imgLocation: "http://bit.ly/2cfaQ21", time: "just now",
            sender: "Alec kerr",
            message: "This was made from a test file."
        },
        {
            imgLocation: "http://bit.ly/2cfaQ21", time: "just now",
            sender: "John Wayne",
            message: "This was made from a test file."
        }];
    let icons = [{
        key:"inbox",
        iconName: "icon-bell",
        actionDropDown:{}
    }];
    let userIcon = {
        imgLocation: "http://bit.ly/2cqW9ue",
        stringName: "Alec Kerr",
        iconName: "icon-options-vertical"
    };
    let iconProfiles =[
        {
        iconName: "icon-lock",
        stringName: "My Profile",
        href: "#"
    },{divider:true},
        {
        iconName: "icon-key",
        stringName: "My Profile",
        href: "#"
    }];
    let headers =[{key:"inbox",
        pending: 2,
        subject: "Test",
        heading: "Notifications",
        actionMessage: "view all"
    }];
    var testdata = new PureFunc.TopMenuData();
    testdata.addHeader(headers).
    addInbox(inbox).
    addIcon(icons).
    hasUserProfile(true).
    hasProfileMenu(true).
    addUserIcon(userIcon).
    addIconProfile(iconProfiles);


    const defaultComponent = renderer.create(<FixedHeader.TopMenuNavContainer data={testdata.generate()}/>);

    it("added to dom successfully", ()=> {
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

});

