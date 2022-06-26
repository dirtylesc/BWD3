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

///Hold down list Filter
var list_filters_input = document.querySelectorAll(
  ".template .template_left .list_filter input"
);
var list_filters = document.querySelectorAll(
  ".template .template_left .list_filter .list"
);
list_filters_input.forEach((e, n) => {
  e.onclick = () => {
    list_filters[n].classList.toggle("holdDown");
  };
});

///Fill colum or row product
var list_fill = document.querySelectorAll(".slider_fill .column i");
var list_fill_pro = document.querySelector(".cs-hidden");
list_fill.forEach((e, n) => {
  e.onclick = () => {
    if (n == 0) {
      list_fill[1].classList.remove("ppp");
      list_fill_pro.className = "cs-hidden flex flex-wrap c100";
    } else {
      list_fill[0].classList.remove("ppp");
      list_fill_pro.className = "cs-hidden flex flex-wrap c20";
    }
    e.classList.add("ppp");
  };
});

///Filter_Function
var close_holdRight = document.querySelector(".filter h2 i");
close_holdRight.onclick = () => {
  template_left.classList.remove("hold_right");
};

/////
var filter_icon = document.querySelector(".slider_fill .fill_filter");
var template_left = document.querySelector(".template_left");
filter_icon.addEventListener("click", () => {
  template_left.classList.add("hold_right");
});

//-----------------------------------------------------------------------------

/////Fill product template by tag
var ul_template = document.querySelector(".carousel-inner #autoWidth");

let product_index = 0;
function add_Product(item) {
  var newP = document.createElement("li");

  newP.classList.add("item");
  newP.innerHTML = `
  <a href="${item.link}"
  ><img src="${item.picture}" alt=""
/></a>
<div class="item_contents">
  <h3><a href="${item.link}">${item.name}</a></h3>
  <span>${item.price}</span>
  <p>
    Alienum phaedrum torquatos nec eu, vis detraxit
    periculis ex, nihil expetendis in mei. Mei an...
  </p>
  <div class="item_icons position-absolute">
    <div class="add_wishlist position-relative">
      <i class="fas fa-heart"></i>
      <span class="position-absolute"
        >Add to wishlist</span
      >
    </div>
    <div class="add_wishlist position-relative">
      <i class="fas fa-heart"></i>
      <span class="position-absolute"
        >Add to wishlist</span
      >
    </div>
    <div class="add_wishlist position-relative">
      <i class="fas fa-heart"></i>
      <span class="position-absolute"
        >Add to wishlist</span
      >
    </div>
    <div class="quick_add position-relative">
      <a href="javascript:addCartPro(${product_index})" class="position-absolute"
        ><span>Quick Add</span></a
      >
    </div>
  </div>
</div>
      `;
  ul_template.appendChild(newP);
  product_index++;
}

var collection_tags = document.querySelectorAll(".collections .list li a");
var brand_tags = document.querySelectorAll(".brands .list li a");
var collection_tags_span = document.querySelectorAll(
  ".collections .list li a span"
);
var brand_tags_span = document.querySelectorAll(".brands .list li a span");
let col_location = 4;
let bra_location = 0;

collection_tags.forEach((e, n) => {
  e.onclick = () => {
    if (n != col_location) {
      e.classList.add("ppp");
      collection_tags[col_location].classList.remove("ppp");
      col_location = n;

      change_TagPro(
        collection_tags_span[col_location].textContent.toLowerCase(),
        bra_location == -1
          ? ""
          : brand_tags_span[bra_location].textContent.toLowerCase()
      );
    }
  };
});

brand_tags.forEach((e, n) => {
  e.onclick = () => {
    if (n != bra_location) {
      e.classList.add("ppp");
      brand_tags[bra_location].classList.remove("ppp");
      bra_location = n;

      change_TagPro(
        collection_tags_span[col_location].textContent.toLowerCase(),
        brand_tags_span[bra_location].textContent.toLowerCase()
      );
    }
  };
});

change_TagPro("All", "All");

function change_TagPro(tag_click, brand_click) {
  collection_tags.forEach((item, m) => {
    item.style.pointerEvents = "none";
  });
  ul_template.innerHTML = "";

  setTimeout(() => {
    if ((tag_click == undefined ? "All" : tag_click) == "All") {
      list_product_template.forEach((item) => {
        add_Product(item);
      });
    } else if (brand_click == "all") {
      list_product_template.forEach((item) => {
        if (
          item.tag_1.includes(tag_click) ||
          item.tag_2.includes(tag_click) ||
          item.tag_3.includes(tag_click)
        ) {
          add_Product(item);
        }
      });
    } else {
      list_product_template.forEach((item) => {
        if (
          (item.tag_1.includes(tag_click) ||
            item.tag_2.includes(tag_click) ||
            item.tag_3.includes(tag_click)) &&
          item.brand.toLowerCase().includes(brand_click)
        ) {
          add_Product(item);
        }
      });
    }

    collection_tags.forEach((item) => {
      item.style.pointerEvents = "all";
    });
  }, 870);
}
