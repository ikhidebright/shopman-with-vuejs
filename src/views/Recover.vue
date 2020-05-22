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
      <b-button type="submit" block class="add" 
      style="background: #f68b1e; 
      color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 10px 20px 20px #e5e5e5;
  height: 48px"><i class="fas fa-envelope"></i>FIND ACCOUNT</b-button>
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