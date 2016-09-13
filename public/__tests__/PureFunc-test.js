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

        let data = {};
        let topMenuData = new PureFunc.TopMenuData(data);
        it("returns new object data", ()=> {
            expect(topMenuData).toBeDefined();
        });
        it("added task elements to topMenuData ", ()=> {
            let result = topMenuData.addTasks([{key: "icon-test", desc: "Metronic v1.1", percent: "10"}]);
            expect(result).toBeDefined();
            expect(result.tasks.size).toBeGreaterThanOrEqual(1);
        });
        it("added inbox elements to topMenuData", ()=> {
            let result = topMenuData.addInboxes([{
                key: "icon-test",
                imgLocation: "http://bit.ly/2cfaQ21",
                time: "just now",
                sender: "Alec kerr",
                message: "This was made from a test file."
            }]);
            expect(result).toBeDefined();
            expect(result.inboxes.size).toBeGreaterThanOrEqual(1);
        });
        it("added notification elements to topMenuData", ()=> {
            let result = topMenuData.addNotifies([{
                key: "icon-plus",
                time: "1 min",
                iconName: "icon-plus",
                message: "This was made from a test file.",
            }]);
            expect(result).toBeDefined();
            expect(result.notifies.size).toBeGreaterThanOrEqual(1);
        });
        it("added header element to topMenuData", ()=> {
            let result = topMenuData.addHeader([{
                key: "icon-test",
                pending: 2,
                subject: "Test",
                heading: "Notifications",
                actionMessage: "view all"
            }]);
            expect(result).toBeDefined();
            expect(result.header.size).toBeGreaterThanOrEqual(1);
        });
        it("added Icon element to topMenuData", ()=> {
            let result = topMenuData.addIcon([{
                iconName: "icon-test",
                actionDropDown: {},
                styles: {
                    liClassName: "dropdown dropdown-extended nav-dropdown dropdown-inbox ",
                    aClassName: "dropdown-toggle"
                }
            }]);
            expect(result).toBeDefined();
            expect(result.icons.size).toBeGreaterThanOrEqual(1);
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
            }
            ]);
            expect(result).toBeDefined();
            expect(result.iconProfiles.size).toBeGreaterThanOrEqual(1);
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
            expect(result).toBeDefined();
        });
    });
});