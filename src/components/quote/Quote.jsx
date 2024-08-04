import React from 'react'
import './quote.css'

function Quote() {
  return (
    <>
      <div className='quote'>
        <div className="top">
            <h6>Book a free Consultation.</h6>
            <h5>Get a Free Quote</h5>
        </div>
        <div className="bottom">
            <form>
                <input type="text" placeholder='Your Full Names' />
                <div>
                    <input type="text" placeholder='Your Phone Number' />
                    <input type="email" placeholder='Your Email Adress' />
                </div>
                <div>
                    <select>
                        <option value='ground'>Ground Water Management</option>

                        <option value="geotechinical">Geotechinical Studies & GIS</option>

                        <option value="esia">Solar Power</option>
                    </select>
                    <input type="text" placeholder='Project Location' />
                </div>
                <textarea name="msg" placeholder='Leave Your Message Here..'></textarea>
                <div className='btn'>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Quote
