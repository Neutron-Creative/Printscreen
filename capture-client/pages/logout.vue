<template/>
<script>
export default {
  mounted() {
    this.$store.commit('auth/logout');
    return this.$router.push('/');
  }
};
</script>
