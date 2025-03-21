//const daysOfWeek =["Lun.","Mar.","Mer.","Jeu.","Ven.","Sam.","Dim."];
const formatDay = (day:number)=>{
    return `0${day}`.slice(-2);
}
const monthsOfYear = ["Jan.","Fev.","Mar.","Avr.","Mai.","Juin","Juil.","Aout","Sep.","Oct.","Nov.","Dec."];
const formatDate = (value : string) =>{
    const date = new Date(value.split(" ")[0]);
   return `${formatDay(date.getDate())} ${monthsOfYear[date.getMonth()]} ${date.getFullYear()}`;
   //return date.toString();

}
export {formatDate};