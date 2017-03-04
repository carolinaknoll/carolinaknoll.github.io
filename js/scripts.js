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

// Daily Workflow Chart
var ctx = document.getElementById('workflowChart');
var workflowChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Working', 'Studying', 'Eating', 'Trying new things', 'Watching videos/anime', 'Resting/Fun', 'Sleeping'],
    datasets: [{
      data: [6, 2, 2, 2, 1, 2, 9],
      backgroundColor: [
        '#a5dff9',
        '#88dba3',
        '#fff1b9',
        '#feee7d',
        '#23A8AD',
        '#9DC3C1'
      ],
      borderColor: [
        '#FFF',
        '#FFF',
        '#FFF',
        '#FFF',
        '#FFF',
        '#FFF',
        '#FFF'
      ],
      borderWidth: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      animateRotate: true
    },
    legend: {
      display: true
    }
  }
});

//Growth Chart
var ctx2 = document.getElementById('growthChart');
var growthChart = new Chart(ctx2, {
    type: 'radar',
    data: {
      labels: [
        "Creativity",
        "Autonomy",
        "Self confidence",
        "Independent mind",
        "Stress management",
        "Responsiveness",
        "Patience",
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
      datasets: [{
          label: "Three years ago, 2014",
          backgroundColor: "rgba(0, 255, 153, 0.4)",
          borderColor: "rgba(0, 255, 153, 0.8)",
          pointRadius: 3,
          pointBackgroundColor: "rgba(0, 255, 153, 0.8)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(0, 255, 153, 0.8)",
          data: [60, 40, 50, 50, 50, 50, 80, 80, 50, 10, 60, 50, 30, 40, 80, 30, 20, 60, 60, 60]
        },
        {
          label: "This year, 2017",
          backgroundColor: "rgba(0, 128, 255, 0.5)",
          borderColor: "rgba(0, 128, 255, 0.7)",
          pointRadius: 3,
          pointLabelFontSize: 16,
          pointBackgroundColor: "rgba(0, 128, 255, 0.9)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(0, 128, 255, 0.9)",
          data: [80, 60, 60, 70, 70, 60, 80, 80, 70, 30, 70, 50, 40, 50, 80, 40, 30, 80, 80, 80]
        }
      ]
  },
  options: {
    legend: {
      display: true,
      labels: {
        fontSize: 16,
        fontFamily: 'Questrial',
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
  }
});