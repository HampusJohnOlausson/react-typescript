import React, { CSSProperties } from 'react'

const Main = () => {
    return (
        <div style={mainStyle}>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quos, nulla dicta commodi amet, laboriosam, suscipit quisquam exercitationem voluptatem necessitatibus nam quas quaerat corrupti illo ratione saepe qui distinctio error?</p>
        </div>
    )
}

export default Main

const mainStyle: CSSProperties = {
    height: '90vh',
    padding: '2rem'
}
