/////Sorting in column table
function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll(".table_sortable tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    var aColText, bColText;
    if (column == 4) {
      aColText = parseInt(
        a
          .querySelector(`.table_sortable td:nth-child(${column + 1})`)
          .textContent.split(" disk")
      );
      bColText = parseInt(
        b
          .querySelector(`.table_sortable td:nth-child(${column + 1})`)
          .textContent.split(" disk")
      );
    } else if (column == 2) {
      aColText = parseInt(
        a
          .querySelector(`.table_sortable td:nth-child(${column + 1})`)
          .children[1].textContent.substring(1)
      );
      bColText = parseInt(
        b
          .querySelector(`.table_sortable td:nth-child(${column + 1})`)
          .children[1].textContent.substring(1)
      );
    } else if (column == 1) {
      aColText = a
        .querySelector(`.table_sortable td:nth-child(${column + 1})`)
        .children[0].textContent.trim();
      bColText = b
        .querySelector(`.table_sortable td:nth-child(${column + 1})`)
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
    .querySelectorAll(".table_sortable th")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`.table_sortable th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`.table_sortable th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);

  list_remove_product = document.querySelectorAll("td #remove");
  list_remove_product1();
  list_edit_product = document.querySelectorAll("td #edit");
  list_edit_product1();
}

export function get_sort(list_th) {
    list_th.forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );

      if (headerIndex != 0 && headerIndex != 3 && headerIndex != 5) {
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");
        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
      }
    });
  });
}
