import EducationalResources from 'app/images/portfolio/educational-resources.png';
import AwesomeGamified from 'app/images/portfolio/awesome-gamified.png';
import MarkdownPreviewer from 'app/images/portfolio/markdown-previewer.png';
import WikipediaViewer from 'app/images/portfolio/wikipedia-viewer.png';

import { useIntl } from 'react-intl';

export interface PortfolioItemData {
  imagePosition: string;
  image: {
    imagePath: any;
    imageName: string;
  };
  texts: {
    title: string;
    description: string;
    technologies: string;
    page: string;
    code: string;
  };
}

export const getPortfolioItems = (): PortfolioItemData[] => {
  const intl = useIntl();

  return [
    {
      imagePosition: 'centerTop',
      image: {
        imagePath: EducationalResources,
        imageName: 'Educational Resources',
      },
      texts: {
        title: intl.formatMessage({ id: 'project1Title' }),
        description: intl.formatMessage({ id: 'project1Description' }),
        technologies: intl.formatMessage({ id: 'project1Tech' }),
        page: 'https://carolinaknoll.github.io/recursos-educacionais/#/',
        code: 'https://github.com/carolinaknoll/recursos-educacionais/',
      },
    },

    {
      imagePosition: 'centerTop',
      image: {
        imagePath: WikipediaViewer,
        imageName: 'Wikipedia Viewer',
      },
      texts: {
        title: intl.formatMessage({ id: 'project3Title' }),
        description: intl.formatMessage({ id: 'project3Description' }),
        technologies: intl.formatMessage({ id: 'project3Tech' }),
        page: 'https://carolinaknoll.github.io/wikipedia-viewer/',
        code: 'https://github.com/carolinaknoll/wikipedia-viewer/',
      },
    },

    {
      imagePosition: 'centerTop',
      image: {
        imagePath: AwesomeGamified,
        imageName: 'Awesome Gamified',
      },
      texts: {
        title: intl.formatMessage({ id: 'project2Title' }),
        description: intl.formatMessage({ id: 'project2Description' }),
        technologies: intl.formatMessage({ id: 'project2Tech' }),
        page: 'https://carolinaknoll.github.io/awesome-gamified/',
        code: 'https://github.com/carolinaknoll/awesome-gamified/',
      },
    },

    {
      imagePosition: 'centerTop',
      image: {
        imagePath: MarkdownPreviewer,
        imageName: 'Markdown Previewer',
      },
      texts: {
        title: intl.formatMessage({ id: 'project4Title' }),
        description: intl.formatMessage({ id: 'project4Description' }),
        technologies: intl.formatMessage({ id: 'project4Tech' }),
        page: 'https://carolinaknoll.github.io/markdown-previewer/',
        code: 'https://github.com/carolinaknoll/markdown-previewer/',
      },
    },
  ];
};
