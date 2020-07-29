import React from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import { THEME } from '../theme/theme'

export const NavIconTemplate = props => (
  <HeaderButton {...props}
                iconSize={24}
                IconComponent={ Ionicons }
                color={ Platform.OS === 'android' ?
                        THEME.TEXT_SHINE_COLOR :
                        THEME.DRAFT_COLOR} />
)
