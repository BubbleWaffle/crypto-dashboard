interface TimeRangeSelectorPros {
    value: number;
    onChange: (days: number) => void;
}

function TimeRangeSelector({ value, onChange }: TimeRangeSelectorPros) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      <option value={1}>1 Day</option>
      <option value={7}>7 Days</option>
      <option value={30}>30 Days</option>
      <option value={365}>1 Year</option>
    </select>
  );
}

export default TimeRangeSelector;