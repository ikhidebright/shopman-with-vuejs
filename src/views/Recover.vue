<template>
  <div class="main">
<b-container>
  <br>
  <br>
  <div class=''>
  <br>
  <br>
  <div class="log mx-auto">
    <h5 class="mb-4 text-center head">Account Recovery</h5>
    <br>
    <b-form @submit.prevent="recover">
      <b-form-group
        id="input-group-1"
        label=""
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Account Email"
        ></b-form-input>
      </b-form-group>
      </b-form-group>
      <br>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="checked" id="checkboxes-4" class="mt-n4 text-right mb-4">
          Remember Password now? <router-link to='/login' class="llll">Login</router-link>
        </b-form-checkbox-group>
      </b-form-group>
      <button type="submit" block class="proceedToCheck"><i class="fas fa-envelope"></i>FIND ACCOUNT</button>
    </b-form>
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
        email: ''
      }
    },
    methods: {
      // recover () {
      //   this.$store.dispatch({
      //     type: "accountRecovery",
      //     email: this.email
      //   })
      // },
       async recover(evt) {
        evt.preventDefault()
        try {
        let email = this.email
        let res = await clientApi.accountRecovery(email)
        console.log(res)
          if (res.status === 200 && res.data.success === true) {
              this.$cookies.set("sp_tk", res.data.token, "12d")
              this.$store.commit("setUser", res.data.data)
              this.$router.push("/login")
          } else {
              this.showError(res.data.message, true)
          }
        } catch (e) {
          this.showError('Sorry an Error occured', true)
        }
      },
      showError (message, show) {
        let item = {
          errorMessage: message,
          showError: show
        }
        this.$store.commit("setErrorAlert", item)
      }
    }
  }
</script>

<style scooped>


button:focus {
  outline: none
}


.llll {
  color: #f68b1e;
}

.llll:hover {
  color: #f68b1e;
  text-decoration: none;
}

.proceedToCheck {
    min-width: 100%;
    font-size: 1.1em;
    font-weight: 400;
    padding: 8px 16px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
    text-transform: uppercase;
    background: #f68b1e;
    border: 1px solid #f68b1e;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-style: normal;
    line-height: 1.42857;
    box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    direction: ltr;
    border-radius: 0px!important;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    color: white
  }


.proceedToCheck:hover {
    min-width: 100%;
    font-size: 1.1em;
    font-weight: 400;
    padding: 8px 16px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
    text-transform: uppercase;
    background: #f68b1e;
    border: 1px solid #f68b1e;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-style: normal;
    line-height: 1.42857;
    box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    direction: ltr;
    border-radius: 0px!important;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
  }


.main {
   background-color:#f5f5f5;
  color: #555555;
  min-height: 100vh;
  max-height: auto
}


.log {
    width: 100%;
}

.reg {
    width: 100%;
}

.fa-envelope {
  float: left;
  font-size: 20px
}

.add {
  width: 100%;
  background: #f68b1e;
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
  background: #f68b1e;
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