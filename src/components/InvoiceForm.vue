<template>
    <div id="InvoiceForm" class="InvoiceForm">
        <h1>It seems to be okay, GG {{ userfirstname }} {{ userlastname }} ! </h1>
        <div>
            <form  id="app" @submit="checkForm" action="http://127.0.0.1:8000/" method="post">
                <div>
                    <div v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                            <li v-for="(error, index) in errors" :key="`error-${index}`" >{{ error }}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <label for="firstname">Your Firstname : </label>
                    <input name="firstname" id="firstname" v-model="userfirstname" placeholder="Firstname">
                </div>
                <div>
                    <label for="lastname">Your Firstname : </label>
                    <input name="lastname" id="lastname" v-model="userlastname" placeholder="Lastname">
                </div>
                <div>
                    <label for="useremail">Your Email : </label>
                    <input name="useremail" id="useremail" v-model="useremail" placeholder="Email">
                </div>
                <div>
                    <label for="userphone">Your Phonenumber : </label>
                    <input name="userphone" id="userphone" v-model="userphone" placeholder="Phone number">
                </div>

                <select name="country_selected" v-model="country_selected">
                    <option disabled value="">Choose your country</option>
                    <option>Belgium</option>
                    <option>Denmark</option>
                    <option>France</option>
                </select>
                <div>
                    <p>Langage by default !</p>
                    <input name="picked_lang" type="radio" id="radio_en" value="en" v-model="picked_lang">
                    <label for="radio_en"> EN </label>

                    <input name="picked_lang" type="radio" id="radio_fr" value="fr" v-model="picked_lang">
                    <label for="radio_fr"> FR </label>
                </div>

                <div>
                    <p>Checkboxes Example :</p>
                    <input type="checkbox" id="Example 1" value="Example 1" v-model="checkedNames">
                    <label for="Example 1">Example 1</label>
                    <input type="checkbox" id="Example 2" value="Example 2" v-model="checkedNames">
                    <label for="Example 2">Example 2</label>
                    <input type="checkbox" id="Example 3" value="Example 3" v-model="checkedNames">
                    <label for="Example 3">Example 3</label>
                </div>
                <div>
                    <p>
                        <input type="submit" value="Submit">
                    </p>
                </div>
             </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'InvoiceForm',
  data () {
    return {
      errors: [],
      userfirstname: '',
      userlastname: '',
      useremail: '',
      userphone: '',
      picked_lang: '',
      country_selected: '',
      checkedNames: []
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = []
      if (this.userfirstname.length <= 1) {
        this.errors.push('Your firstname must contains at least 2 characters.')
      }
      if (this.userlastname.length <= 1) {
        this.errors.push('Your lastname must contains at least 2 characters.')
      }
      if (this.userphone.length <= 6) {
        this.errors.push('Your phonenumber must contains at least 6 characters.')
      }
      if (this.useremail.length <= 4) {
        this.errors.push('Your email must contains at least 2 characters.')
      } else if (!this.validEmail(this.useremail)) {
        this.errors.push('Your email seems to be invalid.')
      }
      if (this.userfirstname && this.userlastname && this.useremail && this.userphone) {
        console.log('ok')
      } else {
        e.preventDefault()
      }
    },
    validEmail: function (email) {
      var re = new RegExp('[^@]+@[^@]+\\.[^@]+')
      return re.test(email)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
