<template>
  <div class="modal" v-show="showModal">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">{{ modalTitle }}</h2>
        <button class="close-button" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <ul class="tab">
          <li :class="{ active: activeTab === 'tab1' }" class="browser-tab" @click="activeTab = 'tab1'">
            <div class="tab-text">Tab1</div>
          </li>
          <li :class="{ active: activeTab === 'tab2' }" class="browser-tab" @click="activeTab = 'tab2'">
            <div class="tab-text">Tab2</div>
          </li>
        </ul>
        <div class="tab-content-container">
          <transition name="slide">
            <keep-alive>
              <component :is="activeTabComponent" @details-saved="detailsSavedHandler"></component>
            </keep-alive>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab1Content from './Tab1Content.vue'
import Tab2Content from './Tab2Content.vue'

export default {
  name: 'MyModal',
  components: {
    Tab1Content,
    Tab2Content
  },
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    modalTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      activeTab: 'tab1'
    }
  },
  computed: {
    activeTabComponent() {
      return this.activeTab === 'tab1' ? 'Tab1Content' : 'Tab2Content'
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    detailsSavedHandler(name) {
      this.closeModal()
      this.$emit('details-saved', name)
    }
  }
}
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  border-radius: 5px;
  width: 800px; /* changed from 500px */
  height: 750px; /* changed from 400px */
  overflow: hidden;
}

.modal-header {
  background-color: #007bff;
  color: #fff;
  padding: 1rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.modal-title {
  margin: 0;
  font-size: 1.5rem;
}

.close-button {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  cursor: pointer;
}

.modal-body {
  padding: 1rem;
}

.tab {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  border-bottom: 3px solid #ccc;
}

.browser-tab {
  cursor: pointer;
  padding: 1rem;
  margin-right: 1rem;
  border-bottom: 3px solid transparent;
}

.browser-tab:hover {
  border-bottom-color: #007bff;
}

.tab-text {
  font-size: 1.2rem;
}

.active {
  border-bottom-color: #007bff;
}

.tab-content-container {
  overflow: hidden;
  transition: all 1s ease-out;
}

.slide-enter {
  transform: translateX(100%);
}

.slide-enter-active {
  transform: translateX(0);
}

.slide-leave {
  transform: translateX(0);
}

.slide-leave-active {
  transform: translateX(-100%);
}
</style>