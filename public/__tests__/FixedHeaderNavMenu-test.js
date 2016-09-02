/**
 * Created by akerr on 8/29/16.
 */
"use-strict"
import React from "react";
// import ReactDOM from "react-dom";
// import TestUtils from "react-addons-test-utils";
import renderer from 'react-test-renderer';
import * as FixedHeader from "../js/Components/FixedHeaderNavMenu.js";

var elements=[];
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
// describe("ClickableList", ()=> {
//     /**
//      * Additional functions for test.
//      */
//
//     beforeEach(()=>{
//         elements =[];
//     });
//     var custom = {
//       li:"test1",
//        a:"test2",
//         children:<div className="alec"><p className="hello">Hello World</p></div>,
//         get myChildren(){
//             return this.children;
//         },
//         get aName(){
//             return this.a;
//         },
//         get Name(){
//             return {liClassName:this.li,aClassName:this.a };
//         }
//
//     };
//
//     const myClickList = (data,myStyles={})=>{
//         let xClickList = TestUtils.renderIntoDocument(
//             <div><FixedHeader.ClickableList data={data || <div></div>} styles={myStyles}/></div>
//         );
//
//         return ReactDOM.findDOMNode(xClickList).firstChild;
//     };
//
//
//     /**
//      * Test Functions
//      */
//     it("Added ClickableList to dom.", ()=> {
//         expect(myClickList()).not.toBeNull();
//     });
//     it("has assumed structure",()=>{
//         walkNode(myClickList(),elementCheck);
//         let structure =["LI","A","DIV"];
//         expect(elements).toEqual(structure);
//     });
//     it("has assumed default class Names",()=>{
//         walkNode(myClickList(),elementClassName);
//         let structure = ["empty","empty"];
//         expect(elements).toEqual(structure);
//     });
//     it("has assumed custom class Names",()=>{
//
//         walkNode(myClickList([],custom.Name),elementClassName );
//         let structure = ["test1","test2"];
//         expect(elements).toEqual(structure);
//     });
//     it("has assumed children",()=>{
//         let children =custom.myChildren;
//         walkNode(myClickList(children),elementCheck);
//         let structure = ["LI","A","DIV","P"];
//         expect(elements).toEqual(structure);
//     });
// });
//
// describe("ActionDropDownTask",()=>{
//
//
//     var custom = {
//         myStyles:{task:"Test1",desc:"Test2",percent:"Test3",progress:"Test4",progressbar:"Test5",sr:"Test6"},
//         children:{desc:"Metronic V1.0",percent:40},
//         get myChildren(){
//             return this.children;
//         },
//         get aName(){
//             return this.a;
//         },
//         get Name(){
//             return this.myStyles;
//         }
//
//     };
//     beforeEach(()=>{
//         elements =[];
//     });
//     const actionDropDownTask=(data={},myStyles={})=>{
//         let xClickList = TestUtils.renderIntoDocument(
//             <div><FixedHeader.ActionDropDownTask data ={data} styles={myStyles}/></div>
//         );
//
//         return ReactDOM.findDOMNode(xClickList).firstChild;
//     };
//
//     it("Added action drop down task to dom.", ()=> {
//          expect(actionDropDownTask(custom.myChildren)).not.toBeNull();
//     });
//     it("has assumed structure",()=>{
//         walkNode(actionDropDownTask({}),elementCheck);
//         let structure = ["SPAN","SPAN","SPAN","SPAN","SPAN","SPAN","SPAN"];
//         expect(elements).toEqual(structure);
//     });
//     it("has assumed default class names",()=>{
//         walkNode(actionDropDownTask(),elementClassName);
//         let structure = ["task","desc","percent","progress","progress-bar progress-bar-success","sr-only"];
//         expect(elements).toEqual(structure);
//     });
//     it("has assumed custom class names",()=>{
//         walkNode(actionDropDownTask({},custom.myStyles),elementClassName);
//         let classes = ["Test1","Test2","Test3","Test4","Test5","Test6"];
//         expect(elements).toEqual(classes);
//     });
//     it("has assumed custom element content",()=>{
//         walkNode(actionDropDownTask(custom.myChildren),elementContent);
//         let classes = ["Metronic V1.0","40%"];
//         expect(elements).toEqual(classes);
//     });
// });
//
// describe("ActionDropDownInbox",()=>{
//
//     var custom = {
//         myStyles:{photo:"Test1",subject:"Test3",img:"Test2",time:"Test4",from:"Test5",message:"Test6"},
//         children:{imgLocation:"test.png",time:"just now",sender:"alec",message:"default message"},
//         get myChildren(){
//             return this.children;
//         },
//         get aName(){
//             return this.a;
//         },
//         get Name(){
//             return this.myStyles;
//         }
//
//     };
//     beforeEach(()=>{
//         elements =[];
//     });
//     const actionDropDownInbox  = (data={},myStyles={})=>{
//         let xClickList = TestUtils.renderIntoDocument(
//             <div><FixedHeader.ActionDropDownInbox data ={data} styles={myStyles}/></div>
//         );
//
//         return ReactDOM.findDOMNode(xClickList).firstChild;
//     };
//
//
//     it("has been added to dom",()=>{
//         expect(actionDropDownInbox()).not.toBeNull();
//     });
//     it("has assumed structure",()=>{
//         walkNode(actionDropDownInbox(),elementCheck);
//         let structure =["SPAN","SPAN","IMG","SPAN","SPAN","SPAN","SPAN"];
//         expect(elements).toEqual(structure);
//     });
//     it("has default class names",()=>{
//         walkNode(actionDropDownInbox(),elementClassName);
//         let classes = ["photo","img-circle","subject","time","from","message"];
//         expect(elements).toEqual(classes);
//     });
//     it("has custom class names",()=>{
//         walkNode(actionDropDownInbox({},custom.Name),elementClassName);
//         let classes = ["Test1","Test2","Test3","Test4","Test5","Test6"];
//         expect(elements).toEqual(classes);
//     });
//     it("has custom data",()=>{
//         walkNode(actionDropDownInbox(custom.myChildren),elementContent);
//         let data = ["just now","alec","default message"];
//         expect(elements).toEqual(data);
//     });
// });
//
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

