import EducationalResources from '_images/portfolio/educational-resources.png'
import AwesomeGamified from '_images/portfolio/awesome-gamified.png'
import MarkdownPreviewer from '_images/portfolio/markdown-previewer.png'
import PomodoroTimer from '_images/portfolio/pomodoro-timer.png'
import Insight from '_images/portfolio/insight.png'
import WikipediaViewer from '_images/portfolio/wikipedia-viewer.png'
import JavaScriptCalculator from '_images/portfolio/javascript-calculator.png'

import { useIntl } from 'gatsby-plugin-intl'

export const getPortfolioItems = () => {
  const intl = useIntl()

  return [
    {
      imagePosition: 'left',
      image: {
        imagePath: EducationalResources,
        imageName: 'Educational Resources',
      },
      texts: {
        title: intl.formatMessage({ id: 'projects.project1Title' }),
        description: intl.formatMessage({ id: 'projects.project1Description' }),
        technologies: intl.formatMessage({ id: 'projects.project1Tech' }),
        page: 'https://carolinaknoll.github.io/recursos-educacionais/#/',
        code: 'https://github.com/carolinaknoll/recursos-educacionais/',
      },
    },

    {
      imagePosition: 'centerTop',
      image: {
        imagePath: AwesomeGamified,
        imageName: 'Awesome Gamified',
      },
      texts: {
        title: intl.formatMessage({ id: 'projects.project2Title' }),
        description: intl.formatMessage({ id: 'projects.project2Description' }),
        technologies: intl.formatMessage({ id: 'projects.project2Tech' }),
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
        title: intl.formatMessage({ id: 'projects.project3Title' }),
        description: intl.formatMessage({ id: 'projects.project3Description' }),
        technologies: intl.formatMessage({ id: 'projects.project3Tech' }),
        page: 'https://carolinaknoll.github.io/markdown-previewer/',
        code: 'https://github.com/carolinaknoll/markdown-previewer/',
      },
    },

    {
      imagePosition: 'centerTop',
      image: {
        imagePath: PomodoroTimer,
        imageName: 'Pomodoro Timer',
      },
      texts: {
        title: intl.formatMessage({ id: 'projects.project4Title' }),
        description: intl.formatMessage({ id: 'projects.project4Description' }),
        technologies: intl.formatMessage({ id: 'projects.project4Tech' }),
        page: 'https://carolinaknoll.github.io/pomodoro-timer/',
        code: 'https://github.com/carolinaknoll/pomodoro-timer/',
      },
    },

    {
      imagePosition: 'centerTop',
      image: {
        imagePath: WikipediaViewer,
        imageName: 'Wikipedia Viewer',
      },
      texts: {
        title: intl.formatMessage({ id: 'projects.project5Title' }),
        description: intl.formatMessage({ id: 'projects.project5Description' }),
        technologies: intl.formatMessage({ id: 'projects.project5Tech' }),
        page: 'https://carolinaknoll.github.io/wikipedia-viewer/',
        code: 'https://github.com/carolinaknoll/wikipedia-viewer/',
      },
    },

    {
      imagePosition: 'centerTop',
      image: {
        imagePath: Insight,
        imageName: `Insight`,
      },
      texts: {
        title: intl.formatMessage({ id: 'projects.project6Title' }),
        description: intl.formatMessage({ id: 'projects.project6Description' }),
        technologies: intl.formatMessage({ id: 'projects.project6Tech' }),
        page: 'https://carolinaknoll.github.io/insight/',
        code: 'https://github.com/carolinaknoll/insight/',
      },
    },

    {
      imagePosition: 'centerTop',
      image: {
        imagePath: JavaScriptCalculator,
        imageName: 'JavaScript Calculator',
      },
      texts: {
        title: intl.formatMessage({ id: 'projects.project7Title' }),
        description: intl.formatMessage({ id: 'projects.project7Description' }),
        technologies: intl.formatMessage({ id: 'projects.project7Tech' }),
        page: 'http://carolinaknoll.github.io/javascript-calculator/',
        code: 'https://github.com/carolinaknoll/javascript-calculator/',
      },
    },
  ]
}
