<script setup>
import CollectionBig from './../components/Collection-big.vue';
</script>

<template>
  <div class="wrap mobile-wrapper">
    <div class="header">
      <div class="header-picture">
        <RouterLink to="/">
          <img
            width="100"
            height="100"
            class="header-img"
            src="../assets/images/CV-billede-farve.png"
            alt="Oliver Eierstrand"
          />
        </RouterLink>
      </div>

      <div class="header-menu">
        <RouterLink to="/">
          <h2 class="logo">Oliver Eierstrand</h2>
        </RouterLink>
        <nav id="navbar" class="menu">
          <RouterLink class="menu-item" to="/">{{$t('aboutMeNav')}}</RouterLink>
          <RouterLink class="menu-item active" to="/erhvervserfaring"
            >{{$t('experienceNav')}}</RouterLink
          >
          <RouterLink class="menu-item" to="/projekter">{{$t('projectsNav')}}</RouterLink>
          <RouterLink class="menu-item" to="/kundskaber"
            >{{$t('itSkillsNav')}}</RouterLink
          >
          <RouterLink class="menu-item" to="/uddannelse">{{$t('educationNav')}}</RouterLink>
          <RouterLink class="menu-item" to="/kontakt">{{$t('contactNav')}}</RouterLink>
        </nav>
      </div>
    </div>
    <div class="domain-header mobile">
      <img
        class="domain-header-img"
        align="left"
        width="75"
        height="75"
        src="/images/work-experience.png"
        alt="CV profil billede"
      />
      <h5 class="domain-header-mobile" style="font-weight: 600">
        {{$t('experienceHeader')}}
      </h5>
      <h3>{{$t('experienceSubheader')}}</h3>
    </div>

    <CollectionBig
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-once="true"
      data-aos-duration="750"
    >
      <template v-slot:collection-header-slot>
        <div class="row">
          <div style="max-width: 75px" class="col">
            <img class="avatar" src="/images/Magenta.jpg" alt="Avatar" />
          </div>
          <div class="col nopadding">
            <p style="padding: 8.25px">
              {{$t('magentaHeader')}}
            </p>
          </div>
        </div>
      </template>
      <template v-slot:collection-subheader-slot>
        <p style="font-weight: 600">{{$t('magentaTimeframe')}}</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>
          {{$t('magentaIntro')}}
        </p>
        <p style="font-weight: bold">{{$t('magentaWorkAssignments')}}</p>
        <ul>
          <li>
            {{$t('magentaWorkAssignment1')}}
          </li>
          <li>
            {{$t('magentaWorkAssignment2')}}
          </li>
          <li>
            {{$t('magentaWorkAssignment3')}}
            <br>
            {{$t('magentaIncluding')}}
            <ul>
              <li>
                {{$t('magentaWorkAssignment31') }}
              </li>
              <li>
                {{ $t('magentaWorkAssignment32') }}
              </li>            
            </ul>
          </li>
          <li>{{ $t('magentaWorkAssignment4') }}
            <a
              class="link-text"
              href="https://os2.eu/produkt/os2mo"
              target="_blank">{{$t('magentaWorkAssignment4OS2MO')}}</a>
            {{$t('magentaWorkAssignment41')}}
          </li>
          <li>
            {{ $t('magentaWorkAssignment5') }}
            <br>
            {{$t('magentaIncluding')}}
            <ul>
              <li>
                {{ $t('magentaWorkAssignment51') }}
                <ul>
                  <li>
                    {{ $t('magentaWorkAssignment511') }}
                  </li>
                </ul>
                <li>
                  {{ $t('magentaWorkAssignment52') }}
                  </li>
              </li>
              <li>
                {{ $t('magentaWorkAssignment53') }}
              </li>
            </ul>
          </li>
          <li>
            {{ $t('magentaWorkAssignment6') }}
          </li>
        </ul>

        <p>
          {{ $t('magentaWorkAssignemntReference') }}
          <a
            class="link-text"
            href="files/Reference_Magenta.pdf"
            target="_blank"
            >{{$t('here')}}</a
          >.
        </p>
      </template>
    </CollectionBig>

    <CollectionBig
    >
    <!-- data-aos="zoom-in"
    data-aos-delay="50"
    data-aos-once="true"
    data-aos-duration="750" -->
      <template v-slot:collection-header-slot>
        <div class="row">
          <div style="max-width: 75px" class="col">
            <img class="avatar" src="/images/LassoX.jpg" alt="Avatar" />
          </div>
          <div class="col nopadding">
            <p style="padding: 8.25px">
              {{ $t('lassoHeader') }}
            </p>
          </div>
        </div>
      </template>
      <template v-slot:collection-subheader-slot>
        <p style="font-weight: 600">{{ $t('lassoTimeframe') }}</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>

        {{ $t('lassoIntro1') }}
          <br />
          <br />
          {{ $t('lassoIntro2') }}
          <a class="link-text" href="https://lassox.com/" target="_blank"
            >{{ $t('lasso') }}</a
          >
          {{ $t('lassoIntro21') }}
          <a
            class="link-text"
            href="https://lassox.com/om-os/kunder"
            target="_blank"
            >{{ $t('here') }}</a
          >. 
          <br />
          {{ $t('lassoIntro22') }}
        </p>

        <p style="font-weight: bold">{{$t('lassoAssignments')}}</p>
        <ul>
          <li>{{ $t('lassoAssignment1') }}</li>
          <li>{{ $t('lassoAssignment2')}}</li>
          <li>{{ $t('lassoAssignment3') }}</li>
        </ul>

        <p>
          {{$t('lassoWorkAssignemntReference')}}
          <a
            class="link-text"
            href="files/Reference_Lasso_X.pdf"
            target="_blank"
            >{{$t('here')}}</a
          >.
        </p>
      </template>
    </CollectionBig>

    <CollectionBig
    >
    <!-- data-aos="zoom-in"
    data-aos-delay="100"
    data-aos-once="true"
    data-aos-duration="750" -->
      <template v-slot:collection-header-slot>
        <div class="row">
          <div style="max-width: 75px" class="col">
            <img class="avatar" alt="Avatar" src="/images/MeeW.jpg" />
          </div>
          <div class="col nopadding">
            <p style="padding: 8.25px">{{$t('meewHeader')}}</p>
          </div>
        </div>
      </template>
      <template v-slot:collection-subheader-slot>
        <p style="font-weight: 600">{{$t('meewTimeframe')}}</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>
          {{$t('meewIntro')}}
        </p>

        <p style="font-weight: bold">{{$t('meewAssignments')}}</p>
        <ul>
          <li>{{$t('meewAssignment1')}}</li>
          <li>{{$t('meewAssignment2')}}</li>
          <li>{{$t('meewAssignment3')}}</li>
          <li>{{$t('meewAssignment4')}}</li>
        </ul>

        <p>
          {{$t('meewAssignmentReference')}}
          <a class="link-text" href="files/Reference_MeeW.pdf" target="_blank"
            >{{$t('here')}}</a
          >.
        </p>
      </template>
    </CollectionBig>

    <CollectionBig
    >
    <!-- data-aos="zoom-in"
    data-aos-delay="150"
    data-aos-once="true"
    data-aos-duration="750" -->
      <template v-slot:collection-header-slot>
        <div class="row">
          <div style="max-width: 75px" class="col">
            <img
              class="avatar"
              src="https://herstedosterskole.aula.dk/sites/herstedosterskole.aula.dk/files/styles/indholdsbillede_380_x_285_/public/arkiv/Billeder/Artikler/Forside/Logo%20%281%29.png?itok=xH7tnXEk"
              alt="Avatar"
            />
          </div>
          <div class="col nopadding">
            <p style="padding: 8.25px; line-height: 2.5rem;">{{ $t('skoleHeader') }}</p>
          </div>
        </div>
      </template>
      <template v-slot:collection-subheader-slot>
        <p style="font-weight: 600">{{$t('skoleTimeframe')}}</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>
          {{ $t('skoleIntro1') }}
          <br />
          {{ $t('skoleIntro2') }}
          <br />
          {{ $t('skoleIntro3') }} 
        </p>

        <p style="font-weight: bold">{{ $t('skoleAssignments') }}</p>
        <ul>
          <li>{{$t('skoleAssignment1')}}</li>
          <li>{{$t('skoleAssignment2')}}</li>
          <li>{{$t('skoleAssignment3')}}</li>
          <li>{{$t('skoleAssignment4')}}</li>
        </ul>
      </template>
    </CollectionBig>

    <div class="row" style="text-align: center">
      <div class="col">
        <button
          onclick="document.body.scrollTo({top: 0, behavior: 'smooth'});"
          class="custom-button"
        >
          <h5 style="font-weight: 600; margin-bottom: 0">
            {{$t('backToTopButtonText')}}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-arrow-up-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          </h5>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.link-text {
  font-weight: bold !important;
  text-decoration: underline !important;
}

.custom-button {
  color: var(--color-text);
  background-color: var(--collection-background);
  align-items: center;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

@media screen and (max-width: 626px) {
  .mobile {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .domain-header-mobile {
    margin-top: 80px;
  }
  .mobile-wrapper {
    padding-top: 20px !important;
  }
}
</style>
