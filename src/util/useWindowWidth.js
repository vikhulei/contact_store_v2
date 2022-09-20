import {useState, useEffect} from "react"

const useWindowWidth = () => {

const [desktop, setDesktop] = useState(
    window.innerWidth > 1000 ? true : false
  )

  const checkForDesktop = () => {
    if (window.innerWidth > 1000) {
      setDesktop(true)
    } else {
      setDesktop(false)
    }
  }

  useEffect(() => {
    checkForDesktop()
    window.addEventListener("resize", checkForDesktop)
    return () => { window.removeEventListener("resize", checkForDesktop) }
  }, [])

  return [desktop]

}

export default useWindowWidth