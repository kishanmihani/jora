import React from 'react'

 function count({text,count}) {
  console.log(`Render ${count}`)
  return (
    <div>{text} - {count}</div>
  )
}
export default React.memo(count)
