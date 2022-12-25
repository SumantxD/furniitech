import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' fixed bottom-0'>
      <div className="container">
        <div className=' bg-white border-2 w-screen justify-around flex p-14'>
          <div>
            <h3 className=' text-2xl mb-2 font-semibold text-slate-700'>Products</h3>
            <ul className=' text-slate-500'>
              <li><Link href={"./"}>Sofa</Link></li>
              <li><Link href={"./"}>Armchair</Link></li>
              <li><Link href={"./"}>Table</Link></li>
            </ul>
          </div>
          <div>
            <h3 className=' text-2xl mb-2 font-semibold text-slate-700'>About</h3>
            <ul className='text-slate-500'>
              <li><Link href={"./"}>Company</Link></li>
              <li><Link href={"./"}>Team</Link></li>
              <li><Link href={"./"}>Legacy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className=' text-2xl mb-2 font-semibold text-slate-700'>More</h3>
            <ul className=' text-slate-500'>
              <li><Link href={"./"}>Production</Link></li>
              <li><Link href={"./"}>Factory</Link></li>
              <li><Link href={"./"}>Designs</Link></li>
            </ul>
          </div>
          <div className=' flex'>
            <Link className=' p-2' href={"./"}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="50" height="50"viewBox="0 0 50 50"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 26.580078 10 C 23.92822 10 21.917076 10.867217 20.677734 12.400391 C 19.438393 13.933564 19 15.981046 19 18.226562 L 19 20 L 17 20 A 1.0001 1.0001 0 0 0 16 21 L 16 26 A 1.0001 1.0001 0 0 0 17 27 L 19 27 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 27 L 31 27 A 1.0001 1.0001 0 0 0 31.980469 26.195312 L 32.980469 21.195312 A 1.0001 1.0001 0 0 0 32 20 L 27 20 L 27 17.806641 C 27 17.321617 27.03137 17.325614 27.171875 17.234375 C 27.312385 17.143136 27.820197 17 28.710938 17 L 32 17 A 1.0001 1.0001 0 0 0 33 16 L 33 12 A 1.0001 1.0001 0 0 0 32.335938 11.058594 C 32.335938 11.058594 29.456337 10 26.580078 10 z M 26.580078 12 C 28.472499 12 30.227501 12.510447 31 12.751953 L 31 15 L 28.710938 15 C 27.663677 15 26.813974 15.08458 26.083984 15.558594 C 25.353995 16.032605 25 16.940664 25 17.806641 L 25 21 A 1.0001 1.0001 0 0 0 26 22 L 30.779297 22 L 30.179688 25 L 26 25 A 1.0001 1.0001 0 0 0 25 26 L 25 38 L 21 38 L 21 26 A 1.0001 1.0001 0 0 0 20 25 L 18 25 L 18 22 L 20 22 A 1.0001 1.0001 0 0 0 21 21 L 21 18.226562 C 21 16.24708 21.405014 14.681779 22.232422 13.658203 C 23.05983 12.634627 24.336936 12 26.580078 12 z"></path></svg></Link>
            <Link className=' p-2' href={"./"}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="50" height="50"viewBox="0 0 50 50"><path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"></path></svg></Link>
            <Link className=' p-2' href={"./"}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="50" height="50"viewBox="0 0 50 50"><path d="M 24.5625 3.34375 C 23.578125 3.34375 21.488281 3.496094 19.21875 4.5 C 16.949219 5.503906 14.496094 7.417969 12.96875 10.84375 C 11.816406 13.425781 12.15625 17.183594 12.34375 20.1875 C 12.359375 20.410156 12.363281 20.601563 12.375 20.8125 C 12.28125 20.855469 12.363281 20.875 12.0625 20.875 C 11.609375 20.875 11.003906 20.726563 10.25 20.375 C 9.949219 20.234375 9.628906 20.1875 9.3125 20.1875 C 8.738281 20.1875 8.175781 20.359375 7.6875 20.65625 C 7.199219 20.953125 6.730469 21.414063 6.59375 22.125 C 6.511719 22.5625 6.605469 23.21875 7.03125 23.75 C 7.457031 24.28125 8.117188 24.714844 9.15625 25.125 C 9.382813 25.214844 9.613281 25.300781 9.84375 25.375 C 10.3125 25.523438 10.863281 25.683594 11.28125 25.90625 C 11.699219 26.128906 11.945313 26.390625 12.03125 26.59375 C 12.125 26.8125 12.152344 27.152344 11.84375 27.78125 C 11.832031 27.800781 11.820313 27.824219 11.8125 27.84375 C 11.808594 27.859375 11.792969 27.871094 11.78125 27.90625 C 11.65625 28.1875 8.917969 34.15625 3.21875 35.09375 C 2.484375 35.214844 1.960938 35.855469 2 36.59375 C 2.011719 36.808594 2.082031 37.039063 2.15625 37.21875 C 2.433594 37.871094 3.027344 38.351563 4 38.78125 C 4.898438 39.179688 6.296875 39.53125 8.15625 39.84375 C 8.203125 39.972656 8.265625 40.214844 8.34375 40.5625 C 8.34375 40.570313 8.339844 40.585938 8.34375 40.59375 C 8.414063 40.917969 8.480469 41.273438 8.59375 41.65625 C 8.707031 42.046875 8.996094 42.429688 9.34375 42.625 C 9.691406 42.820313 10.019531 42.84375 10.21875 42.84375 C 10.632813 42.84375 10.976563 42.757813 11.34375 42.6875 C 11.949219 42.570313 12.679688 42.4375 13.625 42.4375 C 14.148438 42.4375 14.695313 42.472656 15.25 42.5625 C 16.199219 42.71875 17.132813 43.335938 18.25 44.125 C 19.867188 45.269531 21.808594 46.65625 24.71875 46.65625 C 24.769531 46.65625 24.824219 46.628906 24.875 46.625 C 24.925781 46.628906 24.980469 46.625 25.03125 46.625 C 25.113281 46.628906 25.199219 46.65625 25.28125 46.65625 C 28.191406 46.65625 30.128906 45.269531 31.75 44.125 C 32.863281 43.335938 33.800781 42.71875 34.75 42.5625 C 35.304688 42.472656 35.851563 42.4375 36.375 42.4375 C 37.289063 42.4375 38.011719 42.554688 38.6875 42.6875 C 39.117188 42.773438 39.445313 42.8125 39.78125 42.8125 L 39.84375 42.8125 C 40.152344 42.8125 40.507813 42.726563 40.8125 42.5 C 41.117188 42.273438 41.320313 41.949219 41.40625 41.65625 C 41.519531 41.273438 41.582031 40.90625 41.65625 40.5625 C 41.738281 40.179688 41.800781 39.972656 41.84375 39.84375 C 43.703125 39.53125 45.101563 39.179688 46 38.78125 C 46.972656 38.351563 47.566406 37.867188 47.84375 37.21875 C 47.925781 37.03125 47.988281 36.808594 48 36.59375 C 48.039063 35.859375 47.511719 35.214844 46.78125 35.09375 C 43.90625 34.621094 41.796875 32.890625 40.375 31.21875 C 38.960938 29.554688 38.257813 27.964844 38.21875 27.875 C 38.21875 27.863281 38.21875 27.855469 38.21875 27.84375 C 38.210938 27.824219 38.199219 27.800781 38.1875 27.78125 C 37.875 27.152344 37.875 26.816406 37.96875 26.59375 C 38.054688 26.390625 38.300781 26.128906 38.71875 25.90625 C 39.136719 25.683594 39.683594 25.523438 40.15625 25.375 C 40.390625 25.300781 40.625 25.210938 40.84375 25.125 C 41.753906 24.765625 42.378906 24.390625 42.8125 23.9375 C 43.246094 23.484375 43.445313 22.921875 43.4375 22.4375 C 43.417969 21.414063 42.65625 20.734375 41.78125 20.40625 L 41.75 20.375 C 41.742188 20.371094 41.726563 20.378906 41.71875 20.375 C 41.359375 20.230469 40.980469 20.15625 40.59375 20.15625 C 40.332031 20.15625 39.96875 20.167969 39.53125 20.375 C 38.851563 20.695313 38.28125 20.851563 37.84375 20.875 C 37.816406 20.875 37.839844 20.875 37.8125 20.875 C 37.785156 20.875 37.804688 20.878906 37.78125 20.875 C 37.652344 20.859375 37.691406 20.835938 37.625 20.8125 C 37.636719 20.640625 37.644531 20.488281 37.65625 20.3125 L 37.65625 20.1875 C 37.847656 17.183594 38.183594 13.429688 37.03125 10.84375 C 35.503906 7.417969 33.054688 5.472656 30.78125 4.46875 C 28.507813 3.464844 26.425781 3.34375 25.4375 3.34375 L 25.34375 3.34375 C 25.332031 3.34375 25.324219 3.34375 25.3125 3.34375 Z M 24.5625 5.34375 L 25.4375 5.34375 C 26.238281 5.34375 28.054688 5.46875 29.96875 6.3125 C 31.882813 7.15625 33.898438 8.691406 35.21875 11.65625 C 35.96875 13.335938 35.847656 17.0625 35.65625 20.0625 L 35.65625 20.1875 C 35.628906 20.605469 35.582031 21.011719 35.5625 21.40625 C 35.554688 21.6875 35.667969 21.960938 35.875 22.15625 C 36.03125 22.316406 36.6875 22.832031 37.78125 22.875 C 37.792969 22.875 37.800781 22.875 37.8125 22.875 C 37.824219 22.875 37.832031 22.875 37.84375 22.875 C 38.652344 22.84375 39.5 22.597656 40.375 22.1875 C 40.398438 22.175781 40.507813 22.15625 40.59375 22.15625 C 40.71875 22.15625 40.882813 22.1875 40.96875 22.21875 C 40.976563 22.222656 40.992188 22.214844 41 22.21875 C 41.019531 22.230469 41.042969 22.242188 41.0625 22.25 C 41.296875 22.332031 41.40625 22.425781 41.4375 22.46875 C 41.445313 22.476563 41.433594 22.496094 41.4375 22.5 C 41.425781 22.519531 41.414063 22.519531 41.375 22.5625 C 41.230469 22.714844 40.832031 22.988281 40.09375 23.28125 C 39.972656 23.328125 39.789063 23.398438 39.5625 23.46875 C 39.089844 23.617188 38.417969 23.820313 37.78125 24.15625 C 37.144531 24.492188 36.472656 24.988281 36.125 25.8125 C 35.753906 26.683594 35.910156 27.640625 36.34375 28.5625 C 36.347656 28.578125 36.339844 28.582031 36.34375 28.59375 C 36.359375 28.636719 36.375 28.660156 36.375 28.65625 C 36.464844 28.863281 37.222656 30.628906 38.84375 32.53125 C 40.300781 34.242188 42.515625 36.011719 45.46875 36.78125 C 45.34375 36.863281 45.429688 36.859375 45.1875 36.96875 C 44.46875 37.285156 43.234375 37.625 41.21875 37.9375 C 40.648438 38.023438 40.222656 38.5625 40.0625 38.9375 C 39.902344 39.3125 39.820313 39.683594 39.71875 40.15625 C 39.671875 40.375 39.613281 40.574219 39.5625 40.78125 C 39.425781 40.769531 39.3125 40.769531 39.0625 40.71875 C 38.335938 40.578125 37.457031 40.4375 36.375 40.4375 C 35.734375 40.4375 35.09375 40.484375 34.4375 40.59375 C 32.902344 40.851563 31.707031 41.710938 30.59375 42.5 C 28.96875 43.644531 27.585938 44.65625 25.28125 44.65625 C 25.1875 44.65625 25.09375 44.660156 25 44.65625 C 24.957031 44.652344 24.917969 44.652344 24.875 44.65625 C 24.835938 44.660156 24.765625 44.65625 24.71875 44.65625 C 22.414063 44.65625 21.023438 43.644531 19.40625 42.5 C 18.289063 41.710938 17.097656 40.847656 15.5625 40.59375 C 14.90625 40.484375 14.265625 40.4375 13.625 40.4375 C 12.472656 40.4375 11.542969 40.601563 10.9375 40.71875 C 10.695313 40.765625 10.605469 40.792969 10.46875 40.8125 C 10.414063 40.59375 10.332031 40.386719 10.28125 40.15625 C 10.1875 39.726563 10.125 39.347656 9.96875 38.96875 C 9.890625 38.78125 9.78125 38.574219 9.59375 38.375 C 9.40625 38.175781 9.128906 38.015625 8.8125 37.96875 C 6.800781 37.65625 5.53125 37.285156 4.8125 36.96875 C 4.5625 36.859375 4.65625 36.867188 4.53125 36.78125 C 10.761719 35.171875 13.472656 29.007813 13.625 28.65625 C 13.636719 28.632813 13.644531 28.617188 13.65625 28.59375 C 13.660156 28.582031 13.652344 28.578125 13.65625 28.5625 C 14.089844 27.640625 14.246094 26.683594 13.875 25.8125 C 13.523438 24.988281 12.855469 24.492188 12.21875 24.15625 C 11.582031 23.820313 10.941406 23.617188 10.46875 23.46875 C 10.238281 23.394531 10.023438 23.328125 9.90625 23.28125 C 9.066406 22.949219 8.699219 22.632813 8.59375 22.5 C 8.59375 22.519531 8.570313 22.433594 8.71875 22.34375 C 8.882813 22.246094 9.171875 22.1875 9.3125 22.1875 C 9.390625 22.1875 9.386719 22.191406 9.375 22.1875 C 10.3125 22.625 11.203125 22.875 12.0625 22.875 C 13.25 22.875 13.960938 22.359375 14.15625 22.15625 C 14.351563 21.957031 14.453125 21.683594 14.4375 21.40625 C 14.414063 20.96875 14.371094 20.523438 14.34375 20.0625 C 14.15625 17.058594 14.03125 13.335938 14.78125 11.65625 C 16.101563 8.695313 18.089844 7.15625 20 6.3125 C 21.910156 5.46875 23.761719 5.34375 24.5625 5.34375 Z"></path></svg></Link>
            <Link className=' p-2' href={"./"}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="50" height="50"viewBox="0 0 50 50"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path></svg></Link>
            <p className='text-slate-500 mt-5'>FurniTech © 2022</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
