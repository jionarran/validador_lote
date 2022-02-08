const data = require('./lot_data');

var acess_data = data.itensDetalhesLote;

var results = {};
var toCut;
var totalValue = 0;
var count = 0;
var allDescriptions = [];

function mappedArray(e, t){
    if(!Array.isArray(t))return t;
    if(null==e||null==e)return t;
    for(var i={},n=0;n<t.length;n++)
        t[n][e]&&t[n][e].toString&&(i[t[n][e].toString()]=t[n]);
        return i
}

var values = [
    {description: '240GB', value: 250},
    {description: '480GB', value: 370},
    {description: '3TB', value: 699},
    {description: '1TB', value: 320},
    {description: '120GB', value: 250},
    {description: 'UBIQUITI', value: 800},
    {description: '2TB', value: 400 },
    {description: '1000GB', value: 320},
    {description: '500GB', value: 300},
    {description: 'TV STICK', value: 280},
    {description: '4TB', value: 750},
    {description: 'GPS GARMIN', value: 1300},
    {description: 'MEMORIA', value: 250},
    {description: 'ECHO DOT', value: 300},
    {description:'1.2 TB', value: 1000},
    {description:'SMARTWATCH', value: 200}]

var transposed = mappedArray("description", values);

for (let i = 0; i < acess_data.length; i++) {
    toCut = acess_data[i].descricao.indexOf("////") - 8;

    if(!results[acess_data[i].descricao.substr(0, toCut)+'']){
        results[acess_data[i].descricao.substr(0, toCut)+''] = {count: 0};
    }

    results[acess_data[i].descricao.substr(0, toCut)+''].count += 1
    allDescriptions.push(acess_data[i].descricao)
}


for (const lkey in results) {
    for (const key in transposed) {
        if(lkey.includes(key)){
            totalValue += (results[lkey].count * transposed[key].value)
            count += results[lkey].count
        }
    }
}

console.log(results)
console.log("totalValue",totalValue);
console.log("count",count);
console.log("allDescriptions LENGTH", allDescriptions.length)