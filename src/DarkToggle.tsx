import { useColorMode, useColorModeValue } from "@hope-ui/solid"

function DarkToggle() {
	const { toggleColorMode } = useColorMode()
	const icon = useColorModeValue("i-carbon-sun text-sky-500", "i-carbon-moon text-sky-500")
  
	return (
        <button class={icon()} onClick={toggleColorMode}>
        </button>
        
	)
	
}

export default DarkToggle