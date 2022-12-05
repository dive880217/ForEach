
printBmi(178, 20)
printBmi(178, 70)
printBmi(178, 85)
printBmi(178, 90)
printBmi(178, 110)
printBmi(178, 130)
printBmi("身高", "體重")




function showHistoryData() {
    let totalNum = bmiHistoryData.length;
    let lastNum = totalNum - 1;
    let lastState= bmiHistoryData[lastNum].state;
    // console.log(bmiStatesData)

    console.log(`您總共計算 ${totalNum} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[lastNum].bmi}，
    體重${bmiStatesData[lastState].state}！健康指數為${bmiStatesData[lastState].color}！`)
}