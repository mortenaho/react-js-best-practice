
interface ICurrencyFormat
{
    value : bigint;
    sufix:string;
    prefix:string;
}

function CurrencyFormat(format:ICurrencyFormat){
 // format.value.
 let val= format.value.toString();
 for (let index = 0; index <val.length; index++) {
    const element = val[index];
    console.log(element)
 }
 return format.value
}

export default CurrencyFormat