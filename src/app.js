/**
 * Created by Jorden Laureyssens on 29/05/2017.
 */
import './css/custom.scss';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
var show_navbar = false;

$(document).ready(function () {
    $(".home").show();
    $(".about").hide();

    //load team members
    $.getJSON(`http://localhost:3000/team-members`,
        (json) => {
            console.log(json);
            var stringified = JSON.stringify(json);
            if (stringified == "") {
                //list does not exist
                $("#tmp").val("It seems there is no list of team-members.");
            }
            else if (stringified == "[]") {
                //list is empty
                $("#tmp").val("It seems the list of team-members is empty.");
            }
            else {
                $.each(json, (index, element) => {
                    $("#tmp").append($('<div>', {
                        text: element.name
                    }))
                })
            }
        })
});

//$(window).resize(() => {
//if ($(window).width() < 768) {
//$(".hidden").hide();
//} else {
//$(".hidden").show();
//}
//});

$(".navbar-toggle").click(() => {
    if (show_navbar == true) {
        show_navbar = false;
        $("#navbar").addClass("hidden");
    } else {
        show_navbar = true;
        //$(".hidden").show();
        $("#navbar").removeClass("hidden");
    }
    //if ($(window).width() < 768) {
    //$(".hidden").hide();
    //} else {
    //$(".hidden").show();
    //}
});

$(".home-button").click(() => {
    $(".home-button").addClass("active");
    $(".about-button").removeClass("active");

    $(".home").show();
    $(".about").hide();
});

$(".about-button").click(() => {
    $(".home-button").removeClass("active");
    $(".about-button").addClass("active");

    $(".home").hide();
    $(".about").show();
});