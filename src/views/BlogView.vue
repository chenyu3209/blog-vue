<template>
    <div class="blog-post">
        <div class="blog-filling"></div>
        <div class="post">
            <h1>{{ post.title }}</h1>
            <p class="post-info">By {{ post.author }} on {{ post.date }}</p>
            <div class="post-content" v-html="compiledMarkdown"></div>
        </div>
    </div>
</template>

<script>
import {marked} from 'marked';

export default {
    name: 'BlogPost',
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'First Blog Post',
                    author: 'John Doe',
                    date: '2024-06-01',
                    content: '# Hello World\nThis is a markdown content for the first blog post.'
                },
                {
                    id: 2,
                    title: 'Second Blog Post',
                    author: 'Jane Doe',
                    date: '2024-06-02',
                    content: '# Second Post\nMore markdown content for the second blog post.'
                },
                {
                    id: 3,
                    title: 'Third Blog Post',
                    author: 'John Smith',
                    date: '2024-06-03',
                    content: '# Third Blog Post\nAnother markdown content for the third blog post.'
                },
            ]
        };
    },
    computed: {
        post() {
            const id = parseInt(this.$route.params.id);
            return this.posts.find(post => post.id === id);
        },
        compiledMarkdown() {
            return marked(this.post.content);
        }
    }
}
</script>

<style scoped>
.blog-post {
    min-height: 100vh;
}

.blog-filling {
    height: 60px;
}

.post {
    max-width: 80%;

    margin: 20px auto;
    padding: 20px;

    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post .post-info {
    font-size: 0.9em;
    color: #555;
    margin-bottom: 20px;
}

.post p {
    margin: 10px 0;
}
</style>
