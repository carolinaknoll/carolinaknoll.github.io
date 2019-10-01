// scrollTop functionality
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Nightly/Mythical theme switch
const abracadabra = () => {
  $('#magic-boop, .themed-section').toggleClass('nightly-theme mythical-theme');
}

$('#magic-boop').click(abracadabra);

// Home - Presentation Topics
let presentationTopicsFirst = ['ideas', 'knowledge', 'mindsets', 'coffee cups'];
let presentationTopicsSecond = ['great things', 'awesome moments', 'interesting changes', 'fun times'];
let presentationTopicsThird = ['happy', 'thoughtful', 'kindhearted', 'affectionate'];

let index = 0;

const getRandomNumber = ({min = 1, max = presentationTopicsFirst.length} = {}) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const replaceTopics = () => {
  // index = (index + 1) % presentationTopicsFirst.length;
  index = getRandomNumber();
  $('#firstTopic').html(presentationTopicsFirst[index]);
  $('#secondTopic').html(presentationTopicsSecond[index]);
  $('#thirdTopic').html(presentationTopicsThird[index]);
}

replaceTopics();

setInterval(function() {
  replaceTopics();
}, 4000);

// About - Growth Chart
let chartContainer = document.getElementById('growthChart');
let growthChart = new Chart(chartContainer, {
  type: 'radar',
  data: {
    labels: [
      'Creativity',
      'Autonomy',
      'Self confidence',
      'Independent mind',
      'Stress management',
      'Responsiveness',
      'Patience',
      'Respect for authority',
      'Determination',
      'Ambition',
      'Work ethic',
      'Competitive spirit',
      'Ease in public',
      'Opening up to others',
      'Diplomacy',
      'Persuasion',
      'Leading',
      'Taking responsibility',
      'Organization',
      'Vision'
    ],
    datasets: [
      {
        label: '2014',
        backgroundColor: 'rgba(0, 204, 122, .5)',
        borderColor: 'rgba(0, 204, 122, .8)',
        pointRadius: 3,
        pointBackgroundColor: 'rgba(0, 204, 122, .8)',
        pointBorderColor: '#cccccc',
        pointHoverBackgroundColor: 'rgba(0, 204, 122, .9)',
        pointHoverBorderColor: 'rgba(0, 204, 122, .9)',
        data: [60, 40, 50, 50, 50, 50, 80, 80, 50, 10, 60, 50, 30, 40, 80, 30, 20, 60, 60, 60],
      },
      {
        label: '2017',
        backgroundColor: 'rgba(0, 223, 252, .7)',
        borderColor: 'rgba(0, 128, 233, .7)',
        pointRadius: 3,
        pointLabelFontSize: 16,
        pointBackgroundColor: 'rgba(0, 128, 233, .9)',
        pointBorderColor: '#cccccc',
        pointHoverBackgroundColor: 'rgba(0, 128, 233, .9)',
        pointHoverBorderColor: 'rgba(0, 128, 233, .9)',
        data: [80, 60, 60, 70, 70, 60, 80, 80, 70, 30, 70, 50, 40, 50, 80, 40, 30, 80, 80, 80],
      }
    ],
  },
  options: {
    legend: {
      display: true,
      labels: {
        fontSize: 16,
        fontFamily: 'Questrial',
        fontColor: '#a6a6a6',
        hoverFontColor: '#a6a6a6',
      },
    },
    tooltips: {
      titleFontSize: 18,
      titleFontStyle: 'normal',
      titleFontFamily: 'Questrial',
      bodyFontSize: 14,
      bodyFontStyle: 'normal',
      bodyFontFamily: 'Questrial',
    },
    scale: {
      ticks: {
        backdropColor: 'transparent',
        beginAtZero: true,
        min: 0,
        max: 100,
      },
      pointLabels: {
        fontSize: 16,
        fontFamily: 'Questrial',
        fontColor: '#a6a6a6',
      },
      gridLines: {color: '#a6a6a6'},
      angleLines: {color: '#a6a6a6'},
    },
    animation: {
      duration: '2000',
      easing: 'easeInOutSine',
    },
  }
});
