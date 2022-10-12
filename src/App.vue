<template>
  <hello-world></hello-world>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
};
</script>
