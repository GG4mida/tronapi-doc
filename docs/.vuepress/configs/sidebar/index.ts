import type { SidebarConfig } from '@vuepress/theme-default'
import { default as appConfig } from '../app';

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
            '/api/intro/faucet.md',
            '/api/intro/test.md',
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
          text: '账户',
          children: [
            '/api/wallet/query.md',
            '/api/wallet/withdrawal_create.md',
            '/api/wallet/withdrawal_notify.md',
            '/api/wallet/withdrawal_query.md',
            '/api/wallet/withdrawal_auto.md'
          ]
        }, {
          text: '资源',
          children: [
            '/demo/index.md',
            '/api/intro/constant.md',
            '/faq/index.md',
            '/upgrade/index.md',
            {
              text: '在线测试',
              link: appConfig.links.test
            }
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
