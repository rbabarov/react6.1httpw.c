/**
 * @param {TimeStart} - Рассчет стартовых положений стрелок часов
 * @param {dta} - Разница местного времени выбранного города со временем по Гринвичу в часах сразу со знаком. Аргумент
 * @return {hVstart: hDeg, mVstart: mDeg, sVstart: sDeg} - ОБъект со стартовым положением стрелок в градусах.
 * @param {deltaVtime} - Разница местного времени со временем по Гринвичу в мс сразу со знаком.
 * @param {d} - Местная дата и время.
 * @param {timeVG} - Таймстемп текущего времени по Гринвичу.
 * @param {locVstamp} - Таймстемп текущего времени выбранного города.
 */
 
export const TimeStart = (dta) => {
  const d = new Date();
  const deltaVtime = d.getTimezoneOffset() * 60 * 1000; 
  const timeVG = +d + deltaVtime;
  const locVstamp = timeVG + dta * 60 * 60 * 1000;
  const h = new Date(locVstamp).getHours();
  const m = new Date(locVstamp).getMinutes();
  const s = new Date(locVstamp).getSeconds();
  const hDeg = (h * 30 + m * 0.5) > 360? (h * 30 + m * 0.5) - 360: h * 30 + m * 0.5; // Стартовое положение часовой стрелки.
  const mDeg = m * 6 + Math.round(s * 0.017); // Стартовое положение минутной стрелки. 
  const sDeg = s * 6; // Стартовое положение секундной стрелки.
  const start = {hVstart: hDeg, mVstart: mDeg, sVstart: sDeg}
  return start;
}
