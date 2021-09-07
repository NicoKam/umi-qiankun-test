import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import React from 'react';
import menuData from './menuData';
import MenuLayout from './components/MenuLayout';
import ProdErrorCatch from './ProdErrorCatch';

// @ts-expect-error
const isSlave = !!window.__POWERED_BY_QIANKUN__;

/**
 * /layouts/index 会默认作为所有页面的容器
 */
export default (props) => {
  const { children } = props;
  return (
    <ConfigProvider locale={zhCN}>
      {/* 运行时错误拦截 */}
      <ProdErrorCatch {...props}>
        {/* 全局多级菜单布局 */}
        {isSlave ? children : <MenuLayout menuData={menuData} {...props} />}
      </ProdErrorCatch>
    </ConfigProvider>
  );
};
