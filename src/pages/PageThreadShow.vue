<template>
    <div class="col-large push-top">
        <h1>{{thread.title}}</h1>
        <p>
            By
            <a href="#" class="link-unstyled">Robin</a>,
            <AppDate :timestamp="thread.publishedAt" />.
            <span style="float:right; margin-top: 2px">3 replies by 3 contributors</span>
        </p>
        <PostList :posts="posts" />
        <PostEditor @save="addPost" :threadId="id" />
    </div>
</template>
<script>
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'
export default {
    components: {
        PostList,
        PostEditor
    },
props: {
    id: {
        required: true,
        type: String
        }
    },
    data() {
        return {
            thread: this.$store.state.threads[this.$route.params.id],
            newPostText: ''
        }
    },
    computed: {
        posts() {
            const postIds = Object.values(this.thread.posts)
           return  Object.values(this.$store.state.posts).filter(post => postIds.includes(post['.key']))
        }
    },
    methods: {
        addPost({post}) {
            const postId = post['.key']
             this.$set(this.$store.state.posts, postId, post)
            this.$set(this.thread.posts, postId, postId)
            this.$set(this.$store.state.users[post.userId].posts, postId, postId)
            
        }
    }
}
</script>
