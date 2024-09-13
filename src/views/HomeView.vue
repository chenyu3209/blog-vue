<template>
    <div class="blog-filling">
        <div class="blog-home">
            <h1 class="blog-title">Welcome to My Blog</h1>
            <p class="blog-description">Sharing my thoughts and experiences</p>
        </div>
    </div>
    <div class="blog-container">
        <ul class="blog-list">
            <li class="blog-item" v-for="post in posts" :key="post.id">
                <h2>
                    <router-link :to="'/post/'+post.id" class="blog-item-title">{{ post.title }}</router-link>
                </h2>
                <p class="blog-item-info">By {{ post.author }} on {{ post.date }}</p>
                <p class="blog-item-description">{{ post.excerpt }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const posts = [
    {
        id: 1,
        title: 'First Blog Post',
        author: 'John Doe',
        date: '2024-06-01',
        excerpt: 'This is the summary of the first blog post.'
    },
    {
        id: 2,
        title: 'Second Blog Post',
        author: 'Jane Doe',
        date: '2024-06-02',
        excerpt: 'This is the summary of the second blog post.'
    },
    {
        id: 3,
        title: 'Third Blog Post',
        author: 'John Smith',
        date: '2024-06-03',
        excerpt: 'This is the summary of the third blog post.'
    },
]
</script>

<style scoped>
.blog-filling {
    position: relative;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    text-align: center;
}

.blog-home {
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
}

.blog-description {
    padding: 5px;
}

.blog-container {
    width: 80%;
    padding: 20px;
    margin: 0 auto;

    background-color: #ffffff88;
    border-radius: 15px 15px 15px 15px;
}

.blog-list {
    list-style: none;
    padding: 0;
    margin: 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
}

@media (min-width: 980px) {
    .blog-list {
        grid-template-columns: repeat(3, 1fr);
    }
}

.blog-item {
    margin: 10px 0;
    padding: 15px;

    background-color: #f8f8f8dd;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.blog-item:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
}

.blog-item h2 {
    margin: 0 0 10px;
    font-size: 1.5em;
}

.blog-item-title {
    color: #000;
    text-decoration: none;
}

.blog-item-info {
    font-size: 0.9em;
    color: #555;
    margin-bottom: 10px;
}

.blog-item-description {
    margin: 0;
    font-size: 1em;
}
</style>
