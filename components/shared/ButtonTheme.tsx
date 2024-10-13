"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from '@/components/ui/button';


const ButtonThemes = () => {
  const { theme, setTheme } = useTheme()
  const  toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
   
      <Button variant="outline" size="icon" onClick={toggleTheme}  className="flex justify-center border-none">
        <Moon className="h-6 w-6  scale-100 dark:scale-0" />
        <Sun className="h-6 w-6 scale-0 dark:scale-100" />    
      </Button>
    
  )
}
export default ButtonThemes