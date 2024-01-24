function numb(number) {
    if(number % 2 === 0){
        return 'Четное'
    }else{
        return 'Нечетное'
    }
}
console.log(numb(10));


function str(string) {
    return string.split('')
}
console.log(str('Hello'));


function arr(string){
    return string.split(' ')
}
console.log(arr('Hello world'));


function func(string) {
    if(string.length < 20){
        return string.length
    }else{
        return 'Слишком длинная строка'
    }
}
console.log(func('Hello world sddccscscsc'));


function calculateDiscount(summa, skidk) {
  let a = summa / 100 * skidk;
  return summa - a;
};
console.log(skidka(1000, 20));


function numberHours(Hours) {
    return `На вашей планете прошло ${Hours} часа, на земле ${Hours * 7} лет`
};
console.log(numberHours(2));

