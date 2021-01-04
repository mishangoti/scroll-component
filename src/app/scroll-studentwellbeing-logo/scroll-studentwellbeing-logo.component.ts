// declare let ScrollMagic: any;
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
// import {TweenLite, Power3, TimelineMax, TweenMax} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { DOCUMENT } from '@angular/common';
gsap.registerPlugin(ScrollTrigger);

// import * as ScrollMagic from 'ScrollMagic';
// import 'ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';
// import 'ScrollMagic/scrollmagic/minified/plugins/animation.gsap.min.js';

@Component({
    selector: 'app-scroll-studentwellbeing-logo',
    templateUrl: './scroll-studentwellbeing-logo.component.html',
    styleUrls: ['./scroll-studentwellbeing-logo.component.css']
})

export class ScrollStudentwellbeingLogoComponent implements OnInit {
    // @ViewChild('studentwellbeing_image_part_001', { static: true }) imagePart001: ElementRef<HTMLDivElement>;
    // @ViewChild('studentwellbeing_section_1_01', { static: true }) section001: ElementRef<HTMLDivElement>;

    // timeline = new TimelineMax({ paused : true, reversed : true });
    // homeLogoController = new ScrollMagic.Controller();

    constructor(@Inject(DOCUMENT) private document: Document) {}

    ngOnInit() {
        this.initialAnimations();
    }

    initialAnimations() {
        gsap.from('.studentwellbeing_section_1_01', {
            scrollTrigger: {
                trigger: '.studentwellbeing_section_1_01',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -40,
            x: -40,
            rotation: 10,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_image_part_001', {
            scrollTrigger: {
                trigger: '.studentwellbeing_image_part_001',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -40,
            x: -40,
            rotation: 10,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_section_1_02', {
            scrollTrigger: {
                trigger: '.studentwellbeing_section_1_02',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -40,
            x: -20,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_image_part_002', {
            scrollTrigger: {
                trigger: '.studentwellbeing_image_part_002',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -40,
            x: -20,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_section_1_03', {
            scrollTrigger: {
                trigger: '.studentwellbeing_section_1_03',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -40,
            x: 20,
            rotation: 20,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_image_part_003', {
            scrollTrigger: {
                trigger: '.studentwellbeing_image_part_003',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -40,
            x: 20,
            rotation: 20,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_section_1_04', {
            scrollTrigger: {
                trigger: '.studentwellbeing_section_1_04',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -40,
            x: 20,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_image_part_004', {
            scrollTrigger: {
                trigger: '.studentwellbeing_image_part_004',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -40,
            x: 20,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_section_1_05', {
            scrollTrigger: {
                trigger: '.studentwellbeing_section_1_05',
                scrub: true,
                start: '-110% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: -20,
            rotation: 10,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_image_part_005', {
            scrollTrigger: {
                trigger: '.studentwellbeing_image_part_005',
                scrub: true,
                start: '-110% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: -20,
            rotation: 10,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_section_1_06', {
            scrollTrigger: {
                trigger: '.studentwellbeing_section_1_06',
                scrub: true,
                start: '-110% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 20,
            x: 30,
            rotation: -10,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_image_part_006', {
            scrollTrigger: {
                trigger: '.studentwellbeing_image_part_006',
                scrub: true,
                start: '-110% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 20,
            x: 30,
            rotation: -10,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_section_1_07', {
            scrollTrigger: {
                trigger: '.studentwellbeing_section_1_07',
                scrub: true,
                start: '-110% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 20,
            rotation: 15,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_image_part_007', {
            scrollTrigger: {
                trigger: '.studentwellbeing_image_part_007',
                scrub: true,
                start: '-110% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 20,
            rotation: 15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_section_1_08', {
            scrollTrigger: {
                trigger: '.studentwellbeing_section_1_08',
                scrub: true,
                start: '-110% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 20,
            x: 30,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_image_part_008', {
            scrollTrigger: {
                trigger: '.studentwellbeing_image_part_008',
                scrub: true,
                start: '-110% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 20,
            x: 30,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_section_1_09', {
            scrollTrigger: {
                trigger: '.studentwellbeing_section_1_09',
                scrub: true,
                start: '-120% center',
                end: '10% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: -40,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_image_part_009', {
            scrollTrigger: {
                trigger: '.studentwellbeing_image_part_009',
                scrub: true,
                start: '-120% center',
                end: '10% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: -40,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_section_1_10', {
            scrollTrigger: {
                trigger: '.studentwellbeing_section_1_10',
                scrub: true,
                start: '-120% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: -40,
            rotation: 10,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_image_part_010', {
            scrollTrigger: {
                trigger: '.studentwellbeing_image_part_010',
                scrub: true,
                start: '-120% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: -40,
            rotation: 10,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_section_1_11', {
            scrollTrigger: {
                trigger: '.studentwellbeing_section_1_11',
                scrub: true,
                start: '-120% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: 20,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_image_part_011', {
            scrollTrigger: {
                trigger: '.studentwellbeing_image_part_011',
                scrub: true,
                start: '-120% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: 20,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_section_1_12', {
            scrollTrigger: {
                trigger: '.studentwellbeing_section_1_12',
                scrub: true,
                start: '-120% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: 40,
            rotation: 10,
            duration: 1.1,
        });
        gsap.from('.studentwellbeing_image_part_012', {
            scrollTrigger: {
                trigger: '.studentwellbeing_image_part_012',
                scrub: true,
                start: '-120% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: 40,
            rotation: 10,
            opacity: 0,
            duration: 1.1,
        });
    }

}
