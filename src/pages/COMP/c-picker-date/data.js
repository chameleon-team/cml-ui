export function getYears(year){
	let date_current = new Date();
	let y = year||date_current.getFullYear();
	let years = [];
	for (let i = 1949; i <= 2099; i++) {
	  years.push(String(i)+'年');
	}
	return years
}

export function getMonths(){
	let months = [];
	for (let i = 1; i <= 12; i++) {
	  months.push(String(i)+'月');
	}
	return months
}

export function getMaxDay(year, month){
	// let year = toDigital(year);
	// let month = toDigital(month);
	let date_current = new Date();
	let y = year || date_current.getFullYear();
	let m = month || date_current.getMonth()+1;
  let d = new Date(y, m, 0);
  return d.getDate();
}

export function getDays(year, month){
	let maxDay = getMaxDay(year, month);
	let days = [];
	for (let i = 1; i <= maxDay; i++) {
  	days.push(String(i)+'日');
	}
  return days;
}

export function toDigital(item){
	return item.replace('年','').replace('月','').replace('日','')
}
