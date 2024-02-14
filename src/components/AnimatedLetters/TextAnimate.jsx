import  './TextAnimate.scss'

const TextAnimate = ({ letterClass, stringArray, idx }) => {
    return (
      <span>
        {stringArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))}
      </span>
    )
  }
 
export default TextAnimate;