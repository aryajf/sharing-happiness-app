<template>
  <div class="row d-flex align-items-center">
    <div class="col-md-8 order-md-2">
      <div class="tab-content">
        <div class="tab-pane active" id="video-panel" role="tabpanel">
          <iframe style="width:100%" :src="urlVideo"></iframe>
        </div>
      </div>
    </div>
    <div class="col-md-4 order-md-1">
      <!-- List group -->
      <div class="list-group" id="myList" role="tablist">
        <a class="list-group-item list-group-item-action active" data-bs-toggle="list" @click="changeVideo($event)" data-list="first" role="tab"><i class="uil uil-clipboard"></i> Challenge #1</a>
        <a class="list-group-item list-group-item-action" data-bs-toggle="list" @click="changeVideo($event)" data-list="second" role="tab"><i class="uil uil-clipboard"></i> Challenge #2</a>
        <a class="list-group-item list-group-item-action" data-bs-toggle="list" @click="changeVideo($event)" data-list="third" role="tab"><i class="uil uil-clipboard"></i> Challenge #3</a>
        <a class="list-group-item list-group-item-action" data-bs-toggle="list" @click="changeVideo($event)" data-list="fourth" role="tab"><i class="uil uil-clipboard"></i> Challenge #4</a>
        <a class="list-group-item list-group-item-action" data-bs-toggle="list" @click="changeVideo($event)" data-list="fifth" role="tab"><i class="uil uil-clipboard"></i> Challenge #5</a>
        <a class="list-group-item list-group-item-action" data-bs-toggle="list" @click="changeVideo($event)" data-list="sixth" role="tab"><i class="uil uil-clipboard"></i> Challenge #6</a>
        <a class="list-group-item list-group-item-action" data-bs-toggle="list" @click="changeVideo($event)" data-list="seventh" role="tab"><i class="uil uil-clipboard"></i> Challenge #7</a>
        <a class="list-group-item list-group-item-action" data-bs-toggle="list" @click="changeVideo($event)" data-list="eight" role="tab"><i class="uil uil-clipboard"></i> Challenge #8</a>
        <a class="list-group-item list-group-item-action" data-bs-toggle="list" @click="changeVideo($event)" data-list="ninth" role="tab"><i class="uil uil-clipboard"></i> Challenge #9</a>
        <a class="list-group-item list-group-item-action" data-bs-toggle="list" @click="changeVideo($event)" data-list="ten" role="tab"><i class="uil uil-clipboard"></i> Challenge #10</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      urlVideo : 'https://www.youtube.com/embed/TqdCbZPeQbQ',
      allVideo : [
        {key : 'first' ,url: 'https://www.youtube.com/embed/TqdCbZPeQbQ'},
        {key : 'second' ,url: 'https://www.youtube.com/embed/cPS-3Whm73s'},
        {key : 'third' ,url: 'https://www.youtube.com/embed/jTQ_3C0bckU'},
        {key : 'fourth' ,url: 'https://www.youtube.com/embed/_plcmafpR7s'},
        {key : 'fifth' ,url: 'https://www.youtube.com/embed/ZjpMPW3bdAk'},
        {key : 'sixth' ,url: 'https://www.youtube.com/embed/yU5xifQRI_Q'},
        {key : 'seventh' ,url: 'https://www.youtube.com/embed/jAzbpcufzjw'},
        {key : 'eight' ,url: 'https://www.youtube.com/embed/QCumwyRXtHg'},
        {key : 'ninth' ,url: 'https://www.youtube.com/embed/faKqHqQwGrk'},
        {key : 'ten' ,url: 'https://www.youtube.com/embed/Vw_IL75C4fM'}
      ]
    }
  },
  methods:{
    changeVideo(e){
      let allVideo = this.allVideo.filter(o=>Object.values(o).includes(e.target.dataset.list))
      this.urlVideo = allVideo[0].url
    }
  }
}
</script>
<style lang="scss" scoped>
    iframe{
        height:530px;
        width: 580px;
    }
    .list-group-item{
      cursor: pointer;
    }
    .list-group-item.active{
      background-color: #EC407A;
      border-color:#EC407A;
    }
</style>