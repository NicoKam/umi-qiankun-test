import locale from './parseLocale';

export const dva = {
  config: {
    onError(err: ErrorEvent, next, { effectArgs, key }) {
      err.preventDefault();
      console.error('Error while dispatching effect:', key);
      effectArgs[0].__dva_reject(err);
    },
  },
};

export { locale };

export const qiankun = fetch('/config.json').then(resp => resp.json()).then(({ apps }) => {
  console.log(apps);
  return ({
    apps,
    // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
    lifeCycles: {
      afterMount: (props) => {
        console.log(props);
      },
    },
  });
});