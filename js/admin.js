var list_product_template = [
  {
    link: "/product1.html",
    picture: "../Images/Product-img-1.jpg",
    name: "Simon taylor",
    price: "189.00",
    discount: 7,
    quantity: "100",
    per_month: 124,
    tag_1: "rock music",
    tag_2: "rap music",
    tag_3: "folk music",
    brand: "The beatles",
  },
  {
    link: "",
    picture: "../Images/pro_slide_1.jpg",
    name: "Spring Record",
    price: "30.00",
    discount: 0,
    quantity: "120",
    per_month: 25,
    tag_1: "",
    tag_2: "rap music",
    tag_3: "latin music",
    brand: "The beatles",
  },
  {
    link: "",
    picture: "../Images/pro_slide_2.jpg",
    name: "Rora Poter",
    price: "68.00",
    discount: 4,
    quantity: "50",
    per_month: 64,
    tag_1: "rock music",
    tag_2: "",
    tag_3: "popular music",
    brand: "Nirvana",
  },
  {
    link: "",
    picture: "../Images/pro_slide_3.jpg",
    name: "Polly Lo",
    price: "32.00",
    discount: 76,
    quantity: "20",
    per_month: 70,
    tag_1: "rock music",
    tag_2: "rap music",
    tag_3: "folk music",
    brand: "Thịnh SUy",
  },
  {
    link: "",
    picture: "../Images/pro_slide_4.jpg",
    name: "Grace Moreno",
    price: "99.00",
    discount: 0,
    quantity: "3",
    per_month: 2,
    tag_1: "jazz music",
    tag_2: "rap music",
    tag_3: "folk music",
    brand: "The beatles",
  },
  {
    link: "",
    picture: "../Images/pro_slide_5.jpg",
    name: "Pink Headphones",
    price: "85.00",
    discount: 0,
    quantity: "4",
    per_month: 67,
    tag_1: "jazz music",
    tag_2: "soul music",
    tag_3: "rock music",
    brand: "Chillies",
  },
  {
    link: "",
    picture: "../Images/pro_slide_6.jpg",
    name: "Neon Headphones",
    price: "87.00",
    discount: 0,
    quantity: "42",
    per_month: 4,
    tag_1: "rock music",
    tag_2: "rap music",
    tag_3: "folk music",
    brand: "Ngọt Band",
  },
  {
    link: "",
    picture: "../Images/pro_slide_7.jpg",
    name: "Music Fest",
    price: "23.00",
    discount: 0,
    quantity: "69",
    per_month: 69,
    tag_1: "rock music",
    tag_2: "jazz music",
    tag_3: "folk music",
    brand: "Nirvana",
  },
  {
    link: "",
    picture: "../Images/pro_slide_8.jpg",
    name: "Lost Variation",
    price: "48.00",
    discount: 0,
    quantity: "55",
    per_month: 74,
    tag_1: "jazz music",
    tag_2: "rap music",
    tag_3: "popular music",
    brand: "Thịnh SUy",
  },
];

///Add Template Right
import {add_template} from "./module-show-template.js"
add_template(document.querySelector(".template_right_"), "product")

////Add Product

function addProduct(e) {
  console.log(e.price, e.discount)
  var template_right_table = document.querySelector(
    ".template_right_table table tbody"
  );
  template_right_table.innerHTML += `
      <tr>
          <td id="product"><div class="product"><img src="${e.picture}" alt=""></div></td>
          <td id="name" style=" position: relative"><strong>${e.name}</strong>${e.per_month > 50 ? `<span id="hot_pro">Hot (${e.per_month} pro / mth)</span>` : `<span id="hot_pro" style="display: none">Hot (${e.per_month} pro / mth)</span>`}</td>
          <td id="price"><span id="price_none" style="display: none;">${parseFloat(e.price)}</span><span>$${(parseFloat(e.price) * (100 - e.discount) / 100).toFixed(2)}</span>${e.discount != 0 ? `<span id="discount">-${e.discount}%</span>` : `<span id="discount" style="display: none">-${e.discount}%</span>`}</td>
          <td id="describe" ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam, quae doloribus suscipit repudiandae illum voluptas cupiditate dolor blanditiis corporis magnam esse repellat, ducimus voluptates molestiae maxime, numquam natus autem?</p></td>
          <td id="quantity"><i>${e.quantity} disk</i></td>
          <td id="edit_remove" style="text-align: center;"><i id="edit" class="fas fa-edit"></i><i id="remove" style="margin-left: 1rem;" class="fas fa-trash-alt"></i></td>
      </tr>
      `;
}

list_product_template.forEach((e) => {
  addProduct(e);
});

var form = document.querySelector(".form_add");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

window.addNewProduct_ = addNewProduct_
function addNewProduct_() {
  if (document.getElementById("name_add").value.trim() != "" && img_src != "" && document.getElementById("price_add").value.trim() > 0) {
    
    
    var obj = {};
    obj["picture"] = img_src;
    obj["name"] = document.getElementById("name_add").value;
    obj["price"] = document.getElementById("price_add").value;
    obj["discount"] = document.getElementById("discount_add").value;
    obj["quantity"] = document.getElementById("quantity_add").value;
    obj["describe"] = document.getElementById("describe_add").value;
    list_product_template.push(obj);

    addProduct(obj);
  }
}
document.querySelector(".form_add").setAttribute("onSubmit", "addNewProduct_()");

var add_edit_table = document.querySelector(".add_edit_product table");

document.onclick = (e) => {
  if (e.target.id == "nothing_add") {
    document.querySelector(".add_edit_product").classList.remove("hold_show");
  }
}

document.querySelector(".add_pro").onclick = () => {
  add_edit_table.innerHTML = `
  <tr>
  <td><span>Name Pro : </span></td>
  <td><input id="name_add" type="text"></td>
</tr>
<tr>
  <td><span>Price Pro : </span></td>
  <td><input type="number" name="" id="price_add" value="0" step="9" min="0"></td>
</tr>
<tr>
  <td><span>Discount : </span></td>
  <td><input type="number" name="" id="discount_add" value="0" min="0"></td>
</tr>
<tr>
  <td><span>Quantity : </span></td>
  <td><input id="quantity_add" type="number" value="0" min="0"></td>
</tr>
<tr>
  <td><span>Describe : </span></td>
  <td><textarea id="describe_add" name="" id="" cols="23" rows="5"></textarea></td>
</tr>
<tr id="tr_submit">
  <td colspan="2" style="width: 100%;"><input type="submit"></td>
</tr>
  `
  document.querySelector(".add_edit_product").classList.add("hold_show")
}


var list_edit_product = document.querySelectorAll("td #edit");
//////////Edit Product
function list_edit_product1() {
  list_edit_product.forEach((e, n) => {
    e.onclick = () => {
      const rows = document.querySelectorAll(".table_sortable tr");
  
      document.querySelector(".add_edit_product h4").innerHTML = "Edit Product"
      document.querySelector(".img_uploaded").style.backgroundImage = `url(${rows[n + 1].children[0].children[0].children[0].src})`
  
      add_edit_table.innerHTML = `
        <tr>
        <td><span>Name Pro : </span></td>
        <td><input id="name_add" type="text" value="${rows[n + 1].children[1].children[0].textContent}"></td>
      </tr>
      <tr>
        <td><span>Price Pro : </span></td>
        <td><input type="number" name="" id="price_add" value="${parseFloat(rows[n + 1].children[2].children[0].textContent).toFixed(2)}" step="0.01" min="0"></td>
      </tr>
      <tr>
        <td><span>Discount : </span></td>
        <td><input type="number" name="" id="discount_add" value="${rows[n + 1].children[2].children[2].textContent.substring(1, rows[n + 1].children[2].children[2].textContent.length - 1)}" min="0"></td>
      <tr>
        <td><span>Quantity : </span></td>
        <td><input id="quantity_add" type="number" value="${parseInt(rows[n + 1].children[4].textContent.split(" disk"))}" min="0"></td>
      </tr>
      <tr>
        <td><span>Describe : </span></td>
        <td><textarea id="describe_add" name="" id="" cols="23" rows="5">${rows[n + 1].children[3].textContent}</textarea></td>
      </tr>
      <tr id="tr_submit">
        <td colspan="2" style="width: 100%;"><input onsubmit="return " type="submit"></td>
      </tr>
        `;
      document.querySelector(".add_edit_product").classList.add("hold_show");
      document.querySelector(".add_edit_product form").onsubmit = function () { return editProduct(rows[n + 1], parseFloat(document.getElementById("price_add").value), parseFloat(document.getElementById("discount_add").value.trim())) };
    }
  })
}
list_edit_product1();

function editProduct(row, price, discount) {
  let dPrice = parseFloat(price * (100 - discount) / 100);
  let pro_month = row.children[1].children[1].textContent.trim()
  let pro_month_t = pro_month.substring(5, pro_month.length - 11) > 50 ? `<span id="hot_pro">${row.children[1].children[1].textContent.trim()}</span>` : `<span id="hot_pro" style="display: none">${row.children[1].children[1].textContent.trim()}</span>`;
  let discount_t = document.getElementById("discount_add").value.trim() != 0 ? `<span id="discount">-${document.getElementById("discount_add").value.trim()}$</span>` : `<span id="discount" style="display: none">-0$</span>`;

  row.innerHTML = `
  <tr>
          <td id="product"><div class="product"><img src="${img_src == "" ? row.children[0].children[0].children[0].src : img_src}" alt=""></div></td>
          <td id="name"style=" position: relative"><strong>${document.getElementById("name_add").value.trim()}</strong>${pro_month_t}</td>
          <td id="price"><span id="price_none" style="display: none;">${row.children[2].children[0].textContent.trim()}</span><span>$${dPrice.toFixed(2)}</span>${discount_t}</td>
          <td id="describe" ><p>${document.getElementById("describe_add").value.trim()}</p></td>
          <td id="quantity"><i>${document.getElementById("quantity_add").value.trim()} disk</i></td>
          <td id="edit_remove" style="text-align: center;"><i id="edit" class="fas fa-edit"></i><i id="remove" style="margin-left: 1rem;" class="fas fa-trash-alt"></i></td>
      </tr>
  `
  
  list_edit_product = document.querySelectorAll("td #edit");
  list_remove_product = document.querySelectorAll("td #remove");
  document.querySelector(".add_edit_product").classList.remove("hold_show");

  list_edit_product1()
  list_remove_product1()
}


//////////Remove Product
var list_remove_product = document.querySelectorAll("td #remove");
function list_remove_product1() {
  list_remove_product.forEach((e, n) => {
    e.onclick = () => {
      let isExecuted = confirm("Are you sure to remove this product?");
		  if(isExecuted) {
        const rows = document.querySelectorAll(".table_sortable tr");
        removeProduct(rows[n+1], n)
      }
  }})
}

function removeProduct(row, n) {
  row.remove();
  list_edit_product = document.querySelectorAll("td #edit");
  list_remove_product = document.querySelectorAll("td #remove");

  list_edit_product1()
  list_remove_product1()
}
list_remove_product1();


///Upload image
var img_uploaded = document.querySelector(".img_uploaded");
var upload_img = document.getElementById("upload_img");
var img_src = "";

upload_img.addEventListener("change", () => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    img_src = reader.result;
    img_uploaded.style.backgroundImage = `url(${img_src})`;
  });
  reader.readAsDataURL(upload_img.files[0]);
});


//////Log Out Account
function logout_account() {
  window.location = "/html/index.html";
}


//-------------------------------------------------------------------

/////Sorting in column table
function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll(".table_sortable tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    var aColText, bColText;
    if (column == 4) {
      aColText = parseInt(a.querySelector(`.table_sortable td:nth-child(${column + 1})`).textContent.split(" disk"));
      bColText = parseInt(b.querySelector(`.table_sortable td:nth-child(${column + 1})`).textContent.split(" disk"));
    } else if (column == 2) {
      aColText = parseInt(a.querySelector(`.table_sortable td:nth-child(${column + 1})`).children[1].textContent.substring(1));
      bColText = parseInt(b.querySelector(`.table_sortable td:nth-child(${column + 1})`).children[1].textContent.substring(1));
    } else if (column == 1) {
      aColText = a.querySelector(`.table_sortable td:nth-child(${column + 1})`).children[0].textContent.trim();
      bColText = b.querySelector(`.table_sortable td:nth-child(${column + 1})`).children[0].textContent.trim();
    }

    return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table.querySelectorAll(".table_sortable th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table.querySelector(`.table_sortable th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
  table.querySelector(`.table_sortable th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);

  list_remove_product = document.querySelectorAll("td #remove");
  list_remove_product1();
  list_edit_product = document.querySelectorAll("td #edit");
  list_edit_product1();
}

document.querySelectorAll(".table_sortable th").forEach(headerCell => {
  headerCell.addEventListener("click", () => {
    const tableElement = headerCell.parentElement.parentElement.parentElement;
    const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);

    if (headerIndex != 0 && headerIndex != 3 && headerIndex != 5) {
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");
      sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    }
  });
});
