import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      sampleBlogCards:[
        {blogTitle: 'Blog Card Title',blogCoverPhoto: 'stock-1', bolgDate: 'May 1, 2021'},
        {blogTitle: 'Blog Card Title',blogCoverPhoto: 'stock-2', bolgDate: 'May 1, 2021'},
        {blogTitle: 'Blog Card Title',blogCoverPhoto: 'stock-3', bolgDate: 'May 1, 2021'},
        {blogTitle: 'Blog Card Title',blogCoverPhoto: 'stock-4', bolgDate: 'May 1, 2021'},
      ],
      editPost: null,
    };
  },
  mutations: {

    toggleEditPost(state,payload)
    {
      state.editPost = payload;
    }
  },
});


export default store;