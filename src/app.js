/**
 * Created by Jorden Laureyssens on 29/05/2017.
 */
import './css/custom.scss';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'

$(".home-button").click(function () {
    $(".home-button").addClass("active");
    $(".about-button").removeClass("active");

    $(".home").show();
    $(".about").hide();
});

$(".about-button").click(function () {
    $(".home-button").removeClass("active");
    $(".about-button").addClass("active");

    $(".home").hide();
    $(".about").show();
});