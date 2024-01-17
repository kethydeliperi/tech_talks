AOS.init();

const eventDate = new Date("Dec 12, 2024 19:00:00");
const eventTimeStamp = eventDate.getTime();

const countTime = setInterval(function(){
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const timeUntilEvent = eventTimeStamp - currentTimeStamp;

    const daysInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;    

    const daysUntilEvent = Math.floor(timeUntilEvent / daysInMs);
    const housUntilEvent = Math.floor((timeUntilEvent % hourInMs) / hourInMs);
    const minutesUntilEvent = Math.floor((timeUntilEvent % hourInMs) / minutesInMs);
    const secsUntilEvent = Math.floor((timeUntilEvent % minutesInMs) / 1000);

    document.getElementById('accountant').innerHTML = `${daysUntilEvent}d ${housUntilEvent}h ${minutesUntilEvent}m ${secsUntilEvent}s`;

    if (timeUntilEvent < 0) {
        clearInterval(countTime);
        document.getElementById('accountant').innerHTML = '*evento expirado*';
    }

}, 1000);