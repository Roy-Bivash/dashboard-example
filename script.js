var theNav = document.getElementById("navbar");
var lesItems = document.querySelectorAll('.item');




theNav.addEventListener('mouseenter', () => {
    lesItems.forEach(item => {
        item.querySelector('p').classList.remove('hidden')
    })
})

theNav.addEventListener('mouseleave', () => {
    lesItems.forEach(item => {
        item.querySelector('p').classList.add('hidden')
    })
})



const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');

new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Black', 'White', 'Grey'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 9, 3, 10, 3, 17],
            borderWidth: 1,
            backgroundColor: '#7AB1E8'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


new Chart(ctx3, {
    type: 'doughnut',
    data:  {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
});



new Chart(ctx2, {
    type: 'polarArea',
    data:  {
        labels: [
          'Red',
          'Green',
          'Yellow',
          'Grey',
          'Blue'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
});
