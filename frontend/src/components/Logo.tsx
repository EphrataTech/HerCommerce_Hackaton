interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12', 
    lg: 'h-16'
  }
  
  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/LOGO2.png"
        alt="AdeyBiz Logo"
        className={`${sizeClasses[size]} object-cover rounded-lg shadow-sm`}
      />
      <span className={`${textSizes[size]} font-bold text-primary-black`}>AdeyBiz</span>
    </div>
  )
}

export default Logo