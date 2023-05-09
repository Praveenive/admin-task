import React from 'react'
import Base from '../Base/Base'

function Error() {
  return (
    <Base>
    <div className='error'>
    <img src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp" alt="error"/>
   <br/><p>It looks like you found a glitch in the matrix.</p> <a href='http://localhost:3000'>Back to Dashboard</a>
    </div>
    
    </Base>
  )
}

export default Error