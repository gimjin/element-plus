<template>
  <el-text class="w-150px mb-2" truncated :tooltip="{ placement: 'top' }">
    Self element set width 100px
  </el-text>
  <el-row class="w-150px mb-2">
    <el-text truncated tooltip>
      Squeezed by parent element
      <template #tooltip>Custom tooltip content</template>
    </el-text>
  </el-row>
  <el-text line-clamp="2">
    The -webkit-line-clamp CSS property<br />
    allows limiting of the contents of<br />
    a block to the specified number of lines.
  </el-text>
</template>
