<template>
  <button class="el-button" :class="[type? 'el-button--'+type : '', 
    buttonSize? 'el-button--' + buttonSize : '',{
      'is-disabled': disabled
    }]" 
    :type="nativeType"
    :disabled=disabled @click="handleClick" >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    nativeType: {
      type: String,
      default: "button"
    },
    size: String,
    type: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  },
  computed: {
    buttonSize() {
      return this.size
    }
  }
}
</script>

<style>

</style>
