const formatVolumeIconPath = require('../assets/scripts/main');

describe('test formatVolumeIconPath', ()=>{
    test('volumn greater than 66', ()=>{
        expect(formatVolumeIconPath(67)).toBe('./assets/media/icons/volume-level-3.svg');
    });

    test('volune less than 66 but greater than 33', ()=>{
        expect(formatVolumeIconPath(55)).toBe('./assets/media/icons/volume-level-2.svg');
    });

    test('volune less than 33 but greater than 0', ()=>{
        expect(formatVolumeIconPath(11)).toMatch(/volume-level-1.svg/);
    });

    test('volune less than 0', ()=>{
        expect(formatVolumeIconPath(-1)).toContain('./assets/media/icons/volume-level-0.svg');
    });
});

