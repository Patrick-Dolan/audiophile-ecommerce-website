import PropTypes from 'prop-types';

function ContentWrapper({ children }) {
  return (
    <div className="mx-6 md:mx-10">
      {children}
    </div>
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentWrapper