const randfloat = (min, max) => Math.random() * (max - min) + min;

const length = 20;
const x = Array.from({ length: length }, (v, i) => i);
const responseTimeWeb = Array.from({ length: length }, () => randfloat(10, 25));
const responseTimeRedis = Array.from({ length: length }, () => randfloat(15, 20));
const responseTimeJVM = Array.from({ length: length }, () => randfloat(15, 30));
const responseTime = Array.from({ length: length }, (v, i) => responseTimeJVM[i] + responseTimeRedis[i] + responseTimeWeb[i]);

export const layout = {
  yaxis: { range: [0, Math.max(...responseTime) * 1.3] },
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
      name: 'ResponseTimeWeb',
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
      name: 'ResponseTimeRedis',
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
      name: 'ResponseTimeJVM',
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
      name: 'ResponseTime',
    },
  ],
  title: 'Requests'
};

export const metadata = [];
for (let i = 0; i < sampleLogData.data.length; i++) {
  const data = sampleLogData.data[i];
  const stat = {
    name: data.name,
    icon: 'tokenNumber',
    type: data.name === 'ResponseTime' ? 'line' : 'area',
    color: data.line.color,
    uniqueEntries: new Set(data.y).size,
    valueRange: `${Math.min(...data.y).toFixed(1)}ms-${Math.max(...data.y).toFixed(1)}ms`,
    average: `${(data.y.reduce((a, b) => a + b, 0) / data.y.length).toFixed(1)}ms`
  };
  metadata.push(stat);
}