<template>
  <div class="wrap">
    <div class="header">
      <div class="header-picture">
        <RouterLink to="/">
          <img
            width="100"
            height="100"
            class="header-img"
            src="../assets/images/CV-billede-farve.png"
            alt="CV profil billede"
          />
        </RouterLink>
      </div>

      <div class="header-menu">
        <RouterLink to="/">
          <h2 class="logo">Oliver Eierstrand</h2>
        </RouterLink>
        <nav id="navbar" class="menu">
          <RouterLink class="menu-item" to="/">Om mig</RouterLink>
          <RouterLink class="menu-item" to="/erhvervserfaring"
            >Erhvervserfaring</RouterLink
          >
          <RouterLink class="menu-item" to="/projekter">Projekter</RouterLink>
          <RouterLink class="menu-item" to="/kundskaber"
            >IT-Kundskaber</RouterLink
          >
          <RouterLink class="menu-item" to="/uddannelse">Uddannelse</RouterLink>
          <RouterLink class="menu-item active" to="/kontakt"
            >Kontakt</RouterLink
          >
        </nav>
      </div>
    </div>

    <div class="domain-header mobile">
      <img
        class="domain-header-img"
        align="left"
        width="75"
        height="75"
        src="/images/contact.png"
        alt="Kontakt billede"
      />
      <h5 class="domain-header-mobile" style="font-weight: 600">Kontakt mig</h5>
      <h3>Hvis du har spørgsmål eller andet</h3>
    </div>

    <div class="container mobile">
      <div
        data-aos="fade-left"
        data-aos-delay="5"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <p style="font-size: 20px; line-height; 24px;">
          Så kan jeg findes på sociale medier eller via mail:
        </p>
        <div class="col nopadding socials">
          <a
            style="margin-right: 50px"
            href="https://www.linkedin.com/in/oliver-eierstrand/"
            target="_blank"
            ><i class="fab fa-linkedin-in icon"></i
          ></a>

          <a
            style="margin-right: 50px"
            href="https://github.com/oliv1115"
            target="_blank"
            ><i class="fab fa-github icon"></i
          ></a>

          <a
            style="margin-right: 50px"
            href="mailto:mreierstrand@hotmail.com"
            target="_blank"
            ><i class="far fa-envelope icon"></i
          ></a>
        </div>

        <p style="font-size: 20px; line-height; 24px; margin-bottom: 40px;">
          Hvis de ikke er noget for dig, kan du altid sende mig en besked via
          kontaktformen. Jeg lover at vende tilbage!
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-once="true"
        data-aos-duration="1250"
      >
        <form
          target="_blank"
          action="https://formsubmit.co/mreierstrand@hotmail.com"
          method="POST"
        >
          <div class="form-group">
            <div class="form-row">
              <div class="col-12 col-md-6">
                <label
                  ><p class="label-text">
                    Navn <span class="form-required">*</span>
                  </p></label
                >
                <input type="text" name="name" class="form-control" required />
              </div>
              <div class="col-12 col-md-6 label-mobile">
                <label
                  ><p class="label-text">
                    Email <span class="form-required">*</span>
                  </p></label
                >
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label
              ><p class="label-text">
                Din besked <span class="form-required">*</span>
              </p></label
            >
            <textarea class="form-control" name="message" required></textarea>
          </div>
          <button type="submit" class="btn btn-lg btn-dark btn-block">
            Send besked
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
input,
textarea {
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 3%);
  font-family: Rubik, sans-serif;
  font-weight: 300;
}

textarea {
  min-height: 150px !important;
}

input {
  height: 50px;
}
h4 {
  margin: 0 !important;
}

input:hover {
  border: 1px solid #726f6f;
  box-shadow: 0 10px 20px rgb(0 0 0 / 3%);
}

textarea:hover {
  border: 1px solid #726f6f;
  box-shadow: 0 10px 20px rgb(0 0 0 / 3%);
}

p {
  margin-bottom: 20px;
}

.row {
  margin-left: auto;
  margin-right: auto;
}
.container {
  max-width: 760px;
}

.form-required {
  color: #c1594b;
}
.label-text {
  font-size: 20px;
  line-height: 32px;
  margin: 0 !important;
}
.form-required {
  color: #c1594b;
}

.icon {
  font-size: 2.2em;
}

.socials {
  margin-bottom: 20px;
}

@media screen and (max-width: 626px) {
  .mobile {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

@media screen and (max-width: 767px) {
  .label-mobile {
    margin-top: 15px !important;
  }
  .domain-header-mobile {
    margin-top: 80px;
  }
}
</style>
