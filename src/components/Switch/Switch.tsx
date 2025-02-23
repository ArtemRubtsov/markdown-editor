import * as Switch from '@radix-ui/react-switch'

import styles from './switch.module.scss'

type SwitchProps = {
  changeMode: () => void
  mode: 'markdown' | 'mdx'
}

const SwitchMode = ({ changeMode, mode }: SwitchProps) => (
  <form>
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <label className={styles.Label} htmlFor={'airplane-mode'} style={{ paddingRight: 15 }}>
        change mode
      </label>
      <Switch.Root className={styles.Root} id={'airplane-mode'} onClick={changeMode}>
        <Switch.Thumb className={styles.Thumb} />
      </Switch.Root>
    </div>
  </form>
)

export default SwitchMode
