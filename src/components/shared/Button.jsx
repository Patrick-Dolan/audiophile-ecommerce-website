import PropTypes from 'prop-types'

function Button({ text, type, onClick, variant = "primary"}) {
  let styles;

  switch (variant) {
    case "primary":
      styles = "text-white bg-primary border border-transparent hover:bg-primary-light"
      break
    case "secondary":
      styles = "text-black bg-white border border-black border-inset hover:bg-black hover:text-white"
      break
    default:
      styles = "text-white bg-primary"
  }

  return (
    <button 
      className={`uppercase tracking-1px font-bold min-w-40 text-13 py-4 ${styles}`} 
      type={type} 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
}

export default Button