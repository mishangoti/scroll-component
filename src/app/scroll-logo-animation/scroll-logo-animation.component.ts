import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { DOCUMENT } from '@angular/common';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-scroll-logo-animation',
  templateUrl: './scroll-logo-animation.component.html',
  styleUrls: ['./scroll-logo-animation.component.css']
})
export class ScrollLogoAnimationComponent implements OnInit {

 // @ViewChild('studentwellbeing_image_part_001', { static: true }) imagePart001: ElementRef<HTMLDivElement>;
    // @ViewChild('studentwellbeing_section_1_01', { static: true }) section001: ElementRef<HTMLDivElement>;

    // timeline = new TimelineMax({ paused : true, reversed : true });
    // homeLogoController = new ScrollMagic.Controller();

    constructor(@Inject(DOCUMENT) private document: Document) {}

    ngOnInit() {
        this.initialAnimations();
    }

    initialAnimations() {
        gsap.from('.scroll_logo_animation_section_1_01', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_section_1_01',
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
        gsap.from('.scroll_logo_animation_image_part_001', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_image_part_001',
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
        gsap.from('.scroll_logo_animation_section_1_02', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_section_1_02',
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
        gsap.from('.scroll_logo_animation_image_part_002', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_image_part_002',
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
        gsap.from('.scroll_logo_animation_section_1_03', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_section_1_03',
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
        gsap.from('.scroll_logo_animation_image_part_003', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_image_part_003',
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
        gsap.from('.scroll_logo_animation_section_1_04', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_section_1_04',
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
        gsap.from('.scroll_logo_animation_image_part_004', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_image_part_004',
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
        gsap.from('.scroll_logo_animation_section_1_05', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_section_1_05',
                scrub: true,
                start: '-60% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: -40,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.scroll_logo_animation_image_part_005', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_image_part_005',
                scrub: true,
                start: '-60% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: -40,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.scroll_logo_animation_section_1_06', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_section_1_06',
                scrub: true,
                start: '-60% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: -40,
            rotation: 10,
            duration: 1.1,
        });
        gsap.from('.scroll_logo_animation_image_part_006', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_image_part_006',
                scrub: true,
                start: '-60% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: -40,
            rotation: 10,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.scroll_logo_animation_section_1_07', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_section_1_07',
                scrub: true,
                start: '-60% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: 20,
            rotation: -15,
            duration: 1.1,
        });
        gsap.from('.scroll_logo_animation_image_part_007', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_image_part_007',
                scrub: true,
                start: '-60% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: 20,
            rotation: -15,
            opacity: 0,
            duration: 1.1,
        });
        gsap.from('.scroll_logo_animation_section_1_08', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_section_1_08',
                scrub: true,
                start: '-60% center',
                end: '30% center',
                // markers: true,
                toggleActions: 'restart pause reverse none'
            } as gsap.plugins.ScrollTriggerInstanceVars,
            y: 40,
            x: 40,
            rotation: 10,
            duration: 1.1,
        });
        gsap.from('.scroll_logo_animation_image_part_008', {
            scrollTrigger: {
                trigger: '.scroll_logo_animation_image_part_008',
                scrub: true,
                start: '-60% center',
                end: '30% center',
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
