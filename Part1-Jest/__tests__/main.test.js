const formatVolumeIconPath = require("../assets/scripts/main");

const vol = require('../assets/scripts/main');

describe('testing volume value', () => {
    test('testing volume greater than 66', () => {
        expect(formatVolumeIconPath(67)).toMatch('./assets/media/icons/volume-level-3.svg');
    });
    test('testing volume between 66 and 33', () => {
        expect(formatVolumeIconPath(60)).toMatch('./assets/media/icons/volume-level-2.svg');
    });
    test('testing volume between 33 and 0', () => {
        expect(formatVolumeIconPath(2)).toMatch('./assets/media/icons/volume-level-1.svg');
    });
    test('testing volume 0', () => {
        expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
    });
});