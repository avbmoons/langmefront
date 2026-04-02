Chart.register(ChartDataLabels);

const ctx = document.getElementById('testChart');
const ctx2 = document.getElementById('testChart2'); // Modes
const ctx3 = document.getElementById('testChart3'); // Langs
const ctx4 = document.getElementById('testChart4').getContext('2d'); // Words
const ctx1 = document.getElementById('testChart1').getContext('2d'); // Themes

console.log('modesCh = ' + modesCh);
console.log('modesStr = ' + modesStr);

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: themesCh,    
        datasets: [{
            label: 'Words',
            data: themesWordsStr, 
            backgroundColor: [
                'rgba(125, 121, 66, 0.7)',
                'rgba(66, 125, 107, 0.7)',
                'rgba(132, 117, 167, 0.7)',
                'rgba(167, 128, 117, 0.7)',
                'rgba(167,164,117, 0.7)',
            ],
            borderColor: [
                'rgba(125, 121, 66, 1)',
                'rgba(66, 125, 107, 1)',
                'rgba(132, 117, 167, 1)',
                'rgba(167, 128, 117, 1)',
                'rgba(167,164,117, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 45,
                    minRotation: 0,
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    maxRotation: 45,
                    minRotation: 0,                     
                }
            }
        },
        plugins: {
            datalabels: {
                display: false,
            },
            title: {
                display: true,
                text: 'Words by Themes',
                color: 'rgba(83, 56, 33, 1)',
                font: {
                    size: 14,
                    weight: 'bold',
                    family: 'Roboto',
                },
                align: 'center',
            },
            legend: {
                display: false,
            },
        },
        layout: {
            padding: {
                left: 5,
                right: 5,
                top: 5,
                bottom: 5,
            },
        },
    }
});

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: modesCh,    
        datasets: [{
            label: 'Modes',
            data: modesStr, 
            backgroundColor: [
                'rgba(29, 57, 164, 0.7)',
                'rgba(132, 117, 167, 0.7)',
                'rgba(167, 128, 117, 0.7)',
                'rgba(167,164,117, 0.7)',
                'rgba(75, 116, 179, 0.7)',
            ],
            borderColor: [
                'rgba(29, 57, 164, 1)',
                'rgba(132, 117, 167, 1)',
                'rgba(167, 128, 117, 1)',
                'rgba(167,164,117, 1)',
                'rgba(75, 116, 179, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 45,
                    minRotation: 0,
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        if (value === 1) {return 'Draft'};
                        if (value === 2) {return 'Active'};
                        if (value === 3) {return 'Blocked'};
                        if (value === 4) {return 'Close'};

                        return '';     
                    },
                    maxRotation: 45,
                    minRotation: 0,                     
                }
            }
        },
        plugins: {
            datalabels: {
                display: false,
            },
            title: {
                display: true,
                text: 'Modes',
                color: 'rgba(83, 56, 33, 1)',
                font: {
                    size: 14,
                    weight: 'bold',
                    family: 'Roboto',
                },
                align: 'center',
            },
            legend: {
                display: false,
            },
        },
        layout: {
            padding: {
                left: 5,
                right: 5,
                top: 5,
                bottom: 5,
            },
        },
    }
});

new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: langsCh,    
        datasets: [{
            label: 'Langs',
            data: langsStr, 
            backgroundColor: [
                'rgba(29, 57, 164, 0.7)',
                'rgba(132, 117, 167, 0.7)',
                'rgba(167, 128, 117, 0.7)',
                'rgba(167,164,117, 0.7)',
                'rgba(75, 116, 179, 0.7)',
            ],
            borderColor: [
                'rgba(29, 57, 164, 1)',
                'rgba(132, 117, 167, 1)',
                'rgba(167, 128, 117, 1)',
                'rgba(167,164,117, 1)',
                'rgba(75, 116, 179, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 45,
                    minRotation: 0,
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        if (value === 1) {return 'Draft'};
                        if (value === 2) {return 'Active'};
                        if (value === 3) {return 'Blocked'};
                        if (value === 4) {return 'Close'};

                        return '';     
                    },                 
                    font: {
                        size: 12,
                    }
                }
            }
        },
        plugins: {
            datalabels: {
                display: false,
            },
            title: {
                display: true,
                text: 'Langs',
                color: 'rgba(83, 56, 33, 1)',
                font: {
                    size: 14,
                    weight: 'bold',
                    family: 'Roboto',
                },
                align: 'center',
            },
            legend: {
                display: false,
            },
        },
        layout: {
            padding: {
                left: 5,
                right: 5,
                top: 5,
                bottom: 5,
            },
        },      
    }
});

new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ['Draft', 'Active', 'Blocked', 'Close'],
        datasets: [{
            data: [sumWordsDraft, sumWordsActive, sumWordsBlocked, sumWordsClose],  
            backgroundColor: [
                'rgba(252, 207, 194, 0.7)',
                'rgba(29, 57, 164, 0.7)',
                'rgba(125, 121, 66, 0.7)',
                'rgba(83, 56, 33, 0.7)',
            ],
            borderColor: [
                'rgba(252, 207, 194, 1)',
                'rgba(29, 57, 164, 1)',
                'rgba(125, 121, 66, 1)',
                'rgba(83, 56, 33, 1)',
            ],
            borderWidth: 1,
            hoverOffset: 4,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                display: function(context) {
                    return context.dataset.data[context.dataIndex] !== 0;
                },
                color: '#000',
                font: {
                    weight: 'normal',
                },
                anchor: 'right',    
                align: 'left',   
                offset: 10,
                formatter: (value, ctx4) => {
                    let sum = ctx4.dataset.data.reduce((a, b) => a + b, 0);
                    let percentage = ((value * 100) / sum).toFixed(0) + " %";
                    let text = ctx4.chart.data.labels[ctx4.dataIndex] + ' ' + percentage;
                    return text;    
                },
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 4,
                backgroundColor: 'white',
            },
            title: {
                display: true,
                text: 'Words',
                color: 'rgba(12, 51, 135, 1)',
                font: {
                    size: 14,
                    weight: 'bold',
                    family: 'Roboto',
                },
                align: 'center',
            },
            legend: {
                display: false,
            },
        },
        layout: {
            padding: {
                left: 5,
                right: 5,
                top: 5,
                bottom: 5,
            },
        },
    },
});

new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['Draft', 'Active', 'Blocked', 'Close'],
        datasets: [{
            data: [sumThemesDraft, sumThemesActive, sumThemesBlocked, sumThemesClose],  
            backgroundColor: [
                'rgba(252, 207, 194, 0.7)',
                'rgba(29, 57, 164, 0.7)',
                'rgba(125, 121, 66, 0.7)',
                'rgba(83, 56, 33, 0.7)',
            ],
            borderColor: [
                'rgba(252, 207, 194, 1)',
                'rgba(29, 57, 164, 1)',
                'rgba(125, 121, 66, 1)',
                'rgba(83, 56, 33, 0.7)',
            ],
            borderWidth: 1,
            hoverOffset: 4,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                display: function(context) {
                    return context.dataset.data[context.dataIndex] !== 0;
                },
                color: '#000',
                font: {
                    weight: 'normal',
                },
                anchor: 'left',    
                align: 'right',   
                offset: 10,
                formatter: (value, ctx4) => {
                    let sum = ctx4.dataset.data.reduce((a, b) => a + b, 0);
                    let percentage = ((value * 100) / sum).toFixed(0) + " %";
                    let text = ctx4.chart.data.labels[ctx4.dataIndex] + ' ' + percentage;
                    return text;    
                },
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 4,
                backgroundColor: 'white',
            },
            title: {
                display: true,
                text: 'Themes',
                color: 'rgba(12, 51, 135, 1)',
                font: {
                    size: 14,
                    weight: 'bold',
                    family: 'Roboto',
                },
                align: 'center',
            },
            legend: {
                display: false,
            },
        },
        layout: {
            padding: {
                left: 5,
                right: 5,
                top: 5,
                bottom: 5,
            },
        },
    },
});