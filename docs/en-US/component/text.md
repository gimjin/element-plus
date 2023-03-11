---
title: Text
lang: en-US
---

# Text

Used for text.

## Basic

:::demo Use the `type` attribute to define Text's type.

text/basic

:::

## Sizes

:::demo Use attribute `size` to set additional sizes with `large`, `default` or `small`.

text/sizes

:::

## Ellipsis

:::demo Pass the `truncated` prop to render an ellipsis when the text exceeds the width of the viewport or max-width set. `line-clamp` prop to render multiline ellipsis. `tooltip` prop can enable tooltip.

text/truncated

:::

## Override

:::demo Use attribute `tag` to override element

text/override

:::

## Mixed

:::demo Text mixed component

text/mixed

:::

## API

### Attributes

| Name       | Description                       | Type                                                               | Default |
| ---------- | --------------------------------- | ------------------------------------------------------------------ | ------- |
| type       | text type                         | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —       |
| size       | text size                         | ^[enum]`'large' \| 'default' \| 'small'`                           | default |
| truncated  | render ellipsis                   | ^[boolean]                                                         | false   |
| line-clamp | maximum lines                     | ^[string] / ^[number]                                              | -       |
| tag        | custom element tag                | ^[string]                                                          | span    |
| tooltip    | when render ellipsis show tooltip | ^[boolean] / ^[object]`ElTooltipProps`                             | false   |

### Events

| Name     | Description                  | Type                                         |
| -------- | ---------------------------- | -------------------------------------------- |
| ellipsis | when ellipsis show or hidden | ^[Function]`(showEllipsis: boolean) => void` |

### Slots

| Name    | Description                     |
| ------- | ------------------------------- |
| default | default content                 |
| tooltip | content of the ellipsis tooltip |
