$('#btn-1per').click(plusOne);
$('#btn-3per').click(plusThree);
$('#btn-7per').click(plusSeven);
// Увеличивает "прогресс" на 1%.
function plusOne() {
    $('.load-bar').css('width', (currentProgress() + onePercent()));
}
// Увеличивает "прогресс" на 3%.
function plusThree() {
    $('.load-bar').css('width', (currentProgress() + threePercent()));
}
// Увеличивает "прогресс" на 7%.
function plusSeven() {
    $('.load-bar').css('width', (currentProgress() + sevenPercent()));
}
// Возвращает текущее состояние "загрузки" в пикселях.
function currentProgress() {
    return parseInt($('.load-bar').css('width'), 10);
}
// Возвращает 1% от всего размера прогрессбара в пикселях.
function onePercent() {
    return parseInt($('.progress').css('width'), 10) * 0.01;
}
// Возвращает 3% от всего размера прогрессбара в пикселях.
function threePercent() {
    return parseInt($('.progress').css('width'), 10) * 0.03;
}
// Возвращает 7% от всего размера прогрессбара в пикселях.
function sevenPercent() {
    return parseInt($('.progress').css('width'), 10) * 0.07;
}