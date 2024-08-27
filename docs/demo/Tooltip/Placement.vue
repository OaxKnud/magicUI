<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <mg-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <mg-button>top-start</mg-button>
      </mg-tooltip>
      <mg-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <mg-button>top</mg-button>
      </mg-tooltip>
      <mg-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <mg-button>top-end</mg-button>
      </mg-tooltip>
    </div>
    <div class="row">
      <mg-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <mg-button>left-start</mg-button>
      </mg-tooltip>
      <mg-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <mg-button>right-start</mg-button>
      </mg-tooltip>
    </div>
    <div class="row">
      <mg-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <mg-button class="mt-3 mb-3">left</mg-button>
      </mg-tooltip>
      <mg-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <mg-button>right</mg-button>
      </mg-tooltip>
    </div>
    <div class="row">
      <mg-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <mg-button>left-end</mg-button>
      </mg-tooltip>
      <mg-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <mg-button>right-end</mg-button>
      </mg-tooltip>
    </div>
    <div class="row center">
      <mg-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <mg-button>bottom-start</mg-button>
      </mg-tooltip>
      <mg-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <mg-button>bottom</mg-button>
      </mg-tooltip>
      <mg-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <mg-button>bottom-end</mg-button>
      </mg-tooltip>
    </div>
  </div>
</template>
<script setup>
import MgTooltip from '@/components/Tooltip/Tooltip.vue'
import MgButton from '@/components/Button/Button.vue'
</script>
<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>