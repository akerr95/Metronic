/**
 * Created by akerr on 9/21/16.
 */
import {presets,ICON} from '../js/Extra Functionality/MyReactMotionPresets.js';


describe("Presets",()=>{
    it("Presets should be defined",()=>{
        let result = presets;
        expect(result).not.toBeUndefined();
        expect(result).toMatchSnapshot();
    });
    it("Presets genScale should return an object with scale",()=>{
        let iconName = "test-1";
        let state = new Map([[iconName,false]]);
        let result = presets.genScale({iconName,state},ICON);

        expect(result.hasOwnProperty("scale")).toBeTruthy();
        expect(result.scale).toMatchSnapshot();
    });
    it("Presets genOpacity should return an object with opacity",()=>{
        let iconName = "test-1";
        let state = new Map([[iconName,false]]);
        let result = presets.genOpacity({iconName,state},ICON);

        expect(result.hasOwnProperty("opacity")).toBeTruthy();
        expect(result.opacity).toMatchSnapshot();
    });

});
