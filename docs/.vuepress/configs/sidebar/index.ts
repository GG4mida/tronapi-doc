import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/api/': [
    {
      text: '接入文档',
      children: [
        '/api/README.md',
        {
          text: '说明',
          children: [
            '/api/intro/convention.md',
            '/api/intro/safety.md',
          ]
        }, {
          text: '订单',
          children: [
            '/api/transaction/create.md',
            '/api/transaction/cashier.md',
            '/api/transaction/notify.md',
            '/api/transaction/query.md',
          ]
        }, {
          text: '收款地址',
          children: [
            '/api/address/query.md',
            '/api/address/add.md',
            '/api/address/generate.md',
            '/api/address/generate_add.md',
          ]
        }, {
          text: '账户',
          children: [
            '/api/account/info.md',
          ]
        }, {
          text: '资源',
          children: [
            '/demo/index.md',
            '/faq/index.md',
            '/upgrade/index.md'
          ]
        }
      ],
    },
  ],
  '/faq/': [
    '/faq/index.md'
  ],
  '/demo/': [
    '/demo/index.md'
  ],
  '/upgrade/': [
    '/upgrade/index.md'
  ]
}
