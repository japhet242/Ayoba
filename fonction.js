export async function tim(duré){
    const p=new Promise((resolve, reject)=>{
        setInterval(()=>{
            resolve(duré)
        }, duré)
    })
    return p
}