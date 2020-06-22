import React, { useState } from 'react'
import { post } from 'axios'

import { CONTACT_API, CONTACT_KEY } from 'config'
import FormError from 'components/sections/contactUs/formError'
import Success from 'components/utils/success'
import Alert from 'components/utils/alert'
import Loader from 'components/utils/pageLoader'

export default function ContactUsForm () {
  const [loading, setLoading] = useState(false)
  const [reqError, setReqError] = useState(null)
  const [name, setName] = useState(null)
  const [msg, setMsg] = useState(null)
  const [email, setEmail] = useState(null)
  const [res, setResponse] = useState(null)
  const [error, setError] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (name.length >= 0 && msg.length >= 0 && email.indexOf('@') > -1) {
      post(CONTACT_API, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        email,
        msg,
        name,
        key: CONTACT_KEY
      }).then((res) => {
        if (res.data.status === 'sent') {
          setLoading(false)
          setResponse(res.data)
        } else {
          setLoading(false)
          setReqError(res.data.status)
        }
      }).catch((error) => {
        setLoading(false)
        setReqError(error.message)
      })
    } else {
      setLoading(false)
      setError('Not all required information entered.')
    }
  }

  return (
    <section className="text-gray-700 body-font relative">
      <a name="contact"></a>
      <div className="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Delhi&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
          <div className="bg-white relative flex flex-wrap py-6">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">ADDRESS</h2>
              <p className="leading-relaxed">New Delhi, Delhi, India</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed">adityakiitdelhi@gmail.com</a>
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">PHONE</h2>
              <p className="leading-relaxed">+91 9650093751</p>
              <p className="leading-relaxed"><a href="https://wa.me/9650093751">+91 9650093751</a></p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
          { loading ? <Loader /> : (reqError ? <Alert text={reqError} /> :
            (res && res.status === 'sent' ? <Success text="Thank you for your message! I'll respond ASAP." /> : <>
              <p className="leading-relaxed mb-5 text-gray-600">Just drop a message:</p>
              <form onSubmit={onSubmit}>
                <p><input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Name" type="text" onChange={(e) => setName(e.target.value)} /></p>
                <p><input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="text" onChange={(e) => setEmail(e.target.value)} /></p>
                <p><textarea className="w-full bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message" onChange={(e) => setMsg(e.target.value)}></textarea></p>
                <p><button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" disabled={loading}><a href="mailto:adityakiitdelhi@gmail.com?">Send</a></button></p>
                <FormError name="name" error={error} />
                
              </form>
              <p className="text-xs text-gray-500 mt-3">We usually responding within 24 hours.</p>
            </>
            ))}
        </div>
      </div>
    </section>
  )
}
