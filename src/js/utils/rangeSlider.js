export const getRightPosition = (currentValue, maxValue, shift) =>
    `calc(${currentValue/maxValue * 100}% - ${shift})`;

export const getLeftPosition = (currentValue, initialValue, maxValue, shift) =>
    `calc(${(currentValue - initialValue)/(maxValue - initialValue) * 100}% - ${shift})`;

export const initSlider = (ref, options) => {
    $(ref).slider(options);
};