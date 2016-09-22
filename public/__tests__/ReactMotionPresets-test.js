/**
 * Created by akerr on 9/21/16.
 */
import {iconConfig} from '../js/Extra Functionality/MyReactMotionPresets.js';


describe("iconConfig",()=>{
    it("returns object and matches snapshot",()=>{
        let result = iconConfig;

        expect(result).toBeDefined();
        expect(result).toMatchSnapshot();
    });

    it("returns config for spring with true val",()=>{
        let iconName = "icon-example";
        let state = new Map([["icon-example",true],["icon-exam",false]]);
        let result = iconConfig.mySpring(iconName,state);
        expect(result.hasOwnProperty("val")).toBeTruthy();
        expect(result.val).toMatchSnapshot();
    });
    it("returns config for spring with false val",()=>{
        let iconName = "icon-example";
        let state = new Map([["icon-example",false],["icon-exam",false]]);
        let result = iconConfig.mySpring(iconName,state);
        expect(result.hasOwnProperty("val")).toBeTruthy();
        expect(result.val).toMatchSnapshot();
    });
    it("returns object with value",()=>{
        let iconName = "icon-example";
        let state = new Map([["icon-example",true],["icon-exam",false]]);
        let result = iconConfig.iconStyle(iconName,state);
        expect(result).toBeTruthy();

    });
});
