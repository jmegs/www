"use client"

import * as Tooltip from "@radix-ui/react-tooltip";
import NavItem from "@/components/nav/navitem";

export default function IndexComingSoon() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0}>
        <Tooltip.Trigger>
          <NavItem 
            icon="disabled" 
            isActive={false} 
            className="cursor-not-allowed">
              Index
          </NavItem>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content 
              side="right" 
              sideOffset={12} 
              className="TooltipContent bg-foreground text-canvas px-4 py-1 rounded-md"
          >
            WIP
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}