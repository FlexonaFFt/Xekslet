function diff(first_, second_) {
    const circle = 360;
    const deprive_circle = 360 - (first_ + second_);
    const second_deprive_circle = 360 - deprive_circle;

    if (deprive_circle > second_deprive_circle) {
        return second_deprive_circle;
    } else {
        return deprive_circle;
    };
};

export default diff;