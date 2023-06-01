
var Charts = function() {
    var dummyData = {
        'last-15-days-connections': {
            title: {
                text: 'Last 15 Days Connections'
            },
            color: ['#91CC75'],
            // Add tooltip
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(255,255,255,0.9)',
                padding: [10, 15],
                textStyle: {
                    color: '#222',
                    fontSize: 13,
                    fontFamily: 'Roboto, sans-serif'
                },
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                }
            },
            xAxis: {
                data: ['10/5/2023', '11/5/2023', '12/5/2023', '13/5/2023', '14/5/2023', '15/5/2023', '16/5/2023', '17/5/2023', '18/5/2023', '19/5/2023', '20/5/2023', '21/5/2023', '22/5/2023', '23/5/2023', '24/5/2023']
            },
            yAxis: {},
            series: [
                {
                    name: 'New Connections',
                    type: 'line',
                    data: [0.5, 0.25, 0.5, 1, 0.25, 0.75, 0.5, 0.25, 0.5, 1, 0.25, 0.75, 0.25, 1, 0.5],
                    smooth: true
                }
            ]
        },
        'last-30-days-gender': {
            title: {
                text: 'No Valid Data 100%',
                left: 'center',
                top: 'center'
            },
            color: ['#e0487b', '#fff'],
            // Add tooltip
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(255,255,255,0.9)',
                padding: [10, 15],
                textStyle: {
                    color: '#222',
                    fontSize: 13,
                    fontFamily: 'Roboto, sans-serif'
                },
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                }
            },
            series: [
                {
                    type: 'pie',
                    data: [
                        {
                            value: 99.5,
                        },
                        {
                            value: 0.5,
                        }
                    ],
                    radius: ['40%', '70%']
                }
            ]
        },
        'last-30-days-age-range': {
            color: ['#91CC75'],
            // Add tooltip
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(255,255,255,0.9)',
                padding: [10, 15],
                textStyle: {
                    color: '#222',
                    fontSize: 13,
                    fontFamily: 'Roboto, sans-serif'
                },
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                }
            },
            xAxis: {
                data: ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+']
            },
            yAxis: {},
            series: [
                {
                    name: 'New Connections',
                    type: 'scatter',
                    data: [0.5, 0.25, 0.5, 1, 0.25, 0.75, 0.5],
                    smooth: true
                }
            ]
        },
        'last-15-days-return-visitors': {
            color: ['#91CC75'],
            // Add tooltip
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(255,255,255,0.9)',
                padding: [10, 15],
                textStyle: {
                    color: '#222',
                    fontSize: 13,
                    fontFamily: 'Roboto, sans-serif'
                },
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                }
            },
            xAxis: {},
            yAxis: {},
            series: [
                {
                    name: 'New Connections',
                    type: 'line',
                    data: [0.5, 0.25, 0.5, 1, 0.25, 0.75, 0.5],
                    smooth: true
                }
            ]
        }
    }

    var _chart = function(id) {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        var customer_chart_element = document.getElementById(id);

        if (customer_chart_element) {
            var myChart = echarts.init(customer_chart_element);
            myChart.setOption(dummyData[id]);
        }

    }

    return {
        init: function() {
            _chart('last-15-days-connections');
            _chart('last-30-days-gender');
            _chart('last-30-days-age-range');
            _chart('last-15-days-return-visitors');
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    Charts.init();
});
