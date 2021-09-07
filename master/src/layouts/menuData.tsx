import React from 'react';
import { FileOutlined, HomeOutlined, ToolOutlined } from '@ant-design/icons';

export default [
  {
    key: '/home',
    icon: <HomeOutlined />,
    text: '首页',
  },
  {
    key: '/app1/sub',
    icon: <ToolOutlined />,
    text: '子页面',
    children: [
      {
        text: '子菜单',
        icon: <FileOutlined />,
        children: [
          {
            key: '/app1/sub/sub1',
            text: '子页面1',
          },
          {
            key: '/app1/sub/sub2',
            text: '子页面2',
          },
        ],
      },
    ],
  },
];
