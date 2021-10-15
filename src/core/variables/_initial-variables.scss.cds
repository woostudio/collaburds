/**
 * This file is a copy of the Bulma's default _initial-variables.scss
 * Any Bulma overrides should be added below the commented out line
 */

// Colors
$black: ###colour.core.black.hex### !default;
$black-bis: ###colour.core.blackbis.hex### !default;
$black-ter: ###colour.core.blackter.hex### !default;

$grey-darker: ###colour.core.grey-darker.hex### !default;
$grey-dark: ###colour.core.grey-dark.hex### !default;
$grey: ###colour.core.grey.hex### !default;
$grey-light: ###colour.core.grey-light.hex### !default;
$grey-lighter: ###colour.core.grey-lighter.hex### !default;
$grey-lightest: ###colour.core.grey-lightest.hex### !default;

$white-ter: ###colour.core.whiteter.hex### !default;
$white-bis: ###colour.core.whitebis.hex### !default;
$white: ###colour.core.white.hex### !default;

$orange: ###colour.core.orange.hex### !default;
$yellow: ###colour.core.yellow.hex### !default;
$green: ###colour.core.green.hex### !default;
$turquoise: ###colour.core.turquoise.hex### !default;
$cyan: ###colour.core.cyan.hex### !default;
$blue: ###colour.core.blue.hex### !default;
$purple: ###colour.core.purple.hex### !default;
$red: ###colour.core.red.hex### !default;

// Typography
$family-serif: '###typography.fonts.core.serif.font###', sans-serif !default;
$family-sans-serif: '###typography.fonts.core.sans-serif.font###', sans-serif !default;
$family-monospace: '###typography.fonts.core.mono.font###' !default;
$render-mode: optimizeLegibility !default;
$family-system: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
  'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif !default;

$size-1: ###typography.scales.core.3###rem !default;
$size-2: ###typography.scales.core.2-5###rem !default;
$size-3: ###typography.scales.core.2###rem !default;
$size-4: ###typography.scales.core.1-5###rem !default;
$size-5: ###typography.scales.core.1-25###rem !default;
$size-6: ###typography.scales.core.1###rem !default;
$size-7: ###typography.scales.core.0-75###rem !default;

$size-8: ###typography.scales.core.3-5###rem !default;
$size-9: ###typography.scales.core.4###rem !default;
$size-10: ###typography.scales.core.4-5###rem !default;

$weight-light: 300 !default;
$weight-normal: 400 !default;
$weight-medium: 500 !default;
$weight-semibold: 600 !default;
$weight-bold: 700 !default;

// Mobile
$body-size: 16px !default;
$body-line-height: 1.3 !default;

// Tablet
$body-size-tablet: 16px !default;
$body-line-height-tablet: 1.3 !default;

// Desktop
$body-size-desktop: 16px !default;
$body-line-height-desktop: 1.3 !default;

// Widescreen
$body-size-widescreen: 16px !default;
$body-line-height-widescreen: 1.3 !default;

// FullHD
$body-size-fullhd: 20px !default;
$body-line-height-fullhd: 1.3 !default;

// Type by breakpoint
$type-breakpoints: (
  mobile: (
    size: $body-size,
    line-height: $body-line-height,
  ),
  tablet: (
    size: $body-size-tablet,
    line-height: $body-line-height-tablet,
  ),
  desktop: (
    size: $body-size-desktop,
    line-height: $body-line-height-desktop,
  ),
  widescreen: (
    size: $body-size-widescreen,
    line-height: $body-line-height-widescreen,
  ),
  fullhd: (
    size: $body-size-fullhd,
    line-height: $body-line-height-fullhd,
  ),
) !default;

// Scales
$type-scales: (
  0-75: ###typography.scales.core.0-75###,
  1: ###typography.scales.core.1###,
  1-25: ###typography.scales.core.1-25###,
  1-5: ###typography.scales.core.1-5###,
  2: ###typography.scales.core.2###,
  2-5: ###typography.scales.core.2-5###,
  3: ###typography.scales.core.3###,
  3-5: ###typography.scales.core.3-5###,
  4: ###typography.scales.core.4###,
  4-5: ###typography.scales.core.4-5###
) !default;

// Spacing

$spacing-xxxs: ###spacing-scale.core.xxxs###rem !default;
$spacing-xxs: ###spacing-scale.core.xxs###rem !default;
$spacing-xs: ###spacing-scale.core.xs###rem !default;
$spacing-sm: ###spacing-scale.core.sm###rem !default;
$spacing-md: ###spacing-scale.core.md###rem !default;
$spacing-lg: ###spacing-scale.core.lg###rem !default;
$spacing-xl: ###spacing-scale.core.xl###rem !default;
$spacing-xxl: ###spacing-scale.core.xxl###rem !default;
$spacing-xxxl: ###spacing-scale.core.xxxl###rem !default;
$spacing-xxxxl: ###spacing-scale.core.xxxxl###rem !default;

$spacing-default: ###spacing-scale.core.default###rem !default;
$block-spacing: $spacing-lg !default;

// Responsiveness

// Layout
$layout-xxs: ###layout-scale.core.xxs###rem !default;
$layout-xs: ###layout-scale.core.xs###rem !default;
$layout-sm: ###layout-scale.core.sm###rem !default;
$layout-md: ###layout-scale.core.md###rem !default;
$layout-lg: ###layout-scale.core.lg###rem !default;
$layout-xl: ###layout-scale.core.xl###rem !default;
$layout-xxl: ###layout-scale.core.xxl###rem !default;

// The container horizontal gap, which acts as the offset for breakpoints
$gap: 32px !default;
// 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16
$tablet: ###layout.custom.mobile.max-width### !default;
// 960px container + 4rem
$desktop: ###layout.custom.tablet.max-width### + (2 * $gap) !default;
// 1152px container + 4rem
$widescreen: ###layout.custom.desktop.max-width### + (2 * $gap) !default;
$widescreen-enabled: true !default;
// 1344px container + 4rem
$fullhd: ###layout.custom.widescreen.max-width### + (2 * $gap) !default;
$fullhd-enabled: true !default;

// Miscellaneous
$easing: ease-out !default;
$radius-small: 2px !default;
$radius: 4px !default;
$radius-large: 6px !default;
$radius-xl: 12px !default;
$radius-rounded: 290486px !default;
$speed: 86ms !default;

// Flags
$variable-columns: true !default;

// Layers
$ds-box-shadow: ###layer.custom.raised.box-shadow###

