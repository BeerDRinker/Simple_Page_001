/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos  !!!SYLB!!! */

/*jslint vars: true, devel: true*/
/*global $, jQuery, alert*/


$(window).scroll(function () {
    'use strict';

    var sticky = $('#myNavbar'),
        scroll = $(window).scrollTop(),
        navbar = $('.navbar'),
        top = $('#top');

    if (scroll > 98) {

        sticky.addClass('navbar-fixed-top');
        navbar.css('background', '#000');
        top.addClass('hero-fixed-padding');

    } else {

        sticky.removeClass('navbar-fixed-top');
        navbar.css('background', 'rgba(0, 0, 0, 0.5)');
        top.removeClass('hero-fixed-padding');

    }
});
