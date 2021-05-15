<template>
<div class="trash-detail">
<h1>{{msg}}: {{$route.params.noteId}}</h1>
</div>
</template>

<script>
export default {
  name: 'Trash',
  data(){
    return{
      msg: '回收站笔记本详情页'
    }
  }
}
</script>

<style lang="scss" scoped>
h1{
  color: green;
}
</style>
