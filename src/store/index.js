import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gedanSongsList: [],
    search: "执迷不悟",
    sidebar: false,
    footer: true,
    sidebarBtn: true,
    music: {
      playYON: false,
      songUrl:
        "http://m7.music.126.net/20201215194935/2508a83df299e9d31c11b30b3757ae34/ymusic/530f/520e/015e/dec4a89f85ed3ec89f9164fb8e7cc424.mp3",
      title: "secret 11111~君がくれたもの~",
      artist: "1111111 Siren",
      songpicUrl: "",
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
