<template>

</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapState(["pseudo"])
  }
}

</script>
<style scoped>

</style>