import type { InkConfig } from '@/utils/ink'
import clsx from 'clsx'

const FIXED_CLASSES = ''

export const config: InkConfig = {
  variants: {
    DEFAULT: {
      root: clsx(FIXED_CLASSES),
    },
    contained: {
      root: clsx(
        'relative isolate inline-flex cursor-default items-center justify-center gap-x-2 rounded-lg border border-transparent bg-[--btn-border] px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] text-base/6 text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] [--btn-icon:theme(colors.zinc.400)] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] focus:outline-none data-[disabled]:opacity-50 data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.zinc.300)] before:data-[disabled]:shadow-none after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] after:data-[disabled]:shadow-none sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 dark:border-white/5 dark:bg-[--btn-bg] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] dark:before:hidden dark:after:-inset-px dark:after:rounded-lg forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4',
      ),
    },
    outlined: {
      root: clsx(
        'relative isolate inline-flex cursor-default items-center justify-center gap-x-2 rounded-lg border border-zinc-950/10 px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] text-base/6 font-semibold text-zinc-950 [--btn-icon:theme(colors.zinc.500)] focus:outline-none data-[active]:bg-zinc-950/[2.5%] data-[hover]:bg-zinc-950/[2.5%] data-[disabled]:opacity-50 data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[active]:[--btn-icon:theme(colors.zinc.700)] data-[hover]:[--btn-icon:theme(colors.zinc.700)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-[active]:bg-white/5 dark:data-[hover]:bg-white/5 dark:data-[active]:[--btn-icon:theme(colors.zinc.400)] dark:data-[hover]:[--btn-icon:theme(colors.zinc.400)] forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4',
      ),
    },
  },
  // colors: {
  //   DEFAULT: {
  //     DEFAULT: {
  //       root: '',
  //     },
  //     contained: {
  //       root: '',
  //     },
  //     outlined: {
  //       root: '',
  //     },
  //   },
  //   accent: {
  //     contained: {
  //       root: '',
  //     },
  //   },
  // },
  // sizes: {
  //   DEFAULT: {
  //     DEFAULT: {
  //       root: '',
  //     },
  //   },
  //   outlined: {
  //     DEFAULT: {
  //       root: '',
  //     },
  //   },
  //   contained: {
  //     DEFAULT: {
  //       root: '',
  //     },
  //   },
  // },
}
