// var template_right = document.querySelector(".template_right_")

export function add_template(template_right, temp){
    if(temp === "product"){
        template_right.innerHTML = 
            `
            <div class="template_right_bar flex align-items-center">
            <div class="bar_function flex align-items-center">
              <div class="search_pro flex align-items-center">
                <i class="fas fa-search" id="icon_search"></i><span>Search</span>
              </div>
              <div class="add_pro flex align-items-center">
                <i class="fas fa-plus"></i><span>Add Product</span>
              </div>
            </div>
            <div class="bar_info flex align-items-center">
              <i class="fas fa-bell"></i>
              <i class="fas fa-comment-alt"></i>
              <div class="user-function">
                <div class="user_login">
                    <input type="checkbox" id="user_up">
                    <label for="user_up" class="flex align-items-center">
                        <img src="../Images/user.jpg" alt=""/><span>'Dirty' Tommy</span></label>
                    <div class="function">
                        <div class="name">
                            <b style="font-size: 1.1rem;">Thomas Shelby</b>
                            <p>Peaky Blinder</p>
                        </div>
                        <ul id="user_down">
                            <li id="my_profile"></li>
                            <li><i class="fas fa-user-edit"></i><a href="">Edit Profile</a></li>
                            <li><i class="fab fa-cc-paypal"></i><a href="">Credit Card</a></li>
                            <li><i class="fas fa-question-circle"></i><a href="">Help</a></li>
                            <li onclick="javacript:logout_account()" id="log_out_btn"><i class="fas fa-sign-out-alt"></i><a href="###">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
          </div>
          <div class="template_right_table">
            <table class="table_sortable">
              <thead>
                <tr id="tr_main">
                  <th>Product</th>
                  <th>Name <i class="fas fa-angle-down" style="max-width: max-content; margin-left: .2rem;"></i></th>
                  <th>Amount <i class="fas fa-angle-down" style="max-width: max-content; margin-left: .2rem;"></i></th>
                  <th>Describe</th>
                  <th>Quantity<i class="fas fa-angle-down" style="max-width: max-content; margin-left: .3rem;"></i></th>
                  <th>Function</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
            `
    } else if(temp === "statistics") {
        template_right.innerHTML = 
        ``
    }
}