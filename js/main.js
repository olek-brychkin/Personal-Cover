var PR = 1;
setInterval(function () {
  var left_higher = $("#str5-left-higher");
  var left_lower = $("#str5-left-lower");
  var left_higher_src = left_higher.attr('src');
  if(PR == 1) {
    left_higher.attr("src", 'img/move/left/move-left-2.jpg');
    left_lower.attr("src", 'img/move/left/move-left-2-b.jpg');
    PR = 2
    //console.log("1");
  } else  if (PR == 2) {
    left_higher.attr("src", 'img/move/left/move-left-3.jpg');
    left_lower.attr("src", 'img/move/left/move-left-3-b.jpg');
    PR = 3;
    //console.log("2");
  } else  if (PR == 3) {
    left_higher.attr("src", 'img/move/left/move-left-4.jpg');
    left_lower.attr("src", 'img/move/left/move-left-4-b.jpg');
    PR = 4;
    //console.log("2");
  } else  if (PR == 4) {
    left_higher.attr("src", 'img/move/left/move-left-1.jpg');
    left_lower.attr("src", 'img/move/left/move-left-1-b.jpg');
    PR = 1;
    //console.log("2");
  }
}, 4020);

PR_2 = 1;

setInterval(function () {
  var left_higher = $("#str5-right-higher");
  var left_lower = $("#str5-right-lower");
  var left_higher_src = left_higher.attr('src');
  if(PR_2 == 1) {
    left_higher.attr("src", 'img/move/right/2.jpg');
    left_lower.attr("src", 'img/move/right/2-b.jpg');
    PR_2 = 2
    //console.log("1");
  } else  if (PR_2 == 2) {
    left_higher.attr("src", 'img/move/right/3.jpg');
    left_lower.attr("src", 'img/move/right/3-b.jpg');
    PR_2 = 3;
  } else  if (PR_2 == 3) {
    left_higher.attr("src", 'img/move/right/1.jpg');
    left_lower.attr("src", 'img/move/right/1-b.jpg');
    PR_2 = 1;
    //console.log("2");
  }
}, 4000);
