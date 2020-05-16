<template>
  <div class="main">
<b-container>
  <br>
  <br>
  <br>
  <br>
  <div class="log mx-auto mt-12">
    <h5 class="mb-4 text-center head">Account Recovery</h5>
    <b-form @submit="recover">
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
      <b-button type="submit" block class="add" 
      style="background: #ff9900; 
      color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px"><i class="fas fa-envelope"></i>FIND ACCOUNT</b-button>
    </b-form>
    <div class="text-center">Remember password now? <router-link to='/login' class="ml-1 mt-2">Login</router-link></div>
    </div>
    </b-container>     
    </div> 
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        email: '',
      }
    },
    methods: {
       async recover(evt) {
        evt.preventDefault()
        try {
        let res = await axios.post(`${this.$store.state.url}/recover`, {
          email: this.email
        })
          if (res.status === 200 && res.data.success === true) {
            this.showSuccess(res.data.message, true)
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
      },
       showSuccess (message, show) {
        let item = {
          successMessage: message,
          showSuccess: show
        }
        this.$store.commit("setSuccessAlert", item)
      },
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