function minDOB() {
    let dates = new Date();
    let years = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dates);
    let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(dates);
    let days = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dates);
    var formats = {year: 'numeric', month: 'numeric', day: 'numeric' };
    const lessthan18 = new Date(years-17, mo - 7, ++days).toLocaleDateString("id", formats);
    const min = lessthan18.split("/").reverse().join("-")
    return(min)
    ////console.log(tglBaru);
}
function maxDOB() {
    let dates = new Date();
    let years = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dates);
    let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(dates);
    let days = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dates);
    var formats = {year: 'numeric', month: 'numeric', day: 'numeric' };
    const morethan55 = new Date(years-55, mo - 7, --days).toLocaleDateString("id", formats);
    const min = morethan55.split("/").reverse().join("-")
    return(min)
    ////console.log(tglBaru);
}
const minDobs = minDOB()
const maxDobs = maxDOB()



module.exports = {minDobs, maxDobs}