<template>
  <div class="container">
    <h1 class="title">Welcome to the main screen</h1>
    <button class="button" @click="showModal = true">Open Modal</button>
    <MyModal v-if="showModal" @close="showModal = false" :showModal="showModal" modalTitle="My Modal Title" @details-saved="onSaveDetails" v-bind="$props" />
    <div  v-if="successMessage">{{ successMessage }}</div>
  </div>
</template>

<script>
import MyModal from './Modal.vue'

export default {
  name:"MyMainscreen",
  components: {
    MyModal
  },
  data() {
    return {
      showModal: false,
      successMessage: ''
    }
  },
  methods: {
    onSaveDetails(name) {
      this.successMessage = `Details Saved Successfully for ${name}`;
      this.showModal = false;
    }
  }
}
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.title {
  font-size: 3rem;
  margin-bottom: 30px;
}

.button {
  padding: 10px;
  border-radius: 5px;
  font-size: 1.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: #3e8e41;
}

</style>
