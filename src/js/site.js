;(function(site, undefined){
	"use strict";
	var homeNavBtn = $(".mainNav"),
		penguinNavBtn = $(".penguinNav"),
		workNavBtn = $(".workNav"),
		homePage = $("#mainPage"),
		penguinPage = $("#penguinsPage"),
		workPage = $("#workPage");

	// public methods and properties
	site.init = function(){
		homeNavBtn.click(function(){
			slidePageView(1);
		});
		penguinNavBtn.click(function(){
			slidePageView(2);
		});
		workNavBtn.click(function(){
			slidePageView(3);
		});
	};

	function slidePageView(num){
		console.log("Page Toggled!");
		if(num == 1){
			console.log(" - Toggled 1");
			homePage.show();
			penguinPage.hide();
			workPage.hide();
			$('html, body').css('background-color', '#FF3C64');
			$('html, body, a').css('color', '#ffffff');
			$('.miniTitle').css('color', '#C3F000');
			homePage.animate({left: 0}, 2000);
		}else if(num == 2){
			console.log(" - Toggled 2");
			penguinPage.show();
			homePage.hide();
			workPage.hide();
			$('html, body').css('background-color', '#99E900');
			$('html, body, a, .miniTitle').css('color', '#505F6E');
			penguinPage.animate({left: 0}, 2000);
		}else{
			console.log(" - Toggled 3");
			workPage.show();
			homePage.hide();
			penguinPage.hide();
			$('html, body').css('background-color', '#7F47DD');
			$('html, body, a').css('color', '#ffffff');
			$('.miniTitle').css('color', '#C3F000');
			workPage.animate({left: 0}, 2000);
		}
	}
	// fire on DOM ready
	$(function(){
		site.init();
	});
})(window.site=window.site || {});
