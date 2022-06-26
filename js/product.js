var quantity_input_btn = document.querySelectorAll(".quantity_input_ .quantity_input_btn");
var quantity_input_ele_temp = document.querySelector(".quantity_input_ .quantity-input__element_temp");
function up_downBtn_Pro() {
    quantity_input_btn.forEach(element => {
    element.onclick = () => {
      if (element.value == 1) {
        quantity_input_ele_temp.value++;
      } else if(quantity_input_ele_temp.value > 1) {
        quantity_input_ele_temp.value--;
      }
    };
  });
}
up_downBtn_Pro();