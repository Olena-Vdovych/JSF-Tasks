function greeting(user) {
    const date = new Date();
    const hour = date.getHours();
    let timeOfDay;

    if (hour < 12) {
        timeOfDay = "morning";
    } else if (hour >= 12 && hour < 18) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "evening";
    }

    return `Good ${timeOfDay}, ${user}!`;
}

module.exports = {
    greeting,
};
