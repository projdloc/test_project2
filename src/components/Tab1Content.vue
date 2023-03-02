<template>
  <div class="tab-content">
    <form @submit.prevent="saveDetails">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="name">
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" name="age">
      </div>
      <div class="form-group">
        <label for="sex">Sex:</label>
        <select id="sex" name="sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone">
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" id="address" name="address">
      </div>
      <div class="form-group">
        <label for="city">City:</label>
        <input type="text" id="city" name="city">
      </div>
      <div class="form-group">
        <label for="state">State:</label>
        <input type="text" id="state" name="state">
      </div>
      <div class="form-group">
        <label for="zip">Zip Code:</label>
        <input type="text" id="zip" name="zip">
      </div>
      <div class="form-group">
        <label for="country">Country:</label>
        <input type="text" id="country" name="country">
      </div>
      <div class="form-group">
        <label for="occupation">Occupation:</label>
        <input type="text" id="occupation" name="occupation">
      </div>
      <div class="form-group">
        <label for="interests">Interests:</label>
        <textarea id="interests" name="interests"></textarea>
      </div>
       <div class="button-container">
         <button type="submit" class="save-button">Save</button>
         <button type="button" class="reset-button" @click="resetForm" >Reset</button>
       </div>
    </form>
  
  </div>
</template>
<script> 
export default { 
  data() { 
    return { 
      name: '' 
    } 
  }
    , 
  methods: { 
    saveDetails() { 
      this.$emit('details-saved', this.name)
    },
    resetForm() {
      this.name = ''
      document.getElementById('age').value = ''
      document.getElementById('sex').selectedIndex = 0
      document.getElementById('birthday').value = ''
      document.getElementById('email').value = ''
      document.getElementById('phone').value = ''
      document.getElementById('address').value = ''
      document.getElementById('city').value = ''
      document.getElementById('state').value = ''
      document.getElementById('zip').value = ''
      document.getElementById('country').value = ''
      document.getElementById('occupation').value = ''
      document.getElementById('interests').value = ''
    }
  } 
} 
</script>
<style scoped>
.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

label {
  width: 8rem;
  margin-right: 1rem;
  text-align: right;
}

input[type="text"],
input[type="number"],
input[type="email"],
input[type="tel"],
input[type="date"],
textarea,
select {
  flex: 1;
}

button {
  padding: 0.5rem;
  margin-right: 1rem;
}

.save-button {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.reset-button {
  background-color: #f8f9fa;
  color: #212529;
border: 1px solid #ced4da;
}
.save-button:active,
.reset-button:active {
  background-color: #0069d9;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
}
.button-container {
display: flex;
justify-content: flex-end;
margin-top: 2rem;
}

.tab-content {
text-align: left;
margin-top: 2rem;
}

@media (max-width: 768px) {
label {
display: block;
width: 100%;
margin-right: 0;
margin-bottom: 0.5rem;
text-align: left;
}
}
</style>