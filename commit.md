const [weather, setWeather] = useState([])
getApi.get("/data/2.5/forecast?q=Tashkent")
.then(res => {
let response = res.data.list;
let data = [];
for (let i of response) {
let date = i.dt_txt.substring(5, 10)
if (data.filter(e => e.date == date).length === 0) {
data.push({ date: date })
}
console.log(data);
}
for (const elementData of data) {
for (const elementRes of response) {
let resDate = elementRes.dt_txt.substring(5, 10);
if (elementData.date === resDate) {
elementData.hourly ?
elementData.hourly = [
...elementData.hourly,
elementRes
] :
elementData.hourly = [
elementRes
]
}
}
}
setWeather(data);
}).catch(error => {
console.log(error);
})
