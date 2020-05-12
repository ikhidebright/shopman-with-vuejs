<template>
  <div class="reghome">
<b-container>
  <br>
  <br>
  <br>
  <br>
  <div class=''>
  <div class="regg">
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
      <b-button type="submit" block class="add" style=
      "background: #ff9900; 
       color: white;
       border: none;
       border-radius: 4px;
       box-shadow: 0px 0px 10px 0px #e5e5e5;
       height: 48px;
       font-weight: bold"
       >REGISTER
       </b-button>
    </b-form>
    <br>
    <p class="text-center">Already have an account?</p>
          <p class="text-center mt-n3"><router-link to='/login'>LOGIN</router-link></p>
    </div>
    </div>
    </b-container>
  </div>
</template>

<script>
import clientApi from '@/Services/EventService.js'

  export default {
    data() {
      return {
        form: {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          password: '',
          checked: false
        },
        show: true,
        validation: true
      }
    },
    methods: {
      showError (message, show) {
        let item = {
          errorMessage: message,
          showError: show
        }
        this.$store.commit("setErrorAlert", item)
      },
     async register(evt) {
        evt.preventDefault()
        try {
        let userData = {
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          email: this.form.email,
          phone: this.form.phone,
          password: this.form.password,
        }
        let res = await clientApi.registerUser(userData)
          if (res.status === 200 && res.data.success === true && res.data.data.result.affectedRows === 1) {
              this.$router.push("/login")
          } else if (res.data.email === true) {
              this.validation = false
              this.showError(res.data.message, true)
          }
        } catch (e) {
          this.showError('Sorry an Error occured', true)
        }
      }
    },
    computed: {
      // validation() {
      //   return this.form.email.length > 4 && this.form.email.length < 13
      // }
    }
  }
</script>

<style scooped>


a {
  text-decoration: none;
  color: #ff9900;
}

.head {
  text-decoration: none;
  color: #ff9900;
  font-weight: bold;
}

a:hover {
  text-decoration: none;
  color: #ff9900;
}

.reghome {
  background-color: #f5f5f5;
  color: #555555;
  height: 130vh;
}

.regg { 
  width: 96%;
  margin: 0 auto;
}

.regbtn {
  width: 100%;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.regbtn:focus {
  outline: none
}
.regbtn:hover {
  background: #ffad33;
}

@media only screen and (min-width: 768px) {
  a {
  text-decoration: none;
  color: #ff9900;
}

.head {
  text-decoration: none;
  color: #ff9900;
  font-weight: bold;
}

a:hover {
  text-decoration: none;
  color: #ff9900;
}

.reghome {
  background-color: #f5f5f5;
  color: #555555;
  height: 130vh;
}

.regg { 
  width: 50%;
  margin: 0 auto;
}

.regbtn {
  width: 100%;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.regbtn:focus {
  outline: none
}
.regbtn:hover {
  background: #ffad33;
}
}
</style>