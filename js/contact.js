///SEND EMAIL

var submit_contact = document.querySelector(".contact_function_left button");
submit_contact.addEventListener("click", () => {
  const contact_name = document.getElementById("name").value.trim();
  const contact_email = document.getElementById("email").value.trim();
  const contact_message = document.getElementById("message").value.trim();
  console.log("aaa")

  if (
    contact_email !== "" &&
    contact_email !== null &&
    contact_message !== "" &&
    contact_message !== null
  ) {
    const rex_e = /^\w+([.]\w+)?@\w+\.\w+(\.\w+)?$/;
  
    if (contact_email.match(rex_e)) {
      sendEmail(contact_email, contact_name, contact_message);
      document.querySelector(".contact_thanks").style.display = "block";
      document.querySelector(".contact_error").style.display = "none";
    } else {
      document.querySelector(".contact_error").style.display = "block";
      document.querySelector(".contact_thanks").style.display = "none";
    }
  } else {
    document.querySelector(".contact_error").style.display = "block";
    document.querySelector(".contact_thanks").style.display = "none";
  }
});

function sendEmail(email, name, message) {
  Email.send({
    SecureToken: "f755e7ff-d3ea-40bc-b5ac-e25a8e6d881f",
    To: email,
    From: "sypx.21it@vku.udn.vn",
    Subject: "Welcome to DIRTYLESC",
    Body: `Cảm ơn ${
      name !== null ? name : "bạn"
    } đã đăng kí nhận thông báo về các sản phẩm mới nhất. Cùng đồng hành với chúng tôi. <3`,
  }).then((message) => alert("Đăng kí nhận thông báo thành công!"));
}

