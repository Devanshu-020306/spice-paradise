export default function Logo({ className = "text-4xl" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="24" fill="#FF6B35" stroke="#FFD700" strokeWidth="2"/>
          <path d="M25 10 L30 20 L40 22 L32 30 L34 40 L25 35 L16 40 L18 30 L10 22 L20 20 Z" fill="#FFD700"/>
          <circle cx="25" cy="25" r="8" fill="#C1121F"/>
          <circle cx="25" cy="25" r="4" fill="#FFD700"/>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-bold text-primary text-2xl">Spice Paradise</span>
        <span className="text-xs text-secondary font-medium">Authentic Indian Cuisine</span>
      </div>
    </div>
  )
}
