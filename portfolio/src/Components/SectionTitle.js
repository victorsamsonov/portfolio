import React from 'react'

const SectionTitle = ({title, bg, color='black'}) => {

    return (
        <div
          className={`section-bg ${bg}`}
        >
          <text className={`section-title ${color}`}>{title}</text>
        </div>
    )
}

export default SectionTitle