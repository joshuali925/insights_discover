const randfloat = (min, max) => Math.random() * (max - min) + min;

const length = 20;
const x = Array.from({ length: length }, (v, i) => i);
const responseTimeWeb = Array.from({ length: length }, () => randfloat(10, 25));
const responseTimeRedis = Array.from({ length: length }, () => randfloat(15, 20));
const responseTimeJVM = Array.from({ length: length }, () => randfloat(15, 30));
const responseTime = Array.from({ length: length }, (v, i) => responseTimeJVM[i] + responseTimeRedis[i] + responseTimeWeb[i]);

export const layout = {
  yaxis: [0, Math.max(...responseTime) * 1.3]
};

export const sampleLogData = {
  data: [
    {
      x: x,
      y: responseTimeWeb,
      line: {
        color: 'rgb(211, 95, 133)',
        width: 1,
        dash: 'solid',
        shape: 'linear',
      },
      fillcolor: 'rgb(211, 95, 133)',
      type: 'scatter',
      name: 'responseTimeWeb',
      mode: 'none',
      fill: 'tonexty',  // tozeroy
    },
    {
      x: x,
      y: Array.from({ length: length }, (v, i) => responseTimeWeb[i] + responseTimeRedis[i]),
      line: {
        color: 'rgb(85, 178, 153)',
        width: 1,
        dash: 'solid',
        shape: 'linear',
      },
      fillcolor: 'rgb(85, 178, 153)',
      type: 'scatter',
      name: 'responseTimeRedis',
      mode: 'none',
      fill: 'tonexty',  // tozeroy
    },
    {
      x: x,
      y: responseTime,
      line: {
        color: 'rgb(93, 141, 188)',
        width: 1,
        dash: 'solid',
        shape: 'linear',
      },
      fillcolor: 'rgb(93, 141, 188)',
      type: 'scatter',
      name: 'responseTimeJVM',
      mode: 'none',
      fill: 'tonexty',  // tozeroy
    },
    {
      x: x,
      y: responseTime,
      line: {
        color: 'black',
        width: 2,
        dash: 'solid',
        shape: 'linear',
      },
      type: 'scatter',
      name: 'responseTime',
    },
  ],
  title: 'Requests'
}