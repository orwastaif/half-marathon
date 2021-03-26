function getFormattedDate(days){
    let week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day = days.getDate() < 10 ? '0'+days.getDate() : days.getDate();
    let month = days.getMonth() < 10 ? `0${days.getMonth() + 1}` : `${days.getMonth() + 1}`;
    let hours = days.getHours() < 10 ? '0'+days.getHours() : days.getHours();
    let minutes = days.getMinutes() < 10 ? '0'+days.getMinutes() : days.getMinutes();
    return day + '.' + month + '.' + days.getFullYear() + ' ' + hours + ':' + minutes +' '+ week[days.getDay()];
};
 