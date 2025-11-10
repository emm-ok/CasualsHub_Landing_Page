
const Button = ({ label, fontFamily, backgroundColor, textColor, borderColor, borderRadius, size, center }) => {
  return (
    <button
      className={`${fontFamily ? fontFamily : 'font-montserrat text-xl xl:text-xl'} ${size || 'px-7 py-4'} ${borderRadius || 'rounded-full border'} leading-none ${backgroundColor || 'bg-gray-800 hover:bg-gray-700'} ${textColor || 'text-white'} ${borderColor || 'border-gray-800'} transition duration-300 ${center || ''}`}
    >
      {label}
    </button>
  );
}

export default Button;




// const Button = ({ label, fontFamily, backgroundColor, textColor, borderColor, borderRadius, size, center }) => {
//   return (
//     <button className={`${fontFamily ? `${fontFamily}` :'font-montserrat text-xl xl:text-xl '} ${size ? `${size}` : 'px-7 py-4'} ${borderRadius ? `${borderRadius}`: 'rounded-full border'} leading-none ${backgroundColor 
//         ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-stone-200 text-amber-800` 
//         : 'bg-amber-600 hover:bg-amber-500 border-amber-500 text-white'} transition duration-300 ${center ? `${center}` : ''} `}>{label}</button>
//   )
// }

// export default Button