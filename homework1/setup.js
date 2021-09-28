function first() {
    let firstValue = +prompt('Введите значение')
    let secondValue = +prompt('Введите значение')
    if (!isNaN(firstValue) && !isNaN(secondValue)) {
        console.log(firstValue.toString(secondValue))
    } else {
        console.log('Некорректный ввод!')
    }
    return
}

function second() {
    let firstValue = +prompt('Введите значение')
    if (isNaN(firstValue)) {
        console.log('Некорректный ввод!')
        return
    }
    let secondValue = +prompt('Введите значение')
    if (isNaN(secondValue)) {
        console.log('Некорректный ввод!')
        return
    } else if (!isNaN(firstValue) && !isNaN(secondValue)) {
        console.log(
            `Ответ: ${firstValue + secondValue}, ${firstValue / secondValue}`
        )
        return
    }
    return
}
