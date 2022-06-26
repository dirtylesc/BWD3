import {list_account_info} from './module-list-account.js'

const username = new URL(window.location.href).searchParams.get("id");

var root_info_middle  = document.querySelector(".info_middle .row")
var root_info_edit = document.querySelector(".user_info .root") 

list_account_info.forEach(element => {
    if(element.username === username) {
        document.querySelector(".header").style.backgroundImage = `url(${element.info.picture_bg})`
        document.getElementById("img_logo_user").src = `${element.info.picture_logo}`

        ///Set info edit
        root_info_edit.innerHTML = 
        `
        <div class="col-md-3 left border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img id="img_logo_edit" class="rounded-circle mt-5" src="${element.info.picture_logo}"><span
              id="full_name_edit" style="margin: 1rem 0;" class="font-weight-bold">${element.info.lastname + " " + element.info.firstname}</span><span
              id="gmail_temp_edit" class="text-black-50">${element.t_contact.email}</span><span></span>
          </div>
        </div>
        <div class="col-md-5 mid border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6"><label class="labels">Name</label><input id="first_name_edit" type="text"
                  class="form-control" placeholder="first name" value="${element.info.firstname}">
              </div>
              <div class="col-md-6"><label class="labels">Lastname</label><input id="last_name_edit" type="text"
                  class="form-control" value="${element.info.lastname}" placeholder="lastname">
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12"><label class="labels">Phone number</label><input id="phone_edit" type="text"
                  class="form-control" placeholder="phone number" value="${element.t_contact.phone}">
              </div>
              <div class="col-md-12"><label class="labels">Address</label><input id="address_edit" type="text"
                  class="form-control" placeholder="address" value="${element.i_contact.address}">
              </div>
              <div class="col-md-12"><label class="labels">Email address</label><input id="gmail_edit" type="text"
                  class="form-control" placeholder="email id" value="${element.t_contact.email}">
              </div>
              <div class="col-md-12"><label class="labels">About me</label><textarea id="about_me_edit"
                  class="form-control" name="" id="" cols="30" rows="4">${element.about_me}</textarea>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6"><label class="labels">Country</label><input id="country_edit" type="text"
                  class="form-control" placeholder="country" value="${element.i_contact.country}">
              </div>
              <div class="col-md-6"><label class="labels">Postal code</label><input id="postal_edit" type="number"
                  class="form-control" value="${element.i_contact.postal_code}" min="0" placeholder="postal code">
              </div>
            </div>
            <div class="mt-5 text-center">
              <button class="btn btn-primary profile-button" onclick = "profile_button_()" type="button">Save Profile</button>
            </div>
          </div>
        </div>
        <div class="col-md-4 right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center experience">
              <span>Edit Experience</span>
            </div><br>
            <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text"
                class="form-control" placeholder="experience" value="">
            </div> <br>
            <div class="col-md-12"><label class="labels">Additional Details</label><input type="text"
                class="form-control" placeholder="additional details" value="">
            </div>
          </div>
        </div>
        `

        ///Set info middle
        root_info_middle.innerHTML = 
        `
<div class="row">
<div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
  <div class="card card-profile shadow">
    <div class="row justify-content-center">
      <div class="col-lg-3 order-lg-2">
        <div class="card-profile-image">
          <a href="#">
            <img src="${element.info.picture_logo}" class="rounded-circle">
          </a>
        </div>
      </div>
    </div>
    <div class="card-body pt-0 pt-md-4">
      <div class="row">
        <div class="col">
          <div class="card-profile-stats d-flex justify-content-center mt-md-5">
            <div>
              <span class="heading">22</span>
              <span class="description" style="min-width: max-content;">Shop Subscribe</span>
            </div>
            <div>
              <strong class="heading" style="text-transform: none;">Diamon</strong>
              <span class="description"
                style="font-weight: bold; color: black; padding-bottom: 1rem;">Ranking</span>
            </div>
            <div>
              <span class="heading">89</span>
              <span class="description">Comments</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <h3>
        ${element.info.lastname + " " + element.info.firstname}<span class="font-weight-light">, ${element.info.age}</span>
        </h3>
        <div class="h5 font-weight-300">
          <i class="ni location_pin mr-2"></i><span id="city_country">${element.i_contact.city + ", " + element.i_contact.country}</span>
        </div>
        <div class="h5 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
        </div>
        <div>
          <i class="ni education_hat mr-2"></i>University of Computer Science
        </div>
        <hr class="my-4">
        <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
          records all of his own music.</p>
        <a href="#">Show more</a>
      </div>
    </div>
  </div>
</div>
<div class="col-xl-8 order-xl-1">
  <div class="card bg-secondary shadow">
    <div class="card-header bg-white border-0">
      <div class="row align-items-center">
        <div class="col-8">
          <h3 class="mb-0">My account</h3>
        </div>
      </div>
    </div>
    <div class="card-body">
      <form>
        <h6 class="heading-small text-muted mb-4">User information</h6>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group focused">
                <label class="form-control-label" for="input-username">Username</label>
                <input type="text" id="input-username" disabled class="form-control form-control-alternative"
                  placeholder="Username" value="${element.username}">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="form-control-label" for="input-email">Email address</label>
                <input type="email" id="input-email" class="form-control form-control-alternative"
                  placeholder="${element.username}@example.com" value="${element.t_contact.email}">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group focused">
                <label class="form-control-label" for="input-first-name">First name</label>
                <input type="text" id="input-first-name" class="form-control form-control-alternative"
                  placeholder="First name" value="${element.info.firstname}">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group focused">
                <label class="form-control-label" for="input-last-name">Last name</label>
                <input type="text" id="input-last-name" class="form-control form-control-alternative"
                  placeholder="Last name" value="${element.info.lastname}">
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4">
        <!-- Address -->
        <h6 class="heading-small text-muted mb-4">Contact information</h6>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group focused">
                <label class="form-control-label" for="input-address">Address</label>
                <input id="input-address" class="form-control form-control-alternative"
                  placeholder="Home Address" value="${element.i_contact.address}"
                  type="text">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="form-group focused">
                <label class="form-control-label" for="input-city">City</label>
                <input type="text" id="input-city" class="form-control form-control-alternative"
                  placeholder="City" value="${element.i_contact.city}">
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group focused">
                <label class="form-control-label" for="input-country">Country</label>
                <input type="text" id="input-country" class="form-control form-control-alternative"
                  placeholder="Country" value="${element.i_contact.country}">
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="form-control-label" for="input-postal-code">Postal code</label>
                <input type="number" id="input-postal-code" class="form-control form-control-alternative"
                  min="0" placeholder="Postal code" value="${element.i_contact.postal_code}">
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4">
        <!-- Description -->
        <h6 class="heading-small text-muted mb-4">About me</h6>
        <div class="pl-lg-4">
          <div class="form-group focused">
            <label>About Me</label>
            <textarea id="about-me-area" rows="4" class="form-control form-control-alternative"
              placeholder="A few words about you ...">${element.about_me}</textarea>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
        `
    }
});