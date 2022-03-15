export default function Button(props){
  const { children, classes, onClick } = props;
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}