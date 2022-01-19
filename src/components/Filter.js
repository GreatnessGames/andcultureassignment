import React, { useState } from 'react'

const Filter = ({getFilter}) => {
    const [filter, setFilter] = useState('')
    const onChange = (q) => {
        setFilter(q)
        getFilter(q)
    }

    return(
        <section className='query'>
            <form>
                <input
                type = 'text'
                className = 'form-control'
                placeholder='Filter locations'
                value = {filter}
                onChange = {(e) => onChange(e.target.value)}
                autoFocus
                />
            </form>
        </section>
    )
}

export default Filter