export function formatCurrency(value) {
    if (value >= 1000000) {
        return `${(value / 1e6).toFixed(2)}M`;
    } else {
        return formatCommas(value);
    }
}

export function formatCommas(number) {
    return new Intl.NumberFormat("en-US").format(number);
}
