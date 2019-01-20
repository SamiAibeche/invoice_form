<template>
    <div id="InvoiceForm" class="InvoiceForm">
        <h1>It seems to be okay, GG {{ userfirstname }} {{ userlastname }} ! </h1>
        <div>
            <form action="">
                <div>
                    <label for="firstname">Your Firstname : </label>
                    <input id="firstname" v-model="userfirstname" placeholder="Firstname">
                </div>
                <div>
                    <label for="lastname">Your Firstname : </label>
                    <input id="lastname" v-model="userlastname" placeholder="Lastname">
                </div>
                <div>
                    <label for="useremail">Your Email : </label>
                    <input id="useremail" v-model="useremail" placeholder="Email">
                </div>
                <div>
                    <label for="userphone">Your Phonenumber : </label>
                    <input id="userphone" v-model="userphone" placeholder="Phone number">
                </div>

                <select v-model="country_selected">
                    <option disabled value="">Choose your country</option>
                    <option>Belgium</option>
                    <option>Denmark</option>
                    <option>France</option>
                </select>
                <div>
                    <p>Langage by default !</p>
                    <input type="radio" id="radio_en" value="en" v-model="picked_lang">
                    <label for="radio_en"> EN </label>

                    <input type="radio" id="radio_fr" value="fr" v-model="picked_lang">
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
             </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'InvoiceForm',
  data () {
    return {
      userfirstname: '',
      userlastname: '',
      useremail: '',
      userphone: '',
      picked_lang: '',
      country_selected: '',
      checkedNames: []
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
