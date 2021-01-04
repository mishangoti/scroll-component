import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { DOCUMENT } from '@angular/common';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-scroll-staffwellbeing-logo',
  templateUrl: './scroll-staffwellbeing-logo.component.html',
  styleUrls: ['./scroll-staffwellbeing-logo.component.css']
})
export class ScrollStaffwellbeingLogoComponent implements OnInit {
  // @ViewChild('studentwellbeing_image_part_001', { static: true }) imagePart001: ElementRef<HTMLDivElement>;
    // @ViewChild('studentwellbeing_section_1_01', { static: true }) section001: ElementRef<HTMLDivElement>;

    // timeline = new TimelineMax({ paused : true, reversed : true });
    // homeLogoController = new ScrollMagic.Controller();

    constructor(@Inject(DOCUMENT) private document: Document) {}

    ngOnInit() {
        this.initialAnimations();
    }

    initialAnimations() {
        gsap.from('.staffwellbeing_section_1_01', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_01',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -30,
            x: -30,
            rotation: 10,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_001', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_001',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -30,
            x: -30,
            rotation: 10,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_02', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_02',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -30,
            x: -20,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_002', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_002',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -30,
            x: -20,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_03', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_03',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -30,
            x: 20,
            rotation: 20,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_003', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_003',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -30,
            x: 20,
            rotation: 20,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_04', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_04',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -30,
            x: 20,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_004', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_004',
                scrub: true,
                //   start: '-30% center',
                //   end: '150% center',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: -30,
            x: 20,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_05', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_05',
                scrub: true,
                start: '-70% center',
                end: '50% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: -30,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_005', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_005',
                scrub: true,
                start: '-70% center',
                end: '50% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: -30,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_06', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_06',
                scrub: true,
                start: '-70% center',
                end: '50% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: -30,
            rotation: 10,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_006', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_006',
                scrub: true,
                start: '-70% center',
                end: '50% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: -30,
            rotation: 10,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_07', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_07',
                scrub: true,
                start: '-70% center',
                end: '50% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 20,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_007', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_007',
                scrub: true,
                start: '-70% center',
                end: '50% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 20,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_08', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_08',
                scrub: true,
                start: '-70% center',
                end: '50% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 30,
            rotation: 10,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_008', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_008',
                scrub: true,
                start: '-70% center',
                end: '50% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 30,
            rotation: 10,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_09', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_09',
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
        gsap.from('.staffwellbeing_image_part_009', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_009',
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
        gsap.from('.staffwellbeing_section_1_10', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_10',
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
        gsap.from('.staffwellbeing_image_part_010', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_010',
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
        gsap.from('.staffwellbeing_section_1_11', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_11',
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
        gsap.from('.staffwellbeing_image_part_011', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_011',
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
        gsap.from('.staffwellbeing_section_1_12', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_12',
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
        gsap.from('.staffwellbeing_image_part_012', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_012',
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
        gsap.from('.staffwellbeing_section_1_13', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_13',
                scrub: true,
                start: '-130% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: -30,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_013', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_013',
                scrub: true,
                start: '-130% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: -30,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_14', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_14',
                scrub: true,
                start: '-130% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 30,
            rotation: 10,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_014', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_014',
                scrub: true,
                start: '-130% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 30,
            rotation: 10,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_15', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_15',
                scrub: true,
                start: '-130% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 20,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_015', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_015',
                scrub: true,
                start: '-130% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 20,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_16', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_16',
                scrub: true,
                start: '-130% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 30,
            rotation: 10,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_016', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_016',
                scrub: true,
                start: '-130% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 30,
            rotation: 10,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_17', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_17',
                scrub: true,
                start: '-150% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 20,
            rotation: 10,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_017', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_017',
                scrub: true,
                start: '-150% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 20,
            rotation: 10,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_18', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_18',
                scrub: true,
                start: '-150% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 20,
            x: 30,
            rotation: -10,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_018', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_018',
                scrub: true,
                start: '-150% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 20,
            x: 30,
            rotation: -10,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_19', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_19',
                scrub: true,
                start: '-150% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 20,
            rotation: 15,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_019', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_019',
                scrub: true,
                start: '-150% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 30,
            x: 20,
            rotation: 15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_section_1_20', {
            scrollTrigger: {
                trigger: '.staffwellbeing_section_1_20',
                scrub: true,
                start: '-150% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 20,
            x: 30,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.staffwellbeing_image_part_020', {
            scrollTrigger: {
                trigger: '.staffwellbeing_image_part_020',
                scrub: true,
                start: '-150% center',
                end: '20% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 20,
            x: 30,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
    }

}
