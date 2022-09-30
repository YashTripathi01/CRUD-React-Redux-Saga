import { adminRoot } from './defaultValues';

const data = [
  // {
  //   id: 'gogo',
  //   icon: 'iconsminds-air-balloon-1',
  //   label: 'menu.gogo',
  //   to: `${adminRoot}/gogo`,
  //   subs: [
  //     {
  //       icon: 'simple-icon-paper-plane',
  //       label: 'menu.start',
  //       to: `${adminRoot}/gogo/start`,
  //     },
  //   ],
  // },
  // {
  //   id: 'secondmenu',
  //   icon: 'iconsminds-three-arrow-fork',
  //   label: 'menu.second-menu',
  //   to: `${adminRoot}/second-menu`,
  //   // roles: [UserRole.Admin, UserRole.Editor],
  //   subs: [
  //     {
  //       icon: 'simple-icon-paper-plane',
  //       label: 'menu.second',
  //       to: `${adminRoot}/second-menu/second`,
  //     },
  //   ],
  // },
  {
    id: 'usermenu',
    icon: 'iconsminds-bucket',
    label: 'menu.user-menu',
    to: `${adminRoot}/user-menu`,
    subs: [
      // {
      //   icon: 'simple-icon-paper-plane',
      //   label: 'menu.add',
      //   to: `${adminRoot}/user-menu/add`,
      // },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.list',
        to: `${adminRoot}/user-menu/list`,
      },
    ],
  },
];
export default data;
