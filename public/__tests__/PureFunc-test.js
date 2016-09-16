/**
 * Created by akerr on 9/12/16.
 */
import * as PureFunc from '../js/Components/PureFunctions.js';
import * as FixedHeader from "../js/Components/FixedHeaderNavMenu.js";
describe("Pure functions suite test", ()=> {
    function stateCreate(triggerName) {
        let state = new Map();
        for (let i = 0; i < 4; i += 1) {
            i === 0 ? state.set(triggerName, false) : state.set(triggerName + i, false);
        }
        return state;
    }

    it("IconTriggered function", ()=> {
        var triggerName = "icon-test";
        let state = stateCreate(triggerName);
        let form = false;

        const callBack = x => state = x;
        PureFunc.IconTriggered(triggerName, state, callBack);
        expect(state.get(triggerName)).not.toEqual(form);
    });
    describe("CreateBooleanState",()=>{
        let states = ["Test","Test1","Test1","Test2"];

        it("Returns an array containing an array of size 2",()=>{
            let result =PureFunc.CreateBooleanState(states);
            expect(Array.isArray(result.elementBool)).toBeTruthy();
            expect(Array.isArray(result.elementBool[0])).toBeTruthy();
            expect(result.elementBool[0].length).toEqual(2);
        });
        it("Returns array containing no repeats",()=>{
            let result = PureFunc.CreateBooleanState(states).elementBool;
            let myArr = [["Test",false],["Test1",false],["Test2",false]];
            expect(result).toEqual(myArr);
        });
    });
    describe("ConvertArrToMap", ()=> {
        let arr = [["test", false]];
        let map = new Map([["test", false]]);
        it("return map object", ()=> {
            let result = PureFunc.ConvertArrToMap(arr);
            expect(typeof result).toEqual("object");
        });
        it("return correct map object", ()=> {
            let result = PureFunc.ConvertArrToMap(arr);
            expect(result).toEqual(map);
        });
    });
    describe("ConvertMapToArr", ()=> {
        let arr = [["test", false]];
        let map = new Map([["test", false]]);
        it("return arr object", ()=> {
            let result = PureFunc.ConvertMapToArr(map);
            expect(typeof result).toEqual("object");
        });
        it("return correct map object", ()=> {
            let result = PureFunc.ConvertMapToArr(map);
            expect(result).toEqual(arr);
        });
    });
    describe("populateElement", ()=> {
        function createData(amount) {
            let myMap = new Map();
            for (let i = 0; i < amount; i += 1) {
                myMap.set({href: "test1", iconName: "icon-plus", stringName: "tester"}, FixedHeader.IconProfile);
            }
            return myMap;
        }


        it("returns a 4 elements for 4 data types", ()=> {
            let result = PureFunc.populateElement(createData(4));
            expect(result.length).toEqual(4);
        });
    });
    describe("isOpen", ()=> {

        it("returns isClosed based on state", ()=> {
            let state = stateCreate("test");
            let element = "test";
            let ans = "isClosed";
            let result = PureFunc.isOpen(element, state);
            expect(result).toBe(ans);
        });
        it("returns isOpen based on state", ()=> {
            let state = stateCreate("test");
            let element = "test";
            let ans = "isOpen";
            const changeState = (x)=>(state = x);
            PureFunc.IconTriggered(element, state, changeState);
            let result = PureFunc.isOpen(element, state);
            expect(result).toBe(ans);
        });
        it("returns isCustom based on state", ()=> {
            let state = stateCreate("test");
            let element = "test";
            let ans = "isCustom";
            let custom = {second: ans};

            let result = PureFunc.isOpen(element, state, custom);
            expect(result).toBe(ans);
        });
        it("returns isAlsoCustom based on state", ()=> {
            let state = stateCreate("test");
            let element = "test";
            let ans = "isAlsoCustom";
            let custom = {first: ans};

            const changeState = (x)=>(state = x);
            PureFunc.IconTriggered(element, state, changeState);
            let result = PureFunc.isOpen(element, state, custom);
            expect(result).toBe(ans);
        });
    });
    describe("TopMenuData", ()=> {

        let topMenuData = new PureFunc.TopMenuData();
        it("returns new object data", ()=> {
            expect(topMenuData).toBeDefined();
        });
        it("added task elements to topMenuData ", ()=> {
            let result = topMenuData.addTasks([
                {desc: "Metronic v1.1", percent: "10"},
                {desc: "Metronic v1.1", percent: "20"},
                {desc: "Metronic v1.1", percent: "30"}
                ]);
            expect(result).toBeDefined();
            expect(result.tasks.size).toEqual(3);
        });
        it("added inbox elements to topMenuData", ()=> {
            let result = topMenuData.addInboxes([
                {
                imgLocation: "http://bit.ly/2cfaQ21",
                time: "just now",
                sender: "Alec kerr",
                message: "This was made from a test file."
            },{
                imgLocation: "http://bit.ly/2cfaQ21",
                time: "just now",
                sender: "Alec kerr",
                message: "This was made from a test file."
            },{
                imgLocation: "http://bit.ly/2cfaQ21",
                time: "just now",
                sender: "Alec kerr",
                message: "This was made from a test file."
            }
            ]);
            expect(result).toBeDefined();
            expect(result.inboxes.size).toEqual(3);
        });
        it("added notification elements to topMenuData", ()=> {
            let result = topMenuData.addNotifies([{
                time: "1 min",
                iconName: "icon-plus",
                message: "This was made from a test file.",
            },{
                time: "1 min",
                iconName: "icon-plus",
                message: "This was made from a test file.",
            },{
                time: "1 min",
                iconName: "icon-plus",
                message: "This was made from a test file.",
            }]);
            expect(result).toBeDefined();
            expect(result.notifies.size).toEqual(3);
        });
        it("added header element to topMenuData", ()=> {
            let result = topMenuData.addHeader([
                {
                key: "tasks",
                pending: 2,
                subject: "Test",
                heading: "Notifications",
                actionMessage: "view all"
            },{
                key: "inbox",
                pending: 2,
                subject: "Test",
                heading: "Notifications",
                actionMessage: "view all"
            },{
                key: "notifications",
                pending: 2,
                subject: "Test",
                heading: "Notifications",
                actionMessage: "view all"
            }]);
            expect(result).toBeDefined();
            expect(result.header.size).toEqual(3);
        });
        it("added Icon element to topMenuData", ()=> {
            let result = topMenuData.addIcon([{
                iconName: "icon-bell",
                key:"tasks",
                notice:{},
                actionDropDown: {},
                styles: {
                    liClassName: "dropdown dropdown-extended nav-dropdown dropdown-task ",
                    aClassName: "dropdown-toggle"
                }
            },{
                iconName: "icon-envelope-open",
                key:"inbox",
                notice:{},
                actionDropDown: {},
                styles: {
                    liClassName: "dropdown dropdown-extended nav-dropdown dropdown-inbox ",
                    aClassName: "dropdown-toggle"
                }
            },{
                iconName: "icon-calendar",
                key:"notifications",
                notice:{},
                actionDropDown: {},
                styles: {
                    liClassName: "dropdown dropdown-extended nav-dropdown dropdown-notification",
                    aClassName: "dropdown-toggle"
                }
            }]);
            expect(result).toBeDefined();
            expect(result.icons.size).toEqual(3);
            expect(result.stateKeys.length).toEqual(3);
        });
        it("added UserIcon element to topMenuData", ()=> {
            let result = topMenuData.addUserIcon({
                imgLocation: "http://bit.ly/2cqW9ue",
                stringName: "Alec Kerr",
                iconName: "icon-options-vertical"
            });
            expect(result).toBeDefined();
            expect(result.userIcon).toBeDefined();
        });
        it("added IconProfile element to topMenuData", ()=> {
            let result = topMenuData.addIconProfile([{
                iconName: "icon-test",
                stringName: "My Profile",
                href: "#"
            },{
                iconName: "icon-test",
                stringName: "My Profile",
                href: "#"
            }
            ]);
            expect(result).toBeDefined();
            expect(result.iconProfiles.size).toEqual(2);
        });
        it("added ProfileMenu element to topMenuData", ()=> {
            let result = topMenuData.hasProfileMenu(true);
            expect(result).toBeDefined();
            expect(result.profileMenu).toBeTruthy();
        });
        it("added UserProfile element to topMenuData", ()=> {
            let result = topMenuData.hasUserProfile(true);
            expect(result).toBeDefined();
            expect(result.userProfile).toBeTruthy();
        });
        it("generates TopMenuNav", ()=> {
            let result = topMenuData.generate();
            expect(result).toMatchSnapshot();
        });
    });
});