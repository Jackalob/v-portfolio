<template>
  <div class="about">
    <h1 class="about-title">Skills & Tools</h1>
    <div class="about-wrap">
      <slider :items="items" :now="now" @runChange="changeHandler"></slider>
    </div>
    <div class="about-info grid">
      <div class="about-profile col-6 col-xs-16">
        <div class="about-mypic">
          <img src="@/assets/42420454_1958937480794420_3465320150037692416_n.jpg" draggable="false" />
        </div>
      </div>
      <div class="about-self col-18 col-xs-24">
        <p class="about-myName">曹上傑</p>
        <div class="about-subTitle">
          <p>淡江大學資管系畢業</p>
          <div class="about-subTitle-mail">
            <div>
              Email: <a href='mailto:nike9712@gmail.com' id='copiedMessage' style='text-decoration:underline; color:#24c98f;'>nike9712@gmail.com</a>
            </div>
            <div class="about-subTitle-wrap">
              <div class="about-subTitle-svg" @click='copyEmail("copiedMessage")'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#24c98f"><path d="M63.06667,11.46667c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v91.73333c0,6.33533 5.13133,11.46667 11.46667,11.46667h74.53333c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-65.93333c0,-1.51933 -0.60182,-2.97578 -1.67969,-4.05365l-31.53333,-31.53333c-1.07787,-1.07787 -2.53431,-1.67969 -4.05364,-1.67969zM108.93333,22.38464l29.21536,29.21536h-23.48203c-3.1648,0 -5.73333,-2.56853 -5.73333,-5.73333zM34.4,40.13333c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v91.73333c0,6.33533 5.13133,11.46667 11.46667,11.46667h74.53333c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-5.73333h-57.33333c-12.64773,0 -22.93333,-10.2856 -22.93333,-22.93333v-74.53333z"></path></g></g></svg>
              </div>
              <div class="about-subTitle-svg-copied" ref="copiedText">Copied</div>
            </div>
          </div>
        </div>
        <div>
          <p class="about-content">
            我對前端有極大的興趣及熱忱，透過瀏覽風格迥異的網站來啟發自身對於網站樣式的意識及想法，嘗試理解並吸收學習，加深能力且轉換思維。<br>
            也曾參加人才培訓計畫，加強對於網頁的理解及技術上的應用，再透過各種管道來學習現今主要的趨勢，時時更新自己的能力。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  width: 1000px;
  margin-bottom: 30px;
  background-color: map-get($color, tertiary);
  border-radius: 30px;
  box-shadow: 5px 5px 10px rgba(#000, 0.1);
  @include media(tablet){
    margin-bottom: 0px;
  }
  @include media(mobile) {
    width: 100%;
    height: calc(100vh - 80px);
    overflow-y: scroll;
  }
  &-title {
    text-align: center;
    padding: 20px 0;
    font-family: "Courgette", "Noto Sans", "Noto Sans TC", sans-serif;
    font-size: 48px;
    @include media(tablet){
      padding: 10px 0;
    }
  }
  &-info {
    margin: 20px 0;
    justify-content: center;
    @include media(tablet){
      margin: 0;
    }
    @include media(mobile) {
      padding: 15px;
    }
  }
  &-profile {
    text-align: center;
  }
  &-mypic {
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;
    > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      padding: 20px;
    }
  }
  &-self{
    @include flex(center,none,col);
  }
  &-myName {
    font-size: 24px;
    margin-bottom: 5px;
    @include media(mobile){
      text-align: center;
    }
  }
  &-subTitle{
    font-size: 18px;
    color: map-get($map: $color, $key: slider);
    margin-bottom: 10px;
    @include media(mobile){
      text-align: center;
    }
    @at-root &-mail{
      display: flex;
      font-size: 16px;
      @include media(mobile){
        justify-content: center;
      }
    }
    @at-root &-wrap{
      position: relative;
    }
    @at-root &-svg{
      @include flex(); 
      width: 25px;
      height: 25px;
      cursor: pointer;
      >svg{
        width: 80%;
        height: 100%;
      }
      &-copied{
        position: absolute;
        font-size: 12px;
        padding: 5px 10px;
        top: 0;
        left: 35px;
        border-radius: 3px;
        background-color: rgba(20,20,20,.8);
        color: map-get($map: $color, $key: tertiary);
        opacity: 0;
        transition: opacity .2s ease-in-out;
        user-select: none;
        @include pseudo(){
          width: 0;
          height: 0;
          border: 5px solid transparent;
          border-right: 6px solid rgba(20,20,20,.8);
          left: -11px;
          top: 7px;
        }
        @include media(mobile){
          top: -25px;
          left: 50%;
          transform: translate(-50%,-50%);
          &::before{
            border-top:6px solid rgba(20, 20, 20, 0.8); 
            border-right: 5px solid transparent;
            top: unset;
            left: 50%;
            bottom: -10px;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
  &-content{
    letter-spacing: 1px;
    margin-bottom: 5px;
  }
}
.opa-1{
  opacity: 1;
}
.slider {
  box-shadow: 0px 5px 5px rgba(#000, 0.1);
}
</style>

<script>
import slider from "@/components/Slider.vue";

export default {
  data() {
    return {
      items: [
        {
          name: "HTML",
          url: "https://img.icons8.com/color/256/000000/html-5.png"
        },
        {
          name: "Scss",
          url: "https://miro.medium.com/max/4000/1*H-9KGBGNHfvkd4F4MOY__g.png"
        },
        {
          name: "JavaScript",
          url: "https://img.icons8.com/color/256/000000/javascript.png"
        },
        { name: "jQuery", url: "https://i.imgur.com/lgAWIAL.png" },
        { name: 'React' , url:"https://i.imgur.com/a7uq3iC.png"},
        { name: "Vue", url: "https://i.imgur.com/7kQRg6J.png" },
        { name: "Git", url: "https://i.imgur.com/l5YHzCx.png" },
        { name: "GitHub", url: "https://i.imgur.com/2fb2xJB.png" },
        {
          name: "Sourcetree",
          url:
            "https://www.minicreo.com/mac-uninstaller/img/sourcetree-mac-catalina.png"
        }
      ],
      now: 2
    };
  },
  components: {
    slider
  },
  methods: {
    changeHandler(x) {
      this.now = x;
    },
    copyText(id){
      var TextRange = document.createRange();
      TextRange.selectNode(document.getElementById(id));
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(TextRange);
      document.execCommand("copy");
    },
    copyEmail(id){
      this.copyText(id);
      this.$refs.copiedText.classList.add('opa-1')
      setTimeout(() => {
        this.$refs.copiedText.classList.remove('opa-1')
      }, 2000);
    }
  }
};
</script>
