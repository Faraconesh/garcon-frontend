<template>
<div>
    {{ $t("logout.Logout") }}
</div>
</template>

<script>
export default {
  name: 'order',
  beforeMount: function () {
    this.$store.dispatch('logout')
  }
}
</script>
