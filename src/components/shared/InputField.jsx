import PropTypes from 'prop-types'

function InputField({ label, name, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="text-15 font-bold">{label}</label>
      <input
        id={label}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-4 border border-opacity-50 rounded-lg focus:outline-none focus:border-primary cursor-pointer"
      />
    </div>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputField