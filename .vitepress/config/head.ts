import {HeadConfig} from 'vitepress'
import {env} from "node:process";

const head: HeadConfig[] = [
    ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
    ['link', {rel: 'manifest', href: '/site.webmanifest'}],
]

if (env.NODE_ENV === 'production') {
    // Use Umami analytics
    head.push(
        ['script', {defer: 'true', src: 'https://zond.vanutp.dev/script.js', 'data-website-id': 'b055fd15-b1a0-4d26-a389-01026049323a'}],
    )
}

export default head
