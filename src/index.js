import { useState, useEffect } from 'react';

const use2137 = (callback = () => console.log('To to papiezowa liczba')) => {
  const [keys, setKeys] = useState([])

  useEffect(() => {
    window.addEventListener('keydown', downHandler, { passive: true })
    return () => {
      window.removeEventListener('keydown', downHandler)
    };
  }, [])

  useEffect(() => {
    if (keys.join('') === '2137') {
      callback()
      setKeys([])
    }
  }, [callback, keys])

  const downHandler = e => {
    let key
    switch (e.code) {
      case 'Digit2':
        key = '2';
        break
      case 'Digit1':
        key = '1';
        break
      case 'Digit3':
        key = '3';
        break
      case 'Digit7':
        key = '7';
        break
      default:
        key = null
        break;
    }

    if (key) {
      setKeys(prevState =>
        prevState.length >= 4
          ? prevState.concat(key).slice(1, 5)
          : prevState.concat(key)
      )
    } else {
      setKeys([])
    }
  }
}

export default use2137
