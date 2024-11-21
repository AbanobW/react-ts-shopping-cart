const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, { currency:"EGY", style: "currency"});

export default function formatCurrency(amount: number){
    return CURRENCY_FORMATTER.format(amount);
}