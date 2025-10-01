import { useEffect, useState } from 'react'

function ChatbotButton() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY < 80 || window.scrollY % 2 === 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button className={`chatbot ${isVisible ? 'chatbot--show' : 'chatbot--hide'}`} aria-label="Mở chatbot hỗ trợ">
      💬
    </button>
  )
}

export default ChatbotButton



