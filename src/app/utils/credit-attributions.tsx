import React from 'react';
import { useIntl } from 'react-intl';
import { ReactSVGElement, SVGProps } from 'react';

import Flower from 'app/images/svg/noun-flower-2727483.svg';

import Gloves from 'app/images/svg/noun-gloves-1044055.svg';
import Rabbit from 'app/images/svg/noun-rabbit-214995.svg';
import KnowledgeGrowth from 'app/images/svg/noun-knowledge-growth-3997797.svg';

import Geography from 'app/images/svg/noun-geography-3846209.svg';
import Growth from 'app/images/svg/noun-growth-3816161.svg';
import MatrixStrength from 'app/images/svg/noun-matrix-strength-3020215.svg';
import Camping from 'app/images/svg/noun-camping-4362585.svg';
import RollerCoaster from 'app/images/svg/noun-roller-coaster-4362629.svg';

export interface CreditAttributionItemData {
  author: string;
  url: string;
  icon?: SVGProps<ReactSVGElement>;
}

const commonIconProps = {
  width: 70,
  height: 70,
  fill: 'var(--white)',
};

export const getCreditAttributionItems = (): CreditAttributionItemData[] => {
  const intl = useIntl();

  return [
    {
      author: intl.formatMessage({ id: 'creditAttribution6' }),
      url: 'https://thenounproject.com/alex2900/',
      icon: <Flower {...commonIconProps} />,
    },
    {
      author: intl.formatMessage({ id: 'creditAttribution8' }),
      url: 'https://thenounproject.com/icon/gloves-1044055/',
      icon: <Gloves {...commonIconProps} />,
    },
    {
      author: intl.formatMessage({ id: 'creditAttribution10' }),
      url: 'https://thenounproject.com/icon/rabbit-214995/',
      icon: <Rabbit {...commonIconProps} />,
    },
    {
      author: intl.formatMessage({ id: 'creditAttribution12' }),
      url: 'https://thenounproject.com/icon/knowledge-growth-3997797/',
      icon: <KnowledgeGrowth {...commonIconProps} />,
    },
    {
      author: intl.formatMessage({ id: 'creditAttribution14' }),
      url: 'https://thenounproject.com/icon/geography-3846209/',
      icon: <Geography {...commonIconProps} />,
    },
    {
      author: intl.formatMessage({ id: 'creditAttribution16' }),
      url: 'https://thenounproject.com/icon/growth-3816161/',
      icon: <Growth {...commonIconProps} />,
    },
    {
      author: intl.formatMessage({ id: 'creditAttribution18' }),
      url: 'https://thenounproject.com/icon/matrix-strength-3020215/',
      icon: <MatrixStrength {...commonIconProps} />,
    },
    {
      author: intl.formatMessage({ id: 'creditAttribution20' }),
      url: 'https://thenounproject.com/icon/camping-4362585/',
      icon: <Camping {...commonIconProps} />,
    },
    {
      author: intl.formatMessage({ id: 'creditAttribution22' }),
      url: 'https://thenounproject.com/icon/roller-coaster-4362629/',
      icon: <RollerCoaster {...commonIconProps} />,
    },
  ];
};
