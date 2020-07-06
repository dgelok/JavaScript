// ****************************RECURSIVE SOLUTION**************************
// var bigdata = [];
// var num = 1;
// function recursiveCall (num) {
//     $.get(`https://www.anapioficeandfire.com/api/characters?page=${num}&pageSize=50`)
//     .done((data) => {
//         // console.log(data)
//         bigdata.push(...data)
//         // console.log(bigdata.length)
//         if (data.length > 0) {
//             num++;
//             recursiveCall(num);
//         }
//         else {
//             bigdata = sorter(bigdata)
//             console.log(bigdata.length)

//         }
//     })
//     .fail(function (error) {
//         console.log(error);
//     })

// }

// function sorter (arr) {
//     let obj = {};
//     let uChars = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(!obj[arr[i].name]) {
//             uChars.push(arr[i]);
//             obj[arr[i].name] = true
//         }
//     }

//     uChars.sort((a, b) => {
//         if (a.name < b.name)
//             return -1;
//         if (a.name > b.name)
//             return 1;
//         return 0;
//     })
//     return uChars
// }

// recursiveCall(num);

// ******PROMISE.ALL SOLUTION******************

$(()=>{
    let fetchArr = [];
    let url = "";
    for (let i = 0; i < 45; i++) {
        url = fetch(`https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`)
        fetchArr.push(url)
    }

    let promise = Promise.all(fetchArr);
    promise.then((resultsArr)=>{
        return Promise.all(resultsArr.map(char => {
            return char.json()
        }))

    })
    .then((dataArr)=>{
        let charList = [];
        dataArr.forEach((char)=>{
            charList = [...charList, ...char]
        })
        console.log(charList)
        
        let obj = {};
        let uChars = [];
        for (let i = 0; i < charList.length; i++) {
            if(!obj[charList[i].name]) {
                uChars.push(charList[i]);
                obj[charList[i].name] = true
            }
        }
        console.log(uChars)

        uChars.sort(function (a,b) {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        console.log(uChars[40].name)
        console.log(uChars[41].name)
        console.log(uChars[42].name)
        console.log(uChars[43].name)
        console.log(uChars[44].name)
    })
})
