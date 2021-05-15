<template>
<h1>
  {{msg}}
</h1>
</template>

<script>
export default {
  name: 'Login',
  data (){
    return{
      msg: '登陆页'
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
