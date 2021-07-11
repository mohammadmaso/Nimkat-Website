import React from 'react';
import { ImMagicWand } from 'react-icons/im';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BiBed, BiBook } from 'react-icons/bi';
import { MdFlightTakeoff } from 'react-icons/md';
import { RiRoadMapLine } from 'react-icons/ri';
import { FiShoppingBag } from 'react-icons/fi';
import NavItem from './NavItem';

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Travel wizard',
    icon: <ImMagicWand />,
    href: '/wizard/',
  },
  {
    label: 'Travel solutions',
    icon: <AiOutlineAppstore />,
    children: [
      {
        label: 'Travelogues',
        subLabel: 'Explore among exiting travelogues',
        href: '#',
        icon: <RiRoadMapLine size="20" />,
      },
      {
        label: 'Transport',
        subLabel: 'Book AirPlan, Train and etc.',
        href: '#',
        icon: <MdFlightTakeoff size="20" />,
      },
      {
        label: 'Accomodation',
        subLabel: 'Book hotels, rooms and etc.',
        href: '#',
        icon: <BiBed size="20" />,
      },
      {
        label: 'Accessories',
        subLabel: 'Buy what any trip need.',
        href: '#',
        icon: <FiShoppingBag size="20" />,
      },
      {
        label: 'Wiki',
        subLabel: 'Read our articles to know more.',
        href: '#',
        icon: <BiBook size="20" />,
      },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
];
