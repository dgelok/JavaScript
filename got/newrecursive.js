var bigdata = [];
var num = 1;
function recursiveCall (num) {
    $.get(`https://www.anapioficeandfire.com/api/characters?page=${num}&pageSize=50`)
    .done((data) => {
        // console.log(data)
        bigdata.push(...data)
        console.log(bigdata.length)
        if (data.length > 0) {
            num++;
            recursiveCall(num);
        }
        else {
            bigdata = sorter(bigdata)
            console.log(bigdata.length)
            console.log(bigdata[3])
        }
    })
    .fail(function (error) {
        console.log(error);
    })

}

function sorter (arr) {
    let obj = {};
    let uChars = [];
    for (let i = 0; i < arr.length; i++) {
        if(!obj[arr[i].name]) {
            uChars.push(arr[i]);
            obj[arr[i].name] = true
        }
    }
    return uChars
}

recursiveCall(num);