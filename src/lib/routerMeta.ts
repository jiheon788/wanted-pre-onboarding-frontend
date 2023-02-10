export interface IRouterMeta {
  name: string;
  path: string;
  isShow: boolean;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  HomePage: {
    name: '홈',
    path: '/',
    isShow: true,
  },
  TodoPage: {
    name: 'Todo',
    path: '/todo',
    isShow: true,
  },
  SignInPage: {
    name: '로그인',
    path: '/signin',
    isShow: true,
  },
  SignUpPage: {
    name: '회원가입',
    path: '/signup',
    isShow: true,
  },
};

export default routerMeta;
