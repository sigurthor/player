<script>
  let menu;

  let hint = '1080p';

  function onAttached(event) {
    menu = event.target;
    menu.open(event);
  }

  function onPointerUp(event) {
    menu?.close(event);
  }

  function onWindowPointerUp(event) {
    event.stopImmediatePropagation();
  }

  function onChange(event) {
    const value = event.target.value;
    hint = value + 'p';
  }
</script>

<svelte:window on:pointerup={onWindowPointerUp} />

<div
  class="w-full h-full flex items-center justify-center"
  on:pointerup|stopPropagation={onPointerUp}
>
  <media-menu class="mt-32" on:attached={onAttached}>
    <media-menu-button aria-label="Settings">
      <media-icon type="settings" data-rotate />
    </media-menu-button>
    <media-menu-items>
      <media-menu>
        <media-menu-button>
          <media-icon type="arrow-left" slot="close-icon" />
          <media-icon type="settings-menu" slot="icon" />
          <span slot="label">Quality</span>
          <span class="ml-auto hint-text">{hint}</span>
          <media-icon class="ml-0" type="chevron-right" slot="open-icon" />
        </media-menu-button>
        <media-menu-items>
          <media-radio-group value="1080" on:change={onChange}>
            <media-radio value="1080">1080p</media-radio>
            <media-radio value="720">720p</media-radio>
          </media-radio-group>
        </media-menu-items>
      </media-menu>
      <media-menu />
    </media-menu-items>
  </media-menu>
</div>

<style>
  .hint-text {
    font-size: 15px;
    color: rgba(245, 245, 245, 0.5);
  }
</style>
