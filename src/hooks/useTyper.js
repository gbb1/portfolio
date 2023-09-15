import { useState, useEffect, useRef } from 'react'

const useTyper = (text, status, rand = false) => {

  let L = text.length
	const [string, setString] = useState('');
	const [content, setContent] = useState(new Array(L).fill(' '));

  const indeces = Array(L).fill().map((_, index) => index + 1);
  indeces.sort(() => Math.random() - 0.5);

  let evens = []
  let odds = []
  let outIn = []
  for (let i = 0; i < text.length; i++) {
    if (text.length % 2 === 0) {
      if (i % 2 === 0) {
        outIn[i] = i
      } else {
        outIn[text.length - i] = i
      }
    } else {
      if (i % 2 === 0) {
        outIn[i] = i
      } else {
        outIn[text.length - i - 1] = i
      }
    }
  }

  const fillLettersOutIn = () => {
    let promises = []
    let count = 1
    let copy = [...content]

    while (outIn.length > 0) {
      let next = outIn.pop()

      let promise = new Promise((resolve) => {
        count++
        setTimeout(() => {
          copy[next] = text[next]
          setContent(copy)
          setString(copy.join(''))
          resolve()
        }, 30 * count)
      })
      promises.push(promise)
    }
    Promise.all(promises).then(() => console.log('done')).catch(err => err)
  }

  const fillLettersRand = () => {
    let promises = []
    let count = 1
    let copy = [...content]

    while (indeces.length > 0) {
      let next = indeces.pop()
      next = next - 1

      let promise = new Promise((resolve) => {
        count++
        setTimeout(() => {
          copy[next] = text[next]
          setContent(copy)
          setString(copy.join(''))
          resolve()
        }, 30 * count)
      })
      promises.push(promise)
    }
    Promise.all(promises).then(() => console.log('done')).catch(err => err)
  }


  const fillLetters = () => {
    let promises = []
    let index = 0
    while (index < text.length) {
      let save = index
      let promise = new Promise((resolve) => {
        setTimeout(() => {
          setString(curr => (curr + text[save]))
          resolve()
        }, 20 * index)
      })
      index++
      promises.push(promise)
    }
    Promise.all(promises).then(() => console.log('done')).catch(err => err)
  }



	useEffect(() => {
    // console.log(status)
    if (status) {
      if (rand) {
        fillLettersRand()
        // fillLettersOutIn()
      } else {
        fillLetters()
      }
    } else if (string.length > 0) {
      setString('')
      setContent(new Array(L).fill(' '))
    }

	}, [status]);


	return string;
}

export default useTyper;
