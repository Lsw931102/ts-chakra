// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

import px2vw from '@/utils/px2vw'
import styles from './styles'

// 2. Extend the theme to include custom colors, fonts, etc

const breakpoints = {
	sm: '640px',
	md: '768px',
	lg: '960px',
	xl: '1024px',
}

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
}
const textStyles = {
	'12': {
		fontSize: {
			base: px2vw(12),
			md: '12px',
		},
		lineHeight: {
			base: px2vw(12),
			md: '12px',
		},
	},
	'14': {
		fontSize: {
			base: px2vw(14),
			md: '14px',
		},
		lineHeight: {
			base: px2vw(14),
			md: '14px',
		},
	},
	'16': {
		fontSize: {
			base: px2vw(16),
			md: '16px',
		},
		lineHeight: {
			base: px2vw(16),
			md: '16px',
		},
	},
	'18': {
		fontSize: {
			base: px2vw(18),
			md: '18px',
		},
		lineHeight: {
			base: px2vw(18),
			md: '18px',
		},
	},
	'20': {
		fontSize: {
			base: px2vw(20),
			md: '20px',
		},
		lineHeight: {
			base: px2vw(20),
			md: '20px',
		},
	},
	'22': {
		fontSize: {
			base: px2vw(22),
			md: '22px',
		},
		lineHeight: {
			base: px2vw(22),
			md: '22px',
		},
	},
	'24': {
		fontSize: {
			base: px2vw(24),
			md: '24px',
		},
		lineHeight: {
			base: px2vw(24),
			md: '24px',
		},
	},
	'30': {
		fontSize: {
			base: px2vw(30),
			md: '30px',
		},
		lineHeight: {
			base: px2vw(30),
			md: '30px',
		},
	},
	'36': {
		fontSize: {
			base: px2vw(36),
			md: '36px',
		},
		lineHeight: {
			base: px2vw(36),
			md: '36px',
		},
	},
}

const radii = {
	none: '0',
	sm: '5px',
	md: '10px',
	sxl: '12px',
	xl: '16px',
	lg: '18px',
	llg: '20px',
	lllg: '32px',
	round: '50%',
	select: '15px',
	input: '4px',
}

export const theme = extendTheme({
	colors,
	breakpoints,
	textStyles,
	radii,
	fonts: {
		body: '"PingFang SC", "Source Han Sans CN", "Microsoft Yahei"',
	},
	sizes: {
		xl: '1080px',
	},
	styles,
})
