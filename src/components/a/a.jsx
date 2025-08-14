import React, { useState, useEffect} from 'react'

function A() {

    useEffect(() => {
        alert("อาจจะยังน้า ลองอ่านดีๆสิ")
    }, [])

  return (
    <>
        <h1>.</h1>
    </>
  )
}

export default A