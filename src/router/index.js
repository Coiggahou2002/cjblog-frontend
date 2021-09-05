import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
//import Tags from '@/views/Tags'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        redirect: '/home/blogs',
        children: [
            {
                path: 'blogs',
                components: {
                    main: () => import('@/views/Blogs')
                }
            },
            {
                path: 'tags',
                components: {
                    main: () => import('@/views/Tags')
                }
            },
            {
                path: 'blog_content/:blogId',
                name: 'blog_content',
                components: {
                    main: () => import('@/views/SingleBlogPage')
                }
            },
            {
                path: 'new_blog',
                name: 'new_blog',
                components: {
                    main: () => import('@/views/NewBlogEditPage')
                }
            }
        ]
    },

    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
