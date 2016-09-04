/**
 * Created by akerr on 8/29/16.
 */
"use-strict"
jest.mock('react/lib/ReactDefaultInjection');
import React from "react";
// import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import renderer from 'react-test-renderer';
import * as FixedHeader from "../js/Components/FixedHeaderNavMenu.js";

const walkNode = (node,func)=>{
    func(node);
    node = node.firstChild;
    while(node){
        walkNode(node,func);
        node = node.nextSibling;
    }
};
const elementCheck = (node)=>{
    if(node.nodeType === 1){
        elements.push(node.tagName);
    }
};
const elementClassName = (node)=>{
    if(node.nodeType === 1){
        if(node.className.length >1){
            elements.push(node.className);
        }

    }
};
const elementContent = node =>{
    if (node.nodeType === 1 && node.firstChild  !== null) {
        if (node.firstChild.nodeType ===3){
            elements.push(node.firstChild.textContent);
        }

    }
};
describe("ClickableList", ()=> {
    /**
     * Additional functions for test.
     */
    var custom = {
      styles:{liClassName:"test1",
       aClassName:"test2"},
        data:<div className="alec"><p className="hello">Hello World</p></div>,


    };
    const defaultComponent = renderer.create(
        <FixedHeader.ClickableList/>
    );
    const customComponent = renderer.create(
        <FixedHeader.ClickableList data={custom.data} styles={custom.styles}/>
    );

    it("added to the dom successfully",()=>{
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("has custom Props",()=>{
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).not.toEqual(defaultTree);
        expect(tree).toMatchSnapshot();
    });
});
describe("ActionDropDownTask",()=>{


    var custom = {
        styles:{task:"Test1",desc:"Test2",percent:"Test3",progress:"Test4",progressbar:"Test5",sr:"Test6"},
        data:{desc:"Metronic V1.0",percent:40}
    };
    const defaultComponent = renderer.create(
        <FixedHeader.ActionDropDownTask/>
    );
    const customComponent = renderer.create(
        <FixedHeader.ActionDropDownTask data={custom.data} styles={custom.styles}/>
    );


    it("added to the dom successfully",()=>{
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("has custom Props",()=>{
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).not.toEqual(defaultTree);
        expect(tree).toMatchSnapshot();
    });


});
describe("ActionDropDownInbox",()=>{

    var custom = {
        styles:{photo:"Test1",subject:"Test3",img:"Test2",time:"Test4",from:"Test5",message:"Test6"},
        data:{imgLocation:"test.png",time:"just now",sender:"alec",message:"default message"}
    };

    const defaultComponent = renderer.create(
        <FixedHeader.ActionDropDownInbox/>
    );
    const customComponent = renderer.create(
        <FixedHeader.ActionDropDownInbox data={custom.data} styles={custom.styles}/>
    );

    it("added to the dom successfully",()=>{
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("has custom Props",()=>{
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).not.toEqual(defaultTree);
        expect(tree).toMatchSnapshot();
    });
});
describe("ActionDropDownNotify",()=>{
    var custom = {
        styles:{time:"Test1",details:"Test2",label:"Test3"},
        data:{time:"just now",iconName:"icon-arrow",message:"default message"},
    };
    const defaultComponent = renderer.create(
        <FixedHeader.ActionDropDownNotify/>
    );
    const customComponent = renderer.create(
        <FixedHeader.ActionDropDownNotify data={custom.data} styles={custom.styles}/>
    );

    it("added to the dom successfully",()=>{
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("has custom Props",()=>{
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).not.toEqual(defaultTree);
        expect(tree).toMatchSnapshot();
    });
});
describe("Slider",()=>{
    var custom ={
        styles:{slider:"default",
                ul:"default",
                bar:"default",
                rail:"default"},
        data:<div><p>Hello World</p></div>

    };
    const defaultComponent = renderer.create(
        <FixedHeader.Slider/>
    );
    const customComponent = renderer.create(
        <FixedHeader.Slider data={custom.data} styles={custom.styles}/>
    );

    it("added to the dom successfully",()=>{
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("has custom Props",()=>{
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).not.toEqual(defaultTree);
        expect(tree).toMatchSnapshot();
    });
});
describe("ActionDropDownError",()=>{
    var custom = {
      styles:{err:"err",solution:"sol"},
      data:{errorMessage:"test1",solution:"test2"}
    };
    const defaultComponent = renderer.create(
        <FixedHeader.ActionDropDownError data={{}}/>
    );
    const customComponent = renderer.create(
        <FixedHeader.ActionDropDownError data={custom.data} styles={custom.styles}/>
    );

    it("added to the dom successfully",()=>{
      let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("has custom Props",()=>{
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).not.toEqual(defaultTree);

    });
});
describe("Divider",()=>{
    const custom = {
      styles:{
          liClassName:"Alec"
      }
    };
    const defaultComponent = renderer.create(
        <FixedHeader.Divider/>
    );
    const customComponent = renderer.create(
        <FixedHeader.Divider styles={custom.styles}/>
    );
    it("successfully added into dom",()=>{
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("has custom Props",()=>{
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).not.toEqual(defaultTree);
    });
});
describe("ActionDropDownHeader",()=>{

    let custom = {
        data:{pending:12,actionMessage:"view all",subject:"New",heading:"notifications"},
        styles:{liClassName:"external",head:"",bold:"bold",aClassName:"hide"}
    };

    const defaultComponent = renderer.create(
        <FixedHeader.ActionDropDownHeader/>
    );
    const customComponent = renderer.create(
        <FixedHeader.ActionDropDownHeader data ={custom.data} styles={custom.styles}/>
    );

    it("added to the dom successfully",()=>{
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("has custom component",()=>{
        let tree = customComponent.toJSON();
        let defaultTree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).not.toEqual(defaultTree);
    });
});
describe("ActionDropDown",()=>{

    var custom={
        state:()=>{
            let testState = new Map();
            testState.set("icon-fire",true);
            testState.set("icon-ice",false);
            return {iconState:testState};
        },
        data:{triggerName:"icon-fire"},
        callback:()=>{
            var x;
            return x = 2;
        },
        element:()=>{
            let el1 = <FixedHeader.ActionDropDownHeader/>;
            let el2 = <FixedHeader.Slider/>;
            return {header:el1,body:el2};
        }
    };
    const defaultComponent =renderer.create(
        <FixedHeader.ActionDropDown/>
    );
    const customComponent =renderer.create(
        <FixedHeader.ActionDropDown passedState={custom.state()} element={custom.element()} callback={custom.callback} />
    );
    it("added to the dom successfully",()=>{
        let tree=defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("added custom components",()=>{
        let tree= customComponent.toJSON();
        let defaultTree=defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).not.toEqual(defaultTree);
    });


});
