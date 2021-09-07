import React from 'react';
import { MicroApp } from 'umi';
import styles from './SubPage1.less';

const SubPage1 = () => (
  <div className={styles.root}>
    <MicroApp name="app1" />
  </div>
);

export default SubPage1;
