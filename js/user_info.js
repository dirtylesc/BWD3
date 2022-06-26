var edit_profile_btn = document.getElementById("edit_profile_btn");
edit_profile_btn.onclick = () => {
  document.querySelector(".user_info").classList.add("hold_show");
  document.querySelector(".head").classList.add("hide");

  var first_name_edit = document.getElementById("first_name_edit");
  var last_name_edit = document.getElementById("last_name_edit");
  var gmail_edit = document.getElementById("gmail_edit");
  first_name_edit.addEventListener("input", (e) => {
    document.getElementById("full_name_edit").textContent =
      document.getElementById("last_name_edit").value +
      " " +
      e.target.value.trim();
  });
  last_name_edit.addEventListener("input", (e) => {
    document.getElementById("full_name_edit").textContent =
      document.getElementById("first_name_edit").value +
      " " +
      e.target.value.trim();
  });
  gmail_edit.addEventListener("input", (e) => {
    document.getElementById("gmail_temp_edit").textContent =
      e.target.value.trim();
  });
};

document.onclick = (e) => {
  if (e.target.id == "nothing") {
    document.querySelector(".user_info").classList.remove("hold_show");
    document.querySelector(".head").classList.remove("hide");
  }
};

function profile_button_() {
  var last_name_edit = document.getElementById("last_name_edit").value.trim();
  var gmail_edit = document.getElementById("gmail_edit").value.trim();

  const rex_e = /^\w+(([.]\w+)+)?@.\w+\.\w+(\.\w+)?$/;
  console.log("phanxuansy219@gmail.com".match(rex_e));

  if (gmail_edit.match(rex_e) && last_name_edit != "") {
    document.getElementById("input-email").value = gmail_edit;
    document.getElementById("input-first-name").value =
      document.getElementById("first_name_edit").value;
    document.getElementById("input-last-name").value = last_name_edit;
    document.getElementById("input-address").value =
      document.getElementById("address_edit").value;
    document.getElementById("input-city").value = "";
    document.getElementById("input-country").value =
      document.getElementById("country_edit").value;
    document.getElementById("input-postal-code").value =
      document.getElementById("postal_edit").value;
    document.getElementById("about-me-area").innerHTML =
      document.getElementById("about_me_edit").innerHTML;
    document.getElementById("hello_name").innerHTML = "Hello " + last_name_edit;

    document.querySelector(".user_info").classList.remove("hold_show");
    document.querySelector(".head").classList.remove("hide");
  }
}
