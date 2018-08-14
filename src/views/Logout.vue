<template>
<div>
    logout
</div>
</template>

<script>
import router from '../router'
export default {
  name: 'order',
  beforeMount: function () {
    localStorage.clear()
    router.push('/login')
  }
}
</script>
