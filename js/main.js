const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: {
        text: "Vue Hello!",
      },
      imageLink: "https://picsum.photos/200",
    };
  },
});

app.mount("#root");
