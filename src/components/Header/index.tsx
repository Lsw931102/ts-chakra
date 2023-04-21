import React from 'react'
import { Flex, Image, Text, Button } from '@chakra-ui/react'

import px2vw from '@/utils/px2vw'
import logo from '@/assets/images/logo.png'
import { formatAddress } from '@/utils'
import globalStore from '@/stores/global'
import { defaultWallt } from '@/assets/consts'
import { setLocalStorage } from '@/utils/storage'

const Header: React.FC = () => {
  const { isLogin } = globalStore()
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      h={{ base: px2vw(60), xl: '60px' }}
      paddingX="30px"
      bg="brand.900"
    >
      <Image
        alt="logo"
        src={logo}
        w={{ base: px2vw(131), xl: '131px' }}
        h={{ base: px2vw(20), xl: '20px' }}
      />
      {isLogin ? (
        <Text ml={{ base: px2vw(10), xl: '10px' }}>{formatAddress(defaultWallt)}</Text>
      ) : (
        <Button
          onClick={() => {
            globalStore.setState({
              isLogin: true,
            })
            setLocalStorage('isLogin', '1')
          }}
        >
          Connect Wallet
        </Button>
      )}
    </Flex>
  )
}

export default Header
