import PropTypes from 'prop-types'

export default function Section({ title, children }) {
    return (
        <div>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    )
}

//усли title есть то рендери, если нет то нет
// children это дети


Section.propTypes = {
    title: PropTypes.string
}