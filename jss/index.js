$("#move-galery").on("click", () => {
  if ($("#move-galery").hasClass("moved")) {
    $("#move-galery").removeClass("moved");
    $(".galery").removeClass("moved");
  } else {
    $(".galery").addClass("moved");
    $("#move-galery").addClass("moved");
  }
});

$(".viac-recenzii").on("click", () => {
  console.log("eeyy");
  $(".less").css("display", "none");
  $(".more").css("display", "inline-block");
});
