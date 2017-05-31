/**
 * Created by Jorden Laureyssens on 29/05/2017.
 */
import './css/custom.scss';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
var show_navbar = false;

function loadTeam() {
    $.getJSON(`http://localhost:3000/team-members`,
        (json) => {
            //clear the container
            $("#team_showcase").empty();

            console.log(json);
            var stringified = JSON.stringify(json);
            if (stringified == "") {
                //list does not exist
                $("#team_showcase").css("color","red");
                $("#team_showcase").text("It seems there is no list of team-members.");
            }
            else if (stringified == "[]") {
                //list is empty
                $("#team_showcase").css("color","red");
                $("#team_showcase").text("It seems the list of team-members is empty.");
            }
            else {
                $("#team_showcase").css("color","black");
                $.each(json, (index, element) => {
                    //make a div for each member
                    //perhaps better to build an else if structure to
                    // distinguish between admins, mods and regular streamers?
                    $("#team_showcase").append('<div class="about">' + element.username + '</div>')
                })
            }
        });
}

$(document).ready(function () {
    $(".home").show();
    $(".about").hide();

    //load team members
    loadTeam();
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

$("#refresh_team_button").click(() => {
    loadTeam();
})