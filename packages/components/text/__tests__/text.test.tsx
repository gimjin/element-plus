import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Text from '../src/text.vue'

const AXIOM = 'Rem is the best girl'

describe('Text.vue', () => {
  test('create', () => {
    const wrapper = mount(
      <Text
        v-slots={{
          default: () => AXIOM,
        }}
      />
    )
    expect(wrapper.html()).toContain('el-text')
  })

  test('type', () => {
    const wrapper = mount(<Text type="success" />)
    expect(wrapper.html()).toContain('el-text--success')
  })

  test('size', () => {
    const wrapper = mount(<Text size="large" />)
    expect(wrapper.html()).toContain('el-text--large')
  })

  test('truncated', () => {
    const wrapper = mount(<Text truncated />)
    expect(wrapper.html()).toContain('is-truncated')
  })

  test('line-clamp', () => {
    const wrapper = mount(<Text line-clamp="2" />)
    expect(wrapper.html()).toContain('is-line-clamp')
  })

  test('tag', () => {
    const wrapper = mount(<Text tag="del" />)
    expect(wrapper.html()).toContain('</del>')
  })

  test('default slot', () => {
    const wrapper = mount(
      <Text
        v-slots={{
          default: () => AXIOM,
        }}
      />
    )
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('tooltip slot', async () => {
    mount(
      <Text
        v-slots={{
          tooltip: () => AXIOM,
        }}
      />
    )
    expect(document.querySelector('body')?.innerHTML).toContain(AXIOM)
  })

  test('ellipsis event', async () => {
    // TODO: jsdom not support `ResizeObserver`.
  })
})
