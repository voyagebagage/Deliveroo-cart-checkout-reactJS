export default function Counter({
  count,
  index,
  handleClickMinus,
  handleClickPlus,
}) {
  return (
    <div>
      <input type="button" value="-" onClick={() => handleClickMinus(index)} />
      <span> {count} </span>
      <input type="button" value="+" onClick={() => handleClickPlus(index)} />
    </div>
  );
}
