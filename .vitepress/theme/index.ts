// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import './vars.css'
import './custom.css'
import CodeTab from '../../components/CodeTab.vue'
import HelpNeeded from '../../components/HelpNeeded.vue'
import Layout from './layout/Layout.vue'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

const customComponents = import.meta.glob('../../pages/**/.site/*.vue', { eager: true })

export default {
    extends: Theme,
    Layout: Layout,
    enhanceApp({app, router, siteData}) {
        app.component('CodeTab', CodeTab);
        app.component('HelpNeeded', HelpNeeded);
        for (const [filepath, component] of Object.entries(customComponents)) {
            const name = filepath.match(/\/([^/]+)\.vue$/)[1];
            app.component(name, component.default);
        }
        enhanceAppWithTabs(app)
    }
}
