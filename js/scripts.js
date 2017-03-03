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
    animation: {
      animateRotate: true
    },
    legend: {
      display: true
    }
  }
});