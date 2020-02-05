var staticUrl = "https://amc-creative-content.mgnt-xspdev.in";
window.stepTwoUrl = window.stepTwoUrl || "";
$(".radio-group .radio").click(function () {
    $(this)
        .parent()
        .find(".radio")
        .removeClass("selected");
    $(this).addClass("selected");
    var val = $(this).attr("data-value");
    //alert(val);
    // $(this)
    //   .parent()
    //   .find("input")
    //   .val(val);
    stepOneUrl = staticUrl + "/" + val + "/hux_intelligent_segment-";
    console.log(stepOneUrl);
});
$(document).on("change", "#datetimepicker", function () {
    var date = new Date($("#datetimepicker").val());
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    stepTwoUrl = stepOneUrl + [month, day, year].join("_") + ".json";
    console.log(stepTwoUrl);
    localStorage.setItem("url", stepTwoUrl);
});

// function fetchUrl() {
//     return {
//         url: stepTwoUrl
//     };
// }

// // module.exports.fetchUrl = fetchUrl;
// export default fetchUrl;
// // module.exports = fetchUrl;