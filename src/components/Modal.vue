<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" />
    <div class="modal-content">
      <span class="close" @click="$emit('close')">&times;</span>
      <component
        v-if="component"
        v-bind="props"
        v-on="events"
        :is="component"
        @close="$emit('close')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Component } from "vue";

export default defineComponent({
  props: {
    isActive: {
      required: true,
    },
    props: { default: () => ({}) },
    events: { default: () => ({}) },
    component: {
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 4vh;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  overflow-y: auto;

  &.is-active {
    display: block;
  }
  .modal-content {
    margin: auto;
    padding: 20px;
    width: 80%;
    max-width: 45rem;
  }

  .close {
    color: #ffffff;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
}

@media (max-width: 768px) {
  .modal .modal-content {
    width: 90%;
  }
}
</style>
