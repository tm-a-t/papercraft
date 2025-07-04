import {HeadConfig} from 'vitepress/types/shared'

const metrikaScript = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(95150339, "init", { defer:true, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });`
const metrikaNoscript = `<div><img src="https://mc.yandex.ru/watch/95150339" style="position:absolute; left:-9999px;" alt="" /></div>`

const head: HeadConfig[] = [
    ['script', {type: 'text/javascript'}, metrikaScript],
    ['noscript', {}, metrikaNoscript],

    ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
    ['link', {rel: 'manifest', href: '/site.webmanifest'}],
]

export default head
