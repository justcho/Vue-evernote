<template>
<div id="note-detail">
  <h1>{{msg}}:{{$route.params.noteId}}</h1>
</div>
</template>

<script>
export default {
  name: 'NoteDetail',
  data(){
    return{
      msg: "笔记本详情页"
    }
  }
}
</script>

<style lang="scss" scoped>
h1{
  color: blue;
}
</style>
