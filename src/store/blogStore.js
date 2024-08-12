import { defineStore } from "pinia";

export const useBlogsStore = defineStore("blogs", {
  state: function () {
    return {
      sampleBlogCards: [
        {
          blogTitle: "Blog Card Title",
          blogCoverPhoto: "stock-1",
          bolgDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card Title",
          blogCoverPhoto: "stock-2",
          bolgDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card Title",
          blogCoverPhoto: "stock-3",
          bolgDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card Title",
          blogCoverPhoto: "stock-4",
          bolgDate: "May 1, 2021",
        },
      ],
      editPost: null,
    };
  },
  actions: {
    toggleEditPost(payload) {
      this.editPost = payload;
    },
  },
});
