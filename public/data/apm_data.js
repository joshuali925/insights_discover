
const randfloat = (min, max) => Math.random() * (max - min) + min;
const randint = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const apm_data = [
  {
    name: 'Total throughput',
    data: '50.5M',
  },
  {
    name: 'Number of errors',
    data: '200',
  },
  {
    name: 'Total latency (ms)',
    data: '500.4K',
  },
  {
    name: 'Number of service',
    data: '12',
  },
  {
    name: 'Throughput over time',
    data: [
      {
        x: Array.from({ length: 24 }, (v, i) => i),
        y: Array.from({ length: 24 }, (v, i) => randint(0, 80)),
        marker: {
          color: 'rgb(108, 174, 217)',
        },
        width: 0.65,
        type: 'bar',
        name: 'Count',
      }
    ],
    layout: {
      height: 270,
      width: 270,
      legend: {
        orientation: 'h',
        traceorder: 'normal',
        x: 0,
        xanchor: 'left',
        y: 1.1
      },
      yaxis: { range: [0, 100] },
    }
  },
  {
    name: 'Error by type',
    data: [
      {
        x: Array.from({ length: 24 }, (v, i) => i),
        y: Array.from({ length: 24 }, (v, i) => randint(0, 5)),
        marker: {
          color: 'rgb(254, 217, 71)',
        },
        width: 0.65,
        type: 'bar',
        name: '2xx',
      },
      {
        x: Array.from({ length: 24 }, (v, i) => i),
        y: Array.from({ length: 24 }, (v, i) => randint(5, 10)),
        marker: {
          color: 'rgb(255, 118, 140)',
        },
        width: 0.65,
        type: 'bar',
        name: '4xx',
      },
      {
        x: Array.from({ length: 24 }, (v, i) => i),
        y: Array.from({ length: 24 }, (v, i) => randint(10, 20)),
        marker: {
          color: 'rgb(212, 65, 47)',
        },
        width: 0.65,
        type: 'bar',
        name: '5xx',
      }
    ],
    layout: {
      height: 270,
      width: 270,
      legend: {
        orientation: 'h',
        traceorder: 'normal',
        x: 0,
        xanchor: 'left',
        y: 1.1
      },
      yaxis: { range: [0, 100] },
    }
  },
  {
    name: 'Latency',
    data: [
      {
        x: Array.from({ length: 24 }, (v, i) => i),
        y: Array.from({ length: 24 }, (v, i) => randint(40, 60)),
        marker: {
          color: 'rgb(113, 176, 218)',
        },
        type: 'scatter',
        line: {
          shape: 'spline'
        },
        name: 'p99',
      },
      {
        x: Array.from({ length: 24 }, (v, i) => i),
        y: Array.from({ length: 24 }, (v, i) => randint(20, 40)),
        marker: {
          color: 'rgb(88, 165, 67)',
        },
        type: 'scatter',
        line: {
          shape: 'spline'
        },
        name: 'p95',
      },
      {
        x: Array.from({ length: 24 }, (v, i) => i),
        y: Array.from({ length: 24 }, (v, i) => randint(0, 20)),
        marker: {
          color: 'rgb(255, 193, 95)',
        },
        type: 'scatter',
        line: {
          shape: 'spline'
        },
        name: 'p50',
      },
    ],
    layout: {
      height: 270,
      width: 270,
      legend: {
        orientation: 'h',
        traceorder: 'normal',
        x: 0,
        xanchor: 'left',
        y: 1.1
      },
      yaxis: { range: [0, 100] },
    }
  },
  {
    name: 'Percentage of time spent by service type',
    type: 'chart',
    data: [
      {
        x: Array.from({ length: 24 }, (v, i) => i),
        y: Array.from({ length: 24 }, (v, i) => randfloat(19, 21)),
        type: 'scatter',
        line: {
          color: 'rgb(247, 197, 110)',
          width: 1,
          dash: 'solid',
          shape: 'spline',
        },
        name: 'Web external',
        mode: 'none',
        fill: 'tonexty',  // tozeroy
      },
      {
        x: Array.from({ length: 24 }, (v, i) => i),
        y: Array.from({ length: 24 }, (v, i) => randfloat(38, 40)),
        type: 'scatter',
        line: {
          color: 'rgb(111, 171, 96)',
          width: 1,
          dash: 'solid',
          shape: 'spline',
        },
        name: 'Redis',
        mode: 'none',
        fill: 'tonexty',  // tozeroy
      },
      {
        x: Array.from({ length: 24 }, (v, i) => i),
        y: Array.from({ length: 24 }, (v, i) => randfloat(75, 80)),
        type: 'scatter',
        line: {
          color: 'rgb(156, 120, 215)',
          width: 1,
          dash: 'solid',
          shape: 'spline',
        },
        name: 'MySQL',
        mode: 'none',
        fill: 'tonexty',  // tozeroy
      },
      {
        x: Array.from({ length: 24 }, (v, i) => i),
        y: Array.from({ length: 24 }, (v, i) => 100),
        type: 'scatter',
        line: {
          color: 'rgb(74, 156, 208)',
          width: 1,
          dash: 'solid',
          shape: 'spline',
        },
        name: 'JVM',
        mode: 'none',
        fill: 'tonexty',  // tozeroy
      },
    ],
    layout: {
      height: 270,
      width: 270,
      legend: {
        orientation: 'h',
        traceorder: 'normal',
        x: 0,
        xanchor: 'left',
        y: 1.1
      },
      yaxis: { range: [0, 100] },
    }
  },
  {
    name: 'Throughput by service',
    data: [
      {
        values: [70, 70, 40, 40, 40, 40, 15, 15, 15, 15],
        labels: ['Produce', 'ComparisonAlgo', 'Purchase', 'Payment', 'Verification', 'Users', 'Credentials', 'Preferences', 'Order', 'Others'],
        type: 'pie',
        textinfo: "",
      }
    ],
    layout: {
      height: 270,
      width: 270,
      showlegend: false,
      legend: {
        orientation: 'h',
        traceorder: 'normal',
        // x: 0,
        // xanchor: 'left',
        // y: 1.1
      },
      margin: {
        l: 30,
        r: 5,
        b: 30,
        t: 5,  // 10
        pad: 4
      },
    }
  },
]