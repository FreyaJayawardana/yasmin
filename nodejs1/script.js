var typed = new Typed("#text2", {
  strings: ["Yasmin❤️", "Iis❤️"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
});

function toggleText() {
  // Get all the elements from the page
  let points = document.getElementById("points");

  let showMoreText = document.getElementById("moreText");

  let buttonText = document.getElementById("textMore");

  if (points.style.display === "none") {
    showMoreText.style.display = "none";

    points.style.display = "inline";

    buttonText.innerHTML = "Show More";
  } else {
    showMoreText.style.display = "inline";

    points.style.display = "none";
    buttonText.innerHTML = "Show Less";
  }
}

function validate(event) {
  event.preventDefault(); //  this will prevent form submission
  var adkdnadadadakdnakdnxndkndaknknnaskskavknvasknkavnkasnvknaksnvknsvks =
    document.getElementById("id").value; //  missing quotes around id
  var adkdnadadadakdnakdnkandkndaknknnaskskavknvasknkavnkasnvknaksnvknsvks =
    document.getElementById("pw").value; //  missing quotes around id

  if (
    adkdnadadadakdnakdnxndkndaknknnaskskavknvasknkavnkasnvknaksnvknsvks ==
      "yasmin" &&
    adkdnadadadakdnakdnkandkndaknknnaskskavknvasknkavnkasnvknaksnvknsvks ==
      "hehehe"
  ) {
    alert("Login Successful");
    location.href = "foryouuuuxixi.html";
  } else {
    alert("Login Failed");
  }
}

// const sctn = document.getElementsByTagName("section");
// for (i = 0; i < 4; i++) {
//   sctn[i].style.display = "none";
// }
