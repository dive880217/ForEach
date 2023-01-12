let chart = c3.generate({
    bindto: '#chart', // HTML 元素綁定
    data: {
      x: 'x', // x 軸綁到陣列第一個有 'x' 字串
      columns: [
        ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ] // 資料存放
    },
    axis: { // 座標軸，有 x 與 y 軸
          x: {
              type: 'timeseries',
              tick: {
                  format: '%Y-%m-%d'
              }
          }
      }
});
let data = {
    num1:13,
    num2:16,
    num3:12}

const tr = Object.keys(data) // {}=>[]
console.log(tr)

let total = 0
tr.forEach((item=>{
    console.log(`${item}有${data[item]}人`);
console.log(data[item])
total += data[item]

})

)
console.log(total)