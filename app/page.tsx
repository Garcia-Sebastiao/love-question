"use client"

import { useState } from "react"
import { Fredoka } from "next/font/google"

const fredoka = Fredoka({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export default function CuteLoveApp() {
  const [showResult, setShowResult] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [attempts, setAttempts] = useState(0)

  const moveNoButtonFarAway = () => {
    setAttempts((prev) => prev + 1)

    // Make the button jump to increasingly extreme positions
    const extremePositions = [
      { x: -200, y: -100 }, // Off screen top-left
      { x: window.innerWidth + 100, y: -50 }, // Off screen top-right
      { x: -150, y: window.innerHeight + 50 }, // Off screen bottom-left
      { x: window.innerWidth + 50, y: window.innerHeight + 100 }, // Off screen bottom-right
      { x: window.innerWidth / 2, y: -200 }, // Way off top
      { x: -300, y: window.innerHeight / 2 }, // Way off left
      { x: window.innerWidth + 200, y: window.innerHeight / 2 }, // Way off right
      { x: window.innerWidth / 2, y: window.innerHeight + 300 }, // Way off bottom
    ]

    const randomPosition = extremePositions[Math.floor(Math.random() * extremePositions.length)]
    setNoButtonPosition(randomPosition)
  }

  const handleYesClick = () => {
    setShowResult(true)
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-300 via-pink-200 to-purple-300 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Celebration Hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                color: ["#ff69b4", "#ff1493", "#dc143c", "#ff6347"][Math.floor(Math.random() * 4)],
              }}
            >
              {["💖", "💕", "💗", "💘", "❤️", "💝"][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>

        <div className="text-center z-10 bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-pink-200">
          <h1 className={`${fredoka.className} text-6xl md:text-8xl text-pink-600 mb-6 font-bold`}>Sabia! 😍✨</h1>
          <p className={`${fredoka.className} text-2xl md:text-3xl text-purple-600 mb-8 font-medium`}>
            Tu és o meu amor! 💕
          </p>
          <div className="relative">
            <img
              src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
              alt="Cute love celebration"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl mx-auto shadow-lg"
            />
            <div className="absolute -top-4 -right-4 text-6xl animate-spin">💖</div>
            <div className="absolute -bottom-4 -left-4 text-5xl animate-pulse">✨</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-rose-200 to-purple-300 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${1.5 + Math.random() * 2}rem`,
              animationDelay: `${Math.random() * 3}s`,
              color: ["#ff69b4", "#ff1493", "#da70d6", "#dda0dd"][Math.floor(Math.random() * 4)],
            }}
          >
            {["💕", "💖", "🌸", "✨", "💜", "🦋"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="text-center z-10 max-w-lg mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-pink-200 mb-8">
          <h1 className={`${fredoka.className} text-5xl md:text-7xl text-pink-600 mb-4 font-bold`}>
            Tu gostas de mim? 🥺
          </h1>
          <p className={`${fredoka.className} text-xl text-purple-500 font-medium`}>Responde com sinceridade... 💭</p>
        </div>

        <div className="relative h-32">
          {/* Yes Button - Always in center */}
          <button
            onClick={handleYesClick}
            className={`${fredoka.className} absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-16 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white text-2xl font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white z-20`}
          >
            Sim! 💖
          </button>

          {/* No Button - Moves very far away */}
          <button
            onMouseEnter={moveNoButtonFarAway}
            onMouseDown={moveNoButtonFarAway}
            onClick={moveNoButtonFarAway}
            className={`${fredoka.className} fixed w-32 h-14 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-red-400 hover:to-red-500 text-white text-xl font-bold rounded-full shadow-lg transition-all duration-700 ease-out border-4 border-white z-10`}
            style={{
              left: `calc(50% + ${noButtonPosition.x}px)`,
              top: `calc(50% + ${noButtonPosition.y}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            Não 😢
          </button>
        </div>

        {attempts > 0 && (
          <div className={`${fredoka.className} mt-8 text-pink-600 text-lg font-medium animate-bounce`}>
            {attempts === 1 && "Ei! Volta aqui! 😅"}
            {attempts === 2 && "Para onde vais? 🤭"}
            {attempts === 3 && "Não consegues fugir! 😂"}
            {attempts >= 4 && "Desiste! Só há uma resposta certa! 💕"}
          </div>
        )}

        <div className="mt-8 flex justify-center space-x-4">
          <div className="animate-bounce text-3xl">🌸</div>
          <div className="animate-pulse text-3xl">💕</div>
          <div className="animate-bounce text-3xl" style={{ animationDelay: "0.5s" }}>
            🌸
          </div>
        </div>
      </div>
    </div>
  )
}
