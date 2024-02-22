function formattedTime(minutes) {
    const hours = Math.floor((minutes / 60) % 24);
    const mins = minutes % 60;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMins = mins < 10 ? `0${mins}` : mins;
    return `${formattedHours}:${formattedMins}`;
};

export default formattedTime;