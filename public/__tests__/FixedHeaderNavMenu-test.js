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
        <FixedHeader.ActionDropDown data={custom.data} passedState={custom.state()} element={custom.element()} callback={custom.callback} />
    );
    it("added to the dom successfully",()=>{
        let tree=defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("added data succesfully",()=>{
        let tree= customComponent.toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toEqual(2);
    });

});
describe("Notice",()=>{

    const defaultComponent = renderer.create(
      <FixedHeader.Notice/>
    );
    it("added to the dom successfully",()=>{
        let tree=defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("TopMenuNav",()=>{

    let state = new Map([["icon-plus",false]]);
    const defaultComponent = renderer.create(<FixedHeader.TopMenuNav passedState={state}/>);

    it("added to the dom successfully",()=>{
        let tree=defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
describe("UserProfile",()=>{
    let state = new Map([["icon-plus",false]]);
    const defaultComponent = renderer.create(<FixedHeader.UserProfile passedState ={state}/>);
    it("added to the dom successfully",()=>{
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("ProfileMenu",()=>{

    let iconProfiles=new Map([
        [{href:"#",iconName:"icon-plus",stringName:"My profile"},FixedHeader.IconProfile],
        [{href:"#",iconName:"icon-plus",stringName:"My profile"},FixedHeader.IconProfile],
        [{},FixedHeader.Divider],
        [{href:"#",iconName:"icon-plus",stringName:"My profile"},FixedHeader.IconProfile],
    ]);

    let data ={triggerName:"icon-plus",iconProfiles:iconProfiles};
    let passedState = new Map([["test",false]]);

    const defaultComponent = renderer.create(<FixedHeader.ProfileMenu/>);
    const customComponent = renderer.create(<FixedHeader.ProfileMenu data={data}/>);

    it("added to the dom successfully",()=>{
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("added custom to the  dom successfully",()=>{
        let tree = customComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("IconProfile",()=>{
    const defaultComponent = renderer.create(
        <FixedHeader.IconProfile/>
    );

    it("added to the dom successfully",()=>{
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("Icon",()=>{
    let state = new Map([["test",false],["test1",false]]);
    let data ={triggerName:"test",iconName:"icon-fire"};
    const callback = (x)=>{console.log(x);};
    const defaultComponent = renderer.create(
        <FixedHeader.Icon passedState ={state}/>
    );
    const customComponent = renderer.create(
        <FixedHeader.Icon data = {data} callback={callback} passedState ={state}/>
    );

    it("added to the dom successfully",()=>{

        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("added custom to the dom successfully",()=>{

        let tree = customComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });


});

describe("UserIcon",()=>{
    const defaultComponent = renderer.create(
        <FixedHeader.UserIcon/>
    );

    it("added to the dom successfully",()=>{
        let tree = defaultComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("Pure functions suite test",()=>{
    function stateCreate(triggerName) {
        let state = new Map();
        for (let i = 0; i < 4; i += 1) {
            i === 0 ? state.set(triggerName, false) : state.set(triggerName + i, false);
        }
        return state;
    }
    it("IconTriggered function",()=>{
        var triggerName = "icon-test";
        let state=stateCreate(triggerName);
        let form = false;

        const callBack= x => state=x;
        FixedHeader.IconTriggered(triggerName,state,callBack);
        expect(state.get(triggerName)).not.toEqual(form);
    });

    describe("populateElement",()=>{
        function createData(amount){
            let myMap = new Map();
            for(let i = 0; i < amount; i += 1){
                myMap.set({href:"test1",iconName:"icon-plus",stringName:"tester"},FixedHeader.IconProfile);
            }
            return myMap;
        }
        it("populateElement takes in element map, returns react component",()=>{
            let elementProps = {data:{notifyCount:9}};
            let element = new Map([[elementProps,FixedHeader.Notice]]);
            let result= [];
            let createdElement = [<FixedHeader.Notice data ={elementProps}/>];

            result.push(FixedHeader.populateElement(element));
            expect(result.pop().hasOwnProperty(elementProps)).toBe(createdElement.pop().hasOwnProperty(elementProps));
        });

        it("returns a 4 elements for 4 data types",()=>{
            let result =FixedHeader.populateElement(createData(4));
            expect(result.length).toEqual(4);
        });
    });
    describe("isOpen",()=>{

        it("returns isClosed based on state",()=>{
            let state = stateCreate("test");
            let element = "test";
            let ans = "isClosed";
            let result = FixedHeader.isOpen(element,state);
            expect(result).toBe(ans);
        });
        it("returns isOpen based on state",()=>{
            let state = stateCreate("test");
            let element = "test";
            let ans = "isOpen";
            const changeState = (x)=>(state=x);
            FixedHeader.IconTriggered(element,state,changeState);
            let result = FixedHeader.isOpen(element,state);
            expect(result).toBe(ans);
        });
        it("returns isCustom based on state",()=>{
            let state = stateCreate("test");
            let element = "test";
            let ans = "isCustom";
            let custom = {second:ans};

            let result = FixedHeader.isOpen(element,state,custom);
            expect(result).toBe(ans);
        });
        it("returns isAlsoCustom based on state",()=>{
            let state = stateCreate("test");
            let element = "test";
            let ans = "isAlsoCustom";
            let custom = {first:ans};

            const changeState = (x)=>(state=x);
            FixedHeader.IconTriggered(element,state,changeState);
            let result = FixedHeader.isOpen(element,state,custom);
            expect(result).toBe(ans);
        });
    });
});
