'use client';
import { useCallback, useEffect, useState } from 'react';
import { Button, Dialog, DialogProps } from '@marigold/components';
import { useRouter } from 'next/router';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './Command';
import { useNavigation } from './Navigation';

// interface CommandMenuProps extends DialogProps {
// }

export const CommandMenu = (props: DialogProps) => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  // const router = useRouter();

  return (
    <>
      <CommandDialog>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty> No results found . </CommandEmpty>
          {navigation.map(group => (
            <CommandGroup key={group.name} title={group.name}>
              {group.links.map(navItem => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.name}
                  onSelect={() => {
                    // runCommand(() => router.push(navItem.href))
                  }}
                >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                    <h2>circle icon</h2>
                  </div>
                  {navItem.name}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};
