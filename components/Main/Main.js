import classes from './Main.module.css'

export default function Main(props){
  return(
    <div className={classes.container}>
      {props.children}
    </div>
  )
}