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

// Home - Word texts
var firstWordArray = ['ideas', 'knowledge', 'mindsets', 'coffee cups'];
var secondWordArray = ['great things', 'awesome moments', 'interesting changes', 'fun times'];

var index = 0;
const generateWords = () => {
  $('#firstWord').html(firstWordArray[index]);
  index = (index + 1) % firstWordArray.length;
  $('#secondWord').html(secondWordArray[index]);
}

generateWords();

setInterval(function() {
  generateWords();
}, 4000);

// About - Growth Chart
var ctx2 = document.getElementById('growthChart');
var growthChart = new Chart(ctx2, {
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
        label: 'Three years ago, 2014',
        backgroundColor: 'rgba(0, 204, 122, .5)',
        borderColor: 'rgba(0, 204, 122, .8)',
        pointRadius: 3,
        pointBackgroundColor: 'rgba(0, 204, 122, .8)',
        pointBorderColor: '#FFF',
        pointHoverBackgroundColor: 'rgba(0, 204, 122, .9)',
        pointHoverBorderColor: 'rgba(0, 204, 122, .9)',
        data: [60, 40, 50, 50, 50, 50, 80, 80, 50, 10, 60, 50, 30, 40, 80, 30, 20, 60, 60, 60],
      },
      {
        label: 'This year, 2017',
        backgroundColor: 'rgba(0, 223, 252, .7)',
        borderColor: 'rgba(0, 128, 233, .7)',
        pointRadius: 3,
        pointLabelFontSize: 16,
        pointBackgroundColor: 'rgba(0, 128, 233, .9)',
        pointBorderColor: '#FFF',
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
        hoverFontColor: '#111',
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
        beginAtZero: true,
        min: 0,
        max: 100,
      },
      pointLabels: {
        fontSize: 16,
        fontFamily: 'Questrial',
        fontColor: '#444',
      },
    },
    animation: {
      duration: '2000',
      easing: 'linear',
    },
  }
});
