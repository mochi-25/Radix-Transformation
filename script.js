// ランダムな2~3桁の数字を生成する関数
function generateRandomNumber() {
    return Math.floor(Math.random() * (999 - 10 + 1)) + 10;
}

// ページが読み込まれたときに実行する関数
window.onload = function() {
    const randomNumber = generateRandomNumber();
    document.getElementById('random-number').textContent = randomNumber;
    window.randomNumber = randomNumber; // グローバルに保存しておく
};

// 入力された2進数が正しいかどうかを確認する関数
function checkAnswer() {
    const userInput = document.getElementById('binary-input').value;
    const correctBinary = window.randomNumber.toString(2);
    const resultDiv = document.getElementById('result');

    if (userInput === correctBinary) {
        resultDiv.textContent = '正解です！';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = '間違っています。正しい答えは ' + correctBinary + ' です。';
        resultDiv.style.color = 'red';
    }
}
