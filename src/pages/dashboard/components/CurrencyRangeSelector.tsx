interface CurrencyRangeSelectorPros {
    value: string;
    onChange: (currency: string) => void;
}

function CurrencyRangeSelector({ value, onChange }: CurrencyRangeSelectorPros) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(String(e.target.value))}
    >
      <option value={"pln"}>PLN</option>
      <option value={"usd"}>USD</option>
      <option value={"eur"}>EUR</option>
    </select>
  );
}

export default CurrencyRangeSelector;