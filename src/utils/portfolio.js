import EducationalResources from '_images/portfolio/educational-resources.png'
import AwesomeGamified from '_images/portfolio/awesome-gamified.png'
import MarkdownPreviewer from '_images/portfolio/markdown-previewer.png'
import PomodoroTimer from '_images/portfolio/pomodoro-timer.png'
import Insight from '_images/portfolio/insight.png'
import WikipediaViewer from '_images/portfolio/wikipedia-viewer.png'
import JavaScriptCalculator from '_images/portfolio/javascript-calculator.png'

export const PORTFOLIO_ITEMS = {
  EducationalResources: {
    imagePosition: 'left',
    image: {
      imagePath: EducationalResources,
      imageName: 'Educational Resources',
    },
    texts: {
      title: 'Educational Resources',
      description: `Education is a delicate topic here in Brazil. Public schools are crowded and low
      on quality, while private schools are heavy on cost. Homeschooling or educating
      oneself without a school is still a new topic, and many people and families are
      still afraid of it. This project aims to help spread it as another available path
      they can choose. It also aims to make good books, resources, communities and
      educational/social events known.`,
      technologies: 'Markdown files and docsify',
      page: 'https://carolinaknoll.github.io/recursos-educacionais/#/',
      code: 'https://github.com/carolinaknoll/recursos-educacionais/',
    },
  },

  AwesomeGamified: {
    imagePosition: 'centerTop',
    image: {
      imagePath: AwesomeGamified,
      imageName: 'Awesome Gamified',
    },
    texts: {
      title: 'Awesome Gamified',
      description: `Roots itself on the popular Awesome lists, with the idea of displaying the
      markdown content of these lists directly on the browser and also allowing the
      user to save, favorite and delete saved items. The user interface is a bit
      clunky and messy, but you get the idea.`,
      technologies: 'React, Marked, Axios, Webpack, ESLint',
      page: 'https://carolinaknoll.github.io/awesome-gamified/',
      code: 'https://github.com/carolinaknoll/awesome-gamified/',
    },
  },

  MarkdownPreviewer: {
    imagePosition: 'centerTop',
    image: {
      imagePath: MarkdownPreviewer,
      imageName: 'Markdown Previewer',
    },
    texts: {
      title: 'Markdown Previewer',
      description: `Markdown training ground to test, memorise and see how Markdown is compiled
      directly as you type. Also has a cheatsheet link in case you would need.`,
      technologies: 'React, Marked, HTML/CSS',
      page: 'https://carolinaknoll.github.io/markdown-previewer/',
      code: 'https://github.com/carolinaknoll/markdown-previewer/',
    },
  },

  PomodoroTimer: {
    imagePosition: 'centerTop',
    image: {
      imagePath: PomodoroTimer,
      imageName: 'Pomodoro Timer',
    },
    texts: {
      title: 'Pomodoro Timer',
      description: `Based on the Pomodoro technique, it's a timer where you can set session/work
      and break minutes, and it will play a sound once the time is over.`,
      technologies: 'React, HTML/CSS',
      page: 'https://carolinaknoll.github.io/pomodoro-timer/',
      code: 'https://github.com/carolinaknoll/pomodoro-timer/',
    },
  },

  WikipediaViewer: {
    imagePosition: 'centerTop',
    image: {
      imagePath: WikipediaViewer,
      imageName: 'Wikipedia Viewer',
    },
    texts: {
      title: 'Wikipedia Viewer',
      description: `Search Wikipedia article snippets and random articles, and get your screen
      flooded with the results of your search. Careful if you search for food too
      close to lunch time, though!`,
      technologies: 'React, Axios, html-react-parser, HTML/CSS, JavaScript',
      page: 'https://carolinaknoll.github.io/wikipedia-viewer/',
      code: 'https://github.com/carolinaknoll/wikipedia-viewer/',
    },
  },

  Insight: {
    imagePosition: 'centerTop',
    image: {
      imagePath: Insight,
      imageName: `Insight`,
    },
    texts: {
      title: `Insight`,
      description: `Insight is a page developed based on a PSD template from PhotoShop.
      It is responsive and follows a desktop-first approach.`,
      technologies: 'HTML/CSS, JavaScript',
      page: 'https://carolinaknoll.github.io/insight/',
      code: 'https://github.com/carolinaknoll/insight/',
    },
  },

  JavaScriptCalculator: {
    imagePosition: 'centerTop',
    image: {
      imagePath: JavaScriptCalculator,
      imageName: 'JavaScript Calculator',
    },
    texts: {
      title: 'JavaScript Calculator',
      description: `Basic Calculator project every developer kind of works on during the start of
      their learning years.`,
      technologies: 'React, HTML/CSS, JavaScript',
      page: 'http://carolinaknoll.github.io/javascript-calculator/',
      code: 'https://github.com/carolinaknoll/javascript-calculator/',
    },
  },
}
