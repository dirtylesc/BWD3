var list_product_search = [
  {
    link: "",
    picture: "../Images/Product-img-1.jpg",
    name: "Simon taylor",
    price: "89.00",
  },
  {
    link: "",
    picture: "../Images/pro_slide_1.jpg",
    name: "Spring Record",
    price: "89.00",
  },
  {
    link: "",
    picture: "../Images/pro_slide_2.jpg",
    name: "Rora Poter",
    price: "89.00",
  },
  {
    link: "",
    picture: "../Images/pro_slide_3.jpg",
    name: "Polly Lo",
    price: "89.00",
  },
  {
    link: "",
    picture: "../Images/pro_slide_4.jpg",
    name: "Grace Moreno",
    price: "89.00",
  },
  {
    link: "",
    picture: "../Images/pro_slide_5.jpg",
    name: "Pink Headphones",
    price: "89.00",
  },
  {
    link: "",
    picture: "../Images/pro_slide_6.jpg",
    name: "Neon Headphones",
    price: "89.00",
  },
  {
    link: "",
    picture: "../Images/pro_slide_7.jpg",
    name: "Music Fest",
    price: "89.00",
  },
  {
    link: "",
    picture: "../Images/pro_slide_8.jpg",
    name: "Lost Variation",
    price: "89.00",
  },
];

//////Add data to search func
var products = document.querySelector(".products");

list_product_search.forEach((item, n) => {
  var newProduct = document.createElement("div");

  newProduct.classList.add("product");
  newProduct.innerHTML = `
        <a href="${item.link}" class="picture"><img src="${item.picture}" alt=""></a>
            <div class="info">
                <h3><a href="">${item.name}</a></h3>
                <span class="price">$${item.price}</span>
                <div class="quick_add position-relative">
                    <a href="javascript:addCartPro(${n});"
                      ><span>Quick Add</span></a
                    >
                </div>
            </div>`;
  products.appendChild(newProduct);
});

////////////////////Hiển thị các tìm kiếm
var searchButton = document.getElementById("icon_search");
searchButton.onclick = () => {
  document.querySelector(".search").classList.toggle("block");
};

var searchInput = document.querySelector(".search input");
searchInput.addEventListener("input", function (e) {
  let textSearch = e.target.value.trim().toLowerCase();
  let listProduct = document.querySelectorAll(".product");
  let listTProduct = document.querySelectorAll(".product .info h3");
  let i = 0;

  listTProduct.forEach((item, n) => {
    if (item.innerText.toLowerCase().includes(textSearch)) {
      listProduct[n].classList.remove("hide");
      i++;
    } else {
      listProduct[n].classList.add("hide");
    }
  });

  if (textSearch != "") products.style.display = "block";
  else products.style.display = "none";
  if (i == 0) products.style.display = "none";
});

///////
var quantity_input_button = null, quantity_input_ele = null;

function up_downBtn() {
  quantity_input_button.forEach((e, n) => {
    e.onclick = () => {
      let m = n % 2 == 0 ? n / 2 : n / 2 - 0.5;
      if (e.value == 1) {
        quantity_input_ele[m].value++;
        if (quantity_input_button.length <= 2) {
          addMoney(
            document
              .querySelector(".cart_products .cart_pro .price_1")
              .textContent.substring(1)
          );
        } else
          addMoney(
            document
              .querySelectorAll(".cart_products .cart_pro .price_1")
              [m].textContent.substring(1)
          );
      } else if (quantity_input_ele[m].value >= 2) {
        quantity_input_ele[m].value--;
        if (quantity_input_button.length <= 2) {
          addMoney(
            -1 *
              document
                .querySelector(".cart_products .cart_pro .price_1")
                .textContent.substring(1)
          );
        } else
          addMoney(
            -1 *
              document
                .querySelectorAll(".cart_products .cart_pro .price_1")
                [m].textContent.substring(1)
          );
      }
    };
  });
}

//////
function asd() {
  addCartPro(0, document.querySelector(`.quantity-input__element_temp`).value)
}

//////Up down quantity if duplicate product
var list_text_pro;

//////Add cart to cart_menu
var cart_products = document.querySelector(".cart_products");

function addCartPro(n, count) {
  count = count === undefined ? 1 : count
  list_text_pro = document.querySelectorAll(".cart_products .cart_pro h3 a");
  let location = -1;
  list_text_pro.forEach((e, tempLocation) => {
    if (e.textContent == list_product_search[n].name) {
      location = tempLocation;
      return;
    }
  });
  if (location == -1) {
    var newProduct = document.createElement("div");

    newProduct.classList.add("cart_pro");
    newProduct.classList.add("flex");
    newProduct.innerHTML = `
  <a href="${list_product_search[n].link}"><img src="${list_product_search[n].picture}" alt=""></a>
  <div class="cart_pro_info">
    <h3><a href="${list_product_search[n].link}">${list_product_search[n].name}</a></h3>
    <span class="price_1" style="font-size: 1rem;">$${list_product_search[n].price}</span>
    <div class="quantity flex align-items-center">
      <div class="quantity_input flex align-items-center">
        <button class="quantity_input_button" value="-1"><i
                class="fas fa-minus"></i></button>
        <input
            class="quantity-input__element w-10 text-center flex-grow-1 flex-shrink-1 appearance-none"
            type="number" name="quantity" value="${count}" min="1"
            aria-label="Product quantity" data-quantity-input=""
            data-product-id="6745498943531">
        <button class="quantity_input_button" value="1"><i
                class="fas fa-plus"></i></button>
      </div>
      <a href="" class="remove">Remove</a>
    </div>
  </div>`;
    cart_products.appendChild(newProduct);
  } else {
    quantity_input_ele[location].value = parseInt(quantity_input_ele[location].value) + parseInt(count);
  }

  cart_content.classList.add("hold_right");
  quantity_input_button = document.querySelectorAll(".quantity_input button");
  quantity_input_ele = document.querySelectorAll(".quantity-input__element");
  up_downBtn();
  addMoney(list_product_search[n].price);
}

///////Subtotal money checkout target
function addMoney(newMoney) {
  let totalM = parseInt(
    document.querySelector(".subtotal input").value.substring(1)
  );
  totalM = totalM + parseInt(newMoney);
  document.querySelector(".subtotal input").value = "$" + totalM + ".00";
}

var product_details_title = document.querySelectorAll(".details_title label");
var product_details_text = document.querySelectorAll(".details_text span");
product_details_title.forEach((e, n) => {
  e.addEventListener("click", () => {
    e.classList.add("rightTo");
    if (n == 0) {
      product_details_title[1].classList.remove("rightTo");
      product_details_text[0].classList.add("rightTo");
      product_details_text[1].classList.remove("rightTo");
    } else {
      product_details_title[0].classList.remove("rightTo");
      product_details_text[1].classList.add("rightTo");
      product_details_text[0].classList.remove("rightTo");
    }
  });
});


////Check Out
var check_out_btn = document.querySelector(".quick_add_text")
check_out_btn.addEventListener("click", ()=>{
  var list_pro = document.querySelectorAll(".cart_pro_info h3 a")
  var list_count = document.querySelectorAll(".quantity-input__element")


  if(cart_products.hasChildNodes()) {
    let s = "?pro="
    list_pro.forEach((e,n)=>{
      s += `${e.textContent}-`
    })
    s = s.slice(0, -1)
    s += "&count=";
    list_count.forEach((e,n)=>{
      s += `${e.value}-`
    })
    s = s.slice(0, -1)

    window.open(`checkout.html${s}`)
  }
})


///SLLIDE IN PRODUCT
var carousel_control = document.querySelectorAll(".carousel-control");
var autoWidth = document.getElementById("autoWidth");
let m = 0;
carousel_control.forEach((e, n) => {
  e.addEventListener("click", () => {
    if (n == 1) {
      m++;
      autoWidth.style.transform = "translate3d(-" + 58.3 * m + "%,0,0)";
    } else {
      m--;
      autoWidth.style.transform = "translate3d(-" + 58.3 * m + "%,0,0)";
    }
    if (m == 2) {
      carousel_control[1].classList.add("disabled");
    } else if (m == 0) {
      carousel_control[0].classList.add("disabled");
    } else {
      carousel_control[1].classList.remove("disabled");
      carousel_control[0].classList.remove("disabled");
    }
  });
});

///Bar_Smaller_Function + Shopping Cart
var bar_smaller_icon = document.querySelector(".bar_smaller i");
var bar_smaller_content = document.querySelector(".menu_bar_content");
bar_smaller_icon.addEventListener("click", () => {
  bar_smaller_function.classList.add("hold_right");
});
document.onclick = (e) => {
  if (
    e.target.id !== "menu_bar_content" &&
    e.target.id !== "bar_smaller_icon"
  ) {
    bar_smaller_function.classList.remove("hold_right");
  }
  if (e.target.id == "nothing")
    document.querySelector(".log_function").classList.remove("hold_show");
  if (e.target.id == "cart_nothing") {
    cart_content.classList.remove("hold_right");
  }
};

var cart_icon = document.querySelector(".f_cart i");
var cart_content = document.querySelector(".cart_menu");
cart_icon.addEventListener("click", () => {
  cart_content.classList.add("hold_right");
});


// ////Log_In And Sign_Up
var log_in_btn = document.getElementById("ha");
var sign_up_btn = document.getElementById("dha");
var forget_pass_btn = document.getElementById("fa");
var log_function = document.querySelector(".log_function .container form");
var log_in_temp = document.querySelector(".bar_function .log_in_temp");
let listUser = ["admin"];
let listPass = ["admin"];


log_in_temp.onclick = () => {
  document.querySelector(".log_function").classList.add("hold_show");
};

sign_up_btn.onclick = () => {
  document.getElementById("ul_login").style.display = "none";
  document.getElementById("ul_signup").style.display = "block";
};

log_in_btn.onclick = () => {
  document.getElementById("ul_login").style.display = "block";
  document.getElementById("ul_signup").style.display = "none";
};

///Check Account To Sign Up or Login
const rex_e = /^\w+([.]\w+)?@\w+\.\w+(\.\w+)?$/;
let vitri = 1;

document.getElementById("submit_2").onclick = () => {
  let check = true;
  for (let i = 0; i < vitri; i++)
    if (document.querySelector("#username_signup input").value === listUser[i])
      check = false;

  if (check) {
    if (document.querySelector("#username_signup input").value.trim() != "") {
      if (document.querySelector("#gmail input").value.match(rex_e)) {
        if (
          document.querySelector("#password_signup input").value ===
            document.querySelector("#re_password input").value &&
          document.querySelector("#password_signup input").value.trim() != "" &&
          document.querySelector("#re_password input").value.trim() != ""
        ) {
          listUser[vitri] = document.querySelector(
            "#username_signup input"
          ).value;
          listPass[vitri] = document.querySelector(
            "#password_signup input"
          ).value;
          document.querySelector("#username_login input").value = "";
          document.querySelector("#password_login input").value = "";
          document.querySelector("#username_signup input").value = "";
          document.querySelector("#password_signup input").value = "";
          document.querySelector("#gmail input").value = "";
          document.querySelector("#re_password input").value = "";

          document.getElementById("ul_login").style.display = "block";
          document.getElementById("ul_signup").style.display = "none";
          vitri++;

          notification_f("sign_up_success");
        } else notification_f("re_pass_error");
      } else notification_f("gmail_error");
    }
  } else notification_f("username_error");
};

document.getElementById("log_out_btn").onclick = () => {
  document.querySelector(".user-function").style.display = "none";
  document.querySelector(".log_in_temp").style.display = "block";
};

document.getElementById("submit_1").onclick = () => {
  let i = 0;
  if (vitri == 0) notification_f("login_error");
  else {
    for (; i < vitri; i++) {
      if (
        document.querySelector("#username_login input").value === listUser[i] &&
        document.querySelector("#password_login input").value === listPass[i]
      ) {
        notification_f("login_success");

        setInterval(function () {
          document.querySelector(".log_function").classList.remove("hold_show");
          document.querySelector("#username_login input").value = ""; 
          document.querySelector("#password_login input").value = "";
          document.querySelector(".user-function").style.display = "block";
          document.querySelector(".log_in_temp").style.display = "none";

        }, 4000);

        if(listUser[i].includes("admin"))
          document.getElementById("my_profile").innerHTML += `<i class="fas fa-user"></i><a href="admin.html">My Profile</a>`
          else document.getElementById("my_profile").innerHTML += `<i class="fas fa-user"></i><a href="user_info.html?id=${listUser[i]}">My Profile</a>`
        break;
      }
    }
  }
};

///Show notificaion

const toasts = {
  success: {
    icon: '<i class="fas fa-check-circle"></i>',
    noti: "This is a success notification !",
  },
  error: {
    icon: '<i class="fas fa-exclamation-circle"></i>',
    noti: "This is a error notification !",
  },
  warning: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    noti: "This is a warning notification !",
  },
  email_error: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    noti: "Your Email's incorrect. Again!",
  },
  email_success: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    noti: "Your Email's correct. Thanks!",
  },
  re_pass_error: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    noti: "Password and Re-Password aren't match!",
  },
  gmail_error: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    noti: "Please fill your Gmail. Thanks!",
  },
  username_error: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    noti: "Username already exitst. Please try!",
  },
  sign_up_success: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    noti: "Sign up account success. Thanks <3",
  },
  login_success: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    noti: "Login account success. Thanks <3",
  },
  login_error: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    noti: "Your username or password is incorrect!",
  },
};
function notification_f(status) {
  let toast = document.createElement("div");
  toast.className = `toast ${status}`;

  toast.innerHTML = `
  ${toasts[status].icon}
  ${toasts[status].noti}
  <span class="timeline"></span>
  `;

  document.querySelector(".notification").appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "slide_hide 2s ease forwards";
    setTimeout(() => {
      toast.remove();
    }, 2100);
  }, 4100);
}
