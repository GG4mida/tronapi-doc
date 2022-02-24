import type { NavbarConfig } from '@vuepress/theme-default'
import { default as appConfig } from '../app';

export const zh: NavbarConfig = [
  {
    text: '接入文档',
    link: '/api/',
  },
  {
    text: '接入工具',
    link: '/demo/'
  },
  {
    text: '常见问题',
    link: '/faq/'
  },
  {
    text: '升级说明',
    link: '/upgrade/'
  },
  {
    text: '在线测试',
    link: appConfig.links.test
  },
  {
    text: '商户登录',
    link: appConfig.links.system
  }
]
