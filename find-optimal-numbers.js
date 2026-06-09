const prices = [13, 6, 3, 4, 10, 2, 3]

const findOptimalPrice = (arr) => {

    let minPrice = arr[0]
    let minIndex = 0
    let maxProfit = 0
    let buyIndex = 0
    let sellIndex = 0

    for (let i = 1; i < arr.length; i++) {

        const profit = arr[i] - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit
            buyIndex = minIndex
            sellIndex = i
        }


        if (arr[i] < minPrice) {
            minPrice = arr[i];
            minIndex = i;
        }
    }

    if (maxProfit === 0) {
        return [];
    }

    return [buyIndex, sellIndex];
}

console.log(findOptimalPrice(prices))





// Есть биржа, на которой продается и покупается зерно. Цена покупки и продажи одинакова.
// пример: [13, 6, 3, 4, 10, 2, 3]
// это исторические данные
// предположим что в прошлый понедельник цена на покупку и продажу зерна была 13
// на следующий день она стала 6, потом 3
// Нужно найти индексы дня покупки и последующей продажи для получения максимальной выгоды. Вернуть массив из 2х элументов - индекс дня покупки и индекс дня продажи. Если выигрышных вариантов нет - вернуть пустой массив.

// Shuhrat Berdiyev
// 21:19
// В данном случае нам было бы выгодно купить за 3 и продать в последствии за 10 - с выгодой в 7
// profit([13, 6, 3, 4, 10, 2, 3])
// # [2, 4] >> купили за 3 (индекс 2) и продали за 10 (индекс 4)

// profit([13, 6, 3, 1])
// # [] >> нет выигрышных вариантов


