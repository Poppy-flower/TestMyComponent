<template>
  <div id="app">
    666
    <my-button @click="clickFunc">
      button
    </my-button>
    <my-button @click="toastFunc">
      toast
    </my-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    clickFunc () {
      alert('click')
    },
    toastFunc () {
      alert('toast')
      this.$myui.toast.show({
        text: '成功了~'
      })
    }
  }
}
</script>

<style>
</style>
