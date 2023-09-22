
import { 
  CommitIcon, 
  SewingPinFilledIcon as PinIcon, 
  MinusIcon as DisabledIcon 
} from "@radix-ui/react-icons"
import cx from "clsx"
import { type ReactNode } from "react"

type Props = {
  isActive: boolean,
  icon?: keyof typeof iconMap,
  children: ReactNode
  className?: string
}

const iconMap = {
  commit: CommitIcon,
  location: PinIcon,
  disabled: DisabledIcon
} as const

export default function NavItem({ children, isActive, icon, className }: Props) {
  const renderIcon = () => {
    if (icon) {
      const Component = iconMap[icon]
      return (<Component />)
    }

    return (
      <DefaultIcon active={isActive} />
    )
  }

  return (
    <div className={cx(className, "flex items-center gap-x-2")}>
      {renderIcon()}
      <span className="uppercase text-[0.6875rem]">{children}</span>
    </div>
  )
}

function DefaultIcon({ active }: { active: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
      <circle cx="7.5" cy="7.5" r="3.5" fill={active ? "currentColor" : "none"} stroke="currentColor" />
    </svg>
  )
}

