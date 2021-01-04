document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .from('.image_part_001', 4, {
        y: -40,
        x: -40,
        rotation: 10,
        opacity: 0,
        ease: Power3.easeInOut
    })
    .from('.section_1_01', 4, {
        y: -40,
        x: -40,
        rotation: 10,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.image_part_002', 4, {
        y: -40,
        x: -20,
        rotation: -15,
        opacity: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_02', 4, {
        y: -40,
        x: -20,
        rotation: -15,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.image_part_003', 4, {
        y: -40,
        x: 20,
        rotation: 20,
        opacity: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_03', 4, {
        y: -40,
        x: 20,
        rotation: 20,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.image_part_004', 4, {
        y: -40,
        x: 20,
        rotation: -15,
        opacity: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_04', 4, {
        y: -40,
        x: 20,
        rotation: -15,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.image_part_005', 4, {
        y: 40,
        x: -40,
        rotation: -15,
        opacity: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_05', 4, {
        y: 40,
        x: -40,
        rotation: -15,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.image_part_006', 4, {
        y: 40,
        x: -20,
        rotation: 10,
        opacity: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_06', 4, {
        y: 40,
        x: -20,
        rotation: 10,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.image_part_007', 4, {
        y: 40,
        x: 20,
        rotation: -15,
        opacity: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_07', 4, {
        y: 40,
        x: 20,
        rotation: -15,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.image_part_008', 4, {
        y: 40,
        x: 40,
        rotation: 10,
        opacity: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_08', 4, {
        y: 40,
        x: 40,
        rotation: 10,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_bg', 4, {
        y: 0,
        x: 0,
        opacity: 0,
        ease: Power3.easeInOut
    })

    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '200%',
        triggerHook: 0,
        offset: '300'
    })
    .setTween(timeline)
    .setPin('.first-section')
    .addTo(controller);


// end of first section
    
})
