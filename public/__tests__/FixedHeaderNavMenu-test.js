/**
 * Created by akerr on 8/29/16.
 */
"use-strict"
import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import {ActionDropDownError,Slider,ClickableList,ActionDropDownTask,ActionDropDownNotify,ActionDropDownInbox} from "../js/Components/FixedHeaderNavMenu.js";

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
describe("ClickableList", ()=> {
    /**
     * Additional functions for test.
     */

    beforeEach(()=>{
        elements =[];
    });
    var custom = {
      li:"test1",
       a:"test2",
        children:<div className="alec"><p className="hello">Hello World</p></div>,
        get myChildren(){
            return this.children;
        },
        get aName(){
            return this.a;
        },
        get Name(){
            return {liClassName:this.li,aClassName:this.a };
        }

    };

    const myClickList = (data,myStyles={})=>{
        let xClickList = TestUtils.renderIntoDocument(
            <div><ClickableList data={data || <div></div>} styles={myStyles}/></div>
        );

        return ReactDOM.findDOMNode(xClickList).firstChild;
    };


    /**
     * Test Functions
     */
    it("Added ClickableList to dom.", ()=> {
        expect(myClickList()).not.toBeNull();
    });
    it("has assumed structure",()=>{
        walkNode(myClickList(),elementCheck);
        let structure =["LI","A","DIV"];
        expect(elements).toEqual(structure);
    });
    it("has assumed default class Names",()=>{
        walkNode(myClickList(),elementClassName);
        let structure = ["empty","empty"];
        expect(elements).toEqual(structure);
    });
    it("has assumed custom class Names",()=>{

        walkNode(myClickList([],custom.Name),elementClassName );
        let structure = ["test1","test2"];
        expect(elements).toEqual(structure);
    });
    it("has assumed children",()=>{
        let children =custom.myChildren;
        walkNode(myClickList(children),elementCheck);
        let structure = ["LI","A","DIV","P"];
        expect(elements).toEqual(structure);
    });
});

describe("ActionDropDownTask",()=>{


    var custom = {
        myStyles:{task:"Test1",desc:"Test2",percent:"Test3",progress:"Test4",progressbar:"Test5",sr:"Test6"},
        children:{desc:"Metronic V1.0",percent:40},
        get myChildren(){
            return this.children;
        },
        get aName(){
            return this.a;
        },
        get Name(){
            return this.myStyles;
        }

    };
    beforeEach(()=>{
        elements =[];
    });
    const actionDropDownTask=(data={},myStyles={})=>{
        let xClickList = TestUtils.renderIntoDocument(
            <div><ActionDropDownTask data ={data} styles={myStyles}/></div>
        );

        return ReactDOM.findDOMNode(xClickList).firstChild;
    };

    it("Added action drop down task to dom.", ()=> {
         expect(actionDropDownTask(custom.myChildren)).not.toBeNull();
    });
    it("has assumed structure",()=>{
        walkNode(actionDropDownTask({}),elementCheck);
        let structure = ["SPAN","SPAN","SPAN","SPAN","SPAN","SPAN","SPAN"];
        expect(elements).toEqual(structure);
    });
    it("has assumed default class names",()=>{
        walkNode(actionDropDownTask(),elementClassName);
        let structure = ["task","desc","percent","progress","progress-bar progress-bar-success","sr-only"];
        expect(elements).toEqual(structure);
    });
    it("has assumed custom class names",()=>{
        walkNode(actionDropDownTask({},custom.myStyles),elementClassName);
        let classes = ["Test1","Test2","Test3","Test4","Test5","Test6"];
        expect(elements).toEqual(classes);
    });
    it("has assumed custom element content",()=>{
        walkNode(actionDropDownTask(custom.myChildren),elementContent);
        let classes = ["Metronic V1.0","40%"];
        expect(elements).toEqual(classes);
    });
});

describe("ActionDropDownInbox",()=>{

    var custom = {
        myStyles:{photo:"Test1",subject:"Test3",img:"Test2",time:"Test4",from:"Test5",message:"Test6"},
        children:{imgLocation:"test.png",time:"just now",sender:"alec",message:"default message"},
        get myChildren(){
            return this.children;
        },
        get aName(){
            return this.a;
        },
        get Name(){
            return this.myStyles;
        }

    };
    beforeEach(()=>{
        elements =[];
    });
    const actionDropDownInbox  = (data={},myStyles={})=>{
        let xClickList = TestUtils.renderIntoDocument(
            <div><ActionDropDownInbox data ={data} styles={myStyles}/></div>
        );

        return ReactDOM.findDOMNode(xClickList).firstChild;
    };


    it("has been added to dom",()=>{
        expect(actionDropDownInbox()).not.toBeNull();
    });
    it("has assumed structure",()=>{
        walkNode(actionDropDownInbox(),elementCheck);
        let structure =["SPAN","SPAN","IMG","SPAN","SPAN","SPAN","SPAN"];
        expect(elements).toEqual(structure);
    });
    it("has default class names",()=>{
        walkNode(actionDropDownInbox(),elementClassName);
        let classes = ["photo","img-circle","subject","time","from","message"];
        expect(elements).toEqual(classes);
    });
    it("has custom class names",()=>{
        walkNode(actionDropDownInbox({},custom.Name),elementClassName);
        let classes = ["Test1","Test2","Test3","Test4","Test5","Test6"];
        expect(elements).toEqual(classes);
    });
    it("has custom data",()=>{
        walkNode(actionDropDownInbox(custom.myChildren),elementContent);
        let data = ["just now","alec","default message"];
        expect(elements).toEqual(data);
    });
});

describe("ActionDropDownNotify",()=>{
    var custom = {
        myStyles:{time:"Test1",details:"Test2",label:"Test3"},
        children:{time:"just now",iconName:"icon-arrow",message:"default message"},
        get myChildren(){
            return this.children;
        },
        get aName(){
            return this.a;
        },
        get Name(){
            return this.myStyles;
        }

    };
    beforeEach(()=>{
        elements =[];
    });
    const actionDropDownNotify  = (data={},myStyles={})=>{
        let xClickList = TestUtils.renderIntoDocument(
            <div><ActionDropDownNotify data ={data} styles={myStyles}/></div>
        );

        return ReactDOM.findDOMNode(xClickList).firstChild;
    };

    it("has assumed structure",()=>{
        walkNode(actionDropDownNotify(),elementCheck);
        let structure =["SPAN","SPAN","SPAN","SPAN","I"];
        expect(elements).toEqual(structure);
    });
    it("has been added to dom",()=>{
        expect(actionDropDownNotify()).not.toBeNull();
    });
    it("has default class names",()=>{
        walkNode(actionDropDownNotify(),elementClassName);
        let classes = ["time","details","label label-sm label-icon label-success edited-label"];
        expect(elements).toEqual(classes);
    });
    it("has custom class names",()=>{
        walkNode(actionDropDownNotify({},custom.Name),elementClassName);
        let classes = ["Test1","Test2","Test3"];
        expect(elements).toEqual(classes);
    });
    it("has custom data assumed",()=>{
        walkNode(actionDropDownNotify(custom.myChildren),elementContent);
        let data = ["just now"];
        expect(elements).toEqual(data);
    });
});

describe("Slider",()=>{

    var custom ={
        classNames:()=>{
          return {slider:"default",
              ul:"default",
              bar:"default",
              rail:"default"};
        },
        data:()=>(
          <div><p>Hello World</p></div>
        )
    };
    const sliderNode = (data,myStyles={})=>{
        let slider = TestUtils.renderIntoDocument(
          <div><Slider data ={data || <div></div>} styles={myStyles}/></div>
        );

        return ReactDOM.findDOMNode(slider).firstChild;
    };
    beforeEach(()=>{
        elements =[];
    });
    it("added to the dom",()=>{
        expect(sliderNode()).not.toBeNull();
    });
    it("has correct structure",()=>{
        walkNode(sliderNode(),elementCheck);
        let structure =["DIV","UL","DIV","DIV","DIV"];
        expect(elements).toEqual(structure);

    });
    it("has correct default class names",()=>{
        walkNode(sliderNode(),elementClassName);
        let structure =["slimScrollDiv","dropdown-menu-list","slimScrollBar","slimScrollRail"];
        expect(elements).toEqual(structure);
    });
    it("has custom class names",()=>{
        walkNode(sliderNode(null,custom.classNames()),elementClassName);
        let structure = ["default","default","default","default"];
        expect(elements).toEqual(structure);
    });
    it("has custom data",()=>{
        walkNode(sliderNode(custom.data()),elementContent);
        let structure = ["Hello World"];
        expect(elements).toEqual(structure);
    });
});
describe("ActionDropDownError",()=>{

    const actionDropDownErrorNode =(data,myStyles={})=>{
        let actionDropDownErr = TestUtils.renderIntoDocument(
            <div><ActionDropDownError data={data || <div></div>} styles={myStyles}/></div>
        );

        return ReactDOM.findDOMNode(actionDropDownErr).firstChild;
    };
    beforeEach(()=>{
        elements =[];
    });

    it("added to the dom successfully",()=>{
      expect(actionDropDownErrorNode()).not.toBeNull();
    });
    it("has assumed structure",()=>{
        walkNode(actionDropDownErrorNode(),elementCheck);
        let structure =["SPAN","SPAN","UL","LI","SPAN"];
        expect(elements).toEqual(structure);
    });
});

