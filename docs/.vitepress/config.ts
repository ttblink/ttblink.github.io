import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',
    srcDir: '.',
    outDir: '../dist',
    // lang: 'zh-CN',
    title: 'ttblinkAdmin',
    description: '专注于网络+信息安全+开发方面的有趣、实用的内容分享。',
    ignoreDeadLinks: [
        'http://localhost:8000/docs',
        'http://localhost:5173',
        'http://localhost:8001/api/v1/docs',
        'http://localhost:8001/api/v1/redoc'
    ],
    head: [
        ["link",{rel: "apple-touch-icon", sizes: "180x180", href: "/favicon.png"}],
        ["link",{rel: "icon",type: "image/png", sizes: "32x32", href: "/favicon.png"}],
        ["link",{rel: "icon",type: "image/png", sizes: "16x16", href: "/favicon.png"}],
        ["link",{rel: "shortcut icon", href: "/favicon.png"}],
        ['meta', { name: 'google-adsense-account', content: 'ca-pub-7841526322503498' }],
        ['script', { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7841526322503498' ,crossorigin:'anonymous'}],
        ["meta",{name: "description", content: "FastApiAdmin - 现代、开源、全栈融合的快速开发平台，基于 FastAPI + Vue3 + TypeScript 构建的企业级中后台解决方案"}],
        ["meta",{name: "keywords", content: "FastAPI, Vue3, TypeScript, 中后台, 快速开发, 企业级, 全栈, 开源"}],
        ["meta",{name: "author", content: "FastapiAdmin Team"}],
        ["meta",{property: "og:title", content: "FastApiAdmin - 现代、开源、全栈融合的快速开发平台"}],
        ["meta",{property: "og:description", content: "基于 FastAPI + Vue3 + TypeScript 构建的企业级中后台解决方案，支持多端开发"}],
        ["meta",{property: "og:image", content: "/logo.png"}],
        ["meta",{property: "og:url", content: "https://ttblink.cn"}],
        ["meta",{property: "og:type", content: "website"}],
        ["meta",{name: "twitter:card", content: "summary_large_image"}],
        ["meta",{name: "twitter:title", content: "FastApiAdmin - 现代、开源、全栈融合的快速开发平台"}],
        ["meta",{name: "twitter:description", content: "基于 FastAPI + Vue3 + TypeScript 构建的企业级中后台解决方案，支持多端开发"}],
        ["meta",{name: "twitter:image", content: "/logo.png"}],
        ["link",{rel: "canonical", href: "https://ttblink.cn"}]
    ],
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh',
            description: '专注于网络+信息安全+开发方面的有趣、实用的内容分享。'
        },
        en: {
            label: 'English',
            lang: 'en',
            link: '/en',
            description: 'Focus on sharing interesting and practical content related to network,information security,and development.'
        },
    },
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    themeConfig: {
        logo: '/logo.png',
        nav: [
                { text: '首页', link: '/' },
                { 
                    text: '指南', 
                    items: [
                        { text: '项目概述', link: '/overview/overview' },
                        // { text: '快速开始', link: '/quickstart/start' },
                    ] 
                },
                {
                    text:"运维管理平台",
                    items:[
                        {text:"快速开始",link:"/ttblinkAdmin/start"},
                        {text:"交换机管理模块",link:"/ttblinkAdmin/switch"},
                        {text:"交换机配置备份模块",link:"/ttblinkAdmin/backup"}
                    ]
                },
                // { 
                //     text: '开发指南', 
                //     items: [
                //         { text: '前端开发', link: '/development/frontend' },
                //         { text: '后端开发', link: '/development/backend' },
                //         { text: '移动端开发', link: '/development/miniprogram' },
                //         { text: '开发规范', link: '/development/guidelines' }
                //     ] 
                // },
                // { 
                //     text: '部署与API', 
                //     items: [
                //         { text: '部署指南', link: '/quickstart/deployment' },
                //         { text: 'API文档说明', link: '/quickstart/api-docs' },
                //         { text: '后端API', link: 'https://service.fastapiadmin.com/api/v1/docs', target: '_blank' }
                //     ] 
                // },
                // { 
                //     text: '资源', 
                //     items: [
                //         { text: 'GitHub', link: 'https://github.com/fastapiadmin', target: '_blank' },
                //         { text: 'Gitee', link: 'https://gitee.com/fastapiadmin', target: '_blank' },
                //         { text: '在线演示', link: 'https://service.fastapiadmin.com/web', target: '_blank' },
                //         { text: '移动端演示', link: 'https://service.fastapiadmin.com/app', target: '_blank' },
                //         { 
                //             text: '版本', 
                //             items: [
                //                 { text: 'master', link: 'https://github.com/fastapiadmin/FastapiAdmin', target: '_blank' },
                //                 { text: 'V2.0.0', link: 'https://github.com/fastapiadmin/FastapiAdmin/tree/v2.0.0', target: '_blank' },
                //                 { text: 'V1.0.0', link: 'https://github.com/fastapiadmin/FastapiAdmin/tree/v1.0.0', target: '_blank' }
                //             ]
                //         }
                //     ] 
                // },
                { text: '关于我们', link: '/overview/about' },
            ],
        sidebar: [
            {
                text: '简介',
                collapsed: false,
                items: [
                    { text: '项目概述', link: '/overview/overview' },
                    // { text: '快速开始', link: '/quickstart/start' },
                ]
            },
            {
                text: '运维管理平台',
                collapsed: false,
                items: [
                    { text: '快速开始', link: '/ttblinkAdmin/start' }, 
                    {text:"交换机管理模块",link:"/ttblinkAdmin/switch"},
                    {text:"交换机配置备份模块",link:"/ttblinkAdmin/backup"}
                ]
            },
            // {
            //     text: '开发指南',
            //     collapsed: false,
            //     items: [
            //         { text: '前端开发指南', link: '/development/frontend' },
            //         { text: '后端开发指南', link: '/development/backend' },
            //         { text: '移动端开发指南', link: '/development/miniprogram' },
            //         { text: '开发规范', link: '/development/guidelines' }
            //     ]
            // },
            // {
            //     text: '部署与API',
            //     collapsed: false,
            //     items: [
            //         { text: '部署指南', link: '/quickstart/deployment' },
            //         { text: 'API文档说明', link: '/quickstart/api-docs' },
            //         { text: '后端API', link: 'https://service.fastapiadmin.com/api/v1/docs', target: '_blank' },
            //         { text: '前端API调用', link: '/development/frontend#api-调用' },
            //         { text: '移动端API调用', link: '/development/miniprogram#api-调用' }
            //     ]
            // },
            {
                text: '关于',
                items: [
                    { text: '关于我们', link: '/overview/about' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: '' },
            { icon: 'gitee', link: '' },
            { icon: 'gitcode', link: '' }
        ],
        footer: {
            message: '<a href="" target="_blank">MIT License</a>',
            copyright: 'Copyright © 2026- ttblink.cn 版权所有 |隐私 |条款'
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭',
                                },
                                noResultsText: '没有找到相关结果',
                                resetButtonTitle: '清除搜索词',
                                backButtonTitle: '返回',
                            },
                        },
                    },
                    en: {
                        translations: {
                            button: {
                                buttonText: 'Search',
                                buttonAriaLabel: 'Search documentation'
                            },
                            modal: {
                                footer: {
                                    selectText: 'Select',
                                    navigateText: 'Navigate',
                                    closeText: 'Close',
                                },
                                noResultsText: 'No results found',
                                resetButtonTitle: 'Clear search',
                                backButtonTitle: 'Back',
                            },
                        },
                    },
                },
                detailedView: true,
                translations: {
                    button: {
                        buttonText: '搜索',
                        buttonAriaLabel: '搜索'
                    }
                }
            },
        },
        outline: {
            level: [2, 3],
            label: "页面导航",
        },
        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "short",
                timeStyle: "short",
            },
        },
        langMenuLabel: "多语言",
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
    },
})