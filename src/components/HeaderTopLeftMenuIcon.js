import React from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import { THEME } from '../theme/theme'

export const HeaderTopLeftMenuIcon = props => (
  <HeaderButton {...props}
                iconSize={24}
                iconComponent={ Ionicons }
                color={ Platform.OS === 'android' ?
                        THEME.TEXT_SHINE_COLOR :
                        THEME.DRAFT_COLOR} />
)
