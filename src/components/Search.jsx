import React, {useState} from 'react'

const Search = ({search}) => {

    const [text, setText] = useState('')

    const onSearch = (q) => {
        setText(q)
        search(q)
    }

  return (
    <section className='search h-24 w-full flex justify-center items-center'>
        <form className='w-4/5'>
            <input type="text"
            className='form-control w-full p-3 placeholder:italic rounded-xl shadow-xl border-slate-300 focus:outline-none focus:ring-1 focus:border-red-400 focus:ring-red-600' 
            placeholder='Find a character' 
            autoFocus 
            onChange={(e) => onSearch(e.target.value)}
            value={text}/>
        </form>
    </section>
  )
}

export default Search