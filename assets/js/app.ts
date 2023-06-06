import { format, utcToZonedTime } from 'date-fns-tz'

function getTime() {
  let d = utcToZonedTime(new Date(), "America/New_York")
  return format(d, 'hh:mm')
}

function clock() {
  let clockElement: HTMLElement | null = document.querySelector('#clock')
  
  if (clockElement) {
    clockElement.innerHTML = `NYC ${getTime()}`
  }
  
  setInterval(() => {
    if (clockElement) {
      clockElement.innerHTML = `NYC ${getTime()}`
    }
  }, 1000)
}

clock()