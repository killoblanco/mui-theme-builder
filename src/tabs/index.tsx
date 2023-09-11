import { Tab, Tabs } from '@mui/material'
import { Icon } from '../components/icon'
import { useState } from 'react'

export const AppTabs = () => {
  const [value, setValue] = useState(0)

  const tabs = [
    { label: 'Colors', icon: 'tabler:color-swatch' },
    { label: 'Typography', icon: 'tabler:typography' },
    { label: 'Shape', icon: 'tabler:shape' },
    { label: 'Motion', icon: 'tabler:bounce-right' },
    { label: 'Components', icon: 'tabler:layout-grid' },
  ]

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Tabs sx={{ gridArea: 'navbar' }} variant="fullWidth" value={value} onChange={handleChange}>
      {tabs.map(({ label, icon }) => (
        <Tab
          key={window.crypto.randomUUID()}
          label={label}
          iconPosition="start"
          icon={<Icon icon={icon} width={20} height={20} />}
        />
      ))}
    </Tabs>
  )
}