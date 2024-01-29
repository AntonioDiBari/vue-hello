const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: {
        text: "Vue Hello!",
      },
      imageLink: "https://picsum.photos/200",
      page: [
        "text-center",
        "bg-secondary",
        "py-5",
        "border border-black border-5",
      ],
    };
  },
});

app.mount("#root");
