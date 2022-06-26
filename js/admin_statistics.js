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
    discount: 15,
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
var list_user_template = [
  {
    username: "kurt.cobain.nir",
    info: {
      name: "Kurt Cobain",
      link: "user_info.html",
      picture: "../Images/kurt_cobain.jpg",
    },
    order: [
      [
        {
          name: "Simon Taylor",
          count: 2,
          total_money: 0,
        },
        {
          name: "Rora poter",
          count: 1,
          total_money: 0,
        },
      ],
      [
        {
          name: "Spring Record",
          count: 3,
          total_money: 0,
        },
      ],
    ],
  },
  {
    username: "sypx.21it",
    info: {
      name: "Phan Xuân Sỹ",
      link: "user_info.html",
      picture: "../Images/IMG_1396.png",
    },
    order: [
      [
        {
          name: "Polly Lo",
          count: 1,
          total_money: 0,
        },
      ],
      [
        {
          name: "Neon Headphones",
          count: 2,
          total_money: 0,
        },
      ],,
      [
        {
          name: "Lost Variation",
          count: 2,
          total_money: 0,
        },
      ],
    ],
    
  },
  {
    username: "anhdn.21it",
    info: {
      name: "Đinh Ngọc Anh",
      link: "user_info.html",
      picture: "../Images/IMG_1397.png",
    },
    order: [
      [
        {
          name: "Polly Lo",
          count: 1,
          total_money: 0,
        },
      ],
      [
        {
          name: "Neon Headphones",
          count: 2,
          total_money: 0,
        },
      ],
    ],
    
  },
  {
    username: "hungdg.21ad",
    info: {
      name: "Đàm Gia Hưng",
      link: "user_info.html",
      picture: "../Images/IMG_1398.png",
    },
    order: [
      [
        {
          name: "Neon Headphones",
          count: 2,
          total_money: 0,
        },
      ],,
      [
        {
          name: "Lost Variation",
          count: 2,
          total_money: 0,
        },
      ],
    ],
    
  },
];

var list_user_money = []

list_product_template.forEach((product) => {
  list_user_template.forEach((user, n) => {
    user.order.forEach((order) => {
      order.forEach(pro=>{
        if (pro.name.toLocaleLowerCase() == product.name.toLocaleLowerCase()) {
          pro.total_money =
            ((parseFloat(product.price) * (100 - product.discount)) / 100) * pro.count;
          list_user_money[n] = list_user_money[n] == undefined ? 0 : list_user_money[n]
          list_user_money[n] += parseFloat(pro.total_money);
          return;
        }
      })
    });
  });
});

var formatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

function addProduct(e, s) {
  var template_right_table = document.querySelector(
    `.template_right_table.${s} table tbody`
  );
  template_right_table.innerHTML += `
        <tr>
            <td id="product"><div class="product"><img src="${
              e.picture
            }" alt=""></div></td>
            <td id="name"><strong>${e.name}</strong></td>
            <td id="quantity"><i>${
              parseInt(e.quantity) + e.per_month > 150
                ? `<i class="fas fa-align-justify" style="margin-right: .5rem; transform: rotate(90deg); color: rgb(12, 210, 210);"></i>
                    <span>${parseInt(e.quantity) + e.per_month}</span>
                  `
                : `${
                    parseInt(e.quantity) + e.per_month > 100
                      ? `<i class="fas fa-bars" style="margin-right: .5rem; transform: rotate(90deg); color: rgb(220, 220, 17);"></i>
                        <span>${parseInt(e.quantity) + e.per_month}</span>
                        `
                      : `<i class="fas fa-minus" style="margin-right: .5rem; transform: rotate(90deg); color: red;"></i>
                        <span>${parseInt(e.quantity) + e.per_month}</span>
                        `
                  }`
            } disk</i></td>
            <td id="sold"><i>${e.per_month} disk</i></td>
            <td id="price"><span id="price_none">${formatter.format(
              parseFloat(e.price) * e.per_month
            )}</span></td>
            <td id="edit_remove" style="text-align: center;"><i id="edit" class="fas fa-edit"></i><i id="remove" style="margin-left: 1rem;" class="fas fa-trash-alt"></i></td>
        </tr>
        `;
}
function addUser(e, n) {
  var template_right_table = document.querySelector(
    `.template_right_table.user table tbody`
  );
  template_right_table.innerHTML += `
        <tr>
            <td id="product"><div class="product"><img src="${
              e.info.picture
            }" alt=""></div></td>
            <td id="name_user"><strong>${e.info.name}</strong></td>
            <td id="order_count_user">
              <span>${e.order.length} order / month</span>
            </td>
            <td id="total_money_user"><i>${formatter.format(list_user_money[n])}</i></td>
            <td id="edit_remove" style="text-align: center;"><i id="edit" class="fas fa-edit"></i><i id="remove" style="margin-left: 1rem;" class="fas fa-trash-alt"></i></td>
        </tr>
        `;
}

list_product_template.forEach((e) => {
  addProduct(e, "product");
});
list_user_template.forEach((e, n) => {
  addUser(e, n);
});

/////Sorting in column table
function sortTableByColumnPro(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(
    tBody.querySelectorAll(".template_right_table.product .table_sortable tr")
  );

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    var aColText, bColText;
    if (column == 4) {
      aColText = Number(
        a
          .querySelector(
            `.template_right_table.product .table_sortable td:nth-child(${
              column + 1
            })`
          )
          .textContent.substring(1)
          .replace(/[^0-9.-]+/g, "")
      );

      bColText = Number(
        b
          .querySelector(
            `.template_right_table.product .table_sortable td:nth-child(${
              column + 1
            })`
          )
          .textContent.substring(1)
          .replace(/[^0-9.-]+/g, "")
      );
    } else if (column == 3) {
      aColText = parseInt(
        a
          .querySelector(
            `.template_right_table.product .table_sortable td:nth-child(${
              column + 1
            })`
          )
          .children[0].textContent.split(" disk")
      );
      bColText = parseInt(
        b
          .querySelector(
            `.template_right_table.product .table_sortable td:nth-child(${
              column + 1
            })`
          )
          .children[0].textContent.split(" disk")
      );
    } else if (column == 2) {
      aColText = parseInt(
        a
          .querySelector(
            `.template_right_table.product .table_sortable td:nth-child(${
              column + 1
            })`
          )
          .children[0].children[1].textContent.split(" disk")
      );
      bColText = parseInt(
        b
          .querySelector(
            `.template_right_table.product .table_sortable td:nth-child(${
              column + 1
            })`
          )
          .children[0].children[1].textContent.split(" disk")
      );
    } else if (column == 1) {
      aColText = a
        .querySelector(
          `.template_right_table.product .table_sortable td:nth-child(${
            column + 1
          })`
        )
        .children[0].textContent.trim();
      bColText = b
        .querySelector(
          `.template_right_table.product .table_sortable td:nth-child(${
            column + 1
          })`
        )
        .children[0].textContent.trim();
    }

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll(".template_right_table.product .table_sortable th")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(
      `.template_right_table.product .table_sortable th:nth-child(${
        column + 1
      })`
    )
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(
      `.template_right_table.product .table_sortable th:nth-child(${
        column + 1
      })`
    )
    .classList.toggle("th-sort-desc", !asc);
}

document
  .querySelectorAll(".template_right_table.product .table_sortable th")
  .forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );

      if (headerIndex != 0 && headerIndex != 5) {
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");
        sortTableByColumnPro(tableElement, headerIndex, !currentIsAscending);
      }
    });
  });

function sortTableByColumnUser(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(
    tBody.querySelectorAll(".template_right_table.user .table_sortable tr")
  );

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    var aColText, bColText;
    if (column == 3) {
      aColText = Number(
        a
          .querySelector(
            `.template_right_table.user .table_sortable td:nth-child(${
              column + 1
            })`
          )
          .textContent.substring(1)
          .replace(/[^0-9.-]+/g, "")
      );

      bColText = Number(
        b
          .querySelector(
            `.template_right_table.user .table_sortable td:nth-child(${
              column + 1
            })`
          )
          .textContent.substring(1)
          .replace(/[^0-9.-]+/g, "")
      );
    } else if (column == 2) {
      aColText = parseInt(
        a
          .querySelector(
            `.template_right_table.user .table_sortable td:nth-child(${
              column + 1
            })`
          )
          .children[0].textContent.split(" order / month")
      );
      bColText = parseInt(
        b
          .querySelector(
            `.template_right_table.user .table_sortable td:nth-child(${
              column + 1
            })`
          )
          .children[0].textContent.split(" order / month")                                                
      );
    } else if (column == 1) {
      aColText = a
        .querySelector(
          `.template_right_table.user .table_sortable td:nth-child(${
            column + 1
          })`
        )
        .children[0].textContent.trim();
      bColText = b
        .querySelector(
          `.template_right_table.user .table_sortable td:nth-child(${
            column + 1
          })`
        )
        .children[0].textContent.trim();
    }

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll(".template_right_table.user .table_sortable th")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(
      `.template_right_table.user .table_sortable th:nth-child(${column + 1})`
    )
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(
      `.template_right_table.user .table_sortable th:nth-child(${column + 1})`
    )
    .classList.toggle("th-sort-desc", !asc);
}

document
  .querySelectorAll(".template_right_table.user .table_sortable th")
  .forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );

      if (headerIndex != 0 && headerIndex != 5) {
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");
        sortTableByColumnUser(tableElement, headerIndex, !currentIsAscending);
      }
    });
  });


///Change table
var carousel_control = document.querySelectorAll(".carousel-control");
var full_table = document.querySelector(".template_right_full_table");
carousel_control.forEach((e, n) => {
  e.addEventListener("click", () => {
    if (n == 1) {
      e.classList.add("disabled");
      carousel_control[0].classList.remove("disabled");
      full_table.style.transform = "translateX(-" + 100 + "%)";
      console.log(full_table.style.transform)
    } else {
      e.classList.add("disabled");
      carousel_control[1].classList.remove("disabled");
      full_table.style.transform = "translateX(0%)";
    }
  });
});
