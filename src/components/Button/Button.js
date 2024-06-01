import "./Button.css"
 const PrimaryButton = (props) => {
  return (
<div className=".main-button">

<a href='#'>{props.children}</a>

</div>          )
}

const SecoundButton = (props) => {
    return (
<div className=".main-button">

<a href='#'>{props.children}</a>

</div>      

)
  }

export default PrimaryButton
export  {SecoundButton}