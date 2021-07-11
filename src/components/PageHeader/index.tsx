import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, Text, Flex, useModal, TuneIcon, HistoryIcon } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import SettingsModal from './SettingsModal'
import RecentTransactionsModal from './RecentTransactionsModal'

interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

const StyledPageHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 24px;
`

const Details = styled.div`
  flex: 1;
`

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  const TranslateString = useI18n()
  const [onPresentSettings] = useModal(<SettingsModal translateString={TranslateString} />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal translateString={TranslateString} />)

  return (
    <StyledPageHeader>
      <Flex alignItems="center">
        <Details>
          <Heading color="#102648" mb="8px">
            {title}
          </Heading>
          {description && (
            <Text color="#102648" fontSize="14px">
              {description}
            </Text>
          )}
        </Details>
        <IconButton variant="text" onClick={onPresentSettings} title={TranslateString(1200, 'Settings')}>
          <TuneIcon width="24px" color="#007bff" />
        </IconButton>
        <IconButton
          variant="text"
          onClick={onPresentRecentTransactions}
          title={TranslateString(1202, 'Recent transactions')}
        >
          <HistoryIcon width="24px" color="#007bff" />
        </IconButton>
      </Flex>
      {children && (
        <Text color="#102648" mt="16px">
          {children}
        </Text>
      )}
    </StyledPageHeader>
  )
}

export default PageHeader
