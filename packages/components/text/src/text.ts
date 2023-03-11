import { buildProps, definePropType } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'
import type { ElTooltipProps } from '@element-plus/components/tooltip'
import type Text from './text.vue'

import type { ExtractPropTypes } from 'vue'

export const textProps = buildProps({
  /**
   * @description text type
   */
  type: {
    type: String,
    values: ['primary', 'success', 'info', 'warning', 'danger', ''],
    default: '',
  },
  /**
   * @description text size
   */
  size: {
    type: String,
    values: componentSizes,
    default: '',
  },
  /**
   * @description render ellipsis
   */
  truncated: {
    type: Boolean,
  },
  /**
   * @description maximum lines
   */
  lineClamp: {
    type: [String, Number],
  },
  /**
   * @description custom element tag
   */
  tag: {
    type: String,
    default: 'span',
  },
  /**
   * @description when render ellipsis show tooltip
   */
  tooltip: {
    type: [Boolean, definePropType<ElTooltipProps>(Object)],
  },
} as const)

export type TextProps = ExtractPropTypes<typeof textProps>
export type TextInstance = InstanceType<typeof Text>
