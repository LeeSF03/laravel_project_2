import React from 'react'

function WlcHeader() {
  $(function () {
    $("#wlcHeader, #subHeader, #upperHeader").hide().fadeIn("slow");
  });

  return (
    <div>
      <div id='upperHeader' className='display-4 text-center'>Hello!</div>
      <div id='wlcHeader' className='display-1 text-center'>Welcome to My Website</div>
      <div id='subHeader' className='display-5 text-center'>Log In to Know More About Me</div>
    </div>

  )
}

export default WlcHeader