
for(let i = 1 ; i <=  100 ; i++) {
    if( i % 2 === 0){
        let store = []
        store.push(i)
        store = store.filter((item) => item <= 18 )
        store.map((i) => console.log(i.toLocaleString()));
    }
}