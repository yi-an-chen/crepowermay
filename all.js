const app = new Vue({
    el: '#app',
    data: {
        posts: [],
        newTitle: "",
        newContent: "",
        editingItem: {},
        editingTitle: {},
        editingContent: {}
    },
    methods: {
        createBlog: function (title, content) {
            this.posts.push({ blogTitle: title, blogContent: content, id: Date.now() })
            console.log(this.posts);
            this.newTitle = ""
            this.newContent = ""
        },
        editBlog: function (item) {
            item.blogTitle = this.editingTitle;
            item.blogContent = this.editingContent;
            this.editingItem = {};
        },
        deleteBlog: function (item) {
            console.log(this.posts.indexOf(item));
            this.posts.splice(this.posts.indexOf(item), 1)
        }
    }
})