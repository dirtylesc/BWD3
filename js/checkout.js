var list_product_template = [
  {
    link: "/product1.html",
    picture: "../Images/Product-img-1.jpg",
    name: "Simon taylor",
    price: "89.00",
    tag_1: "rock music",
    tag_2: "rap music",
    tag_3: "folk music",
    brand: "The beatles",
  },
  {
    link: "",
    picture: "../Images/pro_slide_1.jpg",
    name: "Spring Record",
    price: "89.00",
    tag_1: "",
    tag_2: "rap music",
    tag_3: "latin music",
    brand: "The beatles",
  },
  {
    link: "",
    picture: "../Images/pro_slide_2.jpg",
    name: "Rora Poter",
    price: "89.00",
    tag_1: "rock music",
    tag_2: "",
    tag_3: "popular music",
    brand: "Nirvana",
  },
  {
    link: "",
    picture: "../Images/pro_slide_3.jpg",
    name: "Polly Lo",
    price: "89.00",
    tag_1: "rock music",
    tag_2: "rap music",
    tag_3: "folk music",
    brand: "Thịnh SUy",
  },
  {
    link: "",
    picture: "../Images/pro_slide_4.jpg",
    name: "Grace Moreno",
    price: "89.00",
    tag_1: "jazz music",
    tag_2: "rap music",
    tag_3: "folk music",
    brand: "The beatles",
  },
  {
    link: "",
    picture: "../Images/pro_slide_5.jpg",
    name: "Pink Headphones",
    price: "89.00",
    tag_1: "jazz music",
    tag_2: "soul music",
    tag_3: "rock music",
    brand: "Chillies",
  },
  {
    link: "",
    picture: "../Images/pro_slide_6.jpg",
    name: "Neon Headphones",
    price: "89.00",
    tag_1: "rock music",
    tag_2: "rap music",
    tag_3: "folk music",
    brand: "Ngọt Band",
  },
  {
    link: "",
    picture: "../Images/pro_slide_7.jpg",
    name: "Music Fest",
    price: "89.00",
    tag_1: "rock music",
    tag_2: "jazz music",
    tag_3: "folk music",
    brand: "Nirvana",
  },
  {
    link: "",
    picture: "../Images/pro_slide_8.jpg",
    name: "Lost Variation",
    price: "89.00",
    tag_1: "jazz music",
    tag_2: "rap music",
    tag_3: "popular music",
    brand: "Thịnh SUy",
  },
];

var ship_btn = document.querySelector(".li_submit input");
var email_phone_input = document.querySelector("#email_phone input");
var last_name_input = document.querySelector("input#last_name");
var city_input = document.querySelector("input#city");
var address_input = document.querySelector("#address input");

function ship_btn_error() {
  if (email_phone_input.value.trim() == "")
    document.querySelector("#email_phone input").classList.add("error");
  if (last_name_input.value.trim() == "")
    document.querySelector("input#last_name").classList.add("error");
  if (city_input.value.trim() == "")
    document.querySelector("input#city").classList.add("error");
  if (address_input.value.trim() == "")
    document.querySelector("#address input").classList.add("error");
  return false;
}

email_phone_input.addEventListener("input", (e) => {
  if (e.target.value.trim() != "") email_phone_input.classList.remove("error");
});

last_name_input.addEventListener("input", (e) => {
  if (e.target.value.trim() != "") last_name_input.classList.remove("error");
});
city_input.addEventListener("input", (e) => {
  if (e.target.value.trim() != "") city_input.classList.remove("error");
});
address_input.addEventListener("input", (e) => {
  if (e.target.value.trim() != "") address_input.classList.remove("error");
});

///Get product from URL
const list_pro = new URL(window.location.href).searchParams.get("pro").split("-");
const list_count = new URL(window.location.href).searchParams
  .get("count")
  .split("-");
var list_price = [];
var list_img = []

const list_pro_lower = list_pro.map((element) => {
  return element.toLowerCase();
});

list_pro_lower.forEach((e, n) => {
  list_product_template.every((pro) => {
    if (e == pro.name.toLowerCase()) {
      list_price[n] = pro.price;
      list_img[n] = pro.picture;
      return false;
    }
    return true;
  });
});

var formatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});
var cart = document.querySelector(".cart");
list_pro.forEach((e, n) => {
  var newCart = document.createElement("div");
  newCart.classList.add("cart_product", "flex", "align-items-center");

  newCart.innerHTML = `
        <div class="img_product position-relative">
        <img src="${list_img[n]}" alt="">
        <label for="" class="position-absolute">${list_count[n]}</label>
        </div>
        <strong style="max-width: max-content;">${e}</strong>
        <span style="max-width: max-content;">${formatter.format(
          list_price[n] * list_count[n]
        )}</span>
    `;
  cart.appendChild(newCart);
});

var list_cart = document.querySelectorAll(".cart_product");
function setTotalMoney() {
  let total_money = 0;
  let shipping = document.querySelector(".shipping").children[1].textContent.replace(/[^0-9.-]+/g, "");
  list_cart.forEach((e) => {
    total_money += parseFloat(
      e.children[2].textContent.replace(/[^0-9.-]+/g, "")
    );
  });
  document.getElementById("sub_total").innerHTML = `${formatter.format(total_money)}`


  if(document.querySelector(".shipping").children[1].textContent == "Calculated at next step") document.getElementById("total_money").innerHTML = `${formatter.format(total_money)}`
  else document.getElementById("total_money").innerHTML = `${formatter.format(total_money + parseFloat(shipping))}`
}
setTotalMoney();
