import React from 'react'
import Image from 'next/image'
import user1 from '../public/user1.jpg'
import user2 from '../public/user2.jpg'
import user3 from '../public/user3.jpg'
import user4 from '../public/user4.jpg'

const testimonials = () => {
  return (
    // <div className=' text-gray-50'>
    //   <div className=' min-w-full h-screen bg-[url("http://habrastorage.org/files/90a/010/3e8/90a0103e8ec749c4843ffdd8697b10e2.jpg")]'>
    //   apple
    //   </div>
    //   <Card name = "sam"/>
    // </div>
    <div className=' flex space-x-52 p-10 mt-32'>
      <div className=' w-52 h-auto bg-zinc-800 p-5 border-2 rounded-md shadow-xl'>
        <div className=' text-gray-100 inline-block w-40'>
          <Image src={user1} alt="user"  width={200} height={200}/>
          <h5>Amey</h5>
          <p> Very nice product</p>
          <ul className=' flex bg-slate-800 text-sm'>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M65.3244 26.949L76.4577 49.4575L78.3132 53.4913L82.347 54.0964L107.195 57.6864L89.5271 75.0317L86.5018 77.9764L87.2279 82.0102L91.4633 106.737L69.2372 95.0796L65.3244 93.4258L61.573 95.4023L39.3469 106.899L43.3807 82.1715L44.1067 78.1377L41.1217 75.0317L23.2924 57.4848L48.1405 53.8947L52.1743 53.2896L54.0298 49.2558L65.3244 26.949ZM65.3244 8.71631L46.9707 45.9078L5.94714 51.8375L35.6358 80.8L28.617 121.662L65.3244 102.381L102.032 121.662L95.0131 80.8L124.702 51.8778L83.6781 45.9078L65.3244 8.71631Z" fill="black"/></svg></li>
          </ul>
        </div>
      </div>

      <div className=' w-52 h-auto bg-zinc-800 p-5 border-2 rounded-md shadow-xl'>
        <div className=' text-gray-100 inline-block w-40'>
          <Image src={user3} alt="user"  width={200} height={200}/>
          <h5>Rad</h5>
          <p> Really impressive design</p>
          <ul className=' flex bg-slate-800 text-sm'>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M65.3244 26.949L76.4577 49.4575L78.3132 53.4913L82.347 54.0964L107.195 57.6864L89.5271 75.0317L86.5018 77.9764L87.2279 82.0102L91.4633 106.737L69.2372 95.0796L65.3244 93.4258L61.573 95.4023L39.3469 106.899L43.3807 82.1715L44.1067 78.1377L41.1217 75.0317L23.2924 57.4848L48.1405 53.8947L52.1743 53.2896L54.0298 49.2558L65.3244 26.949ZM65.3244 8.71631L46.9707 45.9078L5.94714 51.8375L35.6358 80.8L28.617 121.662L65.3244 102.381L102.032 121.662L95.0131 80.8L124.702 51.8778L83.6781 45.9078L65.3244 8.71631Z" fill="black"/></svg></li>
          </ul>
        </div>
      </div>

      <div className=' w-52 h-auto bg-zinc-800 p-5 border-2 rounded-md shadow-xl'>
        <div className=' text-gray-100 inline-block w-40'>
          <Image src={user2} alt="user"  width={200} height={200}/>
          <h5>Brad</h5>
          <p> Amazing product</p>
          <ul className=' flex bg-slate-800 text-sm'>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M65.3244 26.949L76.4577 49.4575L78.3132 53.4913L82.347 54.0964L107.195 57.6864L89.5271 75.0317L86.5018 77.9764L87.2279 82.0102L91.4633 106.737L69.2372 95.0796L65.3244 93.4258L61.573 95.4023L39.3469 106.899L43.3807 82.1715L44.1067 78.1377L41.1217 75.0317L23.2924 57.4848L48.1405 53.8947L52.1743 53.2896L54.0298 49.2558L65.3244 26.949ZM65.3244 8.71631L46.9707 45.9078L5.94714 51.8375L35.6358 80.8L28.617 121.662L65.3244 102.381L102.032 121.662L95.0131 80.8L124.702 51.8778L83.6781 45.9078L65.3244 8.71631Z" fill="black"/></svg></li>
          </ul>
        </div>
      </div>

      <div className=' w-52 h-auto bg-zinc-800 p-5 border-2 rounded-md shadow-xl'>
        <div className=' text-gray-100 inline-block w-40'>
          <Image src={user4} alt="user"  width={200} height={200}/>
          <h5>Justin</h5>
          <p> Good quality</p>
          <ul className=' flex bg-slate-800 text-sm'>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.5405 0L48.4054 48.4054H0L40.3378 80.6757L24.2027 129.081L64.5405 96.8108L104.878 129.081L88.7432 80.6757L129.081 48.4054H80.6757L64.5405 0Z" fill="black"/></svg></li>
            <li><svg width="30" height="30" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M65.3244 26.949L76.4577 49.4575L78.3132 53.4913L82.347 54.0964L107.195 57.6864L89.5271 75.0317L86.5018 77.9764L87.2279 82.0102L91.4633 106.737L69.2372 95.0796L65.3244 93.4258L61.573 95.4023L39.3469 106.899L43.3807 82.1715L44.1067 78.1377L41.1217 75.0317L23.2924 57.4848L48.1405 53.8947L52.1743 53.2896L54.0298 49.2558L65.3244 26.949ZM65.3244 8.71631L46.9707 45.9078L5.94714 51.8375L35.6358 80.8L28.617 121.662L65.3244 102.381L102.032 121.662L95.0131 80.8L124.702 51.8778L83.6781 45.9078L65.3244 8.71631Z" fill="black"/></svg></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default testimonials
