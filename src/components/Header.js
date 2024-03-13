import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onClick, showForm }) => {
  return (
    <header className = 'header'>
        <h1>{title}</h1>
        <Button color={showForm ? 'red' : 'green'} text={showForm ? "Close" : "Add"} onClick = {onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string
}

// const onClick = (e) => {
//   console.log(e)
// }
// class Header extends React.Component {
//     render() {
//       return(
//         <header>
//            <h1>Task Tracker</h1>
//         </header>
//       )
//     }
//   }
export default Header
