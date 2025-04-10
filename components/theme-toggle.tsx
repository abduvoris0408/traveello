'use client'

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
	const { setTheme, theme } = useTheme()
	const [mounted, setMounted] = useState(false)

	// Avoid hydration mismatch by only rendering after component is mounted
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<Button variant='ghost' size='icon' className='w-9 h-9 opacity-0' />
		)
	}

	return (
		<Button
			variant='ghost'
			size='icon'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='w-9 h-9 relative'
			aria-label='Toggle theme'
		>
			<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-black  dark:rotate-0 dark:scale-100' />
		</Button>
	)
}
