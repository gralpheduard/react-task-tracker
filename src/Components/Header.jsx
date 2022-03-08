import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd, buttonText}) => {

  return (
    <div>
        <h1 className = 'header'>{title}</h1>
        <Button color = {buttonText ? 'red' : 'green'} text={buttonText ? 'Close' : 'Add'} onClick={onAdd}/>
    </div>
  )
}

Header.defaultProps ={
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header