import {common} from './environment.common';
import {merge} from 'lodash';
export const environment = merge(common, {
  tag: 'local',
  production: false,
  apiPath: '/api',
  domain: `${window.location.origin}`,
  api: {
    account: `${window.location.origin}`,
    
  },
  // 환경별 환경변수 구성
});
