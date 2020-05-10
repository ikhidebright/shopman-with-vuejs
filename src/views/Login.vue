<template>
  <div class="main">
<b-container>
  <br>
  <br>
  <br>
  <br>
  <div class='d-lg-flex d-sm-flex d-xl-flex d-md-flex flex-md-row flex-sm-row flex-lg-row  flex-xl-row d-none'>
  <div class="log">
    <h5 class="mb-4 text-center head">Login</h5>
    <br>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label=""
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Email"
        ></b-form-input>
      </b-form-group>
<br>
      <b-form-group id="input-group-2" label="" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          type="password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>
<br>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox class="mr-5" value="me">Remember password</b-form-checkbox>
          <router-link to='' class="ml-5">Forgot password?</router-link>
        </b-form-checkbox-group>
      </b-form-group>
<br>
      <b-button type="submit" block class="add" 
      style="background: #ff9900; 
      color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold"><i class="fas fa-envelope"></i>LOGIN</b-button>
    </b-form>
    </div>

    <div class="reg">
    <h5 class="mb-4 text-center head">Create your Shopman account</h5>
    <br>
    <p class="mb-5">
    Create your Shopman customer account in just a few 
    clicks! You can register using your e-mail 
    address 
    </p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <b-button to="/register" block class="add mt-1" style="background: #ff9900; 
      color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold"><i class="fas fa-envelope"></i> 
    CREATE AN ACCOUNT VIA E-MAIL</b-button>
    </div>
    </div>

    </b-container>

    
<!-- for mobile -->
  <div class='d-lg-none d-sm-none d-xl-none d-md-none'>
  <b-tabs content-class="mt-0" fill>
    <b-tab title="LOGIN"><p>
    <div class="log">
     <b-container>
    <h5 class="mb-4 text-center head">Login</h5>
    <br>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label=""
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Email"
        ></b-form-input>
      </b-form-group>
<br>
      <b-form-group id="input-group-2" label="" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          type="password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>
<br>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox class="mr-5" value="me">Remember password</b-form-checkbox>
          <router-link to='' class="ml-5">Forgot password?</router-link>
        </b-form-checkbox-group>
      </b-form-group>
<br>
      <b-button type="submit" block class="add" 
      style="background: #ff9900; 
      color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold"><i class="fas fa-envelope"></i>LOGIN</b-button>
    </b-form>
     </b-container>
    </div>
    </b-tab>
    <b-tab title="RESGISTER">
    <div class="regg">
     <b-container>
    <h5 class="mb-4 text-center head">Create your Shopman account</h5>
    <br>
    <b-form @submit="register" v-if="show">
    <b-form-group
        id="input-group-1"
        label=""
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.first_name"
          type="text"
          required
          placeholder="First Name"
        ></b-form-input>
      </b-form-group>
      <br>
      <b-form-group id="input-group-2" label="" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.last_name"
          type="text"
          required
          placeholder="Last Name"
        ></b-form-input>
      </b-form-group>
      <br>
      <b-input v-model="form.email" type="email" required placeholder="Email" id="feedback-email"></b-input>
      <b-form-invalid-feedback :state="validation">
        Account with e-mail already exist
      </b-form-invalid-feedback>
    <!--  <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>-->
      <br>
      <br>
      <b-form-group id="input-group-4" label="" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.password"
          type="password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>
<br>
<label class="sr-only" for="inline-form-input-phone">phone</label>
    <b-input-group prepend="+234" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-phone" v-model="form.phone" placeholder="Phone Number"></b-input>
    </b-input-group>
    <br>
      <b-form-group id="input-group-6">
        <b-form-checkbox-group required v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox required class="mr-6" value="me">I agree to Shopman Terms and Conditions</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
<br>
      <b-button type="submit" block class="add" style="background: #ff9900; 
      color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold">REGISTER</b-button>
    </b-form>
    </b-container>
    </div>
    </b-tab>
  </b-tabs>
</div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scooped>

.main {
   background-color:#f5f5f5;
  color: #555555;
  height: 145vh
}


.log {
    width: 100%;
}

.reg {
    width: 100%;
    background-color:#f5f5f5;
    margin-bottom: 4vmin
}

.fa-envelope {
  float: left;
  font-size: 20px
}

.add {
  width: 100%;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.add:focus {
  outline: none
}
.add:hover {
  background: #ffad33;
}

@media only screen and (min-width: 768px) {
  .main {
   background-color:#f5f5f5;
  color: #555555;
  height: 100vh
}


.log {
    width: 40%;
    margin-right: 14vmin
}

.reg {
    width: 45%;
    margin-left: 9vmin
}

.fa-envelope {
  float: left;
  font-size: 20px
}

.add {
  width: 100%;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.add:focus {
  outline: none
}
.add:hover {
  background: #ffad33;
}
}

</style>