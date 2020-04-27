// JavaScript Document

$("#subscribeform").submit(function () {
  var action = $(this).attr("action");

  $("#mesaj").slideUp(750, function () {
    $("#mesaj").hide();

    $("#subsubmit")
      .after("")

      .attr("disabled", "disabled");

    $.post(
      action,
      {
        email: $("#subemail").val(),
      },

      function (data) {
        document.getElementById("mesaj").innerHTML = data;

        $("#mesaj").slideDown("slow");

        $("#subscribeform img.subscribe-loader").fadeOut("slow", function () {
          $(this).remove();
        });

        $("#subsubmit").removeAttr("disabled");

        if (data.match("success") != null) $("#subscribeform").slideUp("slow");
      }
    );
  });

  return false;
});

// populate team section with JSON data

$(document).ready(function () {
  console.log("inside getteam");
  var year = $("#teamcontainer").data("year");
  console.log("year is: " + year);
  $.getJSON("includes/team.json", function (teamData) {
    console.log("we got json: " + teamData);
    team = teamData[year];
    console.log("we got the year: " + team);
    $.each(team, function (index, person) {
      $("#teamcontainer").append(
        '<div class="team-content"> <img src="images/team-images/' +
          year +
          "/" +
          person.img +
          '" class="img-responsive"><div class="details"><div class="name" >' +
          person.name +
          '</div> <div class="title" >' +
          person.title +
          '</div> <div class="bio" >' +
          person.bio +
          '</div><div class="link"><a href="' +
          person.link +
          '" >Website</a></div></div> </div> '
      );
    });
  });
});
